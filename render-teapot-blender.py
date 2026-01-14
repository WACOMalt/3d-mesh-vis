#!/usr/bin/env python3
"""
Blender script to render Utah teapot OBJ to PNG icons
Usage: blender --background --python render-teapot-blender.py
"""

import bpy
import os
import subprocess

# Get script directory
script_dir = os.path.dirname(os.path.abspath(__file__))
obj_path = os.path.join(script_dir, 'teapot.obj')

# Clear default objects
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Load OBJ using import operator without addon requirement
try:
    bpy.ops.import_scene.obj(filepath=obj_path)
except:
    # Manual workaround: load vertices manually
    vertices = []
    faces = []
    with open(obj_path, 'r') as f:
        for line in f:
            if line.startswith('v '):
                parts = line.strip().split()
                vertices.append([float(x) for x in parts[1:4]])
            elif line.startswith('f '):
                parts = line.strip().split()
                face_indices = []
                for p in parts[1:]:
                    # Handle f v, f v/vt, f v//vn, f v/vt/vn formats
                    face_indices.append(int(p.split('/')[0]) - 1)
                faces.append(face_indices)
    
    # Create mesh
    mesh = bpy.data.meshes.new("Teapot")
    obj = bpy.data.objects.new("Teapot", mesh)
    bpy.context.collection.objects.link(obj)
    
    # Set mesh data
    mesh.from_pydata(vertices, [], faces)
    mesh.update()
    obj.select_set(True)

# Setup scene
scene = bpy.context.scene
scene.world.use_nodes = True
scene.world.node_tree.nodes["Background"].inputs[0].default_value = (0.2, 0.2, 0.2, 1.0)  # Dark grey background

# Add lighting
light = bpy.data.lights.new(name="MainLight", type='SUN')
light.energy = 2.0
light_obj = bpy.data.objects.new("MainLight", light)
bpy.context.collection.objects.link(light_obj)
light_obj.location = (5, 5, 5)

light2 = bpy.data.lights.new(name="AmbientLight", type='SUN')
light2.energy = 0.8
light2_obj = bpy.data.objects.new("AmbientLight", light2)
bpy.context.collection.objects.link(light2_obj)
light2_obj.location = (-5, -5, -5)

# Set material
for obj in bpy.context.selected_objects:
    if obj.type == 'MESH':
        mat = bpy.data.materials.new(name="TeapotMaterial")
        mat.use_nodes = True
        bsdf = mat.node_tree.nodes["Principled BSDF"]
        # Base color
        bsdf.inputs["Base Color"].default_value = (0.0, 0.33, 1.0, 1.0)
        # Roughness
        bsdf.inputs["Roughness"].default_value = 0.4
        
        obj.data.materials.append(mat)
        obj.scale = (0.015, 0.015, 0.015)

# Setup camera
camera = bpy.data.cameras.new(name="Camera")
camera_obj = bpy.data.objects.new("Camera", camera)
bpy.context.collection.objects.link(camera_obj)
camera_obj.location = (0, 0, 3)
scene.camera = camera_obj

# Render settings
scene.render.engine = 'CYCLES'
scene.cycles.samples = 128
scene.render.filepath = os.path.join(script_dir, 'icon-512.png')
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_mode = 'RGBA'

# Render 512x512
scene.render.resolution_x = 512
scene.render.resolution_y = 512
bpy.ops.render.render(write_still=True)
print("✓ Generated icon-512.png")

# Render 192x192
scene.render.resolution_x = 192
scene.render.resolution_y = 192
scene.render.filepath = os.path.join(script_dir, 'icon-192.png')
bpy.ops.render.render(write_still=True)
print("✓ Generated icon-192.png")

# Render maskable variants
scene.render.resolution_x = 512
scene.render.resolution_y = 512
scene.render.filepath = os.path.join(script_dir, 'icon-maskable-512.png')
bpy.ops.render.render(write_still=True)
print("✓ Generated icon-maskable-512.png")

scene.render.resolution_x = 192
scene.render.resolution_y = 192
scene.render.filepath = os.path.join(script_dir, 'icon-maskable-192.png')
bpy.ops.render.render(write_still=True)
print("✓ Generated icon-maskable-192.png")

print("\n✅ All teapot icons generated successfully!")

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="160",Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,Ml=1,pf=2,yu=1,mf=2,zn=3,ci=0,Gt=1,An=2,ri=0,fr=1,Sl=2,yl=3,El=4,_f=5,bi=100,gf=101,vf=102,Tl=103,bl=104,xf=200,Mf=201,Sf=202,yf=203,uo=204,ho=205,Ef=206,Tf=207,bf=208,Af=209,wf=210,Rf=211,Cf=212,Pf=213,Lf=214,Df=0,Uf=1,If=2,ks=3,Nf=4,Of=5,Ff=6,Bf=7,Oo=0,zf=1,Gf=2,si=0,Hf=1,kf=2,Vf=3,Wf=4,Xf=5,Yf=6,Eu=300,gr=301,vr=302,Vs=303,fo=304,sa=306,po=1e3,$t=1001,mo=1002,bt=1003,Al=1004,ya=1005,wt=1006,qf=1007,xr=1008,ai=1009,jf=1010,Kf=1011,Fo=1012,Tu=1013,Qn=1014,Mn=1015,Vn=1016,bu=1017,Au=1018,Ri=1020,Zf=1021,xn=1023,$f=1024,Jf=1025,Ci=1026,Mr=1027,Qf=1028,wu=1029,ed=1030,Ru=1031,Cu=1033,Ea=33776,Ta=33777,ba=33778,Aa=33779,wl=35840,Rl=35841,Cl=35842,Pl=35843,Pu=36196,Ll=37492,Dl=37496,Ul=37808,Il=37809,Nl=37810,Ol=37811,Fl=37812,Bl=37813,zl=37814,Gl=37815,Hl=37816,kl=37817,Vl=37818,Wl=37819,Xl=37820,Yl=37821,wa=36492,ql=36494,jl=36495,td=36283,Kl=36284,Zl=36285,$l=36286,Lu=3e3,Pi=3001,nd=3200,id=3201,Bo=0,rd=1,hn="",At="srgb",Cn="srgb-linear",zo="display-p3",aa="display-p3-linear",Ws="linear",Qe="srgb",Xs="rec709",Ys="p3",Vi=7680,Jl=519,sd=512,ad=513,od=514,Du=515,ld=516,cd=517,ud=518,hd=519,Ql=35044,ec="300 es",_o=1035,Wn=2e3,qs=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tc=1234567;const kr=Math.PI/180,jr=180/Math.PI;function Rr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Rt(r,e,t){return Math.max(e,Math.min(t,r))}function Go(r,e){return(r%e+e)%e}function fd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function dd(r,e,t){return r!==e?(t-r)/(e-r):0}function Vr(r,e,t){return(1-t)*r+t*e}function pd(r,e,t,n){return Vr(r,e,1-Math.exp(-t*n))}function md(r,e=1){return e-Math.abs(Go(r,e*2)-e)}function _d(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function gd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function xd(r,e){return r+Math.random()*(e-r)}function Md(r){return r*(.5-Math.random())}function Sd(r){r!==void 0&&(tc=r);let e=tc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yd(r){return r*kr}function Ed(r){return r*jr}function go(r){return(r&r-1)===0&&r!==0}function Td(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function js(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bd(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*m,a*c);break;case"YXY":r.set(l*m,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ar(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ft(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ad={DEG2RAD:kr,RAD2DEG:jr,generateUUID:Rr,clamp:Rt,euclideanModulo:Go,mapLinear:fd,inverseLerp:dd,lerp:Vr,damp:pd,pingpong:md,smoothstep:_d,smootherstep:gd,randInt:vd,randFloat:xd,randFloatSpread:Md,seededRandom:Sd,degToRad:yd,radToDeg:Ed,isPowerOfTwo:go,ceilPowerOfTwo:Td,floorPowerOfTwo:js,setQuaternionFromProperEuler:bd,normalize:Ft,denormalize:ar};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],M=i[1],x=i[4],S=i[7],w=i[2],T=i[5],b=i[8];return s[0]=o*_+a*M+l*w,s[3]=o*p+a*x+l*T,s[6]=o*d+a*S+l*b,s[1]=c*_+u*M+h*w,s[4]=c*p+u*x+h*T,s[7]=c*d+u*S+h*b,s[2]=f*_+m*M+g*w,s[5]=f*p+m*x+g*T,s[8]=f*d+m*S+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new ke;function Uu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wd(){const r=Ks("canvas");return r.style.display="block",r}const nc={};function Wr(r){r in nc||(nc[r]=!0,console.warn(r))}const ic=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rc=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[Cn]:{transfer:Ws,primaries:Xs,toReference:r=>r,fromReference:r=>r},[At]:{transfer:Qe,primaries:Xs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[aa]:{transfer:Ws,primaries:Ys,toReference:r=>r.applyMatrix3(rc),fromReference:r=>r.applyMatrix3(ic)},[zo]:{transfer:Qe,primaries:Ys,toReference:r=>r.convertSRGBToLinear().applyMatrix3(rc),fromReference:r=>r.applyMatrix3(ic).convertLinearToSRGB()}},Rd=new Set([Cn,aa]),Ke={enabled:!0,_workingColorSpace:Cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Rd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=cs[e].toReference,i=cs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return cs[r].primaries},getTransfer:function(r){return r===hn?Ws:cs[r].transfer}};function dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ca(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Wi;class Iu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=Ks("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=dr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cd=0;class Nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Pa(i[o].image)):s.push(Pa(i[o]))}else s=Pa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Iu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pd=0;class Ht extends zi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=$t,i=$t,s=wt,o=xr,a=xn,l=ai,c=Ht.DEFAULT_ANISOTROPY,u=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Rr(),this.name="",this.source=new Nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Pi?At:hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case po:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case po:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Pi:Lu}set encoding(e){Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pi?At:hn}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Eu;Ht.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(m+1)/2,w=(d+1)/2,T=(u+f)/4,b=(h+_)/4,L=(g+p)/4;return x>S&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=b/n):S>w?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=T/i,s=L/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=b/s,i=L/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ld extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Wr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pi?At:hn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ou extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dd extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let p=1-a;const d=l*f+c*m+u*g+h*_,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,d*M);p=Math.sin(p*T)/w,a=Math.sin(a*T)/w}const S=a*M;if(l=l*p+f*S,c=c*p+m*S,u=u*p+g*S,h=h*p+_*S,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new F,sc=new Fi;class ns{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),hs.subVectors(this.max,Dr),Xi.subVectors(e.a,Dr),Yi.subVectors(e.b,Dr),qi.subVectors(e.c,Dr),qn.subVectors(Yi,Xi),jn.subVectors(qi,Yi),gi.subVectors(Xi,qi);let t=[0,-qn.z,qn.y,0,-jn.z,jn.y,0,-gi.z,gi.y,qn.z,0,-qn.x,jn.z,0,-jn.x,gi.z,0,-gi.x,-qn.y,qn.x,0,-jn.y,jn.x,0,-gi.y,gi.x,0];return!Da(t,Xi,Yi,qi,hs)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,Xi,Yi,qi,hs))?!1:(fs.crossVectors(qn,jn),t=[fs.x,fs.y,fs.z],Da(t,Xi,Yi,qi,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new F,new F,new F,new F,new F,new F,new F,new F],pn=new F,us=new ns,Xi=new F,Yi=new F,qi=new F,qn=new F,jn=new F,gi=new F,Dr=new F,hs=new F,fs=new F,vi=new F;function Da(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){vi.fromArray(r,s);const a=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),u=n.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ud=new ns,Ur=new F,Ua=new F;class is{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ud.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Ua)),this.expandByPoint(Ur.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new F,Ia=new F,ds=new F,Kn=new F,Na=new F,ps=new F,Oa=new F;class oa{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ia.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Ia);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ds),a=Kn.dot(this.direction),l=-Kn.dot(ds),c=Kn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ia).addScaledVector(ds,f),m}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,s){Na.subVectors(t,e),ps.subVectors(n,e),Oa.crossVectors(Na,ps);let o=this.direction.dot(Oa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(ps.crossVectors(Kn,ps));if(l<0)return null;const c=a*this.direction.dot(Na.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot(Oa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,i,s,o,a,l,c,u,h,f,m,g,_,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,m,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ji.setFromMatrixColumn(e,0).length(),s=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Id,e,Nd)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Zn.crossVectors(n,jt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Zn.crossVectors(n,jt)),Zn.normalize(),ms.crossVectors(jt,Zn),i[0]=Zn.x,i[4]=ms.x,i[8]=jt.x,i[1]=Zn.y,i[5]=ms.y,i[9]=jt.y,i[2]=Zn.z,i[6]=ms.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],M=n[3],x=n[7],S=n[11],w=n[15],T=i[0],b=i[4],L=i[8],v=i[12],E=i[1],N=i[5],O=i[9],k=i[13],P=i[2],U=i[6],I=i[10],Y=i[14],q=i[3],K=i[7],j=i[11],te=i[15];return s[0]=o*T+a*E+l*P+c*q,s[4]=o*b+a*N+l*U+c*K,s[8]=o*L+a*O+l*I+c*j,s[12]=o*v+a*k+l*Y+c*te,s[1]=u*T+h*E+f*P+m*q,s[5]=u*b+h*N+f*U+m*K,s[9]=u*L+h*O+f*I+m*j,s[13]=u*v+h*k+f*Y+m*te,s[2]=g*T+_*E+p*P+d*q,s[6]=g*b+_*N+p*U+d*K,s[10]=g*L+_*O+p*I+d*j,s[14]=g*v+_*k+p*Y+d*te,s[3]=M*T+x*E+S*P+w*q,s[7]=M*b+x*N+S*U+w*K,s[11]=M*L+x*O+S*I+w*j,s[15]=M*v+x*k+S*Y+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*m-n*l*m)+_*(+t*l*m-t*c*f+s*o*f-i*o*m+i*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+d*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],M=h*p*c-_*f*c+_*l*m-a*p*m-h*l*d+a*f*d,x=g*f*c-u*p*c-g*l*m+o*p*m+u*l*d-o*f*d,S=u*_*c-g*h*c+g*a*m-o*_*m-u*a*d+o*h*d,w=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,T=t*M+n*x+i*S+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=M*b,e[1]=(_*f*s-h*p*s-_*i*m+n*p*m+h*i*d-n*f*d)*b,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*d+n*l*d)*b,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*m-n*l*m)*b,e[4]=x*b,e[5]=(u*p*s-g*f*s+g*i*m-t*p*m-u*i*d+t*f*d)*b,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*d-t*l*d)*b,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*m+t*l*m)*b,e[8]=S*b,e[9]=(g*h*s-u*_*s-g*n*m+t*_*m+u*n*d-t*h*d)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*d+t*a*d)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*b,e[12]=w*b,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*p+t*h*p)*b,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,g=s*h,_=o*u,p=o*h,d=a*h,M=l*c,x=l*u,S=l*h,w=n.x,T=n.y,b=n.z;return i[0]=(1-(_+d))*w,i[1]=(m+S)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(m-S)*T,i[5]=(1-(f+d))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(g+x)*b,i[9]=(p-M)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ji.set(i[0],i[1],i[2]).length();const o=ji.set(i[4],i[5],i[6]).length(),a=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);const c=1/s,u=1/o,h=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Wn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(a===Wn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===qs)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Wn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,m=(n+i)*u;let g,_;if(a===Wn)g=(o+s)*h,_=-2*h;else if(a===qs)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new F,mn=new ft,Id=new F(0,0,0),Nd=new F(1,1,1),Zn=new F,ms=new F,jt=new F,ac=new ft,oc=new Fi;class la{constructor(e=0,t=0,n=0,i=la.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oc.setFromEuler(this),this.setFromQuaternion(oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class Fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Od=0;const lc=new F,Ki=new Fi,Nn=new ft,_s=new F,Ir=new F,Fd=new F,Bd=new Fi,cc=new F(1,0,0),uc=new F(0,1,0),hc=new F(0,0,1),zd={type:"added"},Gd={type:"removed"};class yt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new F,t=new la,n=new Fi,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new ke}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(cc,e)}rotateY(e){return this.rotateOnAxis(uc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return lc.copy(e).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cc,e)}translateY(e){return this.translateOnAxis(uc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ir,_s,this.up):Nn.lookAt(_s,Ir,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new F(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new F,On=new F,Fa=new F,Fn=new F,Zi=new F,$i=new F,fc=new F,Ba=new F,za=new F,Ga=new F;let gs=!1;class vn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_n.subVectors(i,t),On.subVectors(n,t),Fa.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(On),l=_n.dot(Fa),c=On.dot(On),u=On.dot(Fa),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,n,i,s,o,a,l){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),On.subVectors(e,t),_n.cross(On).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),On.subVectors(this.a,this.b),_n.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Zi.subVectors(i,n),$i.subVectors(s,n),Ba.subVectors(e,n);const l=Zi.dot(Ba),c=$i.dot(Ba);if(l<=0&&c<=0)return t.copy(n);za.subVectors(e,i);const u=Zi.dot(za),h=$i.dot(za);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Zi,o);Ga.subVectors(e,s);const m=Zi.dot(Ga),g=$i.dot(Ga);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($i,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return fc.subVectors(s,i),a=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(fc,a);const d=1/(p+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(Zi,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Ha(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Go(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ha(o,s,e+1/3),this.g=Ha(o,s,e),this.b=Ha(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ke.fromWorkingColorSpace(It.copy(this),e),Math.round(Rt(It.r*255,0,255))*65536+Math.round(Rt(It.g*255,0,255))*256+Math.round(Rt(It.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,s=It.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=At){Ke.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(vs);const n=Vr($n.h,vs.h,t),i=Vr($n.s,vs.s,t),s=Vr($n.l,vs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Le;Le.NAMES=Bu;let Hd=0;class Pn extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=fr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=ho,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zu extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kn=kd();function kd(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Vd(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Rt(r,-65504,65504),kn.floatView[0]=r;const e=kn.uint32View[0],t=e>>23&511;return kn.baseTable[t]+((e&8388607)>>kn.shiftTable[t])}function Wd(r){const e=r>>10;return kn.uint32View[0]=kn.mantissaTable[kn.offsetTable[e]+(r&1023)]+kn.exponentTable[e],kn.floatView[0]}const xs={toHalfFloat:Vd,fromHalfFloat:Wd},pt=new F,Ms=new Pe;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ar(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}}class Gu extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hu extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xd=0;const on=new ft,ka=new yt,Ji=new F,Kt=new ns,Nr=new ns,Mt=new F;class Lt extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?Hu:Gu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Kt.min,Nr.min),Kt.expandByPoint(Mt),Mt.addVectors(Kt.max,Nr.max),Kt.expandByPoint(Mt)):(Kt.expandByPoint(Nr.min),Kt.expandByPoint(Nr.max))}Kt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(e,c),Mt.add(Ji)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new F,u[E]=new F;const h=new F,f=new F,m=new F,g=new Pe,_=new Pe,p=new Pe,d=new F,M=new F;function x(E,N,O){h.fromArray(i,E*3),f.fromArray(i,N*3),m.fromArray(i,O*3),g.fromArray(o,E*2),_.fromArray(o,N*2),p.fromArray(o,O*2),f.sub(h),m.sub(h),_.sub(g),p.sub(g);const k=1/(_.x*p.y-p.x*_.y);isFinite(k)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(k),M.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(k),c[E].add(d),c[N].add(d),c[O].add(d),u[E].add(M),u[N].add(M),u[O].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,N=S.length;E<N;++E){const O=S[E],k=O.start,P=O.count;for(let U=k,I=k+P;U<I;U+=3)x(n[U+0],n[U+1],n[U+2])}const w=new F,T=new F,b=new F,L=new F;function v(E){b.fromArray(s,E*3),L.copy(b);const N=c[E];w.copy(N),w.sub(b.multiplyScalar(b.dot(N))).normalize(),T.crossVectors(L,N);const k=T.dot(u[E])<0?-1:1;l[E*4]=w.x,l[E*4+1]=w.y,l[E*4+2]=w.z,l[E*4+3]=k}for(let E=0,N=S.length;E<N;++E){const O=S[E],k=O.start,P=O.count;for(let U=k,I=k+P;U<I;U+=3)v(n[U+0]),v(n[U+1]),v(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[m++]}return new Sn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new ft,xi=new oa,Ss=new is,pc=new F,Qi=new F,er=new F,tr=new F,Va=new F,ys=new F,Es=new Pe,Ts=new Pe,bs=new Pe,mc=new F,_c=new F,gc=new F,As=new F,ws=new F;class Qt extends yt{constructor(e=new Lt,t=new zu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Va.fromBufferAttribute(h,e),o?ys.addScaledVector(Va,u):ys.addScaledVector(Va.sub(t),u))}t.add(ys)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(Ss.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Ss,pc)===null||xi.origin.distanceToSquared(pc)>(e.far-e.near)**2))&&(dc.copy(s).invert(),xi.copy(e.ray).applyMatrix4(dc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=M,w=x;S<w;S+=3){const T=a.getX(S),b=a.getX(S+1),L=a.getX(S+2);i=Rs(this,d,e,n,c,u,h,T,b,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const M=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=Rs(this,o,e,n,c,u,h,M,x,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=M,w=x;S<w;S+=3){const T=S,b=S+1,L=S+2;i=Rs(this,d,e,n,c,u,h,T,b,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const M=p,x=p+1,S=p+2;i=Rs(this,o,e,n,c,u,h,M,x,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Yd(r,e,t,n,i,s,o,a){let l;if(e.side===Gt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ci,a),l===null)return null;ws.copy(a),ws.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ws);return c<t.near||c>t.far?null:{distance:c,point:ws.clone(),object:r}}function Rs(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Qi),r.getVertexPosition(l,er),r.getVertexPosition(c,tr);const u=Yd(r,e,t,n,Qi,er,tr,As);if(u){i&&(Es.fromBufferAttribute(i,a),Ts.fromBufferAttribute(i,l),bs.fromBufferAttribute(i,c),u.uv=vn.getInterpolation(As,Qi,er,tr,Es,Ts,bs,new Pe)),s&&(Es.fromBufferAttribute(s,a),Ts.fromBufferAttribute(s,l),bs.fromBufferAttribute(s,c),u.uv1=vn.getInterpolation(As,Qi,er,tr,Es,Ts,bs,new Pe),u.uv2=u.uv1),o&&(mc.fromBufferAttribute(o,a),_c.fromBufferAttribute(o,l),gc.fromBufferAttribute(o,c),u.normal=vn.getInterpolation(As,Qi,er,tr,mc,_c,gc,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};vn.getNormal(Qi,er,tr,h.normal),u.face=h}return u}class Cr extends Lt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2));function g(_,p,d,M,x,S,w,T,b,L,v){const E=S/b,N=w/L,O=S/2,k=w/2,P=T/2,U=b+1,I=L+1;let Y=0,q=0;const K=new F;for(let j=0;j<I;j++){const te=j*N-k;for(let $=0;$<U;$++){const V=$*E-O;K[_]=V*M,K[p]=te*x,K[d]=P,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[d]=T>0?1:-1,u.push(K.x,K.y,K.z),h.push($/b),h.push(1-j/L),Y+=1}}for(let j=0;j<L;j++)for(let te=0;te<b;te++){const $=f+te+U*j,V=f+te+U*(j+1),Z=f+(te+1)+U*(j+1),oe=f+(te+1)+U*j;l.push($,V,oe),l.push(V,Z,oe),q+=6}a.addGroup(m,q,v),m+=q,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(r){const e={};for(let t=0;t<r.length;t++){const n=Sr(r[t]);for(const i in n)e[i]=n[i]}return e}function qd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ku(r){return r.getRenderTarget()===null?r.outputColorSpace:Ke.workingColorSpace}const jd={clone:Sr,merge:Bt};var Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vu extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends Vu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ir=1;class $d extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(nr,ir,e,t);i.layers=this.layers,this.add(i);const s=new un(nr,ir,e,t);s.layers=this.layers,this.add(s);const o=new un(nr,ir,e,t);o.layers=this.layers,this.add(o);const a=new un(nr,ir,e,t);a.layers=this.layers,this.add(a);const l=new un(nr,ir,e,t);l.layers=this.layers,this.add(l);const c=new un(nr,ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wu extends Ht{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jd extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Wr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Pi?At:hn),this.texture=new Wu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Cr(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:ri});s.uniforms.tEquirect.value=t;const o=new Qt(i,s),a=t.minFilter;return t.minFilter===xr&&(t.minFilter=wt),new $d(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Wa=new F,Qd=new F,ep=new ke;class Jn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Wa.subVectors(n,t).cross(Qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ep.getNormalMatrix(e),i=this.coplanarPoint(Wa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new is,Cs=new F;class Ho{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,s=new Jn,o=new Jn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],M=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,p-m,S-d).normalize(),n[1].setComponents(l+s,f+c,p+m,S+d).normalize(),n[2].setComponents(l+o,f+u,p+g,S+M).normalize(),n[3].setComponents(l-o,f-u,p-g,S-M).normalize(),n[4].setComponents(l-a,f-h,p-_,S-x).normalize(),t===Wn)n[5].setComponents(l+a,f+h,p+_,S+x).normalize();else if(t===qs)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cs.x=i.normal.x>0?e.max.x:e.min.x,Cs.y=i.normal.y>0?e.max.y:e.min.y,Cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function tp(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const f=u.array,m=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),m.count===-1&&g.length===0&&r.bufferSubData(h,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];t?r.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):r.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class ko extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const M=d*f-o;for(let x=0;x<c;x++){const S=x*h-s;g.push(S,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const x=M+c*d,S=M+c*(d+1),w=M+1+c*(d+1),T=M+1+c*d;m.push(x,S,T),m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,c_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:rp,alphamap_pars_fragment:sp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:lp,aomap_pars_fragment:cp,batching_pars_vertex:up,batching_vertex:hp,begin_vertex:fp,beginnormal_vertex:dp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:_p,clipping_planes_fragment:gp,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:yp,color_pars_vertex:Ep,color_vertex:Tp,common:bp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:wp,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Dp,colorspace_pars_fragment:Up,envmap_fragment:Ip,envmap_common_pars_fragment:Np,envmap_pars_fragment:Op,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Kp,envmap_vertex:Bp,fog_vertex:zp,fog_pars_vertex:Gp,fog_fragment:Hp,fog_pars_fragment:kp,gradientmap_pars_fragment:Vp,lightmap_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:qp,lights_pars_begin:jp,lights_toon_fragment:Zp,lights_toon_pars_fragment:$p,lights_phong_fragment:Jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:em,lights_physical_pars_fragment:tm,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:rm,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:lm,map_fragment:cm,map_pars_fragment:um,map_particle_fragment:hm,map_particle_pars_fragment:fm,metalnessmap_fragment:dm,metalnessmap_pars_fragment:pm,morphcolor_vertex:mm,morphnormal_vertex:_m,morphtarget_pars_vertex:gm,morphtarget_vertex:vm,normal_fragment_begin:xm,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:ym,normal_vertex:Em,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Dm,dithering_fragment:Um,dithering_pars_fragment:Im,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:Gm,skinbase_vertex:Hm,skinning_pars_vertex:km,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:Ym,tonemapping_fragment:qm,tonemapping_pars_fragment:jm,transmission_fragment:Km,transmission_pars_fragment:Zm,uv_pars_fragment:$m,uv_pars_vertex:Jm,uv_vertex:Qm,worldpos_vertex:e_,background_vert:t_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:r_,cube_vert:s_,cube_frag:a_,depth_vert:o_,depth_frag:l_,distanceRGBA_vert:c_,distanceRGBA_frag:u_,equirect_vert:h_,equirect_frag:f_,linedashed_vert:d_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:__,meshlambert_vert:g_,meshlambert_frag:v_,meshmatcap_vert:x_,meshmatcap_frag:M_,meshnormal_vert:S_,meshnormal_frag:y_,meshphong_vert:E_,meshphong_frag:T_,meshphysical_vert:b_,meshphysical_frag:A_,meshtoon_vert:w_,meshtoon_frag:R_,points_vert:C_,points_frag:P_,shadow_vert:L_,shadow_frag:D_,sprite_vert:U_,sprite_frag:I_},ae={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},bn={basic:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Bt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Bt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Bt([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Bt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Bt([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Bt([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Bt([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Bt([ae.lights,ae.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};bn.physical={uniforms:Bt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ps={r:0,b:0,g:0};function N_(r,e,t,n,i,s,o){const a=new Le(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(p,d){let M=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===sa)?(u===void 0&&(u=new Qt(new Cr(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Sr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(x.colorSpace)!==Qe,(h!==x||f!==x.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Qt(new ko(2,2),new Bi({name:"BackgroundMaterial",uniforms:Sr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(Ps,ku(r)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function O_(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(P,U,I,Y,q){let K=!1;if(o){const j=_(Y,I,U);c!==j&&(c=j,m(c.object)),K=d(P,Y,I,q),K&&M(P,Y,I,q)}else{const j=U.wireframe===!0;(c.geometry!==Y.id||c.program!==I.id||c.wireframe!==j)&&(c.geometry=Y.id,c.program=I.id,c.wireframe=j,K=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,L(P,U,I,Y),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,U,I){const Y=I.wireframe===!0;let q=a[P.id];q===void 0&&(q={},a[P.id]=q);let K=q[U.id];K===void 0&&(K={},q[U.id]=K);let j=K[Y];return j===void 0&&(j=p(f()),K[Y]=j),j}function p(P){const U=[],I=[],Y=[];for(let q=0;q<i;q++)U[q]=0,I[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:Y,object:P,attributes:{},index:null}}function d(P,U,I,Y){const q=c.attributes,K=U.attributes;let j=0;const te=I.getAttributes();for(const $ in te)if(te[$].location>=0){const Z=q[$];let oe=K[$];if(oe===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;j++}return c.attributesNum!==j||c.index!==Y}function M(P,U,I,Y){const q={},K=U.attributes;let j=0;const te=I.getAttributes();for(const $ in te)if(te[$].location>=0){let Z=K[$];Z===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),q[$]=oe,j++}c.attributes=q,c.attributesNum=j,c.index=Y}function x(){const P=c.newAttributes;for(let U=0,I=P.length;U<I;U++)P[U]=0}function S(P){w(P,0)}function w(P,U){const I=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;I[P]=1,Y[P]===0&&(r.enableVertexAttribArray(P),Y[P]=1),q[P]!==U&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),q[P]=U)}function T(){const P=c.newAttributes,U=c.enabledAttributes;for(let I=0,Y=U.length;I<Y;I++)U[I]!==P[I]&&(r.disableVertexAttribArray(I),U[I]=0)}function b(P,U,I,Y,q,K,j){j===!0?r.vertexAttribIPointer(P,U,I,q,K):r.vertexAttribPointer(P,U,I,Y,q,K)}function L(P,U,I,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=Y.attributes,K=I.getAttributes(),j=U.defaultAttributeValues;for(const te in K){const $=K[te];if($.location>=0){let V=q[te];if(V===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const Z=V.normalized,oe=V.itemSize,ve=t.get(V);if(ve===void 0)continue;const _e=ve.buffer,De=ve.type,Ue=ve.bytesPerElement,Te=n.isWebGL2===!0&&(De===r.INT||De===r.UNSIGNED_INT||V.gpuType===Tu);if(V.isInterleavedBufferAttribute){const Ve=V.data,G=Ve.stride,Tt=V.offset;if(Ve.isInstancedInterleavedBuffer){for(let Se=0;Se<$.locationSize;Se++)w($.location+Se,Ve.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Se=0;Se<$.locationSize;Se++)S($.location+Se);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Se=0;Se<$.locationSize;Se++)b($.location+Se,oe/$.locationSize,De,Z,G*Ue,(Tt+oe/$.locationSize*Se)*Ue,Te)}else{if(V.isInstancedBufferAttribute){for(let Ve=0;Ve<$.locationSize;Ve++)w($.location+Ve,V.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ve=0;Ve<$.locationSize;Ve++)S($.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Ve=0;Ve<$.locationSize;Ve++)b($.location+Ve,oe/$.locationSize,De,Z,oe*Ue,oe/$.locationSize*Ve*Ue,Te)}}else if(j!==void 0){const Z=j[te];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv($.location,Z);break;case 3:r.vertexAttrib3fv($.location,Z);break;case 4:r.vertexAttrib4fv($.location,Z);break;default:r.vertexAttrib1fv($.location,Z)}}}}T()}function v(){O();for(const P in a){const U=a[P];for(const I in U){const Y=U[I];for(const q in Y)g(Y[q].object),delete Y[q];delete U[I]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;const U=a[P.id];for(const I in U){const Y=U[I];for(const q in Y)g(Y[q].object),delete Y[q];delete U[I]}delete a[P.id]}function N(P){for(const U in a){const I=a[U];if(I[P.id]===void 0)continue;const Y=I[P.id];for(const q in Y)g(Y[q].object),delete Y[q];delete I[P.id]}}function O(){k(),u=!0,c!==l&&(c=l,m(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:k,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function F_(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let m,g;if(i)m=r,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function B_(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=o||e.has("OES_texture_float"),w=x&&S,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:T}}function z_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Jn,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,x=M*4;let S=d.clippingState||null;l.value=S,S=u(g,f,x,m);for(let w=0;w!==x;++w)S[w]=t[w];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,S=m;x!==_;++x,S+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function G_(r){let e=new WeakMap;function t(o,a){return a===Vs?o.mapping=gr:a===fo&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vs||a===fo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jd(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yu extends Vu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const or=4,vc=[.125,.215,.35,.446,.526,.582],Ai=20,Xa=new Yu,xc=new Le;let Ya=null,qa=0,ja=0;const Ei=(1+Math.sqrt(5))/2,rr=1/Ei,Mc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ei,rr),new F(0,Ei,-rr),new F(rr,0,Ei),new F(-rr,0,Ei),new F(Ei,rr,0),new F(-Ei,rr,0)];class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,qa,ja),e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Vn,format:xn,colorSpace:Cn,depthBuffer:!1},i=yc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H_(s)),this._blurMaterial=k_(s,e,t)}return i}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,i){const a=new un(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(xc),u.toneMapping=si,u.autoClear=!1;const m=new zu({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Qt(new Cr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(xc),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;Ls(i,M*x,d>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gr||e.mapping===vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Mc[(i-1)%Mc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ai;p>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ai}`);const d=[];let M=0;for(let b=0;b<Ai;++b){const L=b/_,v=Math.exp(-L*L/2);d.push(v),b===0?M+=v:b<p&&(M+=2*v)}for(let b=0;b<d.length;b++)d[b]=d[b]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const S=this._sizeLods[i],w=3*S*(i>x-or?i-x+or:0),T=4*(this._cubeSize-S);Ls(t,w,T,3*S,2*S),l.setRenderTarget(t),l.render(h,Xa)}}function H_(r){const e=[],t=[],n=[];let i=r;const s=r-or+1+vc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-or?l=vc[o-r+or-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,M=new Float32Array(_*g*m),x=new Float32Array(p*g*m),S=new Float32Array(d*g*m);for(let T=0;T<m;T++){const b=T%3*2/3-1,L=T>2?0:-1,v=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];M.set(v,_*g*T),x.set(f,p*g*T);const E=[T,T,T,T,T,T];S.set(E,d*g*T)}const w=new Lt;w.setAttribute("position",new Sn(M,_)),w.setAttribute("uv",new Sn(x,p)),w.setAttribute("faceIndex",new Sn(S,d)),e.push(w),i>or&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yc(r,e,t){const n=new Oi(r,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function k_(r,e,t){const n=new Float32Array(Ai),i=new F(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ec(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Tc(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V_(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vs||l===fo,u=l===gr||l===vr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Sc(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Sc(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function W_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function X_(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let x=0,S=M.length;x<S;x+=3){const w=M[x+0],T=M[x+1],b=M[x+2];f.push(w,T,T,b,b,w)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const w=x+0,T=x+1,b=x+2;f.push(w,T,T,b,b,w)}}else return;const p=new(Uu(f)?Hu:Gu)(f,1);p.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Y_(r,e,t,n){const i=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){r.drawElements(s,g,a,m*l),t.update(g,s,1)}function h(m,g,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,a,m*l,_),t.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let d=0;for(let M=0;M<_;M++)d+=g[M];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function q_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function j_(r,e){return r[0]-e[0]}function K_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Z_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new St,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let U=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var m=U;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),S===!0&&(v=2),w===!0&&(v=3);let E=u.attributes.position.count*v,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const O=new Float32Array(E*N*4*_),k=new Ou(O,E,N,_);k.type=Mn,k.needsUpdate=!0;const P=v*4;for(let I=0;I<_;I++){const Y=T[I],q=b[I],K=L[I],j=E*N*4*I;for(let te=0;te<Y.count;te++){const $=te*P;x===!0&&(o.fromBufferAttribute(Y,te),O[j+$+0]=o.x,O[j+$+1]=o.y,O[j+$+2]=o.z,O[j+$+3]=0),S===!0&&(o.fromBufferAttribute(q,te),O[j+$+4]=o.x,O[j+$+5]=o.y,O[j+$+6]=o.z,O[j+$+7]=0),w===!0&&(o.fromBufferAttribute(K,te),O[j+$+8]=o.x,O[j+$+9]=o.y,O[j+$+10]=o.z,O[j+$+11]=K.itemSize===4?o.w:1)}}p={count:_,texture:k,size:new Pe(E,N)},s.set(u,p),u.addEventListener("dispose",U)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const M=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const w=_[S];w[0]=S,w[1]=f[S]}_.sort(K_);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(j_);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const w=a[S],T=w[0],b=w[1];T!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+S)!==p[T]&&u.setAttribute("morphTarget"+S,p[T]),d&&u.getAttribute("morphNormal"+S)!==d[T]&&u.setAttribute("morphNormal"+S,d[T]),i[S]=b,M+=b):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function $_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class qu extends Ht{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Ci,u!==Ci&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ci&&(n=Qn),n===void 0&&u===Mr&&(n=Ri),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ju=new Ht,Ku=new qu(1,1);Ku.compareFunction=Du;const Zu=new Ou,$u=new Dd,Ju=new Wu,bc=[],Ac=[],wc=new Float32Array(16),Rc=new Float32Array(9),Cc=new Float32Array(4);function Pr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=bc[i];if(s===void 0&&(s=new Float32Array(i),bc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function gt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ca(r,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function J_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2fv(this.addr,e),vt(t,e)}}function eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;r.uniform3fv(this.addr,e),vt(t,e)}}function tg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4fv(this.addr,e),vt(t,e)}}function ng(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Cc.set(n),r.uniformMatrix2fv(this.addr,!1,Cc),vt(t,n)}}function ig(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Rc.set(n),r.uniformMatrix3fv(this.addr,!1,Rc),vt(t,n)}}function rg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;wc.set(n),r.uniformMatrix4fv(this.addr,!1,wc),vt(t,n)}}function sg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2iv(this.addr,e),vt(t,e)}}function og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;r.uniform3iv(this.addr,e),vt(t,e)}}function lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4iv(this.addr,e),vt(t,e)}}function cg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2uiv(this.addr,e),vt(t,e)}}function hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;r.uniform3uiv(this.addr,e),vt(t,e)}}function fg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4uiv(this.addr,e),vt(t,e)}}function dg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Ku:ju;t.setTexture2D(e||s,i)}function pg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$u,i)}function mg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ju,i)}function _g(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zu,i)}function gg(r){switch(r){case 5126:return J_;case 35664:return Q_;case 35665:return eg;case 35666:return tg;case 35674:return ng;case 35675:return ig;case 35676:return rg;case 5124:case 35670:return sg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return ug;case 36295:return hg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return _g}}function vg(r,e){r.uniform1fv(this.addr,e)}function xg(r,e){const t=Pr(e,this.size,2);r.uniform2fv(this.addr,t)}function Mg(r,e){const t=Pr(e,this.size,3);r.uniform3fv(this.addr,t)}function Sg(r,e){const t=Pr(e,this.size,4);r.uniform4fv(this.addr,t)}function yg(r,e){const t=Pr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Eg(r,e){const t=Pr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Tg(r,e){const t=Pr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bg(r,e){r.uniform1iv(this.addr,e)}function Ag(r,e){r.uniform2iv(this.addr,e)}function wg(r,e){r.uniform3iv(this.addr,e)}function Rg(r,e){r.uniform4iv(this.addr,e)}function Cg(r,e){r.uniform1uiv(this.addr,e)}function Pg(r,e){r.uniform2uiv(this.addr,e)}function Lg(r,e){r.uniform3uiv(this.addr,e)}function Dg(r,e){r.uniform4uiv(this.addr,e)}function Ug(r,e,t){const n=this.cache,i=e.length,s=ca(t,i);gt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ju,s[o])}function Ig(r,e,t){const n=this.cache,i=e.length,s=ca(t,i);gt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$u,s[o])}function Ng(r,e,t){const n=this.cache,i=e.length,s=ca(t,i);gt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ju,s[o])}function Og(r,e,t){const n=this.cache,i=e.length,s=ca(t,i);gt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zu,s[o])}function Fg(r){switch(r){case 5126:return vg;case 35664:return xg;case 35665:return Mg;case 35666:return Sg;case 35674:return yg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return bg;case 35667:case 35671:return Ag;case 35668:case 35672:return wg;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Og}}class Bg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gg(t.type)}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fg(t.type)}}class Gg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function Pc(r,e){r.seq.push(e),r.map[e.id]=e}function Hg(r,e,t){const n=r.name,i=n.length;for(Ka.lastIndex=0;;){const s=Ka.exec(n),o=Ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Pc(t,c===void 0?new Bg(a,r,e):new zg(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Gg(a),Pc(t,h)),t=h}}}class Bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Hg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Lc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const kg=37297;let Vg=0;function Wg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Xg(r){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(r);let n;switch(e===t?n="":e===Ys&&t===Xs?n="LinearDisplayP3ToLinearSRGB":e===Xs&&t===Ys&&(n="LinearSRGBToLinearDisplayP3"),r){case Cn:case aa:return[n,"LinearTransferOETF"];case At:case zo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Dc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Wg(r.getShaderSource(e),o)}else return i}function Yg(r,e){const t=Xg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qg(r,e){let t;switch(e){case Hf:t="Linear";break;case kf:t="Reinhard";break;case Vf:t="OptimizedCineon";break;case Wf:t="ACESFilmic";break;case Yf:t="AgX";break;case Xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function Kg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(lr).join(`
`)}function Zg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $g(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function lr(r){return r!==""}function Uc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(r){return r.replace(Jg,e0)}const Qg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function e0(r,e){let t=Be[e];if(t===void 0){const n=Qg.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vo(t)}const t0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(r){return r.replace(t0,n0)}function n0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Oc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function i0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function r0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gr:case vr:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function a0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Oo:e="ENVMAP_BLENDING_MULTIPLY";break;case zf:e="ENVMAP_BLENDING_MIX";break;case Gf:e="ENVMAP_BLENDING_ADD";break}return e}function o0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function l0(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=i0(t),c=r0(t),u=s0(t),h=a0(t),f=o0(t),m=t.isWebGL2?"":jg(t),g=Kg(t),_=Zg(s),p=i.createProgram();let d,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),d.length>0&&(d+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),M.length>0&&(M+=`
`)):(d=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),M=[m,Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Be.tonemapping_pars_fragment:"",t.toneMapping!==si?qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Yg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=vo(o),o=Uc(o,t),o=Ic(o,t),a=vo(a),a=Uc(a,t),a=Ic(a,t),o=Nc(o),a=Nc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=x+d+o,w=x+M+a,T=Lc(i,i.VERTEX_SHADER,S),b=Lc(i,i.FRAGMENT_SHADER,w);i.attachShader(p,T),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function L(O){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(T).trim(),U=i.getShaderInfoLog(b).trim();let I=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,T,b);else{const q=Dc(i,T,"vertex"),K=Dc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+q+`
`+K)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||U==="")&&(Y=!1);Y&&(O.diagnostics={runnable:I,programLog:k,vertexShader:{log:P,prefix:d},fragmentShader:{log:U,prefix:M}})}i.deleteShader(T),i.deleteShader(b),v=new Bs(i,p),E=$g(i,p)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(p,kg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=b,this}let c0=0;class u0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new h0(e),t.set(e,n)),n}}class h0{constructor(e){this.id=c0++,this.code=e,this.usedTimes=0}}function f0(r,e,t,n,i,s,o){const a=new Fu,l=new u0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,E,N,O,k){const P=O.fog,U=k.geometry,I=v.isMeshStandardMaterial?O.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||I),q=Y&&Y.mapping===sa?Y.image.height:null,K=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,te=j!==void 0?j.length:0;let $=0;U.morphAttributes.position!==void 0&&($=1),U.morphAttributes.normal!==void 0&&($=2),U.morphAttributes.color!==void 0&&($=3);let V,Z,oe,ve;if(K){const ct=bn[K];V=ct.vertexShader,Z=ct.fragmentShader}else V=v.vertexShader,Z=v.fragmentShader,l.update(v),oe=l.getVertexShaderID(v),ve=l.getFragmentShaderID(v);const _e=r.getRenderTarget(),De=k.isInstancedMesh===!0,Ue=k.isBatchedMesh===!0,Te=!!v.map,Ve=!!v.matcap,G=!!Y,Tt=!!v.aoMap,Se=!!v.lightMap,we=!!v.bumpMap,pe=!!v.normalMap,Je=!!v.displacementMap,Ne=!!v.emissiveMap,R=!!v.metalnessMap,y=!!v.roughnessMap,z=v.anisotropy>0,ne=v.clearcoat>0,Q=v.iridescence>0,ie=v.sheen>0,me=v.transmission>0,ce=z&&!!v.anisotropyMap,de=ne&&!!v.clearcoatMap,Ee=ne&&!!v.clearcoatNormalMap,Oe=ne&&!!v.clearcoatRoughnessMap,J=Q&&!!v.iridescenceMap,je=Q&&!!v.iridescenceThicknessMap,ze=ie&&!!v.sheenColorMap,Re=ie&&!!v.sheenRoughnessMap,Me=!!v.specularMap,ue=!!v.specularColorMap,C=!!v.specularIntensityMap,re=me&&!!v.transmissionMap,ge=me&&!!v.thicknessMap,fe=!!v.gradientMap,ee=!!v.alphaMap,D=v.alphaTest>0,se=!!v.alphaHash,le=!!v.extensions,be=!!U.attributes.uv1,ye=!!U.attributes.uv2,We=!!U.attributes.uv3;let Xe=si;return v.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Xe=r.toneMapping),{isWebGL2:u,shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:Z,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Ue,instancing:De,instancingColor:De&&k.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Cn,map:Te,matcap:Ve,envMap:G,envMapMode:G&&Y.mapping,envMapCubeUVHeight:q,aoMap:Tt,lightMap:Se,bumpMap:we,normalMap:pe,displacementMap:f&&Je,emissiveMap:Ne,normalMapObjectSpace:pe&&v.normalMapType===rd,normalMapTangentSpace:pe&&v.normalMapType===Bo,metalnessMap:R,roughnessMap:y,anisotropy:z,anisotropyMap:ce,clearcoat:ne,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Oe,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:je,sheen:ie,sheenColorMap:ze,sheenRoughnessMap:Re,specularMap:Me,specularColorMap:ue,specularIntensityMap:C,transmission:me,transmissionMap:re,thicknessMap:ge,gradientMap:fe,opaque:v.transparent===!1&&v.blending===fr,alphaMap:ee,alphaTest:D,alphaHash:se,combine:v.combine,mapUv:Te&&_(v.map.channel),aoMapUv:Tt&&_(v.aoMap.channel),lightMapUv:Se&&_(v.lightMap.channel),bumpMapUv:we&&_(v.bumpMap.channel),normalMapUv:pe&&_(v.normalMap.channel),displacementMapUv:Je&&_(v.displacementMap.channel),emissiveMapUv:Ne&&_(v.emissiveMap.channel),metalnessMapUv:R&&_(v.metalnessMap.channel),roughnessMapUv:y&&_(v.roughnessMap.channel),anisotropyMapUv:ce&&_(v.anisotropyMap.channel),clearcoatMapUv:de&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(v.sheenRoughnessMap.channel),specularMapUv:Me&&_(v.specularMap.channel),specularColorMapUv:ue&&_(v.specularColorMap.channel),specularIntensityMapUv:C&&_(v.specularIntensityMap.channel),transmissionMapUv:re&&_(v.transmissionMap.channel),thicknessMapUv:ge&&_(v.thicknessMap.channel),alphaMapUv:ee&&_(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:ye,vertexUv3s:We,pointsUvs:k.isPoints===!0&&!!U.attributes.uv&&(Te||ee),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:$,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Te&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===Qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===An,flipSided:v.side===Gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:le&&v.extensions.derivatives===!0,extensionFragDepth:le&&v.extensions.fragDepth===!0,extensionDrawBuffers:le&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)E.push(N),E.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(M(E,v),x(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function M(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function S(v){const E=g[v.type];let N;if(E){const O=bn[E];N=jd.clone(O.uniforms)}else N=v.uniforms;return N}function w(v,E){let N;for(let O=0,k=c.length;O<k;O++){const P=c[O];if(P.cacheKey===E){N=P,++N.usedTimes;break}}return N===void 0&&(N=new l0(r,E,v,s),c.push(N)),N}function T(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function b(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:w,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:L}}function d0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function p0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Fc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,g,_,p){let d=r[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),e++,d}function a(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||p0),n.length>1&&n.sort(f||Fc),i.length>1&&i.sort(f||Fc)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function m0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Bc,r.set(n,[o])):i>=s.length?(o=new Bc,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function _0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Le};break;case"SpotLight":t={position:new F,direction:new F,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function g0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let v0=0;function x0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function M0(r,e){const t=new _0,n=g0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const s=new F,o=new ft,a=new ft;function l(u,h){let f=0,m=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let _=0,p=0,d=0,M=0,x=0,S=0,w=0,T=0,b=0,L=0,v=0;u.sort(x0);const E=h===!0?Math.PI:1;for(let O=0,k=u.length;O<k;O++){const P=u[O],U=P.color,I=P.intensity,Y=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=U.r*I*E,m+=U.g*I*E,g+=U.b*I*E;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],I);v++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const j=P.shadow,te=n.get(P);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.directionalShadow[_]=te,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=P.shadow.matrix,S++}i.directional[_]=K,_++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(U).multiplyScalar(I*E),K.distance=Y,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[d]=K;const j=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,j.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[d]=j.matrix,P.castShadow){const te=n.get(P);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.spotShadow[d]=te,i.spotShadowMap[d]=q,T++}d++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(U).multiplyScalar(I),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=K,M++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*E),K.distance=P.distance,K.decay=P.decay,P.castShadow){const j=P.shadow,te=n.get(P);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=P.shadow.matrix,w++}i.point[p]=K,p++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(I*E),K.groundColor.copy(P.groundColor).multiplyScalar(I*E),i.hemi[x]=K,x++}}M>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==_||N.pointLength!==p||N.spotLength!==d||N.rectAreaLength!==M||N.hemiLength!==x||N.numDirectionalShadows!==S||N.numPointShadows!==w||N.numSpotShadows!==T||N.numSpotMaps!==b||N.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=T+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=v,N.directionalLength=_,N.pointLength=p,N.spotLength=d,N.rectAreaLength=M,N.hemiLength=x,N.numDirectionalShadows=S,N.numPointShadows=w,N.numSpotShadows=T,N.numSpotMaps=b,N.numLightProbes=v,i.version=v0++)}function c(u,h){let f=0,m=0,g=0,_=0,p=0;const d=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const S=u[M];if(S.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),f++}else if(S.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function zc(r,e){const t=new M0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function S0(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new zc(r,e),t.set(s,[l])):o>=a.length?(l=new zc(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class y0 extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E0 extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A0(r,e,t){let n=new Ho;const i=new Pe,s=new Pe,o=new St,a=new y0({depthPacking:id}),l=new E0,c={},u=t.maxTextureSize,h={[ci]:Gt,[Gt]:ci,[An]:An},f=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:T0,fragmentShader:b0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let d=this.type;this.render=function(T,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const v=r.getRenderTarget(),E=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),O=r.state;O.setBlending(ri),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=d!==zn&&this.type===zn,P=d===zn&&this.type!==zn;for(let U=0,I=T.length;U<I;U++){const Y=T[U],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const K=q.getFrameExtents();if(i.multiply(K),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,q.mapSize.y=s.y)),q.map===null||k===!0||P===!0){const te=this.type!==zn?{minFilter:bt,magFilter:bt}:{};q.map!==null&&q.map.dispose(),q.map=new Oi(i.x,i.y,te),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const j=q.getViewportCount();for(let te=0;te<j;te++){const $=q.getViewport(te);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),O.viewport(o),q.updateMatrices(Y,te),n=q.getFrustum(),S(b,L,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===zn&&M(q,L),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(v,E,N)};function M(T,b){const L=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Oi(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(b,null,L,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(b,null,L,m,_,null)}function x(T,b,L,v){let E=null;const N=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)E=N;else if(E=L.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=E.uuid,k=b.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let U=P[k];U===void 0&&(U=E.clone(),P[k]=U,b.addEventListener("dispose",w)),E=U}if(E.visible=b.visible,E.wireframe=b.wireframe,v===zn?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:h[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=r.properties.get(E);O.light=L}return E}function S(T,b,L,v,E){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const k=e.update(T),P=T.material;if(Array.isArray(P)){const U=k.groups;for(let I=0,Y=U.length;I<Y;I++){const q=U[I],K=P[q.materialIndex];if(K&&K.visible){const j=x(T,K,v,E);T.onBeforeShadow(r,T,b,L,k,j,q),r.renderBufferDirect(L,null,k,j,T,q),T.onAfterShadow(r,T,b,L,k,j,q)}}}else if(P.visible){const U=x(T,P,v,E);T.onBeforeShadow(r,T,b,L,k,U,null),r.renderBufferDirect(L,null,k,U,T,null),T.onAfterShadow(r,T,b,L,k,U,null)}}const O=T.children;for(let k=0,P=O.length;k<P;k++)S(O[k],b,L,v,E)}function w(T){T.target.removeEventListener("dispose",w);for(const L in c){const v=c[L],E=T.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function w0(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const se=new St;let le=null;const be=new St(0,0,0,0);return{setMask:function(ye){le!==ye&&!D&&(r.colorMask(ye,ye,ye,ye),le=ye)},setLocked:function(ye){D=ye},setClear:function(ye,We,Xe,at,ct){ct===!0&&(ye*=at,We*=at,Xe*=at),se.set(ye,We,Xe,at),be.equals(se)===!1&&(r.clearColor(ye,We,Xe,at),be.copy(se))},reset:function(){D=!1,le=null,be.set(-1,0,0,0)}}}function s(){let D=!1,se=null,le=null,be=null;return{setTest:function(ye){ye?Ue(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(ye){se!==ye&&!D&&(r.depthMask(ye),se=ye)},setFunc:function(ye){if(le!==ye){switch(ye){case Df:r.depthFunc(r.NEVER);break;case Uf:r.depthFunc(r.ALWAYS);break;case If:r.depthFunc(r.LESS);break;case ks:r.depthFunc(r.LEQUAL);break;case Nf:r.depthFunc(r.EQUAL);break;case Of:r.depthFunc(r.GEQUAL);break;case Ff:r.depthFunc(r.GREATER);break;case Bf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=ye}},setLocked:function(ye){D=ye},setClear:function(ye){be!==ye&&(r.clearDepth(ye),be=ye)},reset:function(){D=!1,se=null,le=null,be=null}}}function o(){let D=!1,se=null,le=null,be=null,ye=null,We=null,Xe=null,at=null,ct=null;return{setTest:function(qe){D||(qe?Ue(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(qe){se!==qe&&!D&&(r.stencilMask(qe),se=qe)},setFunc:function(qe,dt,yn){(le!==qe||be!==dt||ye!==yn)&&(r.stencilFunc(qe,dt,yn),le=qe,be=dt,ye=yn)},setOp:function(qe,dt,yn){(We!==qe||Xe!==dt||at!==yn)&&(r.stencilOp(qe,dt,yn),We=qe,Xe=dt,at=yn)},setLocked:function(qe){D=qe},setClear:function(qe){ct!==qe&&(r.clearStencil(qe),ct=qe)},reset:function(){D=!1,se=null,le=null,be=null,ye=null,We=null,Xe=null,at=null,ct=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,d=!1,M=null,x=null,S=null,w=null,T=null,b=null,L=null,v=new Le(0,0,0),E=0,N=!1,O=null,k=null,P=null,U=null,I=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=K>=2);let te=null,$={};const V=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),oe=new St().fromArray(V),ve=new St().fromArray(Z);function _e(D,se,le,be){const ye=new Uint8Array(4),We=r.createTexture();r.bindTexture(D,We),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<le;Xe++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(se,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(se+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return We}const De={};De[r.TEXTURE_2D]=_e(r.TEXTURE_2D,r.TEXTURE_2D,1),De[r.TEXTURE_CUBE_MAP]=_e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[r.TEXTURE_2D_ARRAY]=_e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),De[r.TEXTURE_3D]=_e(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(r.DEPTH_TEST),l.setFunc(ks),Ne(!1),R(Ml),Ue(r.CULL_FACE),pe(ri);function Ue(D){f[D]!==!0&&(r.enable(D),f[D]=!0)}function Te(D){f[D]!==!1&&(r.disable(D),f[D]=!1)}function Ve(D,se){return m[D]!==se?(r.bindFramebuffer(D,se),m[D]=se,n&&(D===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=se),D===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=se)),!0):!1}function G(D,se){let le=_,be=!1;if(D)if(le=g.get(se),le===void 0&&(le=[],g.set(se,le)),D.isWebGLMultipleRenderTargets){const ye=D.texture;if(le.length!==ye.length||le[0]!==r.COLOR_ATTACHMENT0){for(let We=0,Xe=ye.length;We<Xe;We++)le[We]=r.COLOR_ATTACHMENT0+We;le.length=ye.length,be=!0}}else le[0]!==r.COLOR_ATTACHMENT0&&(le[0]=r.COLOR_ATTACHMENT0,be=!0);else le[0]!==r.BACK&&(le[0]=r.BACK,be=!0);be&&(t.isWebGL2?r.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Tt(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const Se={[bi]:r.FUNC_ADD,[gf]:r.FUNC_SUBTRACT,[vf]:r.FUNC_REVERSE_SUBTRACT};if(n)Se[Tl]=r.MIN,Se[bl]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Se[Tl]=D.MIN_EXT,Se[bl]=D.MAX_EXT)}const we={[xf]:r.ZERO,[Mf]:r.ONE,[Sf]:r.SRC_COLOR,[uo]:r.SRC_ALPHA,[wf]:r.SRC_ALPHA_SATURATE,[bf]:r.DST_COLOR,[Ef]:r.DST_ALPHA,[yf]:r.ONE_MINUS_SRC_COLOR,[ho]:r.ONE_MINUS_SRC_ALPHA,[Af]:r.ONE_MINUS_DST_COLOR,[Tf]:r.ONE_MINUS_DST_ALPHA,[Rf]:r.CONSTANT_COLOR,[Cf]:r.ONE_MINUS_CONSTANT_COLOR,[Pf]:r.CONSTANT_ALPHA,[Lf]:r.ONE_MINUS_CONSTANT_ALPHA};function pe(D,se,le,be,ye,We,Xe,at,ct,qe){if(D===ri){d===!0&&(Te(r.BLEND),d=!1);return}if(d===!1&&(Ue(r.BLEND),d=!0),D!==_f){if(D!==M||qe!==N){if((x!==bi||T!==bi)&&(r.blendEquation(r.FUNC_ADD),x=bi,T=bi),qe)switch(D){case fr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sl:r.blendFunc(r.ONE,r.ONE);break;case yl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case El:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case yl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case El:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,w=null,b=null,L=null,v.set(0,0,0),E=0,M=D,N=qe}return}ye=ye||se,We=We||le,Xe=Xe||be,(se!==x||ye!==T)&&(r.blendEquationSeparate(Se[se],Se[ye]),x=se,T=ye),(le!==S||be!==w||We!==b||Xe!==L)&&(r.blendFuncSeparate(we[le],we[be],we[We],we[Xe]),S=le,w=be,b=We,L=Xe),(at.equals(v)===!1||ct!==E)&&(r.blendColor(at.r,at.g,at.b,ct),v.copy(at),E=ct),M=D,N=!1}function Je(D,se){D.side===An?Te(r.CULL_FACE):Ue(r.CULL_FACE);let le=D.side===Gt;se&&(le=!le),Ne(le),D.blending===fr&&D.transparent===!1?pe(ri):pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const be=D.stencilWrite;c.setTest(be),be&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ue(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(D){O!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),O=D)}function R(D){D!==df?(Ue(r.CULL_FACE),D!==k&&(D===Ml?r.cullFace(r.BACK):D===pf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),k=D}function y(D){D!==P&&(q&&r.lineWidth(D),P=D)}function z(D,se,le){D?(Ue(r.POLYGON_OFFSET_FILL),(U!==se||I!==le)&&(r.polygonOffset(se,le),U=se,I=le)):Te(r.POLYGON_OFFSET_FILL)}function ne(D){D?Ue(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function Q(D){D===void 0&&(D=r.TEXTURE0+Y-1),te!==D&&(r.activeTexture(D),te=D)}function ie(D,se,le){le===void 0&&(te===null?le=r.TEXTURE0+Y-1:le=te);let be=$[le];be===void 0&&(be={type:void 0,texture:void 0},$[le]=be),(be.type!==D||be.texture!==se)&&(te!==le&&(r.activeTexture(le),te=le),r.bindTexture(D,se||De[D]),be.type=D,be.texture=se)}function me(){const D=$[te];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(D){oe.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}function re(D){ve.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ve.copy(D))}function ge(D,se){let le=h.get(se);le===void 0&&(le=new WeakMap,h.set(se,le));let be=le.get(D);be===void 0&&(be=r.getUniformBlockIndex(se,D.name),le.set(D,be))}function fe(D,se){const be=h.get(se).get(D);u.get(se)!==be&&(r.uniformBlockBinding(se,be,D.__bindingPointIndex),u.set(se,be))}function ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},te=null,$={},m={},g=new WeakMap,_=[],p=null,d=!1,M=null,x=null,S=null,w=null,T=null,b=null,L=null,v=new Le(0,0,0),E=0,N=!1,O=null,k=null,P=null,U=null,I=null,oe.set(0,0,r.canvas.width,r.canvas.height),ve.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:Te,bindFramebuffer:Ve,drawBuffers:G,useProgram:Tt,setBlending:pe,setMaterial:Je,setFlipSided:Ne,setCullFace:R,setLineWidth:y,setPolygonOffset:z,setScissorTest:ne,activeTexture:Q,bindTexture:ie,unbindTexture:me,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:Me,texImage3D:ue,updateUBOMapping:ge,uniformBlockBinding:fe,texStorage2D:ze,texStorage3D:Re,texSubImage2D:Ee,texSubImage3D:Oe,compressedTexSubImage2D:J,compressedTexSubImage3D:je,scissor:C,viewport:re,reset:ee}}function R0(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return m?new OffscreenCanvas(R,y):Ks("canvas")}function _(R,y,z,ne){let Q=1;if((R.width>ne||R.height>ne)&&(Q=ne/Math.max(R.width,R.height)),Q<1||y===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=y?js:Math.floor,me=ie(Q*R.width),ce=ie(Q*R.height);h===void 0&&(h=g(me,ce));const de=z?g(me,ce):h;return de.width=me,de.height=ce,de.getContext("2d").drawImage(R,0,0,me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+me+"x"+ce+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return go(R.width)&&go(R.height)}function d(R){return a?!1:R.wrapS!==$t||R.wrapT!==$t||R.minFilter!==bt&&R.minFilter!==wt}function M(R,y){return R.generateMipmaps&&y&&R.minFilter!==bt&&R.minFilter!==wt}function x(R){r.generateMipmap(R)}function S(R,y,z,ne,Q=!1){if(a===!1)return y;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=y;if(y===r.RED&&(z===r.FLOAT&&(ie=r.R32F),z===r.HALF_FLOAT&&(ie=r.R16F),z===r.UNSIGNED_BYTE&&(ie=r.R8)),y===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(ie=r.R8UI),z===r.UNSIGNED_SHORT&&(ie=r.R16UI),z===r.UNSIGNED_INT&&(ie=r.R32UI),z===r.BYTE&&(ie=r.R8I),z===r.SHORT&&(ie=r.R16I),z===r.INT&&(ie=r.R32I)),y===r.RG&&(z===r.FLOAT&&(ie=r.RG32F),z===r.HALF_FLOAT&&(ie=r.RG16F),z===r.UNSIGNED_BYTE&&(ie=r.RG8)),y===r.RGBA){const me=Q?Ws:Ke.getTransfer(ne);z===r.FLOAT&&(ie=r.RGBA32F),z===r.HALF_FLOAT&&(ie=r.RGBA16F),z===r.UNSIGNED_BYTE&&(ie=me===Qe?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(R,y,z){return M(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==bt&&R.minFilter!==wt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function T(R){return R===bt||R===Al||R===ya?r.NEAREST:r.LINEAR}function b(R){const y=R.target;y.removeEventListener("dispose",b),v(y),y.isVideoTexture&&u.delete(y)}function L(R){const y=R.target;y.removeEventListener("dispose",L),N(y)}function v(R){const y=n.get(R);if(y.__webglInit===void 0)return;const z=R.source,ne=f.get(z);if(ne){const Q=ne[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(R),Object.keys(ne).length===0&&f.delete(z)}n.remove(R)}function E(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const z=R.source,ne=f.get(z);delete ne[y.__cacheKey],o.memory.textures--}function N(R){const y=R.texture,z=n.get(R),ne=n.get(y);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(z.__webglFramebuffer[Q]))for(let ie=0;ie<z.__webglFramebuffer[Q].length;ie++)r.deleteFramebuffer(z.__webglFramebuffer[Q][ie]);else r.deleteFramebuffer(z.__webglFramebuffer[Q]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[Q])}else{if(Array.isArray(z.__webglFramebuffer))for(let Q=0;Q<z.__webglFramebuffer.length;Q++)r.deleteFramebuffer(z.__webglFramebuffer[Q]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Q=0,ie=y.length;Q<ie;Q++){const me=n.get(y[Q]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(y[Q])}n.remove(y),n.remove(R)}let O=0;function k(){O=0}function P(){const R=O;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),O+=1,R}function U(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function I(R,y){const z=n.get(R);if(R.isVideoTexture&&Je(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(z,R,y);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+y)}function Y(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){oe(z,R,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+y)}function q(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){oe(z,R,y);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+y)}function K(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){ve(z,R,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+y)}const j={[po]:r.REPEAT,[$t]:r.CLAMP_TO_EDGE,[mo]:r.MIRRORED_REPEAT},te={[bt]:r.NEAREST,[Al]:r.NEAREST_MIPMAP_NEAREST,[ya]:r.NEAREST_MIPMAP_LINEAR,[wt]:r.LINEAR,[qf]:r.LINEAR_MIPMAP_NEAREST,[xr]:r.LINEAR_MIPMAP_LINEAR},$={[sd]:r.NEVER,[hd]:r.ALWAYS,[ad]:r.LESS,[Du]:r.LEQUAL,[od]:r.EQUAL,[ud]:r.GEQUAL,[ld]:r.GREATER,[cd]:r.NOTEQUAL};function V(R,y,z){if(z?(r.texParameteri(R,r.TEXTURE_WRAP_S,j[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,j[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,j[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,te[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,te[y.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==$t||y.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,T(y.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==bt&&y.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,$[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===bt||y.minFilter!==ya&&y.minFilter!==xr||y.type===Mn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Vn&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Z(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",b));const ne=y.source;let Q=f.get(ne);Q===void 0&&(Q={},f.set(ne,Q));const ie=U(y);if(ie!==R.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[ie].usedTimes++;const me=Q[R.__cacheKey];me!==void 0&&(Q[R.__cacheKey].usedTimes--,me.usedTimes===0&&E(y)),R.__cacheKey=ie,R.__webglTexture=Q[ie].texture}return z}function oe(R,y,z){let ne=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=r.TEXTURE_3D);const Q=Z(R,y),ie=y.source;t.bindTexture(ne,R.__webglTexture,r.TEXTURE0+z);const me=n.get(ie);if(ie.version!==me.__version||Q===!0){t.activeTexture(r.TEXTURE0+z);const ce=Ke.getPrimaries(Ke.workingColorSpace),de=y.colorSpace===hn?null:Ke.getPrimaries(y.colorSpace),Ee=y.colorSpace===hn||ce===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Oe=d(y)&&p(y.image)===!1;let J=_(y.image,Oe,!1,i.maxTextureSize);J=Ne(y,J);const je=p(J)||a,ze=s.convert(y.format,y.colorSpace);let Re=s.convert(y.type),Me=S(y.internalFormat,ze,Re,y.colorSpace,y.isVideoTexture);V(ne,y,je);let ue;const C=y.mipmaps,re=a&&y.isVideoTexture!==!0&&Me!==Pu,ge=me.__version===void 0||Q===!0,fe=w(y,J,je);if(y.isDepthTexture)Me=r.DEPTH_COMPONENT,a?y.type===Mn?Me=r.DEPTH_COMPONENT32F:y.type===Qn?Me=r.DEPTH_COMPONENT24:y.type===Ri?Me=r.DEPTH24_STENCIL8:Me=r.DEPTH_COMPONENT16:y.type===Mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ci&&Me===r.DEPTH_COMPONENT&&y.type!==Fo&&y.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Qn,Re=s.convert(y.type)),y.format===Mr&&Me===r.DEPTH_COMPONENT&&(Me=r.DEPTH_STENCIL,y.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ri,Re=s.convert(y.type))),ge&&(re?t.texStorage2D(r.TEXTURE_2D,1,Me,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Me,J.width,J.height,0,ze,Re,null));else if(y.isDataTexture)if(C.length>0&&je){re&&ge&&t.texStorage2D(r.TEXTURE_2D,fe,Me,C[0].width,C[0].height);for(let ee=0,D=C.length;ee<D;ee++)ue=C[ee],re?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,ze,Re,ue.data):t.texImage2D(r.TEXTURE_2D,ee,Me,ue.width,ue.height,0,ze,Re,ue.data);y.generateMipmaps=!1}else re?(ge&&t.texStorage2D(r.TEXTURE_2D,fe,Me,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,ze,Re,J.data)):t.texImage2D(r.TEXTURE_2D,0,Me,J.width,J.height,0,ze,Re,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){re&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Me,C[0].width,C[0].height,J.depth);for(let ee=0,D=C.length;ee<D;ee++)ue=C[ee],y.format!==xn?ze!==null?re?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,J.depth,ze,ue.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Me,ue.width,ue.height,J.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,J.depth,ze,Re,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Me,ue.width,ue.height,J.depth,0,ze,Re,ue.data)}else{re&&ge&&t.texStorage2D(r.TEXTURE_2D,fe,Me,C[0].width,C[0].height);for(let ee=0,D=C.length;ee<D;ee++)ue=C[ee],y.format!==xn?ze!==null?re?t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,ze,Re,ue.data):t.texImage2D(r.TEXTURE_2D,ee,Me,ue.width,ue.height,0,ze,Re,ue.data)}else if(y.isDataArrayTexture)re?(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Me,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ze,Re,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,J.width,J.height,J.depth,0,ze,Re,J.data);else if(y.isData3DTexture)re?(ge&&t.texStorage3D(r.TEXTURE_3D,fe,Me,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ze,Re,J.data)):t.texImage3D(r.TEXTURE_3D,0,Me,J.width,J.height,J.depth,0,ze,Re,J.data);else if(y.isFramebufferTexture){if(ge)if(re)t.texStorage2D(r.TEXTURE_2D,fe,Me,J.width,J.height);else{let ee=J.width,D=J.height;for(let se=0;se<fe;se++)t.texImage2D(r.TEXTURE_2D,se,Me,ee,D,0,ze,Re,null),ee>>=1,D>>=1}}else if(C.length>0&&je){re&&ge&&t.texStorage2D(r.TEXTURE_2D,fe,Me,C[0].width,C[0].height);for(let ee=0,D=C.length;ee<D;ee++)ue=C[ee],re?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ze,Re,ue):t.texImage2D(r.TEXTURE_2D,ee,Me,ze,Re,ue);y.generateMipmaps=!1}else re?(ge&&t.texStorage2D(r.TEXTURE_2D,fe,Me,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,Re,J)):t.texImage2D(r.TEXTURE_2D,0,Me,ze,Re,J);M(y,je)&&x(ne),me.__version=ie.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ve(R,y,z){if(y.image.length!==6)return;const ne=Z(R,y),Q=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);const ie=n.get(Q);if(Q.version!==ie.__version||ne===!0){t.activeTexture(r.TEXTURE0+z);const me=Ke.getPrimaries(Ke.workingColorSpace),ce=y.colorSpace===hn?null:Ke.getPrimaries(y.colorSpace),de=y.colorSpace===hn||me===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,Oe=y.image[0]&&y.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!Ee&&!Oe?J[ee]=_(y.image[ee],!1,!0,i.maxCubemapSize):J[ee]=Oe?y.image[ee].image:y.image[ee],J[ee]=Ne(y,J[ee]);const je=J[0],ze=p(je)||a,Re=s.convert(y.format,y.colorSpace),Me=s.convert(y.type),ue=S(y.internalFormat,Re,Me,y.colorSpace),C=a&&y.isVideoTexture!==!0,re=ie.__version===void 0||ne===!0;let ge=w(y,je,ze);V(r.TEXTURE_CUBE_MAP,y,ze);let fe;if(Ee){C&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,ue,je.width,je.height);for(let ee=0;ee<6;ee++){fe=J[ee].mipmaps;for(let D=0;D<fe.length;D++){const se=fe[D];y.format!==xn?Re!==null?C?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D,0,0,se.width,se.height,Re,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D,0,0,se.width,se.height,Re,Me,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D,ue,se.width,se.height,0,Re,Me,se.data)}}}else{fe=y.mipmaps,C&&re&&(fe.length>0&&ge++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,ue,J[0].width,J[0].height));for(let ee=0;ee<6;ee++)if(Oe){C?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,J[ee].width,J[ee].height,Re,Me,J[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ue,J[ee].width,J[ee].height,0,Re,Me,J[ee].data);for(let D=0;D<fe.length;D++){const le=fe[D].image[ee].image;C?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D+1,0,0,le.width,le.height,Re,Me,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D+1,ue,le.width,le.height,0,Re,Me,le.data)}}else{C?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,Me,J[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ue,Re,Me,J[ee]);for(let D=0;D<fe.length;D++){const se=fe[D];C?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D+1,0,0,Re,Me,se.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D+1,ue,Re,Me,se.image[ee])}}}M(y,ze)&&x(r.TEXTURE_CUBE_MAP),ie.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function _e(R,y,z,ne,Q,ie){const me=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),de=S(z.internalFormat,me,ce,z.colorSpace);if(!n.get(y).__hasExternalTextures){const Oe=Math.max(1,y.width>>ie),J=Math.max(1,y.height>>ie);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,ie,de,Oe,J,y.depth,0,me,ce,null):t.texImage2D(Q,ie,de,Oe,J,0,me,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),pe(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,n.get(z).__webglTexture,0,we(y)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,n.get(z).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(R,y,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let ne=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(z||pe(y)){const Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Mn?ne=r.DEPTH_COMPONENT32F:Q.type===Qn&&(ne=r.DEPTH_COMPONENT24));const ie=we(y);pe(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,ne,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,ne,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const ne=we(y);z&&pe(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,y.width,y.height):pe(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ne=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0;Q<ne.length;Q++){const ie=ne[Q],me=s.convert(ie.format,ie.colorSpace),ce=s.convert(ie.type),de=S(ie.internalFormat,me,ce,ie.colorSpace),Ee=we(y);z&&pe(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,de,y.width,y.height):pe(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,de,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,de,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ue(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),I(y.depthTexture,0);const ne=n.get(y.depthTexture).__webglTexture,Q=we(y);if(y.depthTexture.format===Ci)pe(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(y.depthTexture.format===Mr)pe(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Te(R){const y=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ue(y.__webglFramebuffer,R)}else if(z){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]=r.createRenderbuffer(),De(y.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),De(y.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(R,y,z){const ne=n.get(R);y!==void 0&&_e(ne.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Te(R)}function G(R){const y=R.texture,z=n.get(R),ne=n.get(y);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=y.version,o.memory.textures++);const Q=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,me=p(R)||a;if(Q){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let de=0;de<y.mipmaps.length;de++)z.__webglFramebuffer[ce][de]=r.createFramebuffer()}else z.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)z.__webglFramebuffer[ce]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ie)if(i.drawBuffers){const ce=R.texture;for(let de=0,Ee=ce.length;de<Ee;de++){const Oe=n.get(ce[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&pe(R)===!1){const ce=ie?y:[y];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const Ee=ce[de];z.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const Oe=s.convert(Ee.format,Ee.colorSpace),J=s.convert(Ee.type),je=S(Ee.internalFormat,Oe,J,Ee.colorSpace,R.isXRRenderTarget===!0),ze=we(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,je,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,z.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),De(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),V(r.TEXTURE_CUBE_MAP,y,me);for(let ce=0;ce<6;ce++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)_e(z.__webglFramebuffer[ce][de],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else _e(z.__webglFramebuffer[ce],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);M(y,me)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ce=R.texture;for(let de=0,Ee=ce.length;de<Ee;de++){const Oe=ce[de],J=n.get(Oe);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),V(r.TEXTURE_2D,Oe,me),_e(z.__webglFramebuffer,R,Oe,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),M(Oe,me)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ce=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ne.__webglTexture),V(ce,y,me),a&&y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)_e(z.__webglFramebuffer[de],R,y,r.COLOR_ATTACHMENT0,ce,de);else _e(z.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,ce,0);M(y,me)&&x(ce),t.unbindTexture()}R.depthBuffer&&Te(R)}function Tt(R){const y=p(R)||a,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,Q=z.length;ne<Q;ne++){const ie=z[ne];if(M(ie,y)){const me=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ce=n.get(ie).__webglTexture;t.bindTexture(me,ce),x(me),t.unbindTexture()}}}function Se(R){if(a&&R.samples>0&&pe(R)===!1){const y=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,ne=R.height;let Q=r.COLOR_BUFFER_BIT;const ie=[],me=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(R),de=R.isWebGLMultipleRenderTargets===!0;if(de)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){ie.push(r.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&ie.push(me);const Oe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Oe===!1&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),de&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]),Oe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[me]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[me])),de){const J=n.get(y[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,z,ne,0,0,z,ne,Q,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]);const Oe=n.get(y[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,Oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function we(R){return Math.min(i.maxSamples,R.samples)}function pe(R){const y=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Je(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Ne(R,y){const z=R.colorSpace,ne=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===_o||z!==Cn&&z!==hn&&(Ke.getTransfer(z)===Qe?a===!1?e.has("EXT_sRGB")===!0&&ne===xn?(R.format=_o,R.minFilter=wt,R.generateMipmaps=!1):y=Iu.sRGBToLinear(y):(ne!==xn||Q!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=I,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=Ve,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function C0(r,e,t){const n=t.isWebGL2;function i(s,o=hn){let a;const l=Ke.getTransfer(o);if(s===ai)return r.UNSIGNED_BYTE;if(s===bu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Au)return r.UNSIGNED_SHORT_5_5_5_1;if(s===jf)return r.BYTE;if(s===Kf)return r.SHORT;if(s===Fo)return r.UNSIGNED_SHORT;if(s===Tu)return r.INT;if(s===Qn)return r.UNSIGNED_INT;if(s===Mn)return r.FLOAT;if(s===Vn)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zf)return r.ALPHA;if(s===xn)return r.RGBA;if(s===$f)return r.LUMINANCE;if(s===Jf)return r.LUMINANCE_ALPHA;if(s===Ci)return r.DEPTH_COMPONENT;if(s===Mr)return r.DEPTH_STENCIL;if(s===_o)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Qf)return r.RED;if(s===wu)return r.RED_INTEGER;if(s===ed)return r.RG;if(s===Ru)return r.RG_INTEGER;if(s===Cu)return r.RGBA_INTEGER;if(s===Ea||s===Ta||s===ba||s===Aa)if(l===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ea)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ea)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Aa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wl||s===Rl||s===Cl||s===Pl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ll||s===Dl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ll)return l===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Dl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ul||s===Il||s===Nl||s===Ol||s===Fl||s===Bl||s===zl||s===Gl||s===Hl||s===kl||s===Vl||s===Wl||s===Xl||s===Yl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ul)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Il)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ol)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yl)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wa||s===ql||s===jl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wa)return l===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ql)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===td||s===Kl||s===Zl||s===$l)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===wa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Kl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$l)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ri?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class P0 extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fr extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class D0 extends zi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,d=null;const M=[],x=[],S=new Pe;let w=null;const T=new un;T.layers.enable(1),T.viewport=new St;const b=new un;b.layers.enable(2),b.viewport=new St;const L=[T,b],v=new P0;v.layers.enable(1),v.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=M[V];return Z===void 0&&(Z=new Za,M[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=M[V];return Z===void 0&&(Z=new Za,M[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=M[V];return Z===void 0&&(Z=new Za,M[V]=Z),Z.getHandSpace()};function O(V){const Z=x.indexOf(V.inputSource);if(Z===-1)return;const oe=M[Z];oe!==void 0&&(oe.update(V.inputSource,V.frame,c||o),oe.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",P);for(let V=0;V<M.length;V++){const Z=x[V];Z!==null&&(x[V]=null,M[V].disconnect(Z))}E=null,N=null,e.setRenderTarget(p),m=null,f=null,h=null,i=null,d=null,$.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Oi(m.framebufferWidth,m.framebufferHeight,{format:xn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,oe=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?Mr:Ci,oe=_.stencil?Ri:Qn);const _e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(_e),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Oi(f.textureWidth,f.textureHeight,{format:xn,type:ai,depthTexture:new qu(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(d);De.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(V){for(let Z=0;Z<V.removed.length;Z++){const oe=V.removed[Z],ve=x.indexOf(oe);ve>=0&&(x[ve]=null,M[ve].disconnect(oe))}for(let Z=0;Z<V.added.length;Z++){const oe=V.added[Z];let ve=x.indexOf(oe);if(ve===-1){for(let De=0;De<M.length;De++)if(De>=x.length){x.push(oe),ve=De;break}else if(x[De]===null){x[De]=oe,ve=De;break}if(ve===-1)break}const _e=M[ve];_e&&_e.connect(oe)}}const U=new F,I=new F;function Y(V,Z,oe){U.setFromMatrixPosition(Z.matrixWorld),I.setFromMatrixPosition(oe.matrixWorld);const ve=U.distanceTo(I),_e=Z.projectionMatrix.elements,De=oe.projectionMatrix.elements,Ue=_e[14]/(_e[10]-1),Te=_e[14]/(_e[10]+1),Ve=(_e[9]+1)/_e[5],G=(_e[9]-1)/_e[5],Tt=(_e[8]-1)/_e[0],Se=(De[8]+1)/De[0],we=Ue*Tt,pe=Ue*Se,Je=ve/(-Tt+Se),Ne=Je*-Tt;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ne),V.translateZ(Je),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const R=Ue+Je,y=Te+Je,z=we-Ne,ne=pe+(ve-Ne),Q=Ve*Te/y*R,ie=G*Te/y*R;V.projectionMatrix.makePerspective(z,ne,Q,ie,R,y),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;v.near=b.near=T.near=V.near,v.far=b.far=T.far=V.far,(E!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,N=v.far);const Z=V.parent,oe=v.cameras;q(v,Z);for(let ve=0;ve<oe.length;ve++)q(oe[ve],Z);oe.length===2?Y(v,T,b):v.projectionMatrix.copy(T.projectionMatrix),K(V,v,Z)};function K(V,Z,oe){oe===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=jr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let j=null;function te(V,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ve=!1;oe.length!==v.cameras.length&&(v.cameras.length=0,ve=!0);for(let _e=0;_e<oe.length;_e++){const De=oe[_e];let Ue=null;if(m!==null)Ue=m.getViewport(De);else{const Ve=h.getViewSubImage(f,De);Ue=Ve.viewport,_e===0&&(e.setRenderTargetTextures(d,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(d))}let Te=L[_e];Te===void 0&&(Te=new un,Te.layers.enable(_e),Te.viewport=new St,L[_e]=Te),Te.matrix.fromArray(De.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(De.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(v.matrix.copy(Te.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ve===!0&&v.cameras.push(Te)}}for(let oe=0;oe<M.length;oe++){const ve=x[oe],_e=M[oe];ve!==null&&_e!==void 0&&_e.update(ve,Z,c||o)}j&&j(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const $=new Xu;$.setAnimationLoop(te),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}}function U0(r,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,ku(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,M,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Gt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Gt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function I0(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function c(M,x){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const w=x.program;n.updateUBOMapping(M,w);const T=e.render.frame;s[M.id]!==T&&(f(M),s[M.id]=T)}function u(M){const x=h();M.__bindingPointIndex=x;const S=r.createBuffer(),w=M.__size,T=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,w,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],S=M.uniforms,w=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,b=S.length;T<b;T++){const L=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,E=L.length;v<E;v++){const N=L[v];if(m(N,T,v,w)===!0){const O=N.__offset,k=Array.isArray(N.value)?N.value:[N.value];let P=0;for(let U=0;U<k.length;U++){const I=k[U],Y=_(I);typeof I=="number"||typeof I=="boolean"?(N.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,O+P,N.__data)):I.isMatrix3?(N.__data[0]=I.elements[0],N.__data[1]=I.elements[1],N.__data[2]=I.elements[2],N.__data[3]=0,N.__data[4]=I.elements[3],N.__data[5]=I.elements[4],N.__data[6]=I.elements[5],N.__data[7]=0,N.__data[8]=I.elements[6],N.__data[9]=I.elements[7],N.__data[10]=I.elements[8],N.__data[11]=0):(I.toArray(N.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(M,x,S,w){const T=M.value,b=x+"_"+S;if(w[b]===void 0)return typeof T=="number"||typeof T=="boolean"?w[b]=T:w[b]=T.clone(),!0;{const L=w[b];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return w[b]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(M){const x=M.uniforms;let S=0;const w=16;for(let b=0,L=x.length;b<L;b++){const v=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,N=v.length;E<N;E++){const O=v[E],k=Array.isArray(O.value)?O.value:[O.value];for(let P=0,U=k.length;P<U;P++){const I=k[P],Y=_(I),q=S%w;q!==0&&w-q<Y.boundary&&(S+=w-q),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=Y.storage}}}const T=S%w;return T>0&&(S+=w-T),M.__size=S,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}class Qu{constructor(e={}){const{canvas:t=wd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=si,this.toneMappingExposure=1;const x=this;let S=!1,w=0,T=0,b=null,L=-1,v=null;const E=new St,N=new St;let O=null;const k=new Le(0);let P=0,U=t.width,I=t.height,Y=1,q=null,K=null;const j=new St(0,0,U,I),te=new St(0,0,U,I);let $=!1;const V=new Ho;let Z=!1,oe=!1,ve=null;const _e=new ft,De=new Pe,Ue=new F,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return b===null?Y:1}let G=n;function Tt(A,B){for(let W=0;W<A.length;W++){const X=A[W],H=t.getContext(X,B);if(H!==null)return H}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",se,!1),G===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),G=Tt(B,A),G===null)throw Tt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Se,we,pe,Je,Ne,R,y,z,ne,Q,ie,me,ce,de,Ee,Oe,J,je,ze,Re,Me,ue,C,re;function ge(){Se=new W_(G),we=new B_(G,Se,e),Se.init(we),ue=new C0(G,Se,we),pe=new w0(G,Se,we),Je=new q_(G),Ne=new d0,R=new R0(G,Se,pe,Ne,we,ue,Je),y=new G_(x),z=new V_(x),ne=new tp(G,we),C=new O_(G,Se,ne,we),Q=new X_(G,ne,Je,C),ie=new $_(G,Q,ne,Je),ze=new Z_(G,we,R),Oe=new z_(Ne),me=new f0(x,y,z,Se,we,C,Oe),ce=new U0(x,Ne),de=new m0,Ee=new S0(Se,we),je=new N_(x,y,z,pe,ie,f,l),J=new A0(x,ie,we),re=new I0(G,Je,we,pe),Re=new F_(G,Se,Je,we),Me=new Y_(G,Se,Je,we),Je.programs=me.programs,x.capabilities=we,x.extensions=Se,x.properties=Ne,x.renderLists=de,x.shadowMap=J,x.state=pe,x.info=Je}ge();const fe=new D0(x,G);this.xr=fe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(U,I,!1))},this.getSize=function(A){return A.set(U,I)},this.setSize=function(A,B,W=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,I=B,t.width=Math.floor(A*Y),t.height=Math.floor(B*Y),W===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(U*Y,I*Y).floor()},this.setDrawingBufferSize=function(A,B,W){U=A,I=B,Y=W,t.width=Math.floor(A*W),t.height=Math.floor(B*W),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,B,W,X){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,B,W,X),pe.viewport(E.copy(j).multiplyScalar(Y).floor())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,B,W,X){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,B,W,X),pe.scissor(N.copy(te).multiplyScalar(Y).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(A){pe.setScissorTest($=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(A=!0,B=!0,W=!0){let X=0;if(A){let H=!1;if(b!==null){const he=b.texture.format;H=he===Cu||he===Ru||he===wu}if(H){const he=b.texture.type,xe=he===ai||he===Qn||he===Fo||he===Ri||he===bu||he===Au,Ae=je.getClearColor(),Ce=je.getClearAlpha(),Ge=Ae.r,Ie=Ae.g,Fe=Ae.b;xe?(m[0]=Ge,m[1]=Ie,m[2]=Fe,m[3]=Ce,G.clearBufferuiv(G.COLOR,0,m)):(g[0]=Ge,g[1]=Ie,g[2]=Fe,g[3]=Ce,G.clearBufferiv(G.COLOR,0,g))}else X|=G.COLOR_BUFFER_BIT}B&&(X|=G.DEPTH_BUFFER_BIT),W&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",se,!1),de.dispose(),Ee.dispose(),Ne.dispose(),y.dispose(),z.dispose(),ie.dispose(),C.dispose(),re.dispose(),me.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ct),fe.removeEventListener("sessionend",qe),ve&&(ve.dispose(),ve=null),dt.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Je.autoReset,B=J.enabled,W=J.autoUpdate,X=J.needsUpdate,H=J.type;ge(),Je.autoReset=A,J.enabled=B,J.autoUpdate=W,J.needsUpdate=X,J.type=H}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){const B=A.target;B.removeEventListener("dispose",le),be(B)}function be(A){ye(A),Ne.remove(A)}function ye(A){const B=Ne.get(A).programs;B!==void 0&&(B.forEach(function(W){me.releaseProgram(W)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,W,X,H,he){B===null&&(B=Te);const xe=H.isMesh&&H.matrixWorld.determinant()<0,Ae=cf(A,B,W,X,H);pe.setMaterial(X,xe);let Ce=W.index,Ge=1;if(X.wireframe===!0){if(Ce=Q.getWireframeAttribute(W),Ce===void 0)return;Ge=2}const Ie=W.drawRange,Fe=W.attributes.position;let ut=Ie.start*Ge,qt=(Ie.start+Ie.count)*Ge;he!==null&&(ut=Math.max(ut,he.start*Ge),qt=Math.min(qt,(he.start+he.count)*Ge)),Ce!==null?(ut=Math.max(ut,0),qt=Math.min(qt,Ce.count)):Fe!=null&&(ut=Math.max(ut,0),qt=Math.min(qt,Fe.count));const xt=qt-ut;if(xt<0||xt===1/0)return;C.setup(H,X,Ae,W,Ce);let Dn,nt=Re;if(Ce!==null&&(Dn=ne.get(Ce),nt=Me,nt.setIndex(Dn)),H.isMesh)X.wireframe===!0?(pe.setLineWidth(X.wireframeLinewidth*Ve()),nt.setMode(G.LINES)):nt.setMode(G.TRIANGLES);else if(H.isLine){let He=X.linewidth;He===void 0&&(He=1),pe.setLineWidth(He*Ve()),H.isLineSegments?nt.setMode(G.LINES):H.isLineLoop?nt.setMode(G.LINE_LOOP):nt.setMode(G.LINE_STRIP)}else H.isPoints?nt.setMode(G.POINTS):H.isSprite&&nt.setMode(G.TRIANGLES);if(H.isBatchedMesh)nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)nt.renderInstances(ut,xt,H.count);else if(W.isInstancedBufferGeometry){const He=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,va=Math.min(W.instanceCount,He);nt.renderInstances(ut,xt,va)}else nt.render(ut,xt)};function We(A,B,W){A.transparent===!0&&A.side===An&&A.forceSinglePass===!1?(A.side=Gt,A.needsUpdate=!0,ls(A,B,W),A.side=ci,A.needsUpdate=!0,ls(A,B,W),A.side=An):ls(A,B,W)}this.compile=function(A,B,W=null){W===null&&(W=A),p=Ee.get(W),p.init(),M.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==W&&A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(x._useLegacyLights);const X=new Set;return A.traverse(function(H){const he=H.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Ae=he[xe];We(Ae,W,H),X.add(Ae)}else We(he,W,H),X.add(he)}),M.pop(),p=null,X},this.compileAsync=function(A,B,W=null){const X=this.compile(A,B,W);return new Promise(H=>{function he(){if(X.forEach(function(xe){Ne.get(xe).currentProgram.isReady()&&X.delete(xe)}),X.size===0){H(A);return}setTimeout(he,10)}Se.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Xe=null;function at(A){Xe&&Xe(A)}function ct(){dt.stop()}function qe(){dt.start()}const dt=new Xu;dt.setAnimationLoop(at),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(A){Xe=A,fe.setAnimationLoop(A),A===null?dt.stop():dt.start()},fe.addEventListener("sessionstart",ct),fe.addEventListener("sessionend",qe),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(B),B=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,b),p=Ee.get(A,M.length),p.init(),M.push(p),_e.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V.setFromProjectionMatrix(_e),oe=this.localClippingEnabled,Z=Oe.init(this.clippingPlanes,oe),_=de.get(A,d.length),_.init(),d.push(_),yn(A,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,K),this.info.render.frame++,Z===!0&&Oe.beginShadows();const W=p.state.shadowsArray;if(J.render(W,A,B),Z===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(_,A),p.setupLights(x._useLegacyLights),B.isArrayCamera){const X=B.cameras;for(let H=0,he=X.length;H<he;H++){const xe=X[H];pl(_,A,xe,xe.viewport)}}else pl(_,A,B);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(x,A,B),C.resetDefaultState(),L=-1,v=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function yn(A,B,W,X){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){X&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const xe=ie.update(A),Ae=A.material;Ae.visible&&_.push(A,xe,Ae,W,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){const xe=ie.update(A),Ae=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ue.copy(xe.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ae)){const Ce=xe.groups;for(let Ge=0,Ie=Ce.length;Ge<Ie;Ge++){const Fe=Ce[Ge],ut=Ae[Fe.materialIndex];ut&&ut.visible&&_.push(A,xe,ut,W,Ue.z,Fe)}}else Ae.visible&&_.push(A,xe,Ae,W,Ue.z,null)}}const he=A.children;for(let xe=0,Ae=he.length;xe<Ae;xe++)yn(he[xe],B,W,X)}function pl(A,B,W,X){const H=A.opaque,he=A.transmissive,xe=A.transparent;p.setupLightsView(W),Z===!0&&Oe.setGlobalState(x.clippingPlanes,W),he.length>0&&lf(H,he,B,W),X&&pe.viewport(E.copy(X)),H.length>0&&os(H,B,W),he.length>0&&os(he,B,W),xe.length>0&&os(xe,B,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function lf(A,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const he=we.isWebGL2;ve===null&&(ve=new Oi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Vn:ai,minFilter:xr,samples:he?4:0})),x.getDrawingBufferSize(De),he?ve.setSize(De.x,De.y):ve.setSize(js(De.x),js(De.y));const xe=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(k),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Ae=x.toneMapping;x.toneMapping=si,os(A,W,X),R.updateMultisampleRenderTarget(ve),R.updateRenderTargetMipmap(ve);let Ce=!1;for(let Ge=0,Ie=B.length;Ge<Ie;Ge++){const Fe=B[Ge],ut=Fe.object,qt=Fe.geometry,xt=Fe.material,Dn=Fe.group;if(xt.side===An&&ut.layers.test(X.layers)){const nt=xt.side;xt.side=Gt,xt.needsUpdate=!0,ml(ut,W,X,qt,xt,Dn),xt.side=nt,xt.needsUpdate=!0,Ce=!0}}Ce===!0&&(R.updateMultisampleRenderTarget(ve),R.updateRenderTargetMipmap(ve)),x.setRenderTarget(xe),x.setClearColor(k,P),x.toneMapping=Ae}function os(A,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let H=0,he=A.length;H<he;H++){const xe=A[H],Ae=xe.object,Ce=xe.geometry,Ge=X===null?xe.material:X,Ie=xe.group;Ae.layers.test(W.layers)&&ml(Ae,B,W,Ce,Ge,Ie)}}function ml(A,B,W,X,H,he){A.onBeforeRender(x,B,W,X,H,he),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,B,W,X,A,he),H.transparent===!0&&H.side===An&&H.forceSinglePass===!1?(H.side=Gt,H.needsUpdate=!0,x.renderBufferDirect(W,B,X,H,A,he),H.side=ci,H.needsUpdate=!0,x.renderBufferDirect(W,B,X,H,A,he),H.side=An):x.renderBufferDirect(W,B,X,H,A,he),A.onAfterRender(x,B,W,X,H,he)}function ls(A,B,W){B.isScene!==!0&&(B=Te);const X=Ne.get(A),H=p.state.lights,he=p.state.shadowsArray,xe=H.state.version,Ae=me.getParameters(A,H.state,he,B,W),Ce=me.getProgramCacheKey(Ae);let Ge=X.programs;X.environment=A.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(A.isMeshStandardMaterial?z:y).get(A.envMap||X.environment),Ge===void 0&&(A.addEventListener("dispose",le),Ge=new Map,X.programs=Ge);let Ie=Ge.get(Ce);if(Ie!==void 0){if(X.currentProgram===Ie&&X.lightsStateVersion===xe)return gl(A,Ae),Ie}else Ae.uniforms=me.getUniforms(A),A.onBuild(W,Ae,x),A.onBeforeCompile(Ae,x),Ie=me.acquireProgram(Ae,Ce),Ge.set(Ce,Ie),X.uniforms=Ae.uniforms;const Fe=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=Oe.uniform),gl(A,Ae),X.needsLights=hf(A),X.lightsStateVersion=xe,X.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ie,X.uniformsList=null,Ie}function _l(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Bs.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function gl(A,B){const W=Ne.get(A);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function cf(A,B,W,X,H){B.isScene!==!0&&(B=Te),R.resetTextureUnits();const he=B.fog,xe=X.isMeshStandardMaterial?B.environment:null,Ae=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Cn,Ce=(X.isMeshStandardMaterial?z:y).get(X.envMap||xe),Ge=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,qt=!!W.morphAttributes.color;let xt=si;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(xt=x.toneMapping);const Dn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nt=Dn!==void 0?Dn.length:0,He=Ne.get(X),va=p.state.lights;if(Z===!0&&(oe===!0||A!==v)){const an=A===v&&X.id===L;Oe.setState(X,A,an)}let ot=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==va.state.version||He.outputColorSpace!==Ae||H.isBatchedMesh&&He.batching===!1||!H.isBatchedMesh&&He.batching===!0||H.isInstancedMesh&&He.instancing===!1||!H.isInstancedMesh&&He.instancing===!0||H.isSkinnedMesh&&He.skinning===!1||!H.isSkinnedMesh&&He.skinning===!0||H.isInstancedMesh&&He.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&He.instancingColor===!1&&H.instanceColor!==null||He.envMap!==Ce||X.fog===!0&&He.fog!==he||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Oe.numPlanes||He.numIntersection!==Oe.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==Ie||He.morphTargets!==Fe||He.morphNormals!==ut||He.morphColors!==qt||He.toneMapping!==xt||we.isWebGL2===!0&&He.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,He.__version=X.version);let mi=He.currentProgram;ot===!0&&(mi=ls(X,B,H));let vl=!1,Lr=!1,xa=!1;const Dt=mi.getUniforms(),_i=He.uniforms;if(pe.useProgram(mi.program)&&(vl=!0,Lr=!0,xa=!0),X.id!==L&&(L=X.id,Lr=!0),vl||v!==A){Dt.setValue(G,"projectionMatrix",A.projectionMatrix),Dt.setValue(G,"viewMatrix",A.matrixWorldInverse);const an=Dt.map.cameraPosition;an!==void 0&&an.setValue(G,Ue.setFromMatrixPosition(A.matrixWorld)),we.logarithmicDepthBuffer&&Dt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Dt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,Lr=!0,xa=!0)}if(H.isSkinnedMesh){Dt.setOptional(G,H,"bindMatrix"),Dt.setOptional(G,H,"bindMatrixInverse");const an=H.skeleton;an&&(we.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Dt.setValue(G,"boneTexture",an.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Dt.setOptional(G,H,"batchingTexture"),Dt.setValue(G,"batchingTexture",H._matricesTexture,R));const Ma=W.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0&&we.isWebGL2===!0)&&ze.update(H,W,mi),(Lr||He.receiveShadow!==H.receiveShadow)&&(He.receiveShadow=H.receiveShadow,Dt.setValue(G,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(_i.envMap.value=Ce,_i.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Lr&&(Dt.setValue(G,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&uf(_i,xa),he&&X.fog===!0&&ce.refreshFogUniforms(_i,he),ce.refreshMaterialUniforms(_i,X,Y,I,ve),Bs.upload(G,_l(He),_i,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Bs.upload(G,_l(He),_i,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Dt.setValue(G,"center",H.center),Dt.setValue(G,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(G,"normalMatrix",H.normalMatrix),Dt.setValue(G,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const an=X.uniformsGroups;for(let Sa=0,ff=an.length;Sa<ff;Sa++)if(we.isWebGL2){const xl=an[Sa];re.update(xl,mi),re.bind(xl,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function uf(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function hf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,B,W){Ne.get(A.texture).__webglTexture=B,Ne.get(A.depthTexture).__webglTexture=W;const X=Ne.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const W=Ne.get(A);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,W=0){b=A,w=B,T=W;let X=!0,H=null,he=!1,xe=!1;if(A){const Ce=Ne.get(A);Ce.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(G.FRAMEBUFFER,null),X=!1):Ce.__webglFramebuffer===void 0?R.setupRenderTarget(A):Ce.__hasExternalTextures&&R.rebindTextures(A,Ne.get(A.texture).__webglTexture,Ne.get(A.depthTexture).__webglTexture);const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(xe=!0);const Ie=Ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[B])?H=Ie[B][W]:H=Ie[B],he=!0):we.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?H=Ne.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?H=Ie[W]:H=Ie,E.copy(A.viewport),N.copy(A.scissor),O=A.scissorTest}else E.copy(j).multiplyScalar(Y).floor(),N.copy(te).multiplyScalar(Y).floor(),O=$;if(pe.bindFramebuffer(G.FRAMEBUFFER,H)&&we.drawBuffers&&X&&pe.drawBuffers(A,H),pe.viewport(E),pe.scissor(N),pe.setScissorTest(O),he){const Ce=Ne.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ce.__webglTexture,W)}else if(xe){const Ce=Ne.get(A.texture),Ge=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ce.__webglTexture,W||0,Ge)}L=-1},this.readRenderTargetPixels=function(A,B,W,X,H,he,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){pe.bindFramebuffer(G.FRAMEBUFFER,Ae);try{const Ce=A.texture,Ge=Ce.format,Ie=Ce.type;if(Ge!==xn&&ue.convert(Ge)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===Vn&&(Se.has("EXT_color_buffer_half_float")||we.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ie!==ai&&ue.convert(Ie)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Mn&&(we.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-X&&W>=0&&W<=A.height-H&&G.readPixels(B,W,X,H,ue.convert(Ge),ue.convert(Ie),he)}finally{const Ce=b!==null?Ne.get(b).__webglFramebuffer:null;pe.bindFramebuffer(G.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,B,W=0){const X=Math.pow(2,-W),H=Math.floor(B.image.width*X),he=Math.floor(B.image.height*X);R.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,W,0,0,A.x,A.y,H,he),pe.unbindTexture()},this.copyTextureToTexture=function(A,B,W,X=0){const H=B.image.width,he=B.image.height,xe=ue.convert(W.format),Ae=ue.convert(W.type);R.setTexture2D(W,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,X,A.x,A.y,H,he,xe,Ae,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,X,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,xe,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,X,A.x,A.y,xe,Ae,B.image),X===0&&W.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,B,W,X,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=A.max.x-A.min.x+1,xe=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,Ce=ue.convert(X.format),Ge=ue.convert(X.type);let Ie;if(X.isData3DTexture)R.setTexture3D(X,0),Ie=G.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)R.setTexture2DArray(X,0),Ie=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Fe=G.getParameter(G.UNPACK_ROW_LENGTH),ut=G.getParameter(G.UNPACK_IMAGE_HEIGHT),qt=G.getParameter(G.UNPACK_SKIP_PIXELS),xt=G.getParameter(G.UNPACK_SKIP_ROWS),Dn=G.getParameter(G.UNPACK_SKIP_IMAGES),nt=W.isCompressedTexture?W.mipmaps[H]:W.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,nt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,nt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(Ie,H,B.x,B.y,B.z,he,xe,Ae,Ce,Ge,nt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ie,H,B.x,B.y,B.z,he,xe,Ae,Ce,nt.data)):G.texSubImage3D(Ie,H,B.x,B.y,B.z,he,xe,Ae,Ce,Ge,nt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Fe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ut),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,xt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Dn),H===0&&X.generateMipmaps&&G.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){w=0,T=0,b=null,pe.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zo?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===aa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Pi:Lu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pi?At:Cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class N0 extends Qu{}N0.prototype.isWebGL1Renderer=!0;class O0 extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class F0 extends Ht{constructor(e=null,t=1,n=1,i,s,o,a,l,c=bt,u=bt,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new F,Hc=new F,kc=new ft,$a=new oa,Ds=new is;class eh extends yt{constructor(e=new Lt,t=new Li){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Gc.fromBufferAttribute(t,i-1),Hc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gc.distanceTo(Hc);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=s,e.ray.intersectsSphere(Ds)===!1)return;kc.copy(i).invert(),$a.copy(e.ray).applyMatrix4(kc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,h=new F,f=new F,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const d=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=d,S=M-1;x<S;x+=m){const w=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,T),$a.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let x=d,S=M-1;x<S;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),$a.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Vc=new F,Wc=new F;class Zs extends eh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Vc.fromBufferAttribute(t,i),Wc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vc.distanceTo(Wc);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Br extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xc=new ft,xo=new oa,Us=new is,Is=new F;class Ja extends yt{constructor(e=new Lt,t=new Br){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=s,e.ray.intersectsSphere(Us)===!1)return;Xc.copy(i).invert(),xo.copy(e.ray).applyMatrix4(Xc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Is.fromBufferAttribute(h,p),Yc(Is,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Is.fromBufferAttribute(h,g),Yc(Is,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yc(r,e,t,n,i,s,o){const a=xo.distanceSqToPoint(r);if(a<t){const l=new F;xo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ua extends Lt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(m,2));function M(){const S=new F,w=new F;let T=0;const b=(t-e)/n;for(let L=0;L<=s;L++){const v=[],E=L/s,N=E*(t-e)+e;for(let O=0;O<=i;O++){const k=O/i,P=k*l+a,U=Math.sin(P),I=Math.cos(P);w.x=N*U,w.y=-E*n+p,w.z=N*I,h.push(w.x,w.y,w.z),S.set(U,b,I).normalize(),f.push(S.x,S.y,S.z),m.push(k,1-E),v.push(g++)}_.push(v)}for(let L=0;L<i;L++)for(let v=0;v<s;v++){const E=_[v][L],N=_[v+1][L],O=_[v+1][L+1],k=_[v][L+1];u.push(E,N,k),u.push(N,O,k),T+=6}c.addGroup(d,T,0),d+=T}function x(S){const w=g,T=new Pe,b=new F;let L=0;const v=S===!0?e:t,E=S===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,p*E,0),f.push(0,E,0),m.push(.5,.5),g++;const N=g;for(let O=0;O<=i;O++){const P=O/i*l+a,U=Math.cos(P),I=Math.sin(P);b.x=v*I,b.y=p*E,b.z=v*U,h.push(b.x,b.y,b.z),f.push(0,E,0),T.x=U*.5+.5,T.y=I*.5*E+.5,m.push(T.x,T.y),g++}for(let O=0;O<i;O++){const k=w+O,P=N+O;S===!0?u.push(P,P+1,k):u.push(P+1,P,k),L+=3}c.addGroup(d,L,S===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wo extends ua{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends Lt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new F,f=new F,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const M=[],x=d/n;let S=0;d===0&&o===0?S=.5/t:d===n&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const T=w/t;h.x=-e*Math.cos(i+T*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+T*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(T+S,1-x),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const x=u[d][M+1],S=u[d][M],w=u[d+1][M],T=u[d+1][M+1];(d!==0||o>0)&&m.push(x,S,T),(d!==n-1||l<Math.PI)&&m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class B0 extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xo extends Pn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const qc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class z0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const G0=new z0;class fa{constructor(e){this.manager=e!==void 0?e:G0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class H0 extends Error{constructor(e,t){super(e),this.response=t}}class th extends fa{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let _=0;const p=new ReadableStream({start(d){M();function M(){h.read().then(({done:x,value:S})=>{if(x)d.close();else{_+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let T=0,b=u.length;T<b;T++){const L=u[T];L.onProgress&&L.onProgress(w)}d.enqueue(S),M()}})}}});return new Response(p)}else throw new H0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{qc.add(e,c);const u=Bn[e];delete Bn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class k0 extends fa{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new F0,a=new th(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:$t,o.wrapT=c.wrapT!==void 0?c.wrapT:$t,o.magFilter=c.magFilter!==void 0?c.magFilter:wt,o.minFilter=c.minFilter!==void 0?c.minFilter:wt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=xr),c.mipmapCount===1&&(o.minFilter=wt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class V0 extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Qa=new ft,jc=new F,Kc=new F;class W0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(jc),Kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kc),t.updateMatrixWorld(),Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class X0 extends W0{constructor(){super(new Yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yo extends V0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new X0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Y0 extends Zs{constructor(e=10,t=10,n=4473924,i=8947848){n=new Le(n),i=new Le(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,m=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===s?n:i;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const u=new Lt;u.setAttribute("position",new et(l,3)),u.setAttribute("color",new et(c,3));const h=new Li({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class nh extends Zs{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Lt;i.setAttribute("position",new et(t,3)),i.setAttribute("color",new et(n,3));const s=new Li({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Le,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);const $c={type:"change"},eo={type:"start"},Jc={type:"end"},Ns=new oa,Qc=new Jn,q0=Math.cos(70*Ad.DEG2RAD);class j0 extends zi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Ee),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent($c),n.update(),s=i.NONE},this.update=function(){const C=new F,re=new Fi().setFromUnitVectors(e.up,new F(0,1,0)),ge=re.clone().invert(),fe=new F,ee=new Fi,D=new F,se=2*Math.PI;return function(be=null){const ye=n.object.position;C.copy(ye).sub(n.target),C.applyQuaternion(re),a.setFromVector3(C),n.autoRotate&&s===i.NONE&&O(E(be)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let We=n.minAzimuthAngle,Xe=n.maxAzimuthAngle;isFinite(We)&&isFinite(Xe)&&(We<-Math.PI?We+=se:We>Math.PI&&(We-=se),Xe<-Math.PI?Xe+=se:Xe>Math.PI&&(Xe-=se),We<=Xe?a.theta=Math.max(We,Math.min(Xe,a.theta)):a.theta=a.theta>(We+Xe)/2?Math.max(We,a.theta):Math.min(Xe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=j(a.radius):a.radius=j(a.radius*c),C.setFromSpherical(a),C.applyQuaternion(ge),ye.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let at=!1;if(n.zoomToCursor&&T){let ct=null;if(n.object.isPerspectiveCamera){const qe=C.length();ct=j(qe*c);const dt=qe-ct;n.object.position.addScaledVector(S,dt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const qe=new F(w.x,w.y,0);qe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),at=!0;const dt=new F(w.x,w.y,0);dt.unproject(n.object),n.object.position.sub(dt).add(qe),n.object.updateMatrixWorld(),ct=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ct!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ct).add(n.object.position):(Ns.origin.copy(n.object.position),Ns.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ns.direction))<q0?e.lookAt(n.target):(Qc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ns.intersectPlane(Qc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),at=!0);return c=1,T=!1,at||fe.distanceToSquared(n.object.position)>o||8*(1-ee.dot(n.object.quaternion))>o||D.distanceToSquared(n.target)>0?(n.dispatchEvent($c),fe.copy(n.object.position),ee.copy(n.object.quaternion),D.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",je),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ee),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Zc,l=new Zc;let c=1;const u=new F,h=new Pe,f=new Pe,m=new Pe,g=new Pe,_=new Pe,p=new Pe,d=new Pe,M=new Pe,x=new Pe,S=new F,w=new Pe;let T=!1;const b=[],L={};let v=!1;function E(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function N(C){const re=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*re)}function O(C){l.theta-=C}function k(C){l.phi-=C}const P=function(){const C=new F;return function(ge,fe){C.setFromMatrixColumn(fe,0),C.multiplyScalar(-ge),u.add(C)}}(),U=function(){const C=new F;return function(ge,fe){n.screenSpacePanning===!0?C.setFromMatrixColumn(fe,1):(C.setFromMatrixColumn(fe,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(ge),u.add(C)}}(),I=function(){const C=new F;return function(ge,fe){const ee=n.domElement;if(n.object.isPerspectiveCamera){const D=n.object.position;C.copy(D).sub(n.target);let se=C.length();se*=Math.tan(n.object.fov/2*Math.PI/180),P(2*ge*se/ee.clientHeight,n.object.matrix),U(2*fe*se/ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(ge*(n.object.right-n.object.left)/n.object.zoom/ee.clientWidth,n.object.matrix),U(fe*(n.object.top-n.object.bottom)/n.object.zoom/ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(C,re){if(!n.zoomToCursor)return;T=!0;const ge=n.domElement.getBoundingClientRect(),fe=C-ge.left,ee=re-ge.top,D=ge.width,se=ge.height;w.x=fe/D*2-1,w.y=-(ee/se)*2+1,S.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function te(C){h.set(C.clientX,C.clientY)}function $(C){K(C.clientX,C.clientX),d.set(C.clientX,C.clientY)}function V(C){g.set(C.clientX,C.clientY)}function Z(C){f.set(C.clientX,C.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const re=n.domElement;O(2*Math.PI*m.x/re.clientHeight),k(2*Math.PI*m.y/re.clientHeight),h.copy(f),n.update()}function oe(C){M.set(C.clientX,C.clientY),x.subVectors(M,d),x.y>0?Y(N(x.y)):x.y<0&&q(N(x.y)),d.copy(M),n.update()}function ve(C){_.set(C.clientX,C.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(_),n.update()}function _e(C){K(C.clientX,C.clientY),C.deltaY<0?q(N(C.deltaY)):C.deltaY>0&&Y(N(C.deltaY)),n.update()}function De(C){let re=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),re=!0;break}re&&(C.preventDefault(),n.update())}function Ue(C){if(b.length===1)h.set(C.pageX,C.pageY);else{const re=ue(C),ge=.5*(C.pageX+re.x),fe=.5*(C.pageY+re.y);h.set(ge,fe)}}function Te(C){if(b.length===1)g.set(C.pageX,C.pageY);else{const re=ue(C),ge=.5*(C.pageX+re.x),fe=.5*(C.pageY+re.y);g.set(ge,fe)}}function Ve(C){const re=ue(C),ge=C.pageX-re.x,fe=C.pageY-re.y,ee=Math.sqrt(ge*ge+fe*fe);d.set(0,ee)}function G(C){n.enableZoom&&Ve(C),n.enablePan&&Te(C)}function Tt(C){n.enableZoom&&Ve(C),n.enableRotate&&Ue(C)}function Se(C){if(b.length==1)f.set(C.pageX,C.pageY);else{const ge=ue(C),fe=.5*(C.pageX+ge.x),ee=.5*(C.pageY+ge.y);f.set(fe,ee)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const re=n.domElement;O(2*Math.PI*m.x/re.clientHeight),k(2*Math.PI*m.y/re.clientHeight),h.copy(f)}function we(C){if(b.length===1)_.set(C.pageX,C.pageY);else{const re=ue(C),ge=.5*(C.pageX+re.x),fe=.5*(C.pageY+re.y);_.set(ge,fe)}p.subVectors(_,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(_)}function pe(C){const re=ue(C),ge=C.pageX-re.x,fe=C.pageY-re.y,ee=Math.sqrt(ge*ge+fe*fe);M.set(0,ee),x.set(0,Math.pow(M.y/d.y,n.zoomSpeed)),Y(x.y),d.copy(M);const D=(C.pageX+re.x)*.5,se=(C.pageY+re.y)*.5;K(D,se)}function Je(C){n.enableZoom&&pe(C),n.enablePan&&we(C)}function Ne(C){n.enableZoom&&pe(C),n.enableRotate&&Se(C)}function R(C){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",z)),ze(C),C.pointerType==="touch"?Oe(C):ne(C))}function y(C){n.enabled!==!1&&(C.pointerType==="touch"?J(C):Q(C))}function z(C){Re(C),b.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",z)),n.dispatchEvent(Jc),s=i.NONE}function ne(C){let re;switch(C.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Hi.DOLLY:if(n.enableZoom===!1)return;$(C),s=i.DOLLY;break;case Hi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;V(C),s=i.PAN}else{if(n.enableRotate===!1)return;te(C),s=i.ROTATE}break;case Hi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;te(C),s=i.ROTATE}else{if(n.enablePan===!1)return;V(C),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(eo)}function Q(C){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(C);break;case i.DOLLY:if(n.enableZoom===!1)return;oe(C);break;case i.PAN:if(n.enablePan===!1)return;ve(C);break}}function ie(C){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(C.preventDefault(),n.dispatchEvent(eo),_e(me(C)),n.dispatchEvent(Jc))}function me(C){const re=C.deltaMode,ge={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(re){case 1:ge.deltaY*=16;break;case 2:ge.deltaY*=100;break}return C.ctrlKey&&!v&&(ge.deltaY*=10),ge}function ce(C){C.key==="Control"&&(v=!0,document.addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(C){C.key==="Control"&&(v=!1,document.removeEventListener("keyup",de,{passive:!0,capture:!0}))}function Ee(C){n.enabled===!1||n.enablePan===!1||De(C)}function Oe(C){switch(Me(C),b.length){case 1:switch(n.touches.ONE){case ki.ROTATE:if(n.enableRotate===!1)return;Ue(C),s=i.TOUCH_ROTATE;break;case ki.PAN:if(n.enablePan===!1)return;Te(C),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ki.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(C),s=i.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(C),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(eo)}function J(C){switch(Me(C),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;we(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Je(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(C),n.update();break;default:s=i.NONE}}function je(C){n.enabled!==!1&&C.preventDefault()}function ze(C){b.push(C.pointerId)}function Re(C){delete L[C.pointerId];for(let re=0;re<b.length;re++)if(b[re]==C.pointerId){b.splice(re,1);return}}function Me(C){let re=L[C.pointerId];re===void 0&&(re=new Pe,L[C.pointerId]=re),re.set(C.pageX,C.pageY)}function ue(C){const re=C.pointerId===b[0]?b[1]:b[0];return L[re]}n.domElement.addEventListener("contextmenu",je),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",ie,{passive:!1}),document.addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}class K0 extends k0{constructor(e){super(e),this.type=Vn}parse(e){const o=function(L,v){switch(L){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},u=`
`,h=function(L,v,E){v=v||1024;let O=L.pos,k=-1,P=0,U="",I=String.fromCharCode.apply(null,new Uint16Array(L.subarray(O,O+128)));for(;0>(k=I.indexOf(u))&&P<v&&O<L.byteLength;)U+=I,P+=I.length,O+=128,I+=String.fromCharCode.apply(null,new Uint16Array(L.subarray(O,O+128)));return-1<k?(E!==!1&&(L.pos+=P+k+1),U+I.slice(0,k)):!1},f=function(L){const v=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let U,I;for((L.pos>=L.byteLength||!(U=h(L)))&&o(1,"no header found"),(I=U.match(v))||o(3,"bad initial token"),P.valid|=1,P.programtype=I[1],P.string+=U+`
`;U=h(L),U!==!1;){if(P.string+=U+`
`,U.charAt(0)==="#"){P.comments+=U+`
`;continue}if((I=U.match(E))&&(P.gamma=parseFloat(I[1])),(I=U.match(N))&&(P.exposure=parseFloat(I[1])),(I=U.match(O))&&(P.valid|=2,P.format=I[1]),(I=U.match(k))&&(P.valid|=4,P.height=parseInt(I[1],10),P.width=parseInt(I[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},m=function(L,v,E){const N=v;if(N<8||N>32767||L[0]!==2||L[1]!==2||L[2]&128)return new Uint8Array(L);N!==(L[2]<<8|L[3])&&o(3,"wrong scanline width");const O=new Uint8Array(4*v*E);O.length||o(4,"unable to allocate buffer space");let k=0,P=0;const U=4*N,I=new Uint8Array(4),Y=new Uint8Array(U);let q=E;for(;q>0&&P<L.byteLength;){P+4>L.byteLength&&o(1),I[0]=L[P++],I[1]=L[P++],I[2]=L[P++],I[3]=L[P++],(I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=N)&&o(3,"bad rgbe scanline format");let K=0,j;for(;K<U&&P<L.byteLength;){j=L[P++];const $=j>128;if($&&(j-=128),(j===0||K+j>U)&&o(3,"bad scanline data"),$){const V=L[P++];for(let Z=0;Z<j;Z++)Y[K++]=V}else Y.set(L.subarray(P,P+j),K),K+=j,P+=j}const te=N;for(let $=0;$<te;$++){let V=0;O[k]=Y[$+V],V+=N,O[k+1]=Y[$+V],V+=N,O[k+2]=Y[$+V],V+=N,O[k+3]=Y[$+V],k+=4}q--}return O},g=function(L,v,E,N){const O=L[v+3],k=Math.pow(2,O-128)/255;E[N+0]=L[v+0]*k,E[N+1]=L[v+1]*k,E[N+2]=L[v+2]*k,E[N+3]=1},_=function(L,v,E,N){const O=L[v+3],k=Math.pow(2,O-128)/255;E[N+0]=xs.toHalfFloat(Math.min(L[v+0]*k,65504)),E[N+1]=xs.toHalfFloat(Math.min(L[v+1]*k,65504)),E[N+2]=xs.toHalfFloat(Math.min(L[v+2]*k,65504)),E[N+3]=xs.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const d=f(p),M=d.width,x=d.height,S=m(p.subarray(p.pos),M,x);let w,T,b;switch(this.type){case Mn:b=S.length/4;const L=new Float32Array(b*4);for(let E=0;E<b;E++)g(S,E*4,L,E*4);w=L,T=Mn;break;case Vn:b=S.length/4;const v=new Uint16Array(b*4);for(let E=0;E<b;E++)_(S,E*4,v,E*4);w=v,T=Vn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:x,data:w,header:d.string,gamma:d.gamma,exposure:d.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case Mn:case Vn:o.colorSpace=Cn,o.minFilter=wt,o.magFilter=wt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}const Z0=/^[og]\s*(.+)?/,$0=/^mtllib /,J0=/^usemtl /,Q0=/^usemap /,eu=/\s+/,tu=new F,to=new F,nu=new F,iu=new F,ln=new F,Os=new Le;function ev(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;tu.fromArray(i,e),to.fromArray(i,t),nu.fromArray(i,n),ln.subVectors(nu,to),iu.subVectors(tu,to),ln.cross(iu),ln.normalize(),s.push(ln.x,ln.y,ln.z),s.push(ln.x,ln.y,ln.z),s.push(ln.x,ln.y,ln.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),m=this.parseVertexIndex(n,u);if(this.addVertex(h,f,m),this.addColor(h,f,m),a!==void 0&&a!==""){const g=this.normals.length;h=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),m=this.parseNormalIndex(c,g),this.addNormal(h,f,m)}else this.addFaceNormal(h,f,m);if(i!==void 0&&i!==""){const g=this.uvs.length;h=this.parseUVIndex(i,g),f=this.parseUVIndex(s,g),m=this.parseUVIndex(o,g),this.addUV(h,f,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class tv extends fa{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,o=new th(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new ev;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(eu);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Os.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(Os.r,Os.g,Os.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(eu),m=[];for(let _=0,p=f.length;_<p;_++){const d=f[_];if(d.length>0){const M=d.split("/");m.push(M)}}const g=m[0];for(let _=1,p=m.length-1;_<p;_++){const d=m[_],M=m[_+1];t.addFace(g[0],d[0],M[0],g[1],d[1],M[1],g[2],d[2],M[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const m=[];if(c.indexOf("/")===-1)f=h;else for(let g=0,_=h.length;g<_;g++){const p=h[g].split("/");p[0]!==""&&f.push(p[0]),p[1]!==""&&m.push(p[1])}t.addLineGeometry(f,m)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=Z0.exec(c))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(J0.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if($0.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Q0.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=c.split(" "),i.length>1){const f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new Fr;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,f=u.type==="Line",m=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const _=new Lt;_.setAttribute("position",new et(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new et(u.normals,3)),u.colors.length>0&&(g=!0,_.setAttribute("color",new et(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new et(u.uvs,2));const p=[];for(let M=0,x=h.length;M<x;M++){const S=h[M],w=S.name+"_"+S.smooth+"_"+g;let T=t.materials[w];if(this.materials!==null){if(T=this.materials.create(S.name),f&&T&&!(T instanceof Li)){const b=new Li;Pn.prototype.copy.call(b,T),b.color.copy(T.color),T=b}else if(m&&T&&!(T instanceof Br)){const b=new Br({size:10,sizeAttenuation:!1});Pn.prototype.copy.call(b,T),b.color.copy(T.color),b.map=T.map,T=b}}T===void 0&&(f?T=new Li:m?T=new Br({size:1,sizeAttenuation:!1}):T=new Xo,T.name=S.name,T.flatShading=!S.smooth,T.vertexColors=g,t.materials[w]=T),p.push(T)}let d;if(p.length>1){for(let M=0,x=h.length;M<x;M++){const S=h[M];_.addGroup(S.groupStart,S.groupCount,M)}f?d=new Zs(_,p):m?d=new Ja(_,p):d=new Qt(_,p)}else f?d=new Zs(_,p[0]):m?d=new Ja(_,p[0]):d=new Qt(_,p[0]);d.name=c.name,s.add(d)}else if(t.vertices.length>0){const a=new Br({size:1,sizeAttenuation:!1}),l=new Lt;l.setAttribute("position",new et(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new et(t.colors,3)),a.vertexColors=!0);const c=new Ja(l,a);s.add(c)}return s}}function Gn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ih(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yr={duration:.5,overwrite:!1,delay:0},qo,Pt,tt,fn=1e8,$e=1/fn,Mo=Math.PI*2,nv=Mo/4,iv=0,rh=Math.sqrt,rv=Math.cos,sv=Math.sin,Et=function(e){return typeof e=="string"},lt=function(e){return typeof e=="function"},Xn=function(e){return typeof e=="number"},jo=function(e){return typeof e>"u"},Ln=function(e){return typeof e=="object"},kt=function(e){return e!==!1},Ko=function(){return typeof window<"u"},Fs=function(e){return lt(e)||Et(e)},sh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ot=Array.isArray,av=/random\([^)]+\)/g,ov=/,\s*/g,ru=/(?:-?\.?\d|\.)+/gi,ah=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,cr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,no=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,oh=/[+-]=-?[.\d]+/,lv=/[^,'"\[\]\s]+/gi,cv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,rt,En,So,Zo,rn={},$s={},lh,ch=function(e){return($s=Er(e,rn))&&Yt},$o=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Kr=function(e,t){return!t&&console.warn(e)},uh=function(e,t){return e&&(rn[e]=t)&&$s&&($s[e]=t)||rn},Zr=function(){return 0},uv={suppressEvents:!0,isStart:!0,kill:!1},zs={suppressEvents:!0,kill:!1},hv={suppressEvents:!0},Jo={},oi=[],yo={},hh,Zt={},io={},su=30,Gs=[],Qo="",el=function(e){var t=e[0],n,i;if(Ln(t)||lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Gs.length;i--&&!Gs[i].targetTest(t););n=Gs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Nh(e[i],n)))||e.splice(i,1);return e},Di=function(e){return e._gsap||el(dn(e))[0]._gsap},fh=function(e,t,n){return(n=e[t])&&lt(n)?e[t]():jo(n)&&e.getAttribute&&e.getAttribute(t)||n},Vt=function(e,t){return(e=e.split(",")).forEach(t)||e},ht=function(e){return Math.round(e*1e5)/1e5||0},it=function(e){return Math.round(e*1e7)/1e7||0},pr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},fv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Js=function(){var e=oi.length,t=oi.slice(0),n,i;for(yo={},oi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},tl=function(e){return!!(e._initted||e._startAt||e.add)},dh=function(e,t,n,i){oi.length&&!Pt&&Js(),e.render(t,n,i||!!(Pt&&t<0&&tl(e))),oi.length&&!Pt&&Js()},ph=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lv).length<2?t:Et(e)?e.trim():e},mh=function(e){return e},sn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Er=function(e,t){for(var n in t)e[n]=t[n];return e},au=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ln(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Qs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Xr=function(e){var t=e.parent||rt,n=e.keyframes?dv(Ot(e.keyframes)):sn;if(kt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},pv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},_h=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},da=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ui=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ui=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},mv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Eo=function(e,t,n,i){return e._startAt&&(Pt?e._startAt.revert(zs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},_v=function r(e){return!e||e._ts&&r(e.parent)},ou=function(e){return e._repeat?Tr(e._tTime,e=e.duration()+e._rDelay)*e:0},Tr=function(e,t){var n=Math.floor(e=it(e/t));return e&&n===e?n-1:n},ea=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},pa=function(e){return e._end=it(e._start+(e._tDur/Math.abs(e._ts||e._rts||$e)||0))},ma=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=it(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),pa(e),n._dirty||Ui(n,e)),e},gh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ea(e.rawTime(),t),(!t._dur||rs(0,t.totalDuration(),n)-t._tTime>$e)&&t.render(n,!0)),Ui(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-$e}},wn=function(e,t,n,i){return t.parent&&ui(t),t._start=it((Xn(n)?n:n||e!==rt?cn(e,n,t):e._time)+t._delay),t._end=it(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_h(e,t,"_first","_last",e._sort?"_start":0),To(t)||(e._recent=t),i||gh(e,t),e._ts<0&&ma(e,e._tTime),e},vh=function(e,t){return(rn.ScrollTrigger||$o("scrollTrigger",t))&&rn.ScrollTrigger.create(t,e)},xh=function(e,t,n,i,s){if(il(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hh!==Jt.frame)return oi.push(e),e._lazy=[s,i],1},gv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},To=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&gv(e)&&!(!e._initted&&To(e))||(e._ts<0||e._dp._ts<0)&&!To(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=rs(0,e._tDur,t),u=Tr(l,a),e._yoyo&&u&1&&(o=1-o),u!==Tr(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Pt||i||e._zTime===$e||!t&&e._zTime){if(!e._initted&&xh(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?$e:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Eo(e,t,n,!0),e._onUpdate&&!n&&en(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&en(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ui(e,1),!n&&!Pt&&(en(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},br=function(e,t,n,i){var s=e._repeat,o=it(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:it(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ma(e,e._tTime=e._tDur*a),e.parent&&pa(e),n||Ui(e.parent,e),e},lu=function(e){return e instanceof zt?Ui(e):br(e,e._dur)},Mv={_start:0,endTime:Zr,totalDuration:Zr},cn=function r(e,t,n){var i=e.labels,s=e._recent||Mv,o=e.duration()>=fn?s.endTime(!1):e._dur,a,l,c;return Et(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Ot(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Yr=function(e,t,n){var i=Xn(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=kt(l.vars.inherit)&&l.parent;o.immediateRender=kt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new mt(t[0],o,t[s+1])},pi=function(e,t){return e||e===0?t(e):t},rs=function(e,t,n){return n<e?e:n>t?t:n},Nt=function(e,t){return!Et(e)||!(t=cv.exec(e))?"":t[1]},Sv=function(e,t,n){return pi(n,function(i){return rs(e,t,i)})},bo=[].slice,Mh=function(e,t){return e&&Ln(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ln(e[0]))&&!e.nodeType&&e!==En},yv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Et(i)&&!t||Mh(i,1)?(s=n).push.apply(s,dn(i)):n.push(i)})||n},dn=function(e,t,n){return tt&&!t&&tt.selector?tt.selector(e):Et(e)&&!n&&(So||!Ar())?bo.call((t||Zo).querySelectorAll(e),0):Ot(e)?yv(e,n):Mh(e)?bo.call(e,0):e?[e]:[]},Ao=function(e){return e=dn(e)[0]||Kr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return dn(t,n.querySelectorAll?n:n===e?Kr("Invalid scope")||Zo.createElement("div"):e)}},Sh=function(e){return e.sort(function(){return .5-Math.random()})},yh=function(e){if(lt(e))return e;var t=Ln(e)?e:{each:e},n=Ii(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Et(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,m,g){var _=(g||t).length,p=o[_],d,M,x,S,w,T,b,L,v;if(!p){if(v=t.grid==="auto"?0:(t.grid||[1,fn])[1],!v){for(b=-fn;b<(b=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(p=o[_]=[],d=l?Math.min(v,_)*u-.5:i%v,M=v===fn?0:l?_*h/v-.5:i/v|0,b=0,L=fn,T=0;T<_;T++)x=T%v-d,S=M-(T/v|0),p[T]=w=c?Math.abs(c==="y"?S:x):rh(x*x+S*S),w>b&&(b=w),w<L&&(L=w);i==="random"&&Sh(p),p.max=b-L,p.min=L,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Nt(t.amount||t.each)||0,n=n&&_<0?Dh(n):n}return _=(p[f]-p.min)/p.max||0,it(p.b+(n?n(_):_)*p.v)+p.u}},wo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=it(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Xn(n)?0:Nt(n))}},Eh=function(e,t){var n=Ot(e),i,s;return!n&&Ln(e)&&(i=n=e.radius||fn,e.values?(e=dn(e.values),(s=!Xn(e[0]))&&(i*=i)):e=wo(e.increment)),pi(t,n?lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=fn,u=0,h=e.length,f,m;h--;)s?(f=e[h].x-a,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Xn(o)?u:u+Nt(o)}:wo(e))},Th=function(e,t,n,i){return pi(Ot(e)?!t:n===!0?!!(n=0):!i,function(){return Ot(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ev=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Tv=function(e,t){return function(n){return e(parseFloat(n))+(t||Nt(n))}},bv=function(e,t,n){return Ah(e,t,0,1,n)},bh=function(e,t,n){return pi(n,function(i){return e[~~t(i)]})},Av=function r(e,t,n){var i=t-e;return Ot(e)?bh(e,r(0,e.length),t):pi(n,function(s){return(i+(s-e)%i)%i+e})},wv=function r(e,t,n){var i=t-e,s=i*2;return Ot(e)?bh(e,r(0,e.length-1),t):pi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},$r=function(e){return e.replace(av,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(ov);return Th(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ah=function(e,t,n,i,s){var o=t-e,a=i-n;return pi(s,function(l){return n+((l-e)/o*a||0)})},Rv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=Et(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Ot(e)&&!Ot(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Er(Ot(e)?[]:{},e));if(!u){for(l in t)nl.call(a,e,l,"get",t[l]);s=function(g){return al(g,a)||(o?e.p:e)}}}return pi(n,s)},cu=function(e,t,n){var i=e.labels,s=fn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},en=function(e,t,n){var i=e.vars,s=i[t],o=tt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&oi.length&&Js(),a&&(tt=a),u=l?s.apply(c,l):s.call(c),tt=o,u},zr=function(e){return ui(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pt),e.progress()<1&&en(e,"onInterrupt"),e},ur,wh=[],Rh=function(e){if(e)if(e=!e.name&&e.default||e,Ko()||e.headless){var t=e.name,n=lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Zr,render:al,add:nl,kill:Wv,modifier:Vv,rawVars:0},o={targetTest:0,get:0,getSetter:sl,aliases:{},register:0};if(Ar(),e!==i){if(Zt[t])return;sn(i,sn(Qs(e,s),o)),Er(i.prototype,Er(s,Qs(e,o))),Zt[i.prop=t]=i,e.targetTest&&(Gs.push(i),Jo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}uh(t,i),e.register&&e.register(Yt,i,Wt)}else wh.push(e)},Ze=255,Gr={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},ro=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ze+.5|0},Ch=function(e,t,n){var i=e?Xn(e)?[e>>16,e>>8&Ze,e&Ze]:0:Gr.black,s,o,a,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Gr[e])i=Gr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ze,i&Ze,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ze,e&Ze]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(ru),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=ro(l+1/3,s,o),i[1]=ro(l,s,o),i[2]=ro(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(ah),n&&i.length<4&&(i[3]=1),i}else i=e.match(ru)||Gr.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ze,o=i[1]/Ze,a=i[2]/Ze,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===s?(o-a)/m+(o<a?6:0):h===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ph=function(e){var t=[],n=[],i=-1;return e.split(li).forEach(function(s){var o=s.match(cr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},uu=function(e,t,n){var i="",s=(e+i).match(li),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Ch(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Ph(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(li,"1").split(cr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(li),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},li=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Gr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Cv=/hsl[a]?\(/,Lh=function(e){var t=e.join(" "),n;if(li.lastIndex=0,li.test(t))return n=Cv.test(t),e[1]=uu(e[1],n),e[0]=uu(e[0],n,Ph(e[1])),!0},Jr,Jt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,m,g=function _(p){var d=r()-i,M=p===!0,x,S,w,T;if((d>e||d<0)&&(n+=d-t),i+=d,w=i-n,x=w-o,(x>0||M)&&(T=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=x+(x>=s?4:s-x),S=1),M||(l=c(_)),S)for(m=0;m<a.length;m++)a[m](w,f,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){lh&&(!So&&Ko()&&(En=So=window,Zo=En.document||{},rn.gsap=Yt,(En.gsapVersions||(En.gsapVersions=[])).push(Yt.version),ch($s||En.GreenSockGlobals||!En.gsap&&En||{}),wh.forEach(Rh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Jr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Jr=0,c=Zr},lagSmoothing:function(p,d){e=p||1/0,t=Math.min(d||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,d,M){var x=d?function(S,w,T,b){p(S,w,T,b),h.remove(x)}:p;return h.remove(p),a[M?"unshift":"push"](x),Ar(),x},remove:function(p,d){~(d=a.indexOf(p))&&a.splice(d,1)&&m>=d&&m--},_listeners:a},h}(),Ar=function(){return!Jr&&Jt.wake()},Ye={},Pv=/^[\d.\-M][\d.\-,\s]/,Lv=/["']/g,Dv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Lv,"").trim():+c,i=l.substr(a+1).trim();return t},Uv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Iv=function(e){var t=(e+"").split("("),n=Ye[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Dv(t[1])]:Uv(e).split(",").map(ph)):Ye._CE&&Pv.test(e)?Ye._CE("",e):n},Dh=function(e){return function(t){return 1-e(1-t)}},Uh=function r(e,t){for(var n=e._first,i;n;)n instanceof zt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ii=function(e,t){return e&&(lt(e)?e:Ye[e]||Iv(e))||t},Gi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Vt(e,function(a){Ye[a]=rn[a]=s,Ye[o=a.toLowerCase()]=n;for(var l in s)Ye[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ye[a+"."+l]=s[l]}),s},Ih=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},so=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Mo*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*sv((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ih(a);return s=Mo/s,l.config=function(c,u){return r(e,c,u)},l},ao=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ih(n);return i.config=function(s){return r(e,s)},i};Vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Gi(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;Gi("Elastic",so("in"),so("out"),so());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Gi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Gi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gi("Circ",function(r){return-(rh(1-r*r)-1)});Gi("Sine",function(r){return r===1?1:-rv(r*nv)+1});Gi("Back",ao("in"),ao("out"),ao());Ye.SteppedEase=Ye.steps=rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-$e;return function(a){return((i*rs(0,o,a)|0)+s)*n}}};yr.ease=Ye["quad.out"];Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Qo+=r+","+r+"Params,"});var Nh=function(e,t){this.id=iv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fh,this.set=t?t.getSetter:sl},Qr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,br(this,+t.duration,1,1),this.data=t.data,tt&&(this._ctx=tt,tt.data.push(this)),Jr||Jt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,br(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ar(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ma(this,n),!s._dp||s.parent||gh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$e||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),dh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ou(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ou(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Tr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ea(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$e?0:this._rts,this.totalTime(rs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),pa(this),mv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ar(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=it(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ea(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=hv);var i=Pt;return Pt=n,tl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(cn(this,n),kt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kt(i)),this._dur||(this._zTime=-$e),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$e:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-$e)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=lt(n)?n:mh,l=function(){var u=i.then;i.then=null,s&&s(),lt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){zr(this)},r}();sn(Qr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var zt=function(r){ih(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kt(n.sortChildren),rt&&wn(n.parent||rt,Gn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&vh(Gn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Yr(0,arguments,this),this},t.from=function(i,s,o){return Yr(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Yr(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Xr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new mt(i,s,cn(this,o),1),this},t.call=function(i,s,o){return wn(this,mt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new mt(i,o,cn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Xr(o).immediateRender=kt(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Xr(a).immediateRender=kt(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:it(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,_,p,d,M,x,S,w,T,b;if(this!==rt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,x=this._ts,d=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=it(u%p),u===l?(_=this._repeat,f=c):(w=it(u/p),_=~~w,_&&_===w&&(f=c,_--),f>c&&(f=c)),w=Tr(this._tTime,p),!a&&this._tTime&&w!==_&&this._tTime-w*p-this._dur<=0&&(w=_),T&&_&1&&(f=c-f,b=1),_!==w&&!this._lock){var L=T&&w&1,v=L===(T&&_&1);if(_<w&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(b?0:it(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&en(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Uh(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=xv(this,it(a),it(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!w&&(en(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!d){M=0,g&&(u+=this._zTime=-$e);break}}m=g}else{m=this._last;for(var E=i<0?i:f;m;){if(g=m._prev,(m._act||E<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(E-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(E-m._start)*m._ts,s,o||Pt&&tl(m)),f!==this._time||!this._ts&&!d){M=0,g&&(u+=this._zTime=E?-$e:$e);break}}m=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-$e)._zTime=f>=a?1:-1,this._ts))return this._start=S,pa(this),this.render(i,s,o);this._onUpdate&&!s&&en(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ui(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(en(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Xn(s)||(s=cn(this,s,i)),!(i instanceof Qr)){if(Ot(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Et(i))return this.addLabel(i,s);if(lt(i))i=mt.delayedCall(0,i);else return this}return this!==i?wn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof mt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Et(i)?this.removeLabel(i):lt(i)?this.killTweensOf(i):(i.parent===this&&da(this,i),i===this._recent&&(this._recent=this._last),Ui(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=it(Jt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=cn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=mt.delayedCall(0,s||Zr,o);return a.data="isPause",this._hasPause=1,wn(this,a,cn(this,i))},t.removePause=function(i){var s=this._first;for(i=cn(this,i);s;)s._start===i&&s.data==="isPause"&&ui(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ei!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=dn(i),l=this._first,c=Xn(s),u;l;)l instanceof mt?fv(l._targets,a)&&(c?(!ei||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=cn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=mt.to(o,sn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||$e,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&br(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,sn({startAt:{time:cn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),cu(this,cn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),cu(this,cn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$e)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=it(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ui(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ui(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=fn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=it(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;br(o,o===rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(rt._ts&&(dh(rt,ea(i,rt)),hh=Jt.frame),Jt.frame>=su){su+=nn.autoSleep||120;var s=rt._first;if((!s||!s._ts)&&nn.autoSleep&&Jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jt.sleep()}}},e}(Qr);sn(zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Nv=function(e,t,n,i,s,o,a){var l=new Wt(this._pt,e,t,0,1,Hh,null,s),c=0,u=0,h,f,m,g,_,p,d,M;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=$r(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(no)||[];h=no.exec(i);)g=h[0],_=i.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?pr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=no.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(oh.test(i)||d)&&(l.e=0),this._pt=l,l},nl=function(e,t,n,i,s,o,a,l,c,u){lt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:lt(h)?c?e[t.indexOf("set")||!lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=lt(h)?c?Gv:zh:rl,g;if(Et(i)&&(~i.indexOf("random(")&&(i=$r(i)),i.charAt(1)==="="&&(g=pr(f,i)+(Nt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ro)return!isNaN(f*i)&&i!==""?(g=new Wt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?kv:Gh,0,m),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&$o(t,i),Nv.call(this,e,t,f,i,m,l||nn.stringFilter,c))},Ov=function(e,t,n,i,s){if(lt(e)&&(e=qr(e,s,t,n,i)),!Ln(e)||e.style&&e.nodeType||Ot(e)||sh(e))return Et(e)?qr(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=qr(e[a],s,t,n,i);return o},Oh=function(e,t,n,i,s,o){var a,l,c,u;if(Zt[e]&&(a=new Zt[e]).init(s,a.rawVars?t[e]:Ov(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Wt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ur))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ei,Ro,il=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,d=e.parent,M=d&&d.data==="nested"?d.vars.targets:p,x=e._overwrite==="auto"&&!qo,S=e.timeline,w,T,b,L,v,E,N,O,k,P,U,I,Y;if(S&&(!f||!s)&&(s="none"),e._ease=Ii(s,yr.ease),e._yEase=h?Dh(Ii(h===!0?s:h,yr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(O=p[0]?Di(p[0]).harness:0,I=O&&i[O.prop],w=Qs(i,Jo),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!m?_.render(-1,!0):_.revert(u&&g?zs:uv),_._lazy=0),o){if(ui(e._startAt=mt.set(p,sn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&kt(l),startAt:null,delay:0,onUpdate:c&&function(){return en(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pt||!a&&!m)&&e._startAt.revert(zs),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=sn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&kt(l),immediateRender:a,stagger:0,parent:d},w),I&&(b[O.prop]=I),ui(e._startAt=mt.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pt?e._startAt.revert(zs):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,$e,$e);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&kt(l)||l&&!g,T=0;T<p.length;T++){if(v=p[T],N=v._gsap||el(p)[T]._gsap,e._ptLookup[T]=P={},yo[N.id]&&oi.length&&Js(),U=M===p?T:M.indexOf(v),O&&(k=new O).init(v,I||w,e,U,M)!==!1&&(e._pt=L=new Wt(e._pt,v,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(q){P[q]=L}),k.priority&&(E=1)),!O||I)for(b in w)Zt[b]&&(k=Oh(b,w,e,U,v,M))?k.priority&&(E=1):P[b]=L=nl.call(e,v,b,"get",w[b],U,M,0,i.stringFilter);e._op&&e._op[T]&&e.kill(v,e._op[T]),x&&e._pt&&(ei=e,rt.killTweensOf(v,P,e.globalTime(t)),Y=!e.parent,ei=0),e._pt&&l&&(yo[N.id]=1)}E&&kh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&S.render(fn,!0,!0)},Fv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ro=1,e.vars[t]="+=0",il(e,a),Ro=0,l?Kr(t+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=ht(n)+Nt(h.e)),h.b&&(h.b=u.s+Nt(h.b))},Bv=function(e,t){var n=e[0]?Di(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Er({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},zv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Ot(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},qr=function(e,t,n,i,s){return lt(e)?e.call(t,n,i,s):Et(e)&&~e.indexOf("random(")?$r(e):e},Fh=Qo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Bh={};Vt(Fh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Bh[r]=1});var mt=function(r){ih(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Xr(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,d=l.yoyoEase,M=i.parent||rt,x=(Ot(n)||sh(n)?Xn(n[0]):"length"in i)?[n]:dn(n),S,w,T,b,L,v,E,N;if(a._targets=x.length?el(x):Kr("GSAP target "+n+" not found. https://gsap.com",!nn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||Fs(c)||Fs(u)){if(i=a.vars,S=a.timeline=new zt({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),S.kill(),S.parent=S._dp=Gn(a),S._start=0,f||Fs(c)||Fs(u)){if(b=x.length,E=f&&yh(f),Ln(f))for(L in f)~Fh.indexOf(L)&&(N||(N={}),N[L]=f[L]);for(w=0;w<b;w++)T=Qs(i,Bh),T.stagger=0,d&&(T.yoyoEase=d),N&&Er(T,N),v=x[w],T.duration=+qr(c,Gn(a),w,v,x),T.delay=(+qr(u,Gn(a),w,v,x)||0)-a._delay,!f&&b===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),S.to(v,T,E?E(w,v,x):0),S._ease=Ye.none;S.duration()?c=u=0:a.timeline=0}else if(g){Xr(sn(S.vars.defaults,{ease:"none"})),S._ease=Ii(g.ease||i.ease||"none");var O=0,k,P,U;if(Ot(g))g.forEach(function(I){return S.to(x,I,">")}),S.duration();else{T={};for(L in g)L==="ease"||L==="easeEach"||zv(L,g[L],T,g.easeEach);for(L in T)for(k=T[L].sort(function(I,Y){return I.t-Y.t}),O=0,w=0;w<k.length;w++)P=k[w],U={ease:P.e,duration:(P.t-(w?k[w-1].t:0))/100*c},U[L]=P.v,S.to(x,U,O),O+=U.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!qo&&(ei=Gn(a),rt.killTweensOf(x),ei=0),wn(M,Gn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===it(M._time)&&kt(h)&&_v(Gn(a))&&M.data!=="nested")&&(a._tTime=-$e,a.render(Math.max(0,-u)||0)),p&&vh(Gn(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-$e&&!u?l:i<$e?0:i,f,m,g,_,p,d,M,x,S;if(!c)vv(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=it(h%_),h===l?(g=this._repeat,f=c):(p=it(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),d=this._yoyo&&g&1,d&&(S=this._yEase,f=c-f),p=Tr(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(x&&this._yEase&&Uh(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(it(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(xh(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!p&&(en(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Eo(this,i,s,o),en(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&en(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Eo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ui(this,1),!s&&!(u&&!a)&&(h||a||d)&&(en(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Jr||Jt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||il(this,c),u=this._ease(c/this._dur),Fv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(ma(this,0),this.parent||_h(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?zr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ei&&ei.vars.overwrite!==!0)._first||zr(this),this.parent&&o!==this.timeline.totalDuration()&&br(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?dn(i):a,c=this._ptLookup,u=this._pt,h,f,m,g,_,p,d;if((!s||s==="all")&&pv(a,l))return s==="all"&&(this._pt=0),zr(this);for(h=this._op=this._op||[],s!=="all"&&(Et(s)&&(_={},Vt(s,function(M){return _[M]=1}),s=_),s=Bv(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=c[d],s==="all"?(h[d]=s,g=f,m={}):(m=h[d]=h[d]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&da(this,p,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&zr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Yr(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Yr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return rt.killTweensOf(i,s,o)},e}(Qr);sn(mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vt("staggerTo,staggerFrom,staggerFromTo",function(r){mt[r]=function(){var e=new zt,t=bo.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var rl=function(e,t,n){return e[t]=n},zh=function(e,t,n){return e[t](n)},Gv=function(e,t,n,i){return e[t](i.fp,n)},Hv=function(e,t,n){return e.setAttribute(t,n)},sl=function(e,t){return lt(e[t])?zh:jo(e[t])&&e.setAttribute?Hv:rl},Gh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},kv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Hh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},al=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Vv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Wv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?da(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Xv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},kh=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Wt=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Gh,this.d=l||this,this.set=c||rl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Xv,this.m=n,this.mt=s,this.tween=i},r}();Vt(Qo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Jo[r]=1});rn.TweenMax=rn.TweenLite=mt;rn.TimelineLite=rn.TimelineMax=zt;rt=new zt({sortChildren:!1,defaults:yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=Lh;var Ni=[],Hs={},Yv=[],hu=0,qv=0,oo=function(e){return(Hs[e]||Yv).map(function(t){return t()})},Co=function(){var e=Date.now(),t=[];e-hu>2&&(oo("matchMediaInit"),Ni.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=En.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),oo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),hu=e,oo("matchMedia"))},Vh=function(){function r(t,n){this.selector=n&&Ao(n),this.data=[],this._r=[],this.isReverted=!1,this.id=qv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){lt(n)&&(s=i,i=n,n=lt);var o=this,a=function(){var c=tt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ao(s)),tt=o,h=i.apply(o,arguments),lt(h)&&o._r.push(h),tt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===lt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=tt;tt=null,n(this),tt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof mt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof zt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof mt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ni.length;o--;)Ni[o].id===this.id&&Ni.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),jv=function(){function r(t){this.contexts=[],this.scope=t,tt&&tt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ln(n)||(n={matches:n});var o=new Vh(0,s||this.scope),a=o.conditions={},l,c,u;tt&&!o.selector&&(o.selector=tt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=En.matchMedia(n[c]),l&&(Ni.indexOf(o)<0&&Ni.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Co):l.addEventListener("change",Co)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ta={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Rh(i)})},timeline:function(e){return new zt(e)},getTweensOf:function(e,t){return rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Et(e)&&(e=dn(e)[0]);var s=Di(e||{}).get,o=n?mh:ph;return n==="native"&&(n=""),e&&(t?o((Zt[t]&&Zt[t].get||s)(e,t,n,i)):function(a,l,c){return o((Zt[a]&&Zt[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=dn(e),e.length>1){var i=e.map(function(u){return Yt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Zt[t],a=Di(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ur._pt=0,h.init(e,n?u+n:u,ur,0,[e]),h.render(1,h),ur._pt&&al(1,ur)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Yt.to(e,sn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ii(e.ease,yr.ease)),au(yr,e||{})},config:function(e){return au(nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Zt[a]&&!rn[a]&&Kr(t+" effect requires "+a+" plugin.")}),io[t]=function(a,l,c){return n(dn(a),sn(l||{},s),c)},o&&(zt.prototype[t]=function(a,l,c){return this.add(io[t](a,Ln(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ye[e]=Ii(t)},parseEase:function(e,t){return arguments.length?Ii(e,t):Ye},getById:function(e){return rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new zt(e),i,s;for(n.smoothChildTiming=kt(e.smoothChildTiming),rt.remove(n),n._dp=0,n._time=n._tTime=rt._time,i=rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof mt&&i.vars.onComplete===i._targets[0]))&&wn(n,i,i._start-i._delay),i=s;return wn(rt,n,0),n},context:function(e,t){return e?new Vh(e,t):tt},matchMedia:function(e){return new jv(e)},matchMediaRefresh:function(){return Ni.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Co()},addEventListener:function(e,t){var n=Hs[e]||(Hs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Hs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Av,wrapYoyo:wv,distribute:yh,random:Th,snap:Eh,normalize:bv,getUnit:Nt,clamp:Sv,splitColor:Ch,toArray:dn,selector:Ao,mapRange:Ah,pipe:Ev,unitize:Tv,interpolate:Rv,shuffle:Sh},install:ch,effects:io,ticker:Jt,updateRoot:zt.updateRoot,plugins:Zt,globalTimeline:rt,core:{PropTween:Wt,globals:uh,Tween:mt,Timeline:zt,Animation:Qr,getCache:Di,_removeLinkedListItem:da,reverting:function(){return Pt},context:function(e){return e&&tt&&(tt.data.push(e),e._ctx=tt),tt},suppressOverwrites:function(e){return qo=e}}};Vt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ta[r]=mt[r]});Jt.add(zt.updateRoot);ur=ta.to({},{duration:0});var Kv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Zv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Kv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},lo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Et(s)&&(l={},Vt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Zv(a,s)}}}},Yt=ta.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Pt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lo("roundProps",wo),lo("modifiers"),lo("snap",Eh))||ta;mt.version=zt.version=Yt.version="3.14.2";lh=1;Ko()&&Ar();Ye.Power0;Ye.Power1;Ye.Power2;Ye.Power3;Ye.Power4;Ye.Linear;Ye.Quad;Ye.Cubic;Ye.Quart;Ye.Quint;Ye.Strong;Ye.Elastic;Ye.Back;Ye.SteppedEase;Ye.Bounce;Ye.Sine;Ye.Expo;Ye.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fu,ti,mr,ol,wi,du,ll,$v=function(){return typeof window<"u"},Yn={},Ti=180/Math.PI,_r=Math.PI/180,sr=Math.atan2,pu=1e8,cl=/([A-Z])/g,Jv=/(left|right|width|margin|padding|x)/i,Qv=/[\s,\(]\S/,Rn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Po=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ex=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ix=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Wh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},rx=function(e,t,n){return e.style[t]=n},sx=function(e,t,n){return e.style.setProperty(t,n)},ax=function(e,t,n){return e._gsap[t]=n},ox=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},lx=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},cx=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},st="transform",Xt=st+"Origin",ux=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Yn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Rn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Hn(i,a)}):this.tfm[e]=o.x?o[e]:Hn(i,e),e===Xt&&(this.tfm.zOrigin=o.zOrigin);else return Rn.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(st)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xt,t,"")),e=st}(s||t)&&this.props.push(e,t,s[e])},Yh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ll(),(!s||!s.isStart)&&!n[st]&&(Yh(n),i.zOrigin&&n[Xt]&&(n[Xt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},qh=function(e,t){var n={target:e,props:[],revert:hx,save:ux};return e._gsap||Yt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},jh,Lo=function(e,t){var n=ti.createElementNS?ti.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ti.createElement(e);return n&&n.style?n:ti.createElement(e)},tn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,wr(t)||t,1)||""},mu="O,Moz,ms,Ms,Webkit".split(","),wr=function(e,t,n){var i=t||wi,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(mu[o]+e in s););return o<0?null:(o===3?"ms":o>=0?mu[o]:"")+e},Do=function(){$v()&&window.document&&(fu=window,ti=fu.document,mr=ti.documentElement,wi=Lo("div")||{style:{}},Lo("div"),st=wr(st),Xt=st+"Origin",wi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jh=!!wr("perspective"),ll=Yt.core.reverting,ol=1)},_u=function(e){var t=e.ownerSVGElement,n=Lo("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),mr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),mr.removeChild(n),s},gu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Kh=function(e){var t,n;try{t=e.getBBox()}catch{t=_u(e),n=1}return t&&(t.width||t.height)||n||(t=_u(e)),t&&!t.width&&!t.x&&!t.y?{x:+gu(e,["x","cx","x1"])||0,y:+gu(e,["y","cy","y1"])||0,width:0,height:0}:t},Zh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kh(e))},hi=function(e,t){if(t){var n=e.style,i;t in Yn&&t!==Xt&&(t=st),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(cl,"-$1").toLowerCase())):n.removeAttribute(t)}},ni=function(e,t,n,i,s,o){var a=new Wt(e._pt,t,n,0,1,o?Xh:Wh);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},vu={deg:1,rad:1,turn:1},fx={grid:1,flex:1},fi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=wi.style,l=Jv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,_,p,d;if(i===o||!s||vu[i]||vu[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),d=e.getCTM&&Zh(e),(m||o==="%")&&(Yn[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[u],ht(m?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ti||!_.appendChild)&&(_=ti.body),p=_._gsap,p&&m&&p.width&&l&&p.time===Jt.time&&!p.uncache)return ht(s/p.width*h);if(m&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:hi(e,t)}else(m||o==="%")&&!fx[tn(_,"display")]&&(a.position=tn(e,"position")),_===e&&(a.position="static"),_.appendChild(wi),g=wi[u],_.removeChild(wi),a.position="absolute";return l&&m&&(p=Di(_),p.time=Jt.time,p.width=_[u]),ht(f?g*s/h:g&&s?h/g*s:0)},Hn=function(e,t,n,i){var s;return ol||Do(),t in Rn&&t!=="transform"&&(t=Rn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yn[t]&&t!=="transform"?(s=ts(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ia(tn(e,Xt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=na[t]&&na[t](e,t,n)||tn(e,t)||fh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fi(e,t,s,n)+n:s},dx=function(e,t,n,i){if(!n||n==="none"){var s=wr(t,e,1),o=s&&tn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=tn(e,"borderTopColor"))}var a=new Wt(this._pt,e.style,t,0,1,Hh),l=0,c=0,u,h,f,m,g,_,p,d,M,x,S,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=tn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=tn(e,t)||i,_?e.style[t]=_:hi(e,t)),u=[n,i],Lh(u),n=u[0],i=u[1],f=n.match(cr)||[],w=i.match(cr)||[],w.length){for(;h=cr.exec(i);)p=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(m=parseFloat(_)||0,S=_.substr((m+"").length),p.charAt(1)==="="&&(p=pr(m,p)+S),d=parseFloat(p),x=p.substr((d+"").length),l=cr.lastIndex-x.length,x||(x=x||nn.units[t]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(m=fi(e,t,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:m,c:d-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Xh:Wh;return oh.test(i)&&(a.e=0),this._pt=a,a},xu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},px=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=xu[n]||n,t[1]=xu[i]||i,t.join(" ")},mx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Yn[a]&&(l=1,a=a==="transformOrigin"?Xt:st),hi(n,a);l&&(hi(n,st),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ts(n,1),o.uncache=1,Yh(i)))}},na={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Wt(e._pt,t,n,0,0,mx);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},es=[1,0,0,1,0,0],$h={},Jh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mu=function(e){var t=tn(e,st);return Jh(t)?es:t.substr(7).match(ah).map(ht)},ul=function(e,t){var n=e._gsap||Di(e),i=e.style,s=Mu(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?es:s):(s===es&&!e.offsetParent&&e!==mr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,mr.appendChild(e)),s=Mu(e),l?i.display=l:hi(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):mr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Uo=function(e,t,n,i,s,o){var a=e._gsap,l=s||ul(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],d=l[4],M=l[5],x=t.split(" "),S=parseFloat(x[0])||0,w=parseFloat(x[1])||0,T,b,L,v;n?l!==es&&(b=m*p-g*_)&&(L=S*(p/b)+w*(-_/b)+(_*M-p*d)/b,v=S*(-g/b)+w*(m/b)-(m*M-g*d)/b,S=L,w=v):(T=Kh(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),w=T.y+(~(x[1]||x[0]).indexOf("%")?w/100*T.height:w)),i||i!==!1&&a.smooth?(d=S-c,M=w-u,a.xOffset=h+(d*m+M*_)-d,a.yOffset=f+(d*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Xt]="0px 0px",o&&(ni(o,a,"xOrigin",c,S),ni(o,a,"yOrigin",u,w),ni(o,a,"xOffset",h,a.xOffset),ni(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},ts=function(e,t){var n=e._gsap||new Nh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=tn(e,Xt)||"0",u,h,f,m,g,_,p,d,M,x,S,w,T,b,L,v,E,N,O,k,P,U,I,Y,q,K,j,te,$,V,Z,oe;return u=h=f=_=p=d=M=x=S=0,m=g=1,n.svg=!!(e.getCTM&&Zh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[st]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[st]!=="none"?l[st]:"")),i.scale=i.rotate=i.translate="none"),b=ul(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Uo(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),w=n.xOrigin||0,T=n.yOrigin||0,b!==es&&(N=b[0],O=b[1],k=b[2],P=b[3],u=U=b[4],h=I=b[5],b.length===6?(m=Math.sqrt(N*N+O*O),g=Math.sqrt(P*P+k*k),_=N||O?sr(O,N)*Ti:0,M=k||P?sr(k,P)*Ti+_:0,M&&(g*=Math.abs(Math.cos(M*_r))),n.svg&&(u-=w-(w*N+T*k),h-=T-(w*O+T*P))):(oe=b[6],V=b[7],j=b[8],te=b[9],$=b[10],Z=b[11],u=b[12],h=b[13],f=b[14],L=sr(oe,$),p=L*Ti,L&&(v=Math.cos(-L),E=Math.sin(-L),Y=U*v+j*E,q=I*v+te*E,K=oe*v+$*E,j=U*-E+j*v,te=I*-E+te*v,$=oe*-E+$*v,Z=V*-E+Z*v,U=Y,I=q,oe=K),L=sr(-k,$),d=L*Ti,L&&(v=Math.cos(-L),E=Math.sin(-L),Y=N*v-j*E,q=O*v-te*E,K=k*v-$*E,Z=P*E+Z*v,N=Y,O=q,k=K),L=sr(O,N),_=L*Ti,L&&(v=Math.cos(L),E=Math.sin(L),Y=N*v+O*E,q=U*v+I*E,O=O*v-N*E,I=I*v-U*E,N=Y,U=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,d=180-d),m=ht(Math.sqrt(N*N+O*O+k*k)),g=ht(Math.sqrt(I*I+oe*oe)),L=sr(U,I),M=Math.abs(L)>2e-4?L*Ti:0,S=Z?1/(Z<0?-Z:Z):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Jh(tn(e,st)),Y&&e.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(m*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ht(m),n.scaleY=ht(g),n.rotation=ht(_)+a,n.rotationX=ht(p)+a,n.rotationY=ht(d)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Xt]=ia(c)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?gx:jh?Qh:_x,n.uncache=0,n},ia=function(e){return(e=e.split(" "))[0]+" "+e[1]},co=function(e,t,n){var i=Nt(t);return ht(parseFloat(t)+parseFloat(fi(e,"x",n+"px",i)))+i},_x=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Qh(e,t)},Si="0deg",Or="0px",yi=") ",Qh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,d=n.force3D,M=n.target,x=n.zOrigin,S="",w=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==Si||u!==Si)){var T=parseFloat(u)*_r,b=Math.sin(T),L=Math.cos(T),v;T=parseFloat(h)*_r,v=Math.cos(T),o=co(M,o,b*v*-x),a=co(M,a,-Math.sin(T)*-x),l=co(M,l,L*v*-x+x)}p!==Or&&(S+="perspective("+p+yi),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(w||o!==Or||a!==Or||l!==Or)&&(S+=l!==Or||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+yi),c!==Si&&(S+="rotate("+c+yi),u!==Si&&(S+="rotateY("+u+yi),h!==Si&&(S+="rotateX("+h+yi),(f!==Si||m!==Si)&&(S+="skew("+f+", "+m+yi),(g!==1||_!==1)&&(S+="scale("+g+", "+_+yi),M.style[st]=S||"translate(0, 0)"},gx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,d=n.yOffset,M=n.forceCSS,x=parseFloat(o),S=parseFloat(a),w,T,b,L,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_r,c*=_r,w=Math.cos(l)*h,T=Math.sin(l)*h,b=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=_r,v=Math.tan(c-u),v=Math.sqrt(1+v*v),b*=v,L*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),w*=v,T*=v)),w=ht(w),T=ht(T),b=ht(b),L=ht(L)):(w=h,L=f,T=b=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=fi(m,"x",o,"px"),S=fi(m,"y",a,"px")),(g||_||p||d)&&(x=ht(x+g-(g*w+_*b)+p),S=ht(S+_-(g*T+_*L)+d)),(i||s)&&(v=m.getBBox(),x=ht(x+i/100*v.width),S=ht(S+s/100*v.height)),v="matrix("+w+","+T+","+b+","+L+","+x+","+S+")",m.setAttribute("transform",v),M&&(m.style[st]=v)},vx=function(e,t,n,i,s){var o=360,a=Et(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ti:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*pu)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*pu)%o-~~(c/o)*o)),e._pt=f=new Wt(e._pt,t,n,i,c,ex),f.e=u,f.u="deg",e._props.push(n),f},Su=function(e,t){for(var n in t)e[n]=t[n];return e},xx=function(e,t,n){var i=Su({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[st]=t,a=ts(n,1),hi(n,st),n.setAttribute("transform",c)):(c=getComputedStyle(n)[st],o[st]=t,a=ts(n,1),o[st]=c);for(l in Yn)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=Nt(c),g=Nt(u),h=m!==g?fi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Wt(e._pt,a,l,h,f-h,Po),e._pt.u=g||0,e._props.push(l));Su(a,i)};Vt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});na[e>1?"border"+r:r]=function(a,l,c,u,h){var f,m;if(arguments.length<4)return f=o.map(function(g){return Hn(a,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},o.forEach(function(g,_){return m[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,m,h)}});var ef={name:"css",register:Do,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,m,g,_,p,d,M,x,S,w,T,b,L,v;ol||Do(),this.styles=this.styles||qh(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Zt[_]&&Oh(_,t,n,i,e,s)))){if(m=typeof u,g=na[_],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=$r(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",li.lastIndex=0,li.test(c)||(p=Nt(c),d=Nt(u),d?p!==d&&(c=fi(e,_,c,d)+d):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Et(c)&&~c.indexOf("random(")&&(c=$r(c)),Nt(c+"")||c==="auto"||(c+=nn.units[_]||Nt(Hn(e,_))||""),(c+"").charAt(1)==="="&&(c=Hn(e,_))):c=Hn(e,_),f=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in Rn&&(_==="autoAlpha"&&(f===1&&Hn(e,"visibility")==="hidden"&&h&&(f=0),L.push("visibility",0,a.visibility),ni(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Rn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Yn,x){if(this.styles.save(_),v=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=tn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=tn(e,"perspective"),E?e.style.perspective=E:hi(e,"perspective")}h=parseFloat(u)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||ts(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new Wt(this._pt,a,st,0,1,w.renderTransform,w,0,-1),S.dep=1),_==="scale")this._pt=new Wt(this._pt,w,"scaleY",w.scaleY,(M?pr(w.scaleY,M+h):h)-w.scaleY||0,Po),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Xt,0,a[Xt]),u=px(u),w.svg?Uo(e,u,0,T,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==w.zOrigin&&ni(this,w,"zOrigin",w.zOrigin,d),ni(this,a,_,ia(c),ia(u)));continue}else if(_==="svgOrigin"){Uo(e,u,1,T,0,this);continue}else if(_ in $h){vx(this,w,_,f,M?pr(f,M+u):u);continue}else if(_==="smoothOrigin"){ni(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){xx(this,u,e);continue}}else _ in a||(_=wr(_)||_);if(x||(h||h===0)&&(f||f===0)&&!Qv.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),d=Nt(u)||(_ in nn.units?nn.units[_]:p),p!==d&&(f=fi(e,_,c,d)),this._pt=new Wt(this._pt,x?w:a,_,f,(M?pr(f,M+h):h)-f,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?ix:Po),this._pt.u=d||0,x&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=nx):p!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=tx);else if(_ in a)dx.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){$o(_,u);continue}x||(_ in a?L.push(_,0,a[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,c||e[_])),o.push(_)}}b&&kh(this)},render:function(e,t){if(t.tween._time||!ll())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Hn,aliases:Rn,getSetter:function(e,t,n){var i=Rn[t];return i&&i.indexOf(",")<0&&(t=i),t in Yn&&t!==Xt&&(e._gsap.x||Hn(e,"x"))?n&&du===n?t==="scale"?ox:ax:(du=n||{})&&(t==="scale"?lx:cx):e.style&&!jo(e.style[t])?rx:~t.indexOf("-")?sx:sl(e,t)},core:{_removeProperty:hi,_getMatrix:ul}};Yt.utils.checkPrefix=wr;Yt.core.getStyleSaver=qh;(function(r,e,t,n){var i=Vt(r+","+e+","+t,function(s){Yn[s]=1});Vt(e,function(s){nn.units[s]="deg",$h[s]=1}),Rn[i[13]]=r+","+e,Vt(n,function(s){var o=s.split(":");Rn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){nn.units[r]="px"});Yt.registerPlugin(ef);var ss=Yt.registerPlugin(ef)||Yt;ss.core.Tween;const Ct=new O0;Ct.background=new Le(1118481);const Mx=new K0;Mx.load("https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr",r=>{r.mapping=Vs,Ct.environment=r});const di=new un(75,window.innerWidth/window.innerHeight,.1,1e3);di.position.z=3;const as=new Qu({antialias:!0});as.setSize(window.innerWidth,window.innerHeight);document.getElementById("canvas-container").appendChild(as.domElement);const hl=new j0(di,as.domElement);hl.enableDamping=!0;hl.dampingFactor=.05;document.body.insertAdjacentHTML("beforeend",'<input type="file" id="obj-file" accept=".obj" style="display:none; position:absolute; top:10px; right:10px;">');document.getElementById("shape-select").innerHTML='<option value="cube">Cube</option><option value="cylinder">Cylinder</option><option value="cone">Cone</option><option value="sphere">Sphere</option><option value="obj">OBJ File</option>';const tf=new Yo(16777215,1);tf.position.set(2,2,1);Ct.add(tf);const nf=new Yo(16777215,.1);nf.position.set(-2,1,1);Ct.add(nf);const rf=new Yo(16777215,.6);rf.position.set(0,-1,-2);Ct.add(rf);const sf=new Y0(10,10);sf.position.y=-1;Ct.add(sf);const _a=new nh(1);di.add(_a);Ct.add(di);_a.position.set(1,.5,-1);_a.scale.set(.1,.1,.1);const ga=new nh(6);ga.setColors(new Le(16711680),new Le(0),new Le(255));ga.scale.set(1,-1,1);ga.position.y=-.999;Ct.add(ga);function af(){requestAnimationFrame(af),hl.update();const r=di.quaternion.clone();r.invert(),_a.quaternion.copy(r),as.render(Ct,di)}af();window.addEventListener("resize",()=>{di.aspect=window.innerWidth/window.innerHeight,di.updateProjectionMatrix(),as.setSize(window.innerWidth,window.innerHeight)});const Sx={cube:()=>new Cr(2,2,2),cylinder:()=>new ua(1,1,2,16),cone:()=>new Wo(1,2,16),sphere:()=>new ha(1,16,16),obj:null};let ra="cube",gn=null,Io=[],of=[],Hr=[];fl();let _t=[],hr=[],ii=[],Tn=null;document.getElementById("shape-select").addEventListener("change",r=>{ra=r.target.value,ra==="obj"?document.getElementById("obj-file").style.display="block":(document.getElementById("obj-file").style.display="none",fl(),dl())});document.getElementById("obj-file").addEventListener("change",r=>{const e=r.target.files[0];e&&new tv().load(URL.createObjectURL(e),n=>{const i=n.children[0];i&&(gn=i.geometry,fl(),dl())})});document.getElementById("show-vertices").addEventListener("click",yx);document.getElementById("connect-edges").addEventListener("click",Ex);document.getElementById("form-faces").addEventListener("click",Tx);document.getElementById("assemble-mesh").addEventListener("click",bx);document.getElementById("reset").addEventListener("click",dl);function yx(){if(_t.length===0)Io.forEach((r,e)=>{const t=new ha(.05,5,3),n=new Xo({color:16711680}),i=new Qt(t,n);i.position.copy(r),i.scale.set(0,0,0),Ct.add(i),_t.push(i),ss.to(i.scale,{x:1,y:1,z:1,duration:.5,delay:e*.05,ease:"back.out(1.7)"})});else{const r=!_t[0].visible;_t.forEach(e=>e.visible=r)}}function Ex(){if(_t.length!==0)if(hr.length===0)of.forEach((r,e)=>{const t=[_t[r[0]].position,_t[r[1]].position],n=new Lt().setFromPoints(t),i=new Li({color:65280,transparent:!0,opacity:0,linewidth:3}),s=new eh(n,i);Ct.add(s),hr.push(s),ss.to(i,{opacity:1,duration:.3,delay:e*.03,ease:"power2.out"})});else{const r=!hr[0].visible;hr.forEach(e=>e.visible=r)}}function Tx(){if(_t.length!==0)if(ii.length===0)Hr.forEach((r,e)=>{const t=new Lt,n=new Float32Array([_t[r[0]].position.x,_t[r[0]].position.y,_t[r[0]].position.z,_t[r[1]].position.x,_t[r[1]].position.y,_t[r[1]].position.z,_t[r[2]].position.x,_t[r[2]].position.y,_t[r[2]].position.z]);t.setAttribute("position",new Sn(n,3)),t.computeVertexNormals();const i=new Xo({color:255,side:An}),s=new Qt(t,i);Ct.add(s),ii.push(s),ss.to(i,{opacity:.7,duration:.4,delay:e*.05,ease:"power2.out"})});else{const r=!ii[0].visible;ii.forEach(e=>e.visible=r)}}function bx(){if(ii.length!==0)if(Tn)Tn.visible=!Tn.visible;else{ii.forEach(t=>t.visible=!1);const r=gn.clone(),e=new B0({color:8421504,metalness:.2,roughness:.1});Tn=new Qt(r,e),Ct.add(Tn),Tn.scale.set(0,0,0),ss.to(Tn.scale,{x:1,y:1,z:1,duration:1,ease:"power2.out"})}}function fl(){if(ra==="obj"){if(!gn)return}else gn=Sx[ra]();Ax()}function Ax(){if(!gn)return;const r=gn.attributes.position;Io=[];for(let t=0;t<r.count;t++)Io.push(new F().fromBufferAttribute(r,t));if(Hr=[],gn.index)for(let t=0;t<gn.index.count;t+=3)Hr.push([gn.index.array[t],gn.index.array[t+1],gn.index.array[t+2]]);else for(let t=0;t<r.count;t+=3)Hr.push([t,t+1,t+2]);const e=new Set;Hr.forEach(t=>{const[n,i,s]=t;[[Math.min(n,i),Math.max(n,i)],[Math.min(i,s),Math.max(i,s)],[Math.min(s,n),Math.max(s,n)]].forEach(a=>e.add(`${a[0]}-${a[1]}`))}),of=Array.from(e).map(t=>t.split("-").map(Number))}function dl(){wx(),document.getElementById("info").textContent="Click buttons to visualize 3D modeling concepts"}function wx(){_t.forEach(r=>Ct.remove(r)),hr.forEach(r=>Ct.remove(r)),ii.forEach(r=>Ct.remove(r)),Tn&&Ct.remove(Tn),_t=[],hr=[],ii=[],Tn=null}

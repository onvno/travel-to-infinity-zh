import {zh, distance, lightTime, facts} from "../localization.js";
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,ee=33776,M=33777,te=33778,N=33779,P=35840,ne=35841,re=35842,ie=35843,ae=36196,oe=37492,se=37496,F=37808,ce=37809,le=37810,ue=37811,de=37812,fe=37813,pe=37814,me=37815,I=37816,he=37817,ge=37818,_e=37819,L=37820,ve=37821,R=36492,z=36494,ye=36495,be=36283,xe=36284,Se=36285,Ce=36286,we=2300,Te=2301,Ee=2302,De=2400,Oe=2401,ke=2402,Ae=3200,je=3201,Me=`srgb`,Ne=`srgb-linear`,Pe=`linear`,Fe=`srgb`,Ie=7680,Le=7681,Re=35044,ze=`300 es`,Be=2e3,Ve=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},He=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ue=1234567,We=Math.PI/180,Ge=180/Math.PI;function Ke(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(He[e&255]+He[e>>8&255]+He[e>>16&255]+He[e>>24&255]+`-`+He[t&255]+He[t>>8&255]+`-`+He[t>>16&15|64]+He[t>>24&255]+`-`+He[n&63|128]+He[n>>8&255]+`-`+He[n>>16&255]+He[n>>24&255]+He[r&255]+He[r>>8&255]+He[r>>16&255]+He[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function qe(e,t){return(e%t+t)%t}function Je(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Ye(e,t,n){return e===t?0:(n-e)/(t-e)}function Xe(e,t,n){return(1-n)*e+n*t}function Ze(e,t,n,r){return Xe(e,t,1-Math.exp(-n*r))}function Qe(e,t=1){return t-Math.abs(qe(e,t*2)-t)}function $e(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function et(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function tt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function nt(e,t){return e+Math.random()*(t-e)}function rt(e){return e*(.5-Math.random())}function it(e){e!==void 0&&(Ue=e);let t=Ue+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function at(e){return e*We}function ot(e){return e*Ge}function st(e){return!(e&e-1)&&e!==0}function ct(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function lt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ut(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var pt={DEG2RAD:We,RAD2DEG:Ge,generateUUID:Ke,clamp:B,euclideanModulo:qe,mapLinear:Je,inverseLerp:Ye,lerp:Xe,damp:Ze,pingpong:Qe,smoothstep:$e,smootherstep:et,randInt:tt,randFloat:nt,randFloatSpread:rt,seededRandom:it,degToRad:at,radToDeg:ot,isPowerOfTwo:st,ceilPowerOfTwo:ct,floorPowerOfTwo:lt,setQuaternionFromProperEuler:ut,normalize:ft,denormalize:dt},V=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ht.copy(this).projectOnVector(e),this.sub(ht)}reflect(e){return this.sub(ht.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ht=new H,gt=new mt,U=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_t.makeScale(e,t)),this}rotate(e){return this.premultiply(_t.makeRotation(-e)),this}translate(e,t){return this.premultiply(_t.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_t=new U;function vt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function yt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function bt(){let e=yt(`canvas`);return e.style.display=`block`,e}var xt={};function St(e){e in xt||(xt[e]=!0,console.warn(e))}function Ct(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var wt=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tt=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Et(){let e={enabled:!0,workingColorSpace:Ne,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Dt(e.r),e.g=Dt(e.g),e.b=Dt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ot(e.r),e.g=Ot(e.g),e.b=Ot(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Pe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return St(`THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return St(`THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ne]:{primaries:t,whitePoint:r,transfer:Pe,toXYZ:wt,fromXYZ:Tt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:wt,fromXYZ:Tt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),e}var W=Et();function Dt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ot(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var kt,At=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kt===void 0&&(kt=yt(`canvas`)),kt.width=e.width,kt.height=e.height;let t=kt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=kt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=yt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Dt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Dt(t[e]/255)*255):t[e]=Dt(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},jt=0,Mt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jt++}),this.uuid=Ke(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Nt(r[t].image)):e.push(Nt(r[t]))}else e=Nt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Nt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?At.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Pt=0,Ft=new H,It=class r extends Ve{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pt++}),this.uuid=Ke(),this.name=``,this.source=new Mt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ft).x}get height(){return this.source.getSize(Ft).y}get depth(){return this.source.getSize(Ft).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null,It.DEFAULT_MAPPING=300,It.DEFAULT_ANISOTROPY=1;var Lt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rt=class extends Ve{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);let r=new It({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Mt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},zt=class extends Rt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bt=class extends It{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Vt=class extends It{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ht=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Wt):Wt.fromBufferAttribute(r,t),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Gt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Gt.copy(e.boundingBox)),Gt.applyMatrix4(e.matrixWorld),this.union(Gt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qt),$t.subVectors(this.max,Qt),Kt.subVectors(e.a,Qt),qt.subVectors(e.b,Qt),Jt.subVectors(e.c,Qt),Yt.subVectors(qt,Kt),Xt.subVectors(Jt,qt),Zt.subVectors(Kt,Jt);let t=[0,-Yt.z,Yt.y,0,-Xt.z,Xt.y,0,-Zt.z,Zt.y,Yt.z,0,-Yt.x,Xt.z,0,-Xt.x,Zt.z,0,-Zt.x,-Yt.y,Yt.x,0,-Xt.y,Xt.x,0,-Zt.y,Zt.x,0];return!nn(t,Kt,qt,Jt,$t)||(t=[1,0,0,0,1,0,0,0,1],!nn(t,Kt,qt,Jt,$t))?!1:(en.crossVectors(Yt,Xt),t=[en.x,en.y,en.z],nn(t,Kt,qt,Jt,$t))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ut[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ut[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ut[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ut[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ut[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ut[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ut[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ut[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ut)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ut=[new H,new H,new H,new H,new H,new H,new H,new H],Wt=new H,Gt=new Ht,Kt=new H,qt=new H,Jt=new H,Yt=new H,Xt=new H,Zt=new H,Qt=new H,$t=new H,en=new H,tn=new H;function nn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){tn.fromArray(e,a);let o=i.x*Math.abs(tn.x)+i.y*Math.abs(tn.y)+i.z*Math.abs(tn.z),s=t.dot(tn),c=n.dot(tn),l=r.dot(tn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var rn=new Ht,an=new H,on=new H,sn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?rn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;an.subVectors(e,this.center);let t=an.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(an,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(on.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(an.copy(e.center).add(on)),this.expandByPoint(an.copy(e.center).sub(on))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cn=new H,ln=new H,un=new H,dn=new H,fn=new H,pn=new H,mn=new H,hn=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ln.copy(e).add(t).multiplyScalar(.5),un.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(ln);let i=e.distanceTo(t)*.5,a=-this.direction.dot(un),o=dn.dot(this.direction),s=-dn.dot(un),c=dn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ln).addScaledVector(un,d),f}intersectSphere(e,t){cn.subVectors(e.center,this.origin);let n=cn.dot(this.direction),r=cn.dot(cn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,r,i){fn.subVectors(t,e),pn.subVectors(n,e),mn.crossVectors(fn,pn);let a=this.direction.dot(mn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dn.subVectors(this.origin,e);let s=o*this.direction.dot(pn.crossVectors(dn,pn));if(s<0)return null;let c=o*this.direction.dot(fn.cross(dn));if(c<0||s+c>a)return null;let l=-o*dn.dot(mn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/_n.setFromMatrixColumn(e,0).length(),i=1/_n.setFromMatrixColumn(e,1).length(),a=1/_n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yn,e,bn)}lookAt(e,t,n){let r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),xn.crossVectors(n,Cn),xn.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),xn.crossVectors(n,Cn)),xn.normalize(),Sn.crossVectors(Cn,xn),r[0]=xn.x,r[4]=Sn.x,r[8]=Cn.x,r[1]=xn.y,r[5]=Sn.y,r[9]=Cn.y,r[2]=xn.z,r[6]=Sn.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*N,i[12]=a*w+o*O+s*ee+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*N,i[13]=l*w+u*O+d*ee+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*N,i[14]=p*w+m*O+h*ee+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*N,i[15]=_*w+v*O+y*ee+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=_n.set(r[0],r[1],r[2]).length(),a=_n.set(r[4],r[5],r[6]).length(),o=_n.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);let s=1/i,c=1/a,l=1/o;return vn.elements[0]*=s,vn.elements[1]*=s,vn.elements[2]*=s,vn.elements[4]*=c,vn.elements[5]*=c,vn.elements[6]*=c,vn.elements[8]*=l,vn.elements[9]*=l,vn.elements[10]*=l,t.setFromRotationMatrix(vn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Be,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Be,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_n=new H,vn=new gn,yn=new H(0,0,0),bn=new H(1,1,1),xn=new H,Sn=new H,Cn=new H,wn=new gn,Tn=new mt,En=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tn.setFromEuler(this),this.setFromQuaternion(Tn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER=`XYZ`;var Dn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},On=0,kn=new H,An=new mt,jn=new gn,Mn=new H,Nn=new H,Pn=new H,Fn=new mt,In=new H(1,0,0),Ln=new H(0,1,0),Rn=new H(0,0,1),zn={type:`added`},Bn={type:`removed`},Vn={type:`childadded`,child:null},Hn={type:`childremoved`,child:null},Un=class e extends Ve{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:On++}),this.uuid=Ke(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new En,r=new mt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gn},normalMatrix:{value:new U}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.multiply(An),this}rotateOnWorldAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.premultiply(An),this}rotateX(e){return this.rotateOnAxis(In,e)}rotateY(e){return this.rotateOnAxis(Ln,e)}rotateZ(e){return this.rotateOnAxis(Rn,e)}translateOnAxis(e,t){return kn.copy(e).applyQuaternion(this.quaternion),this.position.add(kn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(In,e)}translateY(e){return this.translateOnAxis(Ln,e)}translateZ(e){return this.translateOnAxis(Rn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mn.copy(e):Mn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Nn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Nn,Mn,this.up):jn.lookAt(Mn,Nn,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),An.setFromRotationMatrix(jn),this.quaternion.premultiply(An.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zn),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bn),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zn),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nn,e,Pn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nn,Fn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Un.DEFAULT_UP=new H(0,1,0),Un.DEFAULT_MATRIX_AUTO_UPDATE=!0,Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new H,Gn=new H,Kn=new H,qn=new H,Jn=new H,Yn=new H,Xn=new H,Zn=new H,Qn=new H,$n=new H,er=new Lt,tr=new Lt,nr=new Lt,rr=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wn.subVectors(e,t),r.cross(Wn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Wn.subVectors(r,t),Gn.subVectors(n,t),Kn.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(Gn),s=Wn.dot(Kn),c=Gn.dot(Gn),l=Gn.dot(Kn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn)!==null&&qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,qn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,qn.x),s.addScaledVector(a,qn.y),s.addScaledVector(o,qn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return er.setScalar(0),tr.setScalar(0),nr.setScalar(0),er.fromBufferAttribute(e,t),tr.fromBufferAttribute(e,n),nr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(er,i.x),a.addScaledVector(tr,i.y),a.addScaledVector(nr,i.z),a}static isFrontFacing(e,t,n,r){return Wn.subVectors(n,t),Gn.subVectors(e,t),Wn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Wn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Jn.subVectors(r,n),Yn.subVectors(i,n),Zn.subVectors(e,n);let s=Jn.dot(Zn),c=Yn.dot(Zn);if(s<=0&&c<=0)return t.copy(n);Qn.subVectors(e,r);let l=Jn.dot(Qn),u=Yn.dot(Qn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Jn,a);$n.subVectors(e,i);let f=Jn.dot($n),p=Yn.dot($n);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Yn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Xn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Xn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Jn,a).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ir={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},or={h:0,s:0,l:0};function sr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Me){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=qe(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=sr(i,r,e+1/3),this.g=sr(i,r,e),this.b=sr(i,r,e-1/3)}return W.colorSpaceToWorking(this,r),this}setStyle(e,t=Me){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Me){let n=ir[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dt(e.r),this.g=Dt(e.g),this.b=Dt(e.b),this}copyLinearToSRGB(e){return this.r=Ot(e.r),this.g=Ot(e.g),this.b=Ot(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Me){return W.workingToColorSpace(cr.copy(this),e),Math.round(B(cr.r*255,0,255))*65536+Math.round(B(cr.g*255,0,255))*256+Math.round(B(cr.b*255,0,255))}getHexString(e=Me){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.workingToColorSpace(cr.copy(this),t);let n=cr.r,r=cr.g,i=cr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.workingToColorSpace(cr.copy(this),t),e.r=cr.r,e.g=cr.g,e.b=cr.b,e}getStyle(e=Me){W.workingToColorSpace(cr.copy(this),e);let t=cr.r,n=cr.g,r=cr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(or);let n=Xe(ar.h,or.h,t),r=Xe(ar.s,or.s,t),i=Xe(ar.l,or.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cr=new G;G.NAMES=ir;var lr=0,ur=class extends Ve{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lr++}),this.uuid=Ke(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ie,this.stencilZFail=Ie,this.stencilZPass=Ie,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},dr=class extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fr=new H,pr=new V,mr=0,K=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Re,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix4(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyNormalMatrix(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.transformDirection(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},hr=class extends K{constructor(e,t,n){super(new Uint16Array(e),t,n)}},gr=class extends K{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_r=class extends K{constructor(e,t,n){super(new Float32Array(e),t,n)}},vr=0,yr=new gn,br=new Un,xr=new H,Sr=new Ht,Cr=new Ht,wr=new H,Tr=class e extends Ve{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vr++}),this.uuid=Ke(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(vt(e)?gr:hr)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yr.makeRotationFromQuaternion(e),this.applyMatrix4(yr),this}rotateX(e){return yr.makeRotationX(e),this.applyMatrix4(yr),this}rotateY(e){return yr.makeRotationY(e),this.applyMatrix4(yr),this}rotateZ(e){return yr.makeRotationZ(e),this.applyMatrix4(yr),this}translate(e,t,n){return yr.makeTranslation(e,t,n),this.applyMatrix4(yr),this}scale(e,t,n){return yr.makeScale(e,t,n),this.applyMatrix4(yr),this}lookAt(e){return br.lookAt(e),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new _r(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Sr.setFromBufferAttribute(n),this.morphTargetsRelative?(wr.addVectors(this.boundingBox.min,Sr.min),this.boundingBox.expandByPoint(wr),wr.addVectors(this.boundingBox.max,Sr.max),this.boundingBox.expandByPoint(wr)):(this.boundingBox.expandByPoint(Sr.min),this.boundingBox.expandByPoint(Sr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(Sr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Cr.setFromBufferAttribute(n),this.morphTargetsRelative?(wr.addVectors(Sr.min,Cr.min),Sr.expandByPoint(wr),wr.addVectors(Sr.max,Cr.max),Sr.expandByPoint(wr)):(Sr.expandByPoint(Cr.min),Sr.expandByPoint(Cr.max))}Sr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)wr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(wr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)wr.fromBufferAttribute(a,t),o&&(xr.fromBufferAttribute(e,t),wr.add(xr)),r=Math.max(r,n.distanceToSquared(wr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new K(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new K(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wr.fromBufferAttribute(e,t),wr.normalize(),e.setXYZ(t,wr.x,wr.y,wr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new K(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Er=new gn,Dr=new hn,Or=new sn,kr=new H,Ar=new H,jr=new H,Mr=new H,Nr=new H,Pr=new H,Fr=new H,Ir=new H,Lr=class extends Un{constructor(e=new Tr,t=new dr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Pr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Nr.fromBufferAttribute(s,e),a?Pr.addScaledVector(Nr,r):Pr.addScaledVector(Nr.sub(t),r))}t.add(Pr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Dr.copy(e.ray).recast(e.near),Or.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Or,kr)===null||Dr.origin.distanceToSquared(kr)>(e.far-e.near)**2)||(Er.copy(i).invert(),Dr.copy(e.ray).applyMatrix4(Er),(n.boundingBox===null||Dr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=zr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=zr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=zr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=zr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Rr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ir.copy(s),Ir.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ir);return l<n.near||l>n.far?null:{distance:l,point:Ir.clone(),object:e}}function zr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ar),e.getVertexPosition(c,jr),e.getVertexPosition(l,Mr);let u=Rr(e,t,n,r,Ar,jr,Mr,Fr);if(u){let e=new H;rr.getBarycoord(Fr,Ar,jr,Mr,e),i&&(u.uv=rr.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=rr.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=rr.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};rr.getNormal(Ar,jr,Mr,t.normal),u.face=t,u.barycoord=e}return u}var Br=class e extends Tr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new _r(c,3)),this.setAttribute(`normal`,new _r(l,3)),this.setAttribute(`uv`,new _r(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Hr(e){let t={};for(let n=0;n<e.length;n++){let r=Vr(e[n]);for(let e in r)t[e]=r[e]}return t}function Ur(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Wr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W.workingColorSpace}var Gr={clone:Vr,merge:Hr},Kr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jr=class extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kr,this.fragmentShader=qr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=Ur(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Yr=class extends Un{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=Be,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xr=new H,Zr=new V,Qr=new V,$r=class extends Yr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ge*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(We*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ge*2*Math.atan(Math.tan(We*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,Zr,Qr),t.subVectors(Qr,Zr)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(We*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ei=-90,ti=1,ni=class extends Un{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $r(ei,ti,e,t);r.layers=this.layers,this.add(r);let i=new $r(ei,ti,e,t);i.layers=this.layers,this.add(i);let a=new $r(ei,ti,e,t);a.layers=this.layers,this.add(a);let o=new $r(ei,ti,e,t);o.layers=this.layers,this.add(o);let s=new $r(ei,ti,e,t);s.layers=this.layers,this.add(s);let c=new $r(ei,ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ri=class extends It{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ii=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ri(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Br(5,5,5),i=new Jr({name:`CubemapFromEquirect`,uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Lr(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ni(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ai=class extends Un{constructor(){super(),this.isGroup=!0,this.type=`Group`}},oi={type:`move`},si=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oi)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ci=class extends Un{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=class extends It{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ui=new H,di=new H,fi=new U,pi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ui.subVectors(n,t).cross(di.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ui),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fi.getNormalMatrix(e),r=this.coplanarPoint(ui).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},mi=new sn,hi=new V(.5,.5),gi=new H,_i=class{constructor(e=new pi,t=new pi,n=new pi,r=new pi,i=new pi,a=new pi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Be,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476+hi.distanceTo(e.center),mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(gi.x=r.normal.x>0?e.max.x:e.min.x,gi.y=r.normal.y>0?e.max.y:e.min.y,gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vi=class extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yi=new H,bi=new H,xi=new gn,Si=new hn,Ci=new sn,wi=new H,Ti=new H,Ei=class extends Un{constructor(e=new Tr,t=new vi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)yi.fromBufferAttribute(t,e-1),bi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=yi.distanceTo(bi);e.setAttribute(`lineDistance`,new _r(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ci.copy(n.boundingSphere),Ci.applyMatrix4(r),Ci.radius+=i,e.ray.intersectsSphere(Ci)===!1)return;xi.copy(r).invert(),Si.copy(e.ray).applyMatrix4(xi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Di(this,e,Si,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Di(this,e,Si,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Di(this,e,Si,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Di(this,e,Si,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Di(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(yi.fromBufferAttribute(s,i),bi.fromBufferAttribute(s,a),n.distanceSqToSegment(yi,bi,wi,Ti)>r)return;wi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(wi);if(!(c<t.near||c>t.far))return{distance:c,point:Ti.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Oi=class extends Ei{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},ki=class extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ai=new gn,ji=new hn,Mi=new sn,Ni=new H,Pi=class extends Un{constructor(e=new Tr,t=new ki){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mi.copy(n.boundingSphere),Mi.applyMatrix4(r),Mi.radius+=i,e.ray.intersectsSphere(Mi)===!1)return;Ai.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Ai);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ni.fromBufferAttribute(l,n),Fi(Ni,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ni.fromBufferAttribute(l,a),Fi(Ni,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Fi(e,t,n,r,i,a,o){let s=ji.distanceSqToPoint(e);if(s<n){let n=new H;ji.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ii=class extends It{constructor(e,t,n,r,i,a,o,s,c,l,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Li=class extends Ii{constructor(e,n,r,i,a,o){super(e,n,r,a,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=t,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ri=class extends Ii{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,301),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},zi=class extends It{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bi=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vi=class e extends Tr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new _r(p,3)),this.setAttribute(`normal`,new _r(m,3)),this.setAttribute(`uv`,new _r(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Hi=class e extends Tr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new _r(p,3)),this.setAttribute(`normal`,new _r(m,3)),this.setAttribute(`uv`,new _r(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ui=class extends Jr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Wi=class extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ae,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gi=class extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ki(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function qi(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ji=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Yi=class extends Ji{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:De,endingEnd:De}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oe:i=e,o=2*t-n;break;case ke:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Oe:a=e,s=2*n-t;break;case ke:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Xi=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Zi=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ki(t,this.TimeBufferType),this.values=Ki(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ki(e.times,Array),values:Ki(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yi(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case we:t=this.InterpolantFactoryMethodDiscrete;break;case Te:t=this.InterpolantFactoryMethodLinear;break;case Ee:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return we;case this.InterpolantFactoryMethodLinear:return Te;case this.InterpolantFactoryMethodSmooth:return Ee}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&qi(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ee,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Qi.prototype.ValueTypeName=``,Qi.prototype.TimeBufferType=Float32Array,Qi.prototype.ValueBufferType=Float32Array,Qi.prototype.DefaultInterpolation=Te;var $i=class extends Qi{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName=`bool`,$i.prototype.ValueBufferType=Array,$i.prototype.DefaultInterpolation=we,$i.prototype.InterpolantFactoryMethodLinear=void 0,$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};ea.prototype.ValueTypeName=`color`;var ta=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};ta.prototype.ValueTypeName=`number`;var na=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ra=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}};ra.prototype.ValueTypeName=`quaternion`,ra.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends Qi{constructor(e,t,n){super(e,t,n)}};ia.prototype.ValueTypeName=`string`,ia.prototype.ValueBufferType=Array,ia.prototype.DefaultInterpolation=we,ia.prototype.InterpolantFactoryMethodLinear=void 0,ia.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};aa.prototype.ValueTypeName=`vector`;var oa={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},sa=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ca=class{constructor(e){this.manager=e===void 0?sa:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ca.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var la={},ua=class extends Error{constructor(e,t){super(e),this.response=t}},da=class extends ca{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=oa.get(`file:${e}`);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(la[e]!==void 0){la[e].push({onLoad:t,onProgress:n,onError:r});return}la[e]=[],la[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=la[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new ua(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{oa.add(`file:${e}`,t);let n=la[e];delete la[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=la[e];if(n===void 0)throw this.manager.itemError(e),t;delete la[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},fa=new WeakMap,pa=class extends ca{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=oa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=fa.get(a);e===void 0&&(e=[],fa.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=yt(`img`);function s(){l(),t&&t(this);let n=fa.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}fa.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),oa.remove(`image:${e}`);let n=fa.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}fa.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),oa.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},ma=class extends Yr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ha=class extends $r{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ga=`\\[\\]\\.:\\/`,_a=RegExp(`[\\[\\]\\.:\\/]`,`g`),va=`[^\\[\\]\\.:\\/]`,ya=`[^`+ga.replace(`\\.`,``)+`]`,ba=`((?:WC+[\\/:])*)`.replace(`WC`,va),xa=`(WCOD+)?`.replace(`WCOD`,ya),Sa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,va),Ca=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,va),wa=RegExp(`^`+ba+xa+Sa+Ca+`$`),Ta=[`material`,`materials`,`bones`,`map`],Ea=class{constructor(e,t,n){let r=n||Da.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Da=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(_a,``)}static parseTrackName(e){let t=wa.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ta.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Da.Composite=Ea,Da.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Da.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Da.prototype.GetterByBindingType=[Da.prototype._getValue_direct,Da.prototype._getValue_array,Da.prototype._getValue_arrayElement,Da.prototype._getValue_toArray],Da.prototype.SetterByBindingTypeAndVersioning=[[Da.prototype._setValue_direct,Da.prototype._setValue_direct_setNeedsUpdate,Da.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Da.prototype._setValue_array,Da.prototype._setValue_array_setNeedsUpdate,Da.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Da.prototype._setValue_arrayElement,Da.prototype._setValue_arrayElement_setNeedsUpdate,Da.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Da.prototype._setValue_fromArray,Da.prototype._setValue_fromArray_setNeedsUpdate,Da.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Oa(e,t,n,r){let i=ka(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case ee:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case te:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ne:case ie:return Math.max(e,16)*Math.max(t,8)/4;case P:case re:return Math.max(e,8)*Math.max(t,8)/2;case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ue:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case fe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case I:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case L:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ve:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case R:case z:case ye:return Math.ceil(e/4)*Math.ceil(t/4)*16;case be:case xe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Se:case Ce:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ka(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`180`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`180`);function Aa(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ja(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,lights_fragment_begin:`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshtoon_vert:`#define TOON
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
	#include <morphinstance_vertex>
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
}`,meshtoon_frag:`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},J={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Ma={basic:{uniforms:Hr([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:Hr([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new G(0)}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:Hr([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:Hr([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:Hr([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new G(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:Hr([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:Hr([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:Hr([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:Hr([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:Hr([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:Hr([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distanceRGBA:{uniforms:Hr([J.common,J.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distanceRGBA_vert,fragmentShader:q.distanceRGBA_frag},shadow:{uniforms:Hr([J.lights,J.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};Ma.physical={uniforms:Hr([Ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var Na={r:0,b:0,g:0},Pa=new En,Fa=new gn;function Ia(e,t,n,r,i,a,o){let s=new G(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Lr(new Br(1,1,1),new Jr({name:`BackgroundCubeMaterial`,uniforms:Vr(Ma.backgroundCube.uniforms),vertexShader:Ma.backgroundCube.vertexShader,fragmentShader:Ma.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Pa.copy(n.backgroundRotation),Pa.x*=-1,Pa.y*=-1,Pa.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Pa.y*=-1,Pa.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fa.makeRotationFromEuler(Pa)),u.material.toneMapped=W.getTransfer(r.colorSpace)!==Fe,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Lr(new Vi(2,2),new Jr({name:`BackgroundMaterial`,uniforms:Vr(Ma.background.uniforms),vertexShader:Ma.background.vertexShader,fragmentShader:Ma.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=W.getTransfer(r.colorSpace)!==Fe,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Na,Wr(e)),r.buffers.color.setClear(Na.r,Na.g,Na.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function La(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ra(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function za(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Ba(e){let t=this,n=null,r=0,i=!1,a=!1,o=new pi,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Va(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new ii(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Ha=4,Ua=[.125,.215,.35,.446,.526,.582],Wa=20,Ga=new ma,Ka=new G,qa=null,Ja=0,Ya=0,Xa=!1,Za=(1+Math.sqrt(5))/2,Qa=1/Za,$a=[new H(-Za,Qa,0),new H(Za,Qa,0),new H(-Qa,0,Za),new H(Qa,0,Za),new H(0,Za,-Qa),new H(0,Za,Qa),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],eo=new H,to=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=eo}=i;qa=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=so(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Ja,Ya),this._renderer.xr.enabled=Xa,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Ne,depthBuffer:!1},r=ro(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=no(r)),this._blurMaterial=ao(r,e,t)}return r}_compileMaterial(e){let t=new Lr(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,r,i){let a=new $r(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ka),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null));let d=new dr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),f=new Lr(new Br,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Ka),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;io(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=so()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Lr(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;io(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ga)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=$a[(r-t-1)%$a.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Lr(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Wa;m>Wa&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wa}`);let h=[],g=0;for(let e=0;e<Wa;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];io(t,3*v*(r>_-Ha?r-_+Ha:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ga)}};function no(e){let t=[],n=[],r=[],i=e,a=e-Ha+1+Ua.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Ha?s=Ua[o-e+Ha-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Tr;h.setAttribute(`position`,new K(f,3)),h.setAttribute(`uv`,new K(p,2)),h.setAttribute(`faceIndex`,new K(m,1)),t.push(h),i>Ha&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function ro(e,t,n){let r=new zt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function io(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ao(e,t,n){let r=new Float32Array(Wa),i=new H(0,1,0);return new Jr({name:`SphericalGaussianBlur`,defines:{n:Wa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:co(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function oo(){return new Jr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function so(){return new Jr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function lo(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new to(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new to(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function uo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&St(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function fo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(vt(n)?gr:hr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function po(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ho(e,t,n){let r=new WeakMap,i=new Lt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Bt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new V(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function go(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var _o=new It,vo=new zi(1,1),yo=new Bt,bo=new Vt,xo=new ri,So=[],Co=[],wo=new Float32Array(16),To=new Float32Array(9),Eo=new Float32Array(4);function Do(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=So[i];if(a===void 0&&(a=new Float32Array(i),So[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Oo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ko(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ao(e,t){let n=Co[t];n===void 0&&(n=new Int32Array(t),Co[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function jo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Mo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oo(n,t))return;e.uniform2fv(this.addr,t),ko(n,t)}}function No(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Oo(n,t))return;e.uniform3fv(this.addr,t),ko(n,t)}}function Po(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oo(n,t))return;e.uniform4fv(this.addr,t),ko(n,t)}}function Fo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Oo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ko(n,t)}else{if(Oo(n,r))return;Eo.set(r),e.uniformMatrix2fv(this.addr,!1,Eo),ko(n,r)}}function Io(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Oo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ko(n,t)}else{if(Oo(n,r))return;To.set(r),e.uniformMatrix3fv(this.addr,!1,To),ko(n,r)}}function Lo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Oo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ko(n,t)}else{if(Oo(n,r))return;wo.set(r),e.uniformMatrix4fv(this.addr,!1,wo),ko(n,r)}}function Ro(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oo(n,t))return;e.uniform2iv(this.addr,t),ko(n,t)}}function Bo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Oo(n,t))return;e.uniform3iv(this.addr,t),ko(n,t)}}function Vo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oo(n,t))return;e.uniform4iv(this.addr,t),ko(n,t)}}function Ho(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Uo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oo(n,t))return;e.uniform2uiv(this.addr,t),ko(n,t)}}function Wo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Oo(n,t))return;e.uniform3uiv(this.addr,t),ko(n,t)}}function Go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oo(n,t))return;e.uniform4uiv(this.addr,t),ko(n,t)}}function Ko(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(vo.compareFunction=515,a=vo):a=_o,n.setTexture2D(t||a,i)}function qo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||bo,i)}function Jo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||xo,i)}function Yo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||yo,i)}function Xo(e){switch(e){case 5126:return jo;case 35664:return Mo;case 35665:return No;case 35666:return Po;case 35674:return Fo;case 35675:return Io;case 35676:return Lo;case 5124:case 35670:return Ro;case 35667:case 35671:return zo;case 35668:case 35672:return Bo;case 35669:case 35673:return Vo;case 5125:return Ho;case 36294:return Uo;case 36295:return Wo;case 36296:return Go;case 35678:case 36198:case 36298:case 36306:case 35682:return Ko;case 35679:case 36299:case 36307:return qo;case 35680:case 36300:case 36308:case 36293:return Jo;case 36289:case 36303:case 36311:case 36292:return Yo}}function Zo(e,t){e.uniform1fv(this.addr,t)}function Qo(e,t){let n=Do(t,this.size,2);e.uniform2fv(this.addr,n)}function $o(e,t){let n=Do(t,this.size,3);e.uniform3fv(this.addr,n)}function es(e,t){let n=Do(t,this.size,4);e.uniform4fv(this.addr,n)}function ts(e,t){let n=Do(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ns(e,t){let n=Do(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function rs(e,t){let n=Do(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function is(e,t){e.uniform1iv(this.addr,t)}function as(e,t){e.uniform2iv(this.addr,t)}function os(e,t){e.uniform3iv(this.addr,t)}function ss(e,t){e.uniform4iv(this.addr,t)}function cs(e,t){e.uniform1uiv(this.addr,t)}function ls(e,t){e.uniform2uiv(this.addr,t)}function us(e,t){e.uniform3uiv(this.addr,t)}function ds(e,t){e.uniform4uiv(this.addr,t)}function fs(e,t,n){let r=this.cache,i=t.length,a=Ao(n,i);Oo(r,a)||(e.uniform1iv(this.addr,a),ko(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||_o,a[e])}function ps(e,t,n){let r=this.cache,i=t.length,a=Ao(n,i);Oo(r,a)||(e.uniform1iv(this.addr,a),ko(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||bo,a[e])}function ms(e,t,n){let r=this.cache,i=t.length,a=Ao(n,i);Oo(r,a)||(e.uniform1iv(this.addr,a),ko(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||xo,a[e])}function hs(e,t,n){let r=this.cache,i=t.length,a=Ao(n,i);Oo(r,a)||(e.uniform1iv(this.addr,a),ko(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||yo,a[e])}function gs(e){switch(e){case 5126:return Zo;case 35664:return Qo;case 35665:return $o;case 35666:return es;case 35674:return ts;case 35675:return ns;case 35676:return rs;case 5124:case 35670:return is;case 35667:case 35671:return as;case 35668:case 35672:return os;case 35669:case 35673:return ss;case 5125:return cs;case 36294:return ls;case 36295:return us;case 36296:return ds;case 35678:case 36198:case 36298:case 36306:case 35682:return fs;case 35679:case 36299:case 36307:return ps;case 35680:case 36300:case 36308:case 36293:return ms;case 36289:case 36303:case 36311:case 36292:return hs}}var _s=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xo(t.type)}},vs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gs(t.type)}},ys=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},bs=/(\w+)(\])?(\[|\.)?/g;function xs(e,t){e.seq.push(t),e.map[t.id]=t}function Ss(e,t,n){let r=e.name,i=r.length;for(bs.lastIndex=0;;){let a=bs.exec(r),o=bs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){xs(n,l===void 0?new _s(s,e,t):new vs(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ys(s),xs(n,e)),n=e}}}var Cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ss(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ws(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ts=37297,Es=0;function Ds(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Os=new U;function ks(e){W._getMatrix(Os,W.workingColorSpace,e);let t=`mat3( ${Os.elements.map(e=>e.toFixed(4))} )`;switch(W.getTransfer(e)){case Pe:return[t,`LinearTransferOETF`];case Fe:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function As(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ds(e.getShaderSource(t),r)}return i}function js(e,t){let n=ks(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function Ms(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ns=new H;function Ps(){return W.getLuminanceCoefficients(Ns),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ns.x.toFixed(4)}, ${Ns.y.toFixed(4)}, ${Ns.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Fs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Rs).join(`
`)}function Is(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ls(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Rs(e){return e!==``}function zs(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vs=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(e){return e.replace(Vs,Ws)}var Us=new Map;function Ws(e,t){let n=q[t];if(n===void 0){let e=Us.get(t);if(e!==void 0)n=q[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Hs(n)}var Gs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ks(e){return e.replace(Gs,qs)}function qs(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Js(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Ys(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Xs(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Zs(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Qs(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function $s(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ec(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ys(n),l=Xs(n),u=Zs(n),d=Qs(n),f=$s(n),p=Fs(n),m=Is(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Rs).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Rs).join(`
`),_.length>0&&(_+=`
`)):(g=[Js(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Rs).join(`
`),_=[Js(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:Ms(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,js(`linearToOutputTexel`,n.outputColorSpace),Ps(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Rs).join(`
`)),o=Hs(o),o=zs(o,n),o=Bs(o,n),s=Hs(s),s=zs(s,n),s=Bs(s,n),o=Ks(o),s=Ks(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ws(i,i.VERTEX_SHADER,y),S=ws(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=As(i,x,`vertex`),n=As(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Cs(i,h),T=Ls(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ts)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Es++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var tc=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rc(e),t.set(e,n)),n}},rc=class{constructor(e){this.id=tc++,this.code=e,this.usedTimes=0}};function ic(e,t,n,r,i,a,o){let s=new Dn,c=new nc,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ma[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=_.isInstancedMesh===!0,te=_.isBatchedMesh===!0,N=!!a.map,P=!!a.matcap,ne=!!x,re=!!a.aoMap,ie=!!a.lightMap,ae=!!a.bumpMap,oe=!!a.normalMap,se=!!a.displacementMap,F=!!a.emissiveMap,ce=!!a.metalnessMap,le=!!a.roughnessMap,ue=a.anisotropy>0,de=a.clearcoat>0,fe=a.dispersion>0,pe=a.iridescence>0,me=a.sheen>0,I=a.transmission>0,he=ue&&!!a.anisotropyMap,ge=de&&!!a.clearcoatMap,_e=de&&!!a.clearcoatNormalMap,L=de&&!!a.clearcoatRoughnessMap,ve=pe&&!!a.iridescenceMap,R=pe&&!!a.iridescenceThicknessMap,z=me&&!!a.sheenColorMap,ye=me&&!!a.sheenRoughnessMap,be=!!a.specularMap,xe=!!a.specularColorMap,Se=!!a.specularIntensityMap,Ce=I&&!!a.transmissionMap,we=I&&!!a.thicknessMap,Te=!!a.gradientMap,Ee=!!a.alphaMap,De=a.alphaTest>0,Oe=!!a.alphaHash,ke=!!a.extensions,Ae=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:te,batchingColor:te&&_._colorsTexture!==null,instancing:M,instancingColor:M&&_.instanceColor!==null,instancingMorph:M&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ne,alphaToCoverage:!!a.alphaToCoverage,map:N,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:f&&se,emissiveMap:F,normalMapObjectSpace:oe&&a.normalMapType===1,normalMapTangentSpace:oe&&a.normalMapType===0,metalnessMap:ce,roughnessMap:le,anisotropy:ue,anisotropyMap:he,clearcoat:de,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:L,dispersion:fe,iridescence:pe,iridescenceMap:ve,iridescenceThicknessMap:R,sheen:me,sheenColorMap:z,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:I,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:a.combine,mapUv:N&&h(a.map.channel),aoMapUv:re&&h(a.aoMap.channel),lightMapUv:ie&&h(a.lightMap.channel),bumpMapUv:ae&&h(a.bumpMap.channel),normalMapUv:oe&&h(a.normalMap.channel),displacementMapUv:se&&h(a.displacementMap.channel),emissiveMapUv:F&&h(a.emissiveMap.channel),metalnessMapUv:ce&&h(a.metalnessMap.channel),roughnessMapUv:le&&h(a.roughnessMap.channel),anisotropyMapUv:he&&h(a.anisotropyMap.channel),clearcoatMapUv:ge&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:_e&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:R&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:z&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:ye&&h(a.sheenRoughnessMap.channel),specularMapUv:be&&h(a.specularMap.channel),specularColorMapUv:xe&&h(a.specularColorMap.channel),specularIntensityMapUv:Se&&h(a.specularIntensityMap.channel),transmissionMapUv:Ce&&h(a.transmissionMap.channel),thicknessMapUv:we&&h(a.thicknessMap.channel),alphaMapUv:Ee&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(oe||ue),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(N||Ee),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0&&a.wireframe===!1,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:N&&a.map.isVideoTexture===!0&&W.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:F&&a.emissiveMap.isVideoTexture===!0&&W.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:ke&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&a.extensions.multiDraw===!0||te)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),t.gradientMap&&s.enable(22),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Ma[t];n=Gr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new ec(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function ac(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function oc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function sc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||oc),r.length>1&&r.sort(t||sc),i.length>1&&i.sort(t||sc)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function lc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new cc,e.set(t,[i])):n>=r.length?(i=new cc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function uc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new H,color:new G};break;case`SpotLight`:n={position:new H,direction:new H,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function dc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var fc=0;function pc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function mc(e){let t=new uc,n=dc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new gn,o=new gn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(pc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=fc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function hc(e){let t=new mc(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function gc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new hc(e),t.set(n,[a])):r>=i.length?(a=new hc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var _c=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vc=`uniform sampler2D shadow_pass;
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
}`;function yc(e,t,n){let i=new _i,a=new V,o=new V,s=new Lt,c=new Wi({depthPacking:je}),l=new Gi,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:_c,fragmentShader:vc}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Tr;h.setAttribute(`position`,new K(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Lr(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new zt(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new zt(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var bc={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function xc(e,t){function n(){let t=!1,n=new Lt,r=null,i=new Lt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=bc[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new G(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,M=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ee=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(te)[1]),ee=M>=1);let N=null,P={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Lt().fromArray(ne),ae=new Lt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),F(e.CULL_FACE),me(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return m!==t&&(e.useProgram(t),m=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(ce(e.BLEND),h=!1);else if(h===!1&&(F(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:console.error(`THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:console.error(`THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(fe[n],fe[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function I(t,n){t.side===2?ce(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),L(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function ge(t){t===0?ce(e.CULL_FACE):(F(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function _e(t){t!==O&&(ee&&e.lineWidth(t),O=t)}function L(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):ce(e.POLYGON_OFFSET_FILL)}function ve(t){t?F(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function R(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function z(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=P[r];i===void 0&&(i={type:void 0,texture:void 0},P[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function ye(){let t=P[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function je(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},N=null,P={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new G(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:I,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:L,setScissorTest:ve,activeTexture:R,bindTexture:z,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:ke,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:Ae,viewport:je,reset:Pe}}function Sc(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):yt(`canvas`)}function w(e,t,n){let r=1,i=Oe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function D(e){l.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function k(e,t,n,r,i=!1){if(e!==null){if(l[e]!==void 0)return l[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===l.RED&&(n===l.FLOAT&&(a=l.R32F),n===l.HALF_FLOAT&&(a=l.R16F),n===l.UNSIGNED_BYTE&&(a=l.R8)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.R8UI),n===l.UNSIGNED_SHORT&&(a=l.R16UI),n===l.UNSIGNED_INT&&(a=l.R32UI),n===l.BYTE&&(a=l.R8I),n===l.SHORT&&(a=l.R16I),n===l.INT&&(a=l.R32I)),t===l.RG&&(n===l.FLOAT&&(a=l.RG32F),n===l.HALF_FLOAT&&(a=l.RG16F),n===l.UNSIGNED_BYTE&&(a=l.RG8)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RG8UI),n===l.UNSIGNED_SHORT&&(a=l.RG16UI),n===l.UNSIGNED_INT&&(a=l.RG32UI),n===l.BYTE&&(a=l.RG8I),n===l.SHORT&&(a=l.RG16I),n===l.INT&&(a=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGB8UI),n===l.UNSIGNED_SHORT&&(a=l.RGB16UI),n===l.UNSIGNED_INT&&(a=l.RGB32UI),n===l.BYTE&&(a=l.RGB8I),n===l.SHORT&&(a=l.RGB16I),n===l.INT&&(a=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(a=l.RGBA16UI),n===l.UNSIGNED_INT&&(a=l.RGBA32UI),n===l.BYTE&&(a=l.RGBA8I),n===l.SHORT&&(a=l.RGBA16I),n===l.INT&&(a=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_INT_5_9_9_9_REV&&(a=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(a=l.R11F_G11F_B10F)),t===l.RGBA){let e=i?Pe:W.getTransfer(r);n===l.FLOAT&&(a=l.RGBA32F),n===l.HALF_FLOAT&&(a=l.RGBA16F),n===l.UNSIGNED_BYTE&&(a=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT_4_4_4_4&&(a=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(a=l.RGB5_A1)}return(a===l.R16F||a===l.R32F||a===l.RG16F||a===l.RG32F||a===l.RGBA16F||a===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),a}function A(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),te(t),t.isVideoTexture&&y.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),P(t)}function te(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function N(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=x.get(n);delete r[t.__cacheKey],h.memory.textures--}function P(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ne=0;function re(){ne=0}function ie(){let e=ne;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ne+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(e,t){let n=f.get(e);if(e.isVideoTexture&&Ee(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{he(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function se(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?he(n,e,t):d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function F(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?he(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ce(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?ge(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let le={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ue={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},de={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function fe(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,le[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,le[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,le[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ue[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ue[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,de[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function pe(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ee));let r=t.source,i=x.get(r);i===void 0&&(i={},x.set(r,i));let a=ae(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&N(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function I(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=me(r.start,t.width,4),c=me(n.start,t.width,4);r.start<=o+1&&s===c&&me(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=l.getParameter(l.UNPACK_ROW_LENGTH),s=l.getParameter(l.UNPACK_SKIP_PIXELS),c=l.getParameter(l.UNPACK_SKIP_ROWS);l.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;l.pixelStorei(l.UNPACK_SKIP_PIXELS,c),l.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),l.pixelStorei(l.UNPACK_ROW_LENGTH,o),l.pixelStorei(l.UNPACK_SKIP_PIXELS,s),l.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function he(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=pe(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(l.TEXTURE0+n);let e=W.getPrimaries(W.workingColorSpace),s=t.colorSpace===``?null:W.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let u=w(t.image,!1,p.maxTextureSize);u=De(t,u);let f=m.convert(t.format,t.colorSpace),h=m.convert(t.type),g=k(t.internalFormat,f,h,t.colorSpace,t.isVideoTexture);fe(r,t);let _,v=t.mipmaps,y=t.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=j(t,u);if(t.isDepthTexture)g=A(t.format===E,t.type),b&&(y?d.texStorage2D(l.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(t.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data);t.generateMipmaps=!1}else y?(b&&d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height),x&&I(t,u,f,h)):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){y&&b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let e=0,n=v.length;e<n;e++)if(_=v[e],t.format!==1023){if(f!==null){if(y){if(x){if(t.layerUpdates.size>0){let n=Oa(_.width,_.height,t.format,t.type);for(let r of t.layerUpdates){let t=_.data.subarray(r*n/_.data.BYTES_PER_ELEMENT,(r+1)*n/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,r,_.width,_.height,1,f,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,_.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)_=v[e],t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,_.data)}}else if(t.isDataArrayTexture){if(y){if(b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(t.layerUpdates.size>0){let e=Oa(u.width,u.height,t.format,t.type);for(let n of t.layerUpdates){let t=u.data.subarray(n*e/u.data.BYTES_PER_ELEMENT,(n+1)*e/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,n,u.width,u.height,1,f,h,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(t.isData3DTexture)y?(b&&d.texStorage3D(l.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(l.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(t.isFramebufferTexture){if(b){if(y)d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height);else{let e=u.width,t=u.height;for(let n=0;n<S;n++)d.texImage2D(l.TEXTURE_2D,n,g,e,t,0,f,h,null),e>>=1,t>>=1}}}else if(v.length>0){if(y&&b){let e=Oe(v[0]);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f,h,_):d.texImage2D(l.TEXTURE_2D,e,g,f,h,_);t.generateMipmaps=!1}else if(y){if(b){let e=Oe(u);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(l.TEXTURE_2D,0,g,f,h,u);T(t)&&D(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ge(e,t,n){if(t.image.length!==6)return;let r=pe(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=W.getPrimaries(W.workingColorSpace),o=t.colorSpace===``?null:W.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=w(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=De(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=k(t.internalFormat,g,_,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);fe(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Oe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}T(t)&&D(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function _e(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=k(n.internalFormat,o,s,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Te(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,we(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function L(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=A(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,s=we(t);Te(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,s,a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,s,a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=k(i.internalFormat,a,o,i.colorSpace),c=we(t);n&&Te(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,t.width,t.height):Te(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,c,s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function ve(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let n=f.get(t.depthTexture);n.__renderTarget=t,n.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),oe(t.depthTexture,0);let r=n.__webglTexture,i=we(t);if(t.depthTexture.format===1026)Te(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0);else if(t.depthTexture.format===1027)Te(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function R(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);let r=e.texture.mipmaps;r&&r.length>0?ve(t.__webglFramebuffer[0],e):ve(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),L(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),L(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function z(e,t,n){let r=f.get(e);t!==void 0&&_e(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&R(e)}function ye(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Te(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=k(r.internalFormat,a,o,r.colorSpace,e.isXRRenderTarget===!0),c=we(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),L(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),fe(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)_e(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else _e(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);T(t)&&D(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),fe(o,r),_e(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),T(r)&&D(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),fe(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)_e(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else _e(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);T(t)&&D(i),d.unbindTexture()}e.depthBuffer&&R(e)}function be(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),D(t),d.unbindTexture()}}}let xe=[],Se=[];function Ce(e){if(e.samples>0){if(Te(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(xe.length=0,Se.length=0,xe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(xe.push(a),Se.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Se)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,xe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function we(e){return Math.min(p.maxSamples,e.samples)}function Te(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Ee(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function De(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(W.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Oe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ie,this.resetTextureUnits=re,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=F,this.setTextureCube=ce,this.rebindTextures=z,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Te}function Cc(e,t){function n(n,r=``){let i,a=W.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var wc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jr({vertexShader:wc,fragmentShader:Tc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lr(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends Ve{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Ec,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new V,k=null,A=new $r;A.viewport=new Lt;let j=new $r;j.viewport=new Lt;let ee=[A,j],M=new ha,te=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new si,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new si,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new si,C[e]=t),t.getHandSpace()};function P(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,P),r.removeEventListener(`selectstart`,P),r.removeEventListener(`selectend`,P),r.removeEventListener(`squeeze`,P),r.removeEventListener(`squeezestart`,P),r.removeEventListener(`squeezeend`,P),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}te=null,N=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,P),r.addEventListener(`selectstart`,P),r.addEventListener(`selectend`,P),r.addEventListener(`squeeze`,P),r.addEventListener(`squeezestart`,P),r.addEventListener(`squeezeend`,P),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new zt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new zi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new zt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ie=new H,ae=new H;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=A.near=t,M.far=j.far=A.far=n,(te!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),te=M.near,N=M.far),M.layers.mask=e.layers.mask|6,A.layers.mask=M.layers.mask&3,j.layers.mask=M.layers.mask&5;let i=e.parent,a=M.cameras;se(M,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(M,A,j):M.projectionMatrix.copy(A.projectionMatrix),F(e,M,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ge*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let ce=null;function le(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ee[n];o===void 0&&(o=new $r,o.layers.enable(n),o.viewport=new Lt,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Bi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let ue=new Aa;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},Oc=new En,kc=new gn;function Ac(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Wr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Oc.copy(o),Oc.x*=-1,Oc.y*=-1,Oc.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Oc.y*=-1,Oc.z*=-1),e.envMapRotation.value.setFromMatrix4(kc.makeRotationFromEuler(Oc)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function jc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Mc=class{constructor(e={}){let{canvas:t=bt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),_=new Int32Array(4),v=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1;this._outputColorSpace=Me;let w=0,T=0,E=null,D=-1,O=null,k=new Lt,A=new Lt,j=null,ee=new G(0),M=0,te=t.width,N=t.height,P=1,ne=null,re=null,ie=new Lt(0,0,te,N),ae=new Lt(0,0,te,N),oe=!1,se=new _i,F=!1,ce=!1,le=new gn,ue=new H,de=new Lt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function me(){return E===null?P:1}let I=n;function he(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r180`),t.addEventListener(`webglcontextlost`,He,!1),t.addEventListener(`webglcontextrestored`,Ue,!1),t.addEventListener(`webglcontextcreationerror`,We,!1),I===null){let t=`webgl2`;if(I=he(t,e),I===null)throw he(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let ge,_e,L,ve,R,z,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Pe,Fe,Ie,Le,Re;function ze(){ge=new uo(I),ge.init(),Ie=new Cc(I,ge),_e=new za(I,ge,e,Ie),L=new xc(I,ge),_e.reversedDepthBuffer&&p&&L.buffers.depth.setReversed(!0),ve=new mo(I),R=new ac,z=new Sc(I,ge,L,R,_e,Ie,ve),ye=new Va(S),be=new lo(S),xe=new ja(I),Le=new La(I,xe),Se=new fo(I,xe,ve,Le),Ce=new go(I,Se,xe,ve),je=new ho(I,_e,z),Oe=new Ba(R),we=new ic(S,ye,be,ge,_e,Le,Oe),Te=new Ac(S,R),Ee=new lc,De=new gc(ge),Ae=new Ia(S,ye,be,L,Ce,m,s),ke=new yc(S,Ce,_e),Re=new jc(I,ve,_e,L),Pe=new Ra(I,ge,ve),Fe=new po(I,ge,ve),ve.programs=we.programs,S.capabilities=_e,S.extensions=ge,S.properties=R,S.renderLists=Ee,S.shadowMap=ke,S.state=L,S.info=ve}ze();let Ve=new Dc(S,I);this.xr=Ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(e){e!==void 0&&(P=e,this.setSize(te,N,!1))},this.getSize=function(e){return e.set(te,N)},this.setSize=function(e,n,r=!0){Ve.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(te=e,N=n,t.width=Math.floor(e*P),t.height=Math.floor(n*P),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(te*P,N*P).floor()},this.setDrawingBufferSize=function(e,n,r){te=e,N=n,P=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(k)},this.getViewport=function(e){return e.copy(ie)},this.setViewport=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),L.viewport(k.copy(ie).multiplyScalar(P).round())},this.getScissor=function(e){return e.copy(ae)},this.setScissor=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),L.scissor(A.copy(ae).multiplyScalar(P).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(e){L.setScissorTest(oe=e)},this.setOpaqueSort=function(e){ne=e},this.setTransparentSort=function(e){re=e},this.getClearColor=function(e){return e.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=E.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Ae.getClearColor(),r=Ae.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,I.clearBufferuiv(I.COLOR,0,h)):(_[0]=i,_[1]=a,_[2]=o,_[3]=r,I.clearBufferiv(I.COLOR,0,_))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),Ae.dispose(),Ee.dispose(),De.dispose(),R.dispose(),ye.dispose(),be.dispose(),Ce.dispose(),Le.dispose(),Re.dispose(),we.dispose(),Ve.dispose(),Ve.removeEventListener(`sessionstart`,Xe),Ve.removeEventListener(`sessionend`,Ze),Qe.stop()};function He(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function Ue(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=ve.autoReset,t=ke.enabled,n=ke.autoUpdate,r=ke.needsUpdate,i=ke.type;ze(),ve.autoReset=e,ke.enabled=t,ke.autoUpdate=n,ke.needsUpdate=r,ke.type=i}function We(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ge(e){let t=e.target;t.removeEventListener(`dispose`,Ge),Ke(t)}function Ke(e){B(e),R.remove(e)}function B(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){we.releaseProgram(e)}),e.isShaderMaterial&&we.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=fe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=st(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Se.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Le.setup(i,r,s,n,c);let h,g=Pe;if(c!==null&&(h=xe.get(c),g=Fe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)St(`THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(ge.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?xe.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function qe(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,it(e,t,n),e.side=0,e.needsUpdate=!0,it(e,t,n),e.side=2):it(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=De.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];qe(a,n,e),r.add(a)}else qe(t,n,e),r.add(t)}}),y=x.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){R.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ge.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Je=null;function Ye(e){Je&&Je(e)}function Xe(){Qe.stop()}function Ze(){Qe.start()}let Qe=new Aa;Qe.setAnimationLoop(Ye),typeof self<`u`&&Qe.setContext(self),this.setAnimationLoop=function(e){Je=e,Ve.setAnimationLoop(e),e===null?Qe.stop():Qe.start()},Ve.addEventListener(`sessionstart`,Xe),Ve.addEventListener(`sessionend`,Ze),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(t),t=Ve.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),y=De.get(e,x.length),y.init(t),x.push(y),le.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),se.setFromProjectionMatrix(le,Be,t.reversedDepth),ce=this.localClippingEnabled,F=Oe.init(this.clippingPlanes,ce),v=Ee.get(e,b.length),v.init(),b.push(v),Ve.enabled===!0&&Ve.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&$e(e,t,-1/0,S.sortObjects)}$e(e,t,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(ne,re),pe=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,pe&&Ae.addToRenderList(v,e),this.info.render.frame++,F===!0&&Oe.beginShadows();let n=y.state.shadowsArray;ke.render(n,e,t),F===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=v.opaque,i=v.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];tt(r,i,e,a)}pe&&Ae.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];et(v,e,r,r.viewport)}}else i.length>0&&tt(r,i,e,t),pe&&Ae.render(e),et(v,e,t);E!==null&&T===0&&(z.updateMultisampleRenderTarget(E),z.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),Le.resetDefaultState(),D=-1,O=null,x.pop(),x.length>0?(y=x[x.length-1],F===!0&&Oe.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),v=b.length>0?b[b.length-1]:null};function $e(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||se.intersectsSprite(e)){r&&de.setFromMatrixPosition(e.matrixWorld).applyMatrix4(le);let t=Ce.update(e),i=e.material;i.visible&&v.push(e,t,i,n,de.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||se.intersectsObject(e))){let t=Ce.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),de.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),de.copy(e.boundingSphere.center)),de.applyMatrix4(e.matrixWorld).applyMatrix4(le)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&v.push(e,t,s,n,de.z,o)}}else i.visible&&v.push(e,t,i,n,de.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)$e(i[e],t,n,r)}function et(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),F===!0&&Oe.setGlobalState(S.clippingPlanes,n),r&&L.viewport(k.copy(r)),i.length>0&&nt(i,t,n),a.length>0&&nt(a,t,n),o.length>0&&nt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new zt(1,1,{generateMipmaps:!0,type:ge.has(`EXT_color_buffer_half_float`)||ge.has(`EXT_color_buffer_float`)?g:l,minFilter:c,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:W.workingColorSpace}));let a=y.state.transmissionRenderTarget[r.id],o=r.viewport||k;a.setSize(o.z*S.transmissionResolutionScale,o.w*S.transmissionResolutionScale);let s=S.getRenderTarget(),u=S.getActiveCubeFace(),d=S.getActiveMipmapLevel();S.setRenderTarget(a),S.getClearColor(ee),M=S.getClearAlpha(),M<1&&S.setClearColor(16777215,.5),S.clear(),pe&&Ae.render(n);let f=S.toneMapping;S.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),F===!0&&Oe.setGlobalState(S.clippingPlanes,r),nt(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),ge.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,rt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}S.setRenderTarget(s,u,d),S.setClearColor(ee,M),p!==void 0&&(r.viewport=p),S.toneMapping=f}function nt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=a.group,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&rt(o,t,n,s,l,c)}}function rt(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function it(e,t,n){t.isScene!==!0&&(t=fe);let r=R.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=we.getParameters(e,i.state,a,t,n),c=we.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?be:ye).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ge),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return ot(e,s),u}else s.uniforms=we.getUniforms(e),e.onBeforeCompile(s,S),u=we.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Oe.uniform),ot(e,s),r.needsLights=lt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function at(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Cs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ot(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function st(e,t,n,r,i){t.isScene!==!0&&(t=fe),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ne,c=(r.isMeshStandardMaterial?be:ye).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=R.get(r),v=y.state.lights;if(F===!0&&(ce===!0||e!==O)){let t=e===O&&r.id===D;Oe.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Oe.numPlanes||_.numIntersection!==Oe.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=it(r,t,i));let C=!1,w=!1,T=!1,k=x.getUniforms(),A=_.uniforms;if(L.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==D&&(D=r.id,w=!0),C||O!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(I,`projectionMatrix`,e.projectionMatrix),k.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(I,ue.setFromMatrixPosition(e.matrixWorld)),_e.logarithmicDepthBuffer&&k.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),O!==e&&(O=e,w=!0,T=!0)}if(i.isSkinnedMesh){k.setOptional(I,i,`bindMatrix`),k.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(I,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(k.setOptional(I,i,`batchingTexture`),k.setValue(I,`batchingTexture`,i._matricesTexture,z),k.setOptional(I,i,`batchingIdTexture`),k.setValue(I,`batchingIdTexture`,i._indirectTexture,z),k.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(I,`batchingColorTexture`,i._colorsTexture,z));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&je.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(I,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(I,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&ct(A,T),a&&r.fog===!0&&Te.refreshFogUniforms(A,a),Te.refreshMaterialUniforms(A,r,P,N,y.state.transmissionRenderTarget[e.id]),Cs.upload(I,at(_),A,z)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Cs.upload(I,at(_),A,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(I,`center`,i.center),k.setValue(I,`modelViewMatrix`,i.modelViewMatrix),k.setValue(I,`normalMatrix`,i.normalMatrix),k.setValue(I,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Re.update(n,x),Re.bind(n,x)}}return x}function ct(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function lt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let ut=I.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=R.get(e);if(s.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(I.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(s.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,k.copy(e.viewport),A.copy(e.scissor),j=e.scissorTest}else k.copy(ie).multiplyScalar(P).floor(),A.copy(ae).multiplyScalar(P).floor(),j=oe;if(n!==0&&(i=ut),L.bindFramebuffer(I.FRAMEBUFFER,i)&&r&&L.drawBuffers(e,i),L.viewport(k),L.scissor(A),L.setScissorTest(j),a){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}D=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!_e.textureFormatReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!_e.textureTypeReadable(l)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),I.readPixels(t,n,r,i,Ie.convert(c),Ie.convert(l),a))}finally{let e=E===null?null:R.get(E).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!_e.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!_e.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),I.readPixels(t,n,r,i,Ie.convert(l),Ie.convert(u),0);let f=E===null?null:R.get(E).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,f);let p=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ct(I,p,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.deleteBuffer(d),I.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()};let dt=I.createFramebuffer(),ft=I.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(St(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ie.convert(t.format),_=Ie.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(I.UNPACK_ROW_LENGTH),b=I.getParameter(I.UNPACK_IMAGE_HEIGHT),x=I.getParameter(I.UNPACK_SKIP_PIXELS),S=I.getParameter(I.UNPACK_SKIP_ROWS),C=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,l),I.pixelStorei(I.UNPACK_SKIP_ROWS,u),I.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,dt),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,ft);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(I.UNPACK_ROW_LENGTH,y),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S),I.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,L.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Be}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=W._getDrawingBufferColorSpace(e),t.unpackColorSpace=W._getUnpackColorSpace()}},Nc=149597870700,Pc=9460730472580800,Fc=6371e3,Y=Math.PI/180,X=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Z=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Q=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Ic=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Lc=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Rc=e=>Math.hypot(e[0],e[1],e[2]),zc=e=>Q(e,1/Rc(e)),Bc=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],Vc=(e,t)=>[Math.cos(t*Y)*Math.cos(e*Y),Math.cos(t*Y)*Math.sin(e*Y),Math.sin(t*Y)],Hc=23.4392911*Y,Uc=e=>[e[0],e[1]*Math.cos(Hc)-e[2]*Math.sin(Hc),e[1]*Math.sin(Hc)+e[2]*Math.cos(Hc)],Wc=Vc(266.40499,-28.93617),Gc=Vc(192.85948,27.12825),Kc=Lc(Gc,Wc),qc=e=>X(X(Q(Wc,e[0]),Q(Kc,e[1])),Q(Gc,e[2])),Jc=(e,t)=>qc([Math.cos(t*Y)*Math.cos(e*Y),Math.cos(t*Y)*Math.sin(e*Y),Math.sin(t*Y)]),Yc=Jc(47.37,6.32);Lc(Yc,Jc(137.37,0));function Xc(e){return e.getTime()/864e5+2440587.5}function Zc(e){let t=(e-2451545)/36525;return((280.46061837+360.98564736629*(e-2451545)+387933e-9*t*t)%360+360)%360*Y}var Qc={mercury:[[.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593],[37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081]],venus:[[.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255],[39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418]],earth:[[1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0],[562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0]],mars:[[1.52371034,.0933941,1.84969142,-4.55343205,-23.94362959,49.55953891],[1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343]],jupiter:[[5.202887,.04838624,1.30439695,34.39644051,14.72847983,100.47390909],[-11607e-8,-13253e-8,-.00183714,3034.74612775,.21252668,.20469106]],saturn:[[9.53667594,.05386179,2.48599187,49.95424423,92.59887831,113.66242448],[-.0012506,-50991e-8,.00193609,1222.49362201,-.41897216,-.28867794]],uranus:[[19.18916464,.04725744,.77263783,313.23810451,170.9542763,74.01692503],[-.00196176,-4397e-8,-.00242939,428.48202785,.40805281,.04240589]],neptune:[[30.06992276,.00859048,1.77004347,-55.12002969,44.96476227,131.78422574],[26291e-8,5105e-8,35372e-8,218.45945325,-.32241464,-.00508664]]},$c=Object.keys(Qc);function el(e,t){let n=(t-2451545)/36525,[r,i]=Qc[e];return r.map((e,t)=>e+i[t]*n)}function tl(e,t){let[n,r,i,a,o,s]=e,c=(o-s)*Y,l=(t??a-o)%360*Y,u=l+r*Math.sin(l);for(let e=0;e<6;e++)u-=(u-r*Math.sin(u)-l)/(1-r*Math.cos(u));let d=n*(Math.cos(u)-r),f=n*Math.sqrt(1-r*r)*Math.sin(u),p=Math.cos(c),m=Math.sin(c),h=Math.cos(s*Y),g=Math.sin(s*Y),_=Math.cos(i*Y),v=Math.sin(i*Y),y=(p*h-m*g*_)*d+(-m*h-p*g*_)*f,b=(p*g+m*h*_)*d+(-m*g+p*h*_)*f,x=m*v*d+p*v*f;return[y*Nc,b*Nc,x*Nc]}function nl(e,t){return Uc(tl(el(e,t)))}function rl(e,t,n=256){let r=el(e,t);return Array.from({length:n+1},(e,t)=>Uc(tl(r,t/n*360)))}function il(e){let t=e-2451545,n=(218.316+13.176396*t)*Y,r=(134.963+13.064993*t)*Y,i=(93.272+13.22935*t)*Y,a=n+6.289*Y*Math.sin(r),o=5.128*Y*Math.sin(i),s=(385001-20905*Math.cos(r))*1e3;return Uc([s*Math.cos(o)*Math.cos(a),s*Math.cos(o)*Math.sin(a),s*Math.sin(o)])}function al(e,t,n){let r=Zc(n)+e.lon*Y,i=Fc+t;return[i*Math.cos(e.lat*Y)*Math.cos(r),i*Math.cos(e.lat*Y)*Math.sin(r),i*Math.sin(e.lat*Y)]}function ol(e,t){let n=Zc(t)+e.lon*Y,r=e.lat*Y,i=[Math.cos(r)*Math.cos(n),Math.cos(r)*Math.sin(n),Math.sin(r)],a=[-Math.sin(n),Math.cos(n),0];return{east:a,north:Lc(i,a),up:i}}var sl=(e,t,n,r)=>X(X(Q(e.east,t),Q(e.north,n)),Q(e.up,r));function cl(e,t,n){return{e:(n-e.lon)*Y*Fc*Math.cos(e.lat*Y),n:(t-e.lat)*Y*Fc}}var ll=Xc(new Date(Date.UTC(2026,3,12,15,22,0))),ul=[{name:`Khufu`,lat:29.979175,lon:31.134358,base:230.33,height:138.5,apex:146.6},{name:`Khafre`,lat:29.976065,lon:31.130806,base:215.25,height:136.4,apex:143.5},{name:`Menkaure`,lat:29.972528,lon:31.128083,base:103.4,height:61,apex:65.5}],dl={lat:29.968481,lon:31.127045},fl=1.65;function pl(e=60){let t=ol(dl,ll),n=t.up,r=al(dl,e+fl,ll),i=Q(r,-1),a=Q(n,-1.65),o=Z(i,nl(`earth`,ll)),s={};for(let e of $c)s[e]=X(o,nl(e,ll));s.earth=i;let c=X(i,il(ll)),l=zc(Z(o,i)),u=Uc([0,0,1]),d=ul.map(e=>{let{e:n,n:r}=cl(dl,e.lat,e.lon);return{...e,e:n,n:r,pos:X(a,sl(t,n,r,0))}}),f=Z(d[1].pos,a),p=zc(Z(f,Q(n,Ic(f,n)))),m=X(o,Q(Wc,26670*Pc)),h=(e,t,n)=>X(o,Q(Vc(e,t),n*Pc)),g=h(10.6847,41.269,2537e3),_=h(23.4621,30.6599,273e4),v=h(80.894,-69.756,163e3),y=h(13.187,-72.829,2e5),b=h(187.706,12.391,535e5),x=X(o,Q(Jc(307,9),25e7*Pc)),S=zc(Z(g,m)),C=X(m,Q(Z(g,m),.4)),w=zc(Z(Gc,Q(S,Ic(Gc,S)))),T=X(C,Q(Z(b,C),.45));return{jd:ll,frame:t,U:n,H:p,E:t.east,N:t.north,home:[0,0,0],feet:a,homeECI:r,earthCenter:i,sun:o,sunDir:l,planets:s,moon:c,eclNorth:u,pyr:d,galNorth:Gc,galCenter:m,m31:g,m33:_,lmc:v,smc:y,virgo:b,greatAttractor:x,lgCenter:C,uLG:w,virgoSC:T,sgNorth:Yc,side:zc(Lc(p,n)),AU:Nc,LY:Pc}}function ml(e,t){let n=e.length,r=[],i=Array(n);for(let i=0;i<n-1;i++)r.push((t[i+1]-t[i])/(e[i+1]-e[i]));i[0]=r[0],i[n-1]=r[n-2];for(let e=1;e<n-1;e++)i[e]=r[e-1]*r[e]<=0?0:(r[e-1]+r[e])/2;for(let e=0;e<n-1;e++){if(r[e]===0){i[e]=0,i[e+1]=0;continue}let t=i[e]/r[e],n=i[e+1]/r[e],a=t*t+n*n;if(a>9){let o=3/Math.sqrt(a);i[e]=o*t*r[e],i[e+1]=o*n*r[e]}}return r=>{if(r<=e[0])return t[0];if(r>=e[n-1])return t[n-1];let a=0;for(;r>e[a+1];)a++;let o=e[a+1]-e[a],s=(r-e[a])/o,c=s*s,l=c*s;return(2*l-3*c+1)*t[a]+(l-2*c+s)*o*i[a]+(-2*l+3*c)*t[a+1]+(l-c)*o*i[a+1]}}var hl=e=>e*e*e*(e*(e*6-15)+10),gl=[[0,0],[.007,0],[.0187,.25],[.0324,.8],[.0511,.8],[.0628,.81],[.0861,.81],[.0978,.82],[.1181,.82],[.1298,.83],[.1516,.83],[.1633,.84],[.1851,.84],[.2065,1.7],[.2202,2.25],[.2352,2.85],[.2538,3.6],[.2655,4.15],[.2772,4.7],[.2889,5.2],[.3006,5.7],[.3123,6.2],[.3239,7.05],[.3356,7.45],[.3473,7.85],[.359,8.55],[.3707,8.95],[.3824,9.4],[.394,9.85],[.4057,10.35],[.4174,10.95],[.4291,11.6],[.4408,12.15],[.4525,12.4],[.4641,12.7],[.4758,12.95],[.4875,13.25],[.4992,14.1],[.5109,15.3],[.5226,15.42],[.5342,15.55],[.5459,15.85],[.5576,16.1],[.5693,16.35],[.581,16.6],[.5927,16.85],[.6043,17.95],[.616,18.55],[.6277,19.05],[.6394,19.6],[.6511,19.75],[.6628,19.9],[.6744,20.1],[.6861,20.9],[.6978,21.25],[.7095,22],[.7212,22.2],[.7328,22.4],[.7445,22.6],[.7562,22.8],[.7679,23.2],[.7796,23.55],[.7913,23.9],[.8029,24.2],[.8146,24.5],[.8263,24.62],[.838,24.75],[.8497,25],[.8614,25.2],[.873,25.3],[.8847,25.45],[.8964,25.55],[.9081,25.95],[.9198,26.25],[.9315,26.38],[.9431,26.5],[.9548,27.05],[.9665,28.2],[.9782,29],[1,29.6]],_l=ml(gl.map(e=>e[0]),gl.map(e=>e[1]));function vl(e){let{U:t,H:n,feet:r,home:i,earthCenter:a,sun:o,sunDir:s,eclNorth:c,galNorth:l,galCenter:u,lgCenter:d,uLG:f,sgNorth:p,virgoSC:m,greatAttractor:h}=e,g=(...e)=>zc(e.reduce((e,[t,n])=>X(e,Q(t,n)),[0,0,0])),_=(e,i=0)=>X(r,X(Q(n,e),Q(t,i)));return[{L:0,u:g([t,.25],[n,-.97]),aim:_(1e3,45),upRef:t},{L:.3,u:g([t,.25],[n,-.97]),aim:_(600,20),upRef:t},{L:.75,u:g([t,.25],[n,-.97]),aim:_(40,-7.4),upRef:t},{L:1.3,u:g([t,.47],[n,-.88]),aim:_(30),upRef:t},{L:2,u:g([t,.48],[n,-.88]),aim:_(115),upRef:t},{L:2.6,u:g([t,.5],[n,-.86]),aim:_(330),upRef:t},{L:3.3,u:g([t,.75],[n,-.66]),aim:_(560),upRef:n},{L:4,u:g([t,1],[n,-.18]),aim:_(3700),upRef:n},{L:4.9,u:t,aim:_(200),upRef:n},{L:6.5,u:t,aim:a,upRef:n},{L:7.4,u:t,aim:a},{L:8.4,u:g([t,.7],[c,.5],[s,.3]),aim:a},{L:9.4,u:g([t,.2],[c,1],[s,.6]),aim:a},{L:10.2,u:g([c,1],[s,.6]),aim:a},{L:10.7,u:g([c,1],[s,.6]),aim:Bc(a,o,.08)},{L:11.1,u:g([c,1],[s,.55]),aim:Bc(a,o,.25)},{L:11.5,u:g([c,1],[s,.45]),aim:Bc(a,o,.55)},{L:11.9,u:g([c,1],[s,.3]),aim:Bc(a,o,.85)},{L:12.4,u:g([c,1],[s,.2]),aim:o},{L:13.4,u:c,aim:o},{L:15,u:c,aim:o},{L:16,u:g([c,1],[l,.5]),aim:o},{L:17,u:g([c,.5],[l,1]),aim:o},{L:18,u:l,aim:o},{L:20.2,u:l,aim:o},{L:20.8,u:l,aim:Bc(o,u,.5)},{L:21.5,u:l,aim:u},{L:22,u:l,aim:Bc(u,d,.3)},{L:22.6,u:f,aim:d},{L:23.2,u:g([f,1],[p,.3]),aim:d},{L:24,u:g([f,.6],[p,1]),aim:Bc(d,m,.3)},{L:24.5,u:g([f,.15],[p,1]),aim:m},{L:25.1,u:p,aim:h},{L:26,u:p,aim:Bc(h,i,.5)},{L:27,u:p,aim:i},{L:30,u:p,aim:i}]}function yl(e,t){let n=0;for(;n<e.length-2&&t>e[n+1].L;)n++;let r=e[n],i=e[n+1],a=hl(Math.min(1,Math.max(0,(t-r.L)/(i.L-r.L))));return{u:zc(Bc(r.u,i.u,a)),aim:Bc(r.aim,i.aim,a),upRef:r.upRef&&i.upRef?zc(Bc(r.upRef,i.upRef,a)):r.upRef&&a<1?r.upRef:void 0,upWeight:r.upRef?i.upRef?1:1-a:0}}function bl(e,t,n){let r=Ic(t,n),i=Lc(t,n),a=Rc(i);if(a<1e-12)return e;let o=Q(i,1/a),s=Math.atan2(a,r),c=Math.cos(s),l=Math.sin(s);return X(X(Q(e,c),Q(Lc(o,e),l)),Q(o,Ic(o,e)*(1-c)))}function xl(e,t=2e4){let n=vl(e),r=[],i=[],a=[],o=[],s=null,c=e.U;for(let e=0;e<=t;e++){let l=_l(e/t),u=10**l-1,d=yl(n,l),f=Q(d.u,u),p=zc(Z(d.aim,f)),m=s?bl(c,s,p):c;d.upRef&&d.upWeight>0&&(m=zc(Bc(m,d.upRef,.02*d.upWeight))),m=zc(Z(m,Q(p,Ic(m,p)))),r.push(f),i.push(p),a.push(m),o.push(l),s=p,c=m}return{at:e=>{let n=Math.min(1,Math.max(0,e))*t,s=Math.min(t-1,Math.floor(n)),c=n-s,l=Bc(r[s],r[s+1],c);return{p:e,L:o[s]+(o[s+1]-o[s])*c,d:Rc(l),pos:l,fwd:zc(Bc(i[s],i[s+1],c)),up:zc(Bc(a[s],a[s+1],c))}},samples:t,pos:r,fwd:i,up:a,Ls:o}}var Sl={stencilWrite:!0,stencilRef:1,stencilFunc:519,stencilZPass:Le},Cl={stencilWrite:!0,stencilRef:0,stencilFunc:514,stencilWriteMask:0},wl=`out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`;function Tl(e,t,n){let r=new Ui({glslVersion:ze,vertexShader:`precision highp float;
in vec3 position;
`+wl,fragmentShader:`precision highp float;
`+e,uniforms:t,depthTest:!1,depthWrite:!1,...n}),i=new Tr;i.setAttribute(`position`,new K(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let a=new Lr(i,r);a.frustumCulled=!1;let o=new ci;return o.add(a),{scene:o,material:r}}var El={antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:`high-performance`},Dl=class{renderer;camera=new $r(50,1,.1,1e3);hdr;msaa=-1;bloomRTs=[];down=Tl(`uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
void main() {
vec2 t = uTexel;
vec3 c = texture(tSrc, vUv).rgb * 4.0 + texture(tSrc, vUv + vec2(-t.x, -t.y)).rgb + texture(tSrc, vUv + vec2(t.x, -t.y)).rgb
+ texture(tSrc, vUv + vec2(-t.x, t.y)).rgb + texture(tSrc, vUv + vec2(t.x, t.y)).rgb;
o = vec4(min(c / 8.0, vec3(6e4)), 1.0);
}`,{tSrc:{value:null},uTexel:{value:new V}});up=Tl(`uniform sampler2D tSrc; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
void main() {
vec2 t = uTexel * 1.5;
vec3 c = texture(tSrc, vUv + vec2(-t.x, 0)).rgb + texture(tSrc, vUv + vec2(t.x, 0)).rgb
+ texture(tSrc, vUv + vec2(0, -t.y)).rgb + texture(tSrc, vUv + vec2(0, t.y)).rgb;
o = vec4(c * 0.25, 1.0);
}`,{tSrc:{value:null},uTexel:{value:new V}},{blending:2,transparent:!0});final=Tl(`uniform sampler2D tHdr; uniform sampler2D tBloom; uniform float uExposure; uniform float uBloom; uniform float uFade; uniform float uTime;
in vec2 vUv; out vec4 o;
vec3 agx(vec3 c) {
const mat3 inM = mat3(0.842479062253094, 0.0423282422610123, 0.0423756549057051, 0.0784335999999992, 0.878468636469772, 0.0784336,
0.0792237451477643, 0.0791661274605434, 0.879142973793104);
const mat3 outM = mat3(1.19687900512017, -0.0528968517574562, -0.0529716355144438, -0.0980208811401368, 1.15190312990417, -0.0980434501171241,
-0.0990297440797205, -0.0989611768448433, 1.15107367264116);
c = inM * max(c, vec3(1e-10));
c = clamp(log2(c), -12.47393, 4.026069);
c = (c + 12.47393) / 16.5;
vec3 x2 = c * c, x4 = x2 * x2;
c = 15.5 * x4 * x2 - 40.14 * x4 * c + 31.96 * x4 - 6.868 * x2 * c + 0.4298 * x2 + 0.1191 * c - 0.00232;
c = outM * c;
return clamp(pow(max(c, 0.0), vec3(2.2)), 0.0, 1.0);
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
void main() {
vec3 c = texture(tHdr, vUv).rgb + texture(tBloom, vUv).rgb * uBloom;
c = agx(c * uExposure);
vec2 q = vUv - 0.5;
c *= 1.0 - dot(q, q) * 0.35;
c = pow(c, vec3(1.0 / 2.2));
c *= uFade;
c += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
o = vec4(c, 1.0);
}`,{tHdr:{value:null},tBloom:{value:null},uExposure:{value:1},uBloom:{value:.06},uFade:{value:1},uTime:{value:0}});timing;enableTiming(){let e=this.renderer.getContext(),t=e.getExtension(`EXT_disjoint_timer_query_webgl2`);return t&&(this.timing={gl:e,ext:t,open:null,pending:[],totals:{}}),this.timing?.totals}tic(e){let t=this.timing;if(!t)return;let n=t.gl.createQuery();t.gl.beginQuery(t.ext.TIME_ELAPSED_EXT,n),t.open={name:e,q:n}}toc(){let e=this.timing;e&&e.open&&(e.gl.endQuery(e.ext.TIME_ELAPSED_EXT),e.pending.push(e.open),e.open=null,e.pending=e.pending.filter(({name:t,q:n})=>{if(!e.gl.getQueryParameter(n,e.gl.QUERY_RESULT_AVAILABLE))return!0;let r=e.gl.getQueryParameter(n,e.gl.QUERY_RESULT)/1e6,i=e.totals[t]??=[0,0];return i[0]+=r,i[1]++,e.gl.deleteQuery(n),!1}))}constructor(e){this.renderer=new Mc({canvas:e,...El,logarithmicDepthBuffer:!0}),this.renderer.autoClear=!1,this.renderer.outputColorSpace=Ne}resize(e,t,n){this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1);let r=Math.round(e*n),i=Math.round(t*n);if(!this.hdr){let e=this.renderer.extensions.has(`EXT_color_buffer_float`);this.hdr=new zt(r,i,{type:e?x:g,format:e?C:w,samples:this.msaa>=0?this.msaa:4,depthBuffer:!0,stencilBuffer:!0});for(let e=0;e<6;e++)this.bloomRTs.push(new zt(1,1,{type:g,depthBuffer:!1}))}this.hdr.setSize(r,i);let a=r,o=i;for(let e of this.bloomRTs)a=Math.max(1,a>>1),o=Math.max(1,o>>1),e.setSize(a,o);this.camera.aspect=e/t}aim(e,t){let n=new H(-e.fwd[0],-e.fwd[1],-e.fwd[2]),r=new H(...e.up),i=new H().crossVectors(r,n).normalize();this.camera.matrixAutoUpdate=!1,this.camera.matrix.makeBasis(i,r,n),this.camera.matrixWorld.copy(this.camera.matrix),this.camera.matrixWorldInverse.copy(this.camera.matrix).invert(),this.camera.fov=t}renderLayer(e,t){let n=e.origin(),r=1/e.unit;e.root.position.set((n[0]-t.pos[0])*r,(n[1]-t.pos[1])*r,(n[2]-t.pos[2])*r);let[i,a]=e.clip(t);this.camera.near=i,this.camera.far=a,this.camera.updateProjectionMatrix(),this.renderer.clearDepth(),this.tic(e.name),this.renderer.render(e.scene,this.camera),this.toc()}begin(){this.renderer.setRenderTarget(this.hdr),this.renderer.setClearColor(0,1),this.renderer.clear(!0,!0,!0)}pass(e,t=`pass`){this.tic(t),this.renderer.render(e,this.camera),this.toc()}finish(e,t,n,r=.06){let i=this.renderer;this.tic(`post`);let a=this.hdr.texture,o=this.hdr.width,s=this.hdr.height;for(let e of this.bloomRTs)this.down.material.uniforms.tSrc.value=a,this.down.material.uniforms.uTexel.value.set(.5/o,.5/s),i.setRenderTarget(e),i.render(this.down.scene,this.camera),a=e.texture,o=e.width,s=e.height;for(let e=this.bloomRTs.length-1;e>0;e--){let t=this.bloomRTs[e],n=this.bloomRTs[e-1];this.up.material.uniforms.tSrc.value=t.texture,this.up.material.uniforms.uTexel.value.set(.5/t.width,.5/t.height),i.setRenderTarget(n),i.render(this.up.scene,this.camera)}let c=this.final.material.uniforms;c.tHdr.value=this.hdr.texture,c.tBloom.value=this.bloomRTs[0].texture,c.uExposure.value=e,c.uFade.value=t,c.uTime.value=n%100,c.uBloom.value=r,i.setRenderTarget(null),i.render(this.final.scene,this.camera),this.toc()}},Ol=`uniform vec3 uSunDir;
uniform float uSunPower;
const float PR = 6371.0;
const float AR = 6471.0;
const vec3 BR = vec3(5.802e-3, 13.558e-3, 33.1e-3);
const float BM = 9.0e-3;
const vec3 BO = vec3(0.650e-3, 1.881e-3, 0.085e-3);
const float HR = 8.0;
const float HM = 1.4;
vec2 sphereHit(vec3 o, vec3 d, float r) {
float b = dot(o, d), c = dot(o, o) - r * r, h = b * b - c;
if (h < 0.0) return vec2(1e9, -1e9);
h = sqrt(h);
return vec2(-b - h, -b + h);
}
vec3 densities(vec3 p) {
float h = max(length(p) - PR, 0.0);
float oz = max(0.0, 1.0 - abs(h - 25.0) / 15.0);
return vec3(exp(-h / HR), exp(-h / HM), oz);
}
vec3 extinction(vec3 d) { return BR * d.x + vec3(BM * 1.11) * d.y + BO * d.z; }
uniform sampler2D tTrans;
vec3 sunTransmittance(vec3 p) {
float r = length(p);
float h = clamp((r - PR) / (AR - PR), 0.0, 1.0);
float mu = dot(p / r, uSunDir);
return texture(tTrans, vec2(mu * 0.5 + 0.5, sqrt(h))).rgb;
}
float phaseR(float mu) { return 0.0596831 * (1.0 + mu * mu); }
float phaseM(float mu) {
const float g = 0.78;
return 0.1193662 * (1.0 - g * g) * (1.0 + mu * mu) / ((2.0 + g * g) * pow(max(1.0 + g * g - 2.0 * g * mu, 1e-4), 1.5));
}
void atmosphere(vec3 o, vec3 d, float tMax, out vec3 inscatter, out vec3 trans) {
inscatter = vec3(0.0); trans = vec3(1.0);
vec2 a = sphereHit(o, d, AR);
if (a.y < 0.0) return;
float t0 = max(a.x, 0.0), t1 = min(a.y, tMax);
vec2 g = sphereHit(o, d, PR);
if (g.x > 0.0) t1 = min(t1, g.x);
if (t1 <= t0) return;
const int N = 12;
float mu = dot(d, uSunDir);
float pr = phaseR(mu), pm = phaseM(mu);
float prev = t0;
for (int i = 0; i < N; i++) {
float f = (float(i) + 1.0) / float(N);
float t = t0 + (t1 - t0) * f * f;
float ds = t - prev;
vec3 p = o + d * (prev + 0.5 * ds);
prev = t;
vec3 den = densities(p);
vec3 ext = extinction(den) * ds;
vec3 sunT = sunTransmittance(p);
vec3 s = (BR * den.x * pr + vec3(BM) * den.y * pm) * sunT;
vec3 stepT = exp(-ext);
inscatter += trans * s * (1.0 - stepT) / max(extinction(den), vec3(1e-9));
trans *= stepT;
}
inscatter *= uSunPower;
}`;function kl(e){let n=new zt(256,64,{type:g,depthBuffer:!1});n.texture.minFilter=n.texture.magFilter=o,n.texture.wrapS=n.texture.wrapT=t;let r=new Ui({glslVersion:ze,vertexShader:`precision highp float;
in vec3 position; out vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`precision highp float;
      const float PR = 6371.0; const float AR = 6471.0;
      const vec3 BR = vec3(5.802e-3, 13.558e-3, 33.1e-3); const float BM = 9.0e-3; const vec3 BO = vec3(0.650e-3, 1.881e-3, 0.085e-3);
      in vec2 vUv; out vec4 o;
      vec2 hit(vec3 o, vec3 d, float r) { float b = dot(o, d), c = dot(o, o) - r * r, h = b * b - c; if (h < 0.0) return vec2(1e9, -1e9); h = sqrt(h); return vec2(-b - h, -b + h); }
      void main() {
        float mu = vUv.x * 2.0 - 1.0, h = vUv.y * vUv.y * (AR - PR);
        vec3 p = vec3(0.0, PR + h, 0.0), d = vec3(sqrt(max(0.0, 1.0 - mu * mu)), mu, 0.0);
        vec2 g = hit(p, d, PR);
        if (g.x > 0.0) { o = vec4(0.0, 0.0, 0.0, 1.0); return; }
        float len = hit(p, d, AR).y, ds = len / 40.0;
        vec3 od = vec3(0.0);
        for (int i = 0; i < 40; i++) {
          vec3 q = p + d * (ds * (float(i) + 0.5));
          float hh = max(length(q) - PR, 0.0);
          od += vec3(exp(-hh / 8.0), exp(-hh / 1.4), max(0.0, 1.0 - abs(hh - 25.0) / 15.0));
        }
        vec3 ext = (BR * od.x + vec3(BM * 1.11) * od.y + BO * od.z) * ds;
        o = vec4(exp(-ext), 1.0);
      }`}),i=new Tr;i.setAttribute(`position`,new K(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let a=new Lr(i,r);a.frustumCulled=!1;let s=new ci;return s.add(a),e.setRenderTarget(n),e.render(s,new Yr),e.setRenderTarget(null),n.texture}function Al(){let e={uSunDir:{value:new H},uSunPower:{value:22},uCamKm:{value:new H},uInvProj:{value:new gn},uCamRot:{value:new gn},uSunDisc:{value:1},uAmount:{value:1},tTrans:{value:null}},{scene:t,material:n}=Tl(`${Ol}
uniform vec3 uCamKm; uniform mat4 uInvProj; uniform mat4 uCamRot; uniform float uSunDisc; uniform float uAmount;
in vec2 vUv; out vec4 o;
void main() {
vec4 v = uInvProj * vec4(vUv * 2.0 - 1.0, 1.0, 1.0);
vec3 d = normalize((uCamRot * vec4(normalize(v.xyz / v.w), 0.0)).xyz);
vec3 ins, tr;
atmosphere(uCamKm, d, 1e9, ins, tr);
vec3 c = ins;
float cosSun = dot(d, uSunDir);
vec2 g = sphereHit(uCamKm, d, PR);
if (g.x > 0.0 && g.y > g.x && length(uCamKm) < PR + 300.0) {
vec3 hp = uCamKm + d * g.x;
vec3 n = normalize(hp);
vec3 lit = vec3(0.30, 0.22, 0.14) / 3.14159 * uSunPower * sunTransmittance(hp + n * 0.01) * max(dot(n, uSunDir), 0.0);
c += lit * tr;
}
if (g.x < 0.0 || g.y < 0.0) {
float disc = smoothstep(0.999989, 0.9999905, cosSun);
c += uSunDisc * (disc * 3000.0 + pow(max(cosSun, 0.0), 2000.0) * 6.0) * tr * vec3(1.0, 0.96, 0.9);
}
o = vec4(c * uAmount, 1.0);
}`,e,{blending:2,transparent:!0,...Cl});return{scene:t,uniforms:e,update(t,n,r){e.uInvProj.value.copy(t.projectionMatrixInverse),e.uCamRot.value.extractRotation(t.matrixWorld),e.uCamKm.value.copy(n),e.uSunDir.value.copy(r)},material:n}}function jl(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ml=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453123;return n-Math.floor(n)};function Nl(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=Ml(n,r),l=Ml(n+1,r),u=Ml(n,r+1),d=Ml(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}function Pl(e,t,n=5){let r=0,i=.5,a=1;for(let o=0;o<n;o++)r+=i*Nl(e*a,t*a),a*=2.03,i*=.5;return r}var Fl=`float h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float h13(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float vn2(vec2 p) {
vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
return mix(mix(h12(i), h12(i + vec2(1, 0)), u.x), mix(h12(i + vec2(0, 1)), h12(i + vec2(1, 1)), u.x), u.y);
}
float vn3(vec3 p) {
vec3 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
return mix(mix(mix(h13(i), h13(i + vec3(1, 0, 0)), u.x), mix(h13(i + vec3(0, 1, 0)), h13(i + vec3(1, 1, 0)), u.x), u.y),
mix(mix(h13(i + vec3(0, 0, 1)), h13(i + vec3(1, 0, 1)), u.x), mix(h13(i + vec3(0, 1, 1)), h13(i + vec3(1, 1, 1)), u.x), u.y), u.z);
}
float fbm2(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 3; i++) { s += a * vn2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
float fbm3(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 3; i++) { s += a * vn3(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }`,Il=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){let t=this.workerCreator();t.addEventListener(`message`,this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){let n=this.workersResolve[e];if(n&&n(t),this.queue.length){let{resolve:t,msg:n,transfer:r}=this.queue.shift();this.workersResolve[e]=t,this.workers[e].postMessage(n,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{let r=this._getIdleWorker();r===-1?this.queue.push({resolve:n,msg:e,transfer:t}):(this._initWorker(r),this.workerStatus|=1<<r,this.workersResolve[r]=n,this.workers[r].postMessage(e,t))})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}},Ll=1000054e3,Rl=1000054001,zl=1000054004,Bl=1000054005,Vl=1000066e3,Hl=1000066004,Ul=class{constructor(e,t,n,r){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=r,this._offset=0}_nextUint8(){let e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){let e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){let e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){let e=this._dataView.getUint32(this._offset,this._littleEndian)+2**32*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){let e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){let t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){let n=this._offset,r=0;for(;this._dataView.getUint8(this._offset)!==t&&r<e;)r++,this._offset++;return r<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,r)}};new Uint8Array([0]);var Wl=[171,75,84,88,32,50,48,187,13,10,26,10];function Gl(e){return new TextDecoder().decode(e)}function Kl(e){let t=new Uint8Array(e.buffer,e.byteOffset,Wl.length);if(t[0]!==Wl[0]||t[1]!==Wl[1]||t[2]!==Wl[2]||t[3]!==Wl[3]||t[4]!==Wl[4]||t[5]!==Wl[5]||t[6]!==Wl[6]||t[7]!==Wl[7]||t[8]!==Wl[8]||t[9]!==Wl[9]||t[10]!==Wl[10]||t[11]!==Wl[11])throw Error(`Missing KTX 2.0 identifier.`);let n={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},r=17*Uint32Array.BYTES_PER_ELEMENT,i=new Ul(e,Wl.length,r,!0);n.vkFormat=i._nextUint32(),n.typeSize=i._nextUint32(),n.pixelWidth=i._nextUint32(),n.pixelHeight=i._nextUint32(),n.pixelDepth=i._nextUint32(),n.layerCount=i._nextUint32(),n.faceCount=i._nextUint32(),n.levelCount=i._nextUint32(),n.supercompressionScheme=i._nextUint32();let a=i._nextUint32(),o=i._nextUint32(),s=i._nextUint32(),c=i._nextUint32(),l=i._nextUint64(),u=i._nextUint64(),d=3*Math.max(n.levelCount,1)*8,f=new Ul(e,Wl.length+r,d,!0);for(let t=0,r=Math.max(n.levelCount,1);t<r;t++)n.levels.push({levelData:new Uint8Array(e.buffer,e.byteOffset+f._nextUint64(),f._nextUint64()),uncompressedByteLength:f._nextUint64()});let p=new Ul(e,a,o,!0);p._skip(4);let m=p._nextUint16(),h=p._nextUint16(),g=p._nextUint16(),_=p._nextUint16(),v={vendorId:m,descriptorType:h,versionNumber:g,colorModel:p._nextUint8(),colorPrimaries:p._nextUint8(),transferFunction:p._nextUint8(),flags:p._nextUint8(),texelBlockDimension:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],bytesPlane:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],samples:[]},y=(_/4-6)/4;for(let e=0;e<y;e++){let t={bitOffset:p._nextUint16(),bitLength:p._nextUint8(),channelType:p._nextUint8(),samplePosition:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&t.channelType?(t.sampleLower=p._nextInt32(),t.sampleUpper=p._nextInt32()):(t.sampleLower=p._nextUint32(),t.sampleUpper=p._nextUint32()),v.samples[e]=t}n.dataFormatDescriptor.length=0,n.dataFormatDescriptor.push(v);let b=new Ul(e,s,c,!0);for(;b._offset<c;){let e=b._nextUint32(),t=b._scan(e),r=Gl(t);if(n.keyValue[r]=b._nextUint8Array(e-t.byteLength-1),r.match(/^ktx/i)){let e=Gl(n.keyValue[r]);n.keyValue[r]=e.substring(0,e.lastIndexOf(`\0`))}b._skip(e%4?4-e%4:0)}if(u<=0)return n;let x=new Ul(e,l,u,!0),S=x._nextUint16(),C=x._nextUint16(),w=x._nextUint32(),T=x._nextUint32(),E=x._nextUint32(),D=x._nextUint32(),O=[];for(let e=0,t=Math.max(n.levelCount,1);e<t;e++)O.push({imageFlags:x._nextUint32(),rgbSliceByteOffset:x._nextUint32(),rgbSliceByteLength:x._nextUint32(),alphaSliceByteOffset:x._nextUint32(),alphaSliceByteLength:x._nextUint32()});let k=l+x._offset,A=k+w,j=A+T,ee=j+E;return n.globalData={endpointCount:S,selectorCount:C,imageDescs:O,endpointsData:new Uint8Array(e.buffer,e.byteOffset+k,w),selectorsData:new Uint8Array(e.buffer,e.byteOffset+A,T),tablesData:new Uint8Array(e.buffer,e.byteOffset+j,E),extendedData:new Uint8Array(e.buffer,e.byteOffset+ee,D)},n}var ql,Jl,Yl,Xl={env:{emscripten_notify_memory_growth:function(e){Yl=new Uint8Array(Jl.exports.memory.buffer)}}},Zl=class{init(){return ql||(ql=typeof fetch<`u`?fetch(`data:application/wasm;base64,`+Ql).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Xl)).then(this._init):WebAssembly.instantiate(Buffer.from(Ql,`base64`),Xl).then(this._init),ql)}_init(e){Jl=e.instance,Xl.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Jl)throw Error(`ZSTDDecoder: Await .init() before decoding.`);let n=e.byteLength,r=Jl.exports.malloc(n);Yl.set(e,r),t||=Number(Jl.exports.ZSTD_findDecompressedSize(r,n));let i=Jl.exports.malloc(t),a=Jl.exports.ZSTD_decompress(i,t,r,n),o=Yl.slice(i,i+a);return Jl.exports.free(r),Jl.exports.free(i),o}},Ql=`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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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`,$l=`display-p3`,eu=`display-p3-linear`;({...W.spaces[Me]});var tu=new WeakMap,nu=0,ru,iu=class e extends ca{constructor(e){super(e),this.transcoderPath=``,this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Il,this.workerSourceURL=``,this.workerConfig=null,typeof MSC_TRANSCODER<`u`&&console.warn(`THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.`)}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync(`texture-compression-astc`),astcHDRSupported:!1,etc1Supported:await e.hasFeatureAsync(`texture-compression-etc2`),etc2Supported:await e.hasFeatureAsync(`texture-compression-etc2`),dxtSupported:await e.hasFeatureAsync(`texture-compression-bc`),bptcSupported:await e.hasFeatureAsync(`texture-compression-bc`),pvrtcSupported:await e.hasFeatureAsync(`texture-compression-pvrtc`)},this}detectSupport(e){return this.workerConfig=e.isWebGPURenderer===!0?{astcSupported:e.hasFeature(`texture-compression-astc`),astcHDRSupported:!1,etc1Supported:e.hasFeature(`texture-compression-etc2`),etc2Supported:e.hasFeature(`texture-compression-etc2`),dxtSupported:e.hasFeature(`texture-compression-bc`),bptcSupported:e.hasFeature(`texture-compression-bc`),pvrtcSupported:e.hasFeature(`texture-compression-pvrtc`)}:{astcSupported:e.extensions.has(`WEBGL_compressed_texture_astc`),astcHDRSupported:e.extensions.has(`WEBGL_compressed_texture_astc`)&&e.extensions.get(`WEBGL_compressed_texture_astc`).getSupportedProfiles().includes(`hdr`),etc1Supported:e.extensions.has(`WEBGL_compressed_texture_etc1`),etc2Supported:e.extensions.has(`WEBGL_compressed_texture_etc`),dxtSupported:e.extensions.has(`WEBGL_compressed_texture_s3tc`),bptcSupported:e.extensions.has(`EXT_texture_compression_bptc`),pvrtcSupported:e.extensions.has(`WEBGL_compressed_texture_pvrtc`)||e.extensions.has(`WEBKIT_WEBGL_compressed_texture_pvrtc`)},this}init(){if(!this.transcoderPending){let t=new da(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);let n=t.loadAsync(`basis_transcoder.js`),r=new da(this.manager);r.setPath(this.transcoderPath),r.setResponseType(`arraybuffer`),r.setWithCredentials(this.withCredentials);let i=r.loadAsync(`basis_transcoder.wasm`);this.transcoderPending=Promise.all([n,i]).then(([t,n])=>{let r=e.BasisWorker.toString(),i=[`/* constants */`,`let _EngineFormat = `+JSON.stringify(e.EngineFormat),`let _EngineType = `+JSON.stringify(e.EngineType),`let _TranscoderFormat = `+JSON.stringify(e.TranscoderFormat),`let _BasisFormat = `+JSON.stringify(e.BasisFormat),`/* basis_transcoder.js */`,t,`/* worker */`,r.substring(r.indexOf(`{`)+1,r.lastIndexOf(`}`))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([i])),this.transcoderBinary=n,this.workerPool.setWorkerCreator(()=>{let e=new Worker(this.workerSourceURL),t=this.transcoderBinary.slice(0);return e.postMessage({type:`init`,config:this.workerConfig,transcoderBinary:t},[t]),e})}),nu>0&&console.warn(`THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances.`),nu++}return this.transcoderPending}load(e,t,n,r){if(this.workerConfig===null)throw Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");let i=new da(this.manager);i.setPath(this.path),i.setCrossOrigin(this.crossOrigin),i.setWithCredentials(this.withCredentials),i.setResponseType(`arraybuffer`),i.load(e,e=>{this.parse(e,t,r)},n,r)}parse(e,t,n){if(this.workerConfig===null)throw Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(tu.has(e))return tu.get(e).promise.then(t).catch(n);this._createTexture(e).then(e=>t?t(e):null).catch(n)}_createTextureFrom(e,t){let{type:n,error:r,data:{faces:i,width:a,height:s,format:l,type:u,dfdFlags:d}}=e;if(n===`error`)return Promise.reject(r);let f;if(t.faceCount===6)f=new Ri(i,l,u);else{let e=i[0].mipmaps;f=t.layerCount>1?new Li(e,a,s,t.layerCount,l,u):new Ii(e,a,s,l,u)}return f.minFilter=i[0].mipmaps.length===1?o:c,f.magFilter=o,f.generateMipmaps=!1,f.needsUpdate=!0,f.colorSpace=lu(t),f.premultiplyAlpha=!!(d&1),f}async _createTexture(e,t={}){let n=Kl(new Uint8Array(e)),r=n.vkFormat===1000066e3&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===0||r&&!this.workerConfig.astcHDRSupported))return cu(n);let i=t,a=this.init().then(()=>this.workerPool.postMessage({type:`transcode`,buffer:e,taskConfig:i},[e])).then(e=>this._createTextureFrom(e.data,n));return tu.set(e,{promise:a}),a}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),nu--}};iu.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2},iu.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25},iu.EngineFormat={RGBAFormat:w,RGBA_ASTC_4x4_Format:F,RGB_BPTC_UNSIGNED_Format:ye,RGBA_BPTC_Format:R,RGBA_ETC2_EAC_Format:se,RGBA_PVRTC_4BPPV1_Format:re,RGBA_S3TC_DXT5_Format:N,RGB_ETC1_Format:ae,RGB_ETC2_Format:oe,RGB_PVRTC_4BPPV1_Format:P,RGBA_S3TC_DXT1_Format:M},iu.EngineType={UnsignedByteType:l,HalfFloatType:g,FloatType:h},iu.BasisWorker=function(){let e,t,n,r=_EngineFormat,i=_EngineType,a=_TranscoderFormat,o=_BasisFormat;self.addEventListener(`message`,function(n){let r=n.data;switch(r.type){case`init`:e=r.config,s(r.transcoderBinary);break;case`transcode`:t.then(()=>{try{let{faces:e,buffers:t,width:n,height:i,hasAlpha:a,format:o,type:s,dfdFlags:l}=c(r.buffer);self.postMessage({type:`transcode`,id:r.id,data:{faces:e,width:n,height:i,hasAlpha:a,format:o,type:s,dfdFlags:l}},t)}catch(e){console.error(e),self.postMessage({type:`error`,id:r.id,error:e.message})}})}});function s(e){t=new Promise(t=>{n={wasmBinary:e,onRuntimeInitialized:t},BASIS(n)}).then(()=>{n.initializeBasis(),n.KTX2File===void 0&&console.warn(`THREE.KTX2Loader: Please update Basis Universal transcoder.`)})}function c(e){let t=new n.KTX2File(new Uint8Array(e));function r(){t.close(),t.delete()}if(!t.isValid())throw r(),Error(`THREE.KTX2Loader:	Invalid or unsupported .ktx2 file`);let a;if(t.isUASTC())a=o.UASTC;else if(t.isETC1S())a=o.ETC1S;else if(t.isHDR())a=o.UASTC_HDR;else throw Error(`THREE.KTX2Loader: Unknown Basis encoding`);let s=t.getWidth(),c=t.getHeight(),l=t.getLayers()||1,u=t.getLevels(),f=t.getFaces(),m=t.getHasAlpha(),h=t.getDFDFlags(),{transcoderFormat:g,engineFormat:_,engineType:v}=d(a,s,c,m);if(!s||!c||!u)throw r(),Error(`THREE.KTX2Loader:	Invalid texture`);if(!t.startTranscoding())throw r(),Error(`THREE.KTX2Loader: .startTranscoding failed`);let y=[],b=[];for(let e=0;e<f;e++){let n=[];for(let a=0;a<u;a++){let o=[],s,c;for(let n=0;n<l;n++){let l=t.getImageLevelInfo(a,n,e);e===0&&a===0&&n===0&&(l.origWidth%4!=0||l.origHeight%4!=0)&&console.warn(`THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions.`),u>1?(s=l.origWidth,c=l.origHeight):(s=l.width,c=l.height);let d=new Uint8Array(t.getImageTranscodedSizeInBytes(a,n,0,g)),f=t.transcodeImage(d,a,n,e,g,0,-1,-1);if(v===i.HalfFloatType&&(d=new Uint16Array(d.buffer,d.byteOffset,d.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!f)throw r(),Error(`THREE.KTX2Loader: .transcodeImage failed.`);o.push(d)}let d=p(o);n.push({data:d,width:s,height:c}),b.push(d.buffer)}y.push({mipmaps:n,width:s,height:c,format:_,type:v})}return r(),{faces:y,buffers:b,width:s,height:c,hasAlpha:m,dfdFlags:h,format:_,type:v}}let l=[{if:`astcSupported`,basisFormat:[o.UASTC],transcoderFormat:[a.ASTC_4x4,a.ASTC_4x4],engineFormat:[r.RGBA_ASTC_4x4_Format,r.RGBA_ASTC_4x4_Format],engineType:[i.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:`bptcSupported`,basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.BC7_M5,a.BC7_M5],engineFormat:[r.RGBA_BPTC_Format,r.RGBA_BPTC_Format],engineType:[i.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:`dxtSupported`,basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.BC1,a.BC3],engineFormat:[r.RGBA_S3TC_DXT1_Format,r.RGBA_S3TC_DXT5_Format],engineType:[i.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:`etc2Supported`,basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.ETC1,a.ETC2],engineFormat:[r.RGB_ETC2_Format,r.RGBA_ETC2_EAC_Format],engineType:[i.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:`etc1Supported`,basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.ETC1],engineFormat:[r.RGB_ETC1_Format],engineType:[i.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:`pvrtcSupported`,basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.PVRTC1_4_RGB,a.PVRTC1_4_RGBA],engineFormat:[r.RGB_PVRTC_4BPPV1_Format,r.RGBA_PVRTC_4BPPV1_Format],engineType:[i.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:`bptcSupported`,basisFormat:[o.UASTC_HDR],transcoderFormat:[a.BC6H],engineFormat:[r.RGB_BPTC_UNSIGNED_Format],engineType:[i.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.RGBA32,a.RGBA32],engineFormat:[r.RGBAFormat,r.RGBAFormat],engineType:[i.UnsignedByteType,i.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[o.UASTC_HDR],transcoderFormat:[a.RGBA_HALF],engineFormat:[r.RGBAFormat],engineType:[i.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],u={[o.ETC1S]:l.filter(e=>e.basisFormat.includes(o.ETC1S)).sort((e,t)=>e.priorityUASTC-t.priorityUASTC),[o.UASTC]:l.filter(e=>e.basisFormat.includes(o.UASTC)).sort((e,t)=>e.priorityUASTC-t.priorityUASTC),[o.UASTC_HDR]:l.filter(e=>e.basisFormat.includes(o.UASTC_HDR)).sort((e,t)=>e.priorityHDR-t.priorityHDR)};function d(t,n,r,i){let a=u[t];for(let o=0;o<a.length;o++){let s=a[o];if((!s.if||e[s.if])&&s.basisFormat.includes(t)&&!(i&&s.transcoderFormat.length<2)&&(!s.needsPowerOfTwo||f(n)&&f(r)))return{transcoderFormat:s.transcoderFormat[+!!i],engineFormat:s.engineFormat[+!!i],engineType:s.engineType[0]}}throw Error(`THREE.KTX2Loader: Failed to identify transcoding target.`)}function f(e){return e<=2||!(e&e-1)&&e!==0}function p(e){if(e.length===1)return e[0];let t=0;for(let n=0;n<e.length;n++){let r=e[n];t+=r.byteLength}let n=new Uint8Array(t),r=0;for(let t=0;t<e.length;t++){let i=e[t];n.set(i,r),r+=i.byteLength}return n}};var au=new Set([w,C,k,D]),ou={109:w,103:k,100:D,97:w,83:k,76:D,43:w,37:w,22:k,16:k,15:D,9:D,123:C,122:C,152:se,148:oe,[Vl]:F,158:F,157:F,[Hl]:de,166:de,165:de,134:M,133:M,132:ee,131:ee,138:te,137:te,140:xe,139:be,142:Ce,141:Se,146:R,145:R,[Bl]:re,[Rl]:re,[zl]:ie,[Ll]:ie},su={109:h,103:h,100:h,97:g,83:g,76:g,43:l,37:l,22:l,16:l,15:l,9:l,123:b,122:x,152:l,148:l,[Vl]:g,158:l,157:l,[Hl]:g,166:l,165:l,134:l,133:l,132:l,131:l,138:l,137:l,140:l,139:l,142:l,141:l,146:l,145:l,[Bl]:l,[Rl]:l,[zl]:l,[Ll]:l};async function cu(e){let{vkFormat:t}=e;if(ou[t]===void 0)throw Error(`THREE.KTX2Loader: Unsupported vkFormat: `+t);su[t]===void 0&&console.warn(`THREE.KTX2Loader: Missing ".type" for vkFormat: `+t);let n;e.supercompressionScheme===2&&(ru||=new Promise(async e=>{let t=new Zl;await t.init(),e(t)}),n=await ru);let a=[];for(let r=0;r<e.levels.length;r++){let i=Math.max(1,e.pixelWidth>>r),o=Math.max(1,e.pixelHeight>>r),s=e.pixelDepth?Math.max(1,e.pixelDepth>>r):0,c=e.levels[r],l;if(e.supercompressionScheme===0)l=c.levelData;else if(e.supercompressionScheme===2)l=n.decode(c.levelData,c.uncompressedByteLength);else throw Error(`THREE.KTX2Loader: Unsupported supercompressionScheme.`);let u;u=su[t]===1015?new Float32Array(l.buffer,l.byteOffset,l.byteLength/Float32Array.BYTES_PER_ELEMENT):su[t]===1016?new Uint16Array(l.buffer,l.byteOffset,l.byteLength/Uint16Array.BYTES_PER_ELEMENT):su[t]===35902||su[t]===35899?new Uint32Array(l.buffer,l.byteOffset,l.byteLength/Uint32Array.BYTES_PER_ELEMENT):l,a.push({data:u,width:i,height:o,depth:s})}let s=e.levelCount===0||a.length>1,l;if(au.has(ou[t]))l=e.pixelDepth===0?new li(a[0].data,e.pixelWidth,e.pixelHeight):new Vt(a[0].data,e.pixelWidth,e.pixelHeight,e.pixelDepth),l.minFilter=s?i:r,l.magFilter=r,l.generateMipmaps=e.levelCount===0;else{if(e.pixelDepth>0)throw Error(`THREE.KTX2Loader: Unsupported pixelDepth.`);l=new Ii(a,e.pixelWidth,e.pixelHeight),l.minFilter=s?c:o,l.magFilter=o}return l.mipmaps=a,l.type=su[t],l.format=ou[t],l.colorSpace=lu(e),l.needsUpdate=!0,Promise.resolve(l)}function lu(e){let t=e.dataFormatDescriptor[0];return t.colorPrimaries===1?t.transferFunction===2?Me:Ne:t.colorPrimaries===10?t.transferFunction===2?$l:eu:(t.colorPrimaries===0||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),``)}var uu=new Set(`assets/earth-day-4k.jpg,assets/earth-night.jpg,assets/earth-clouds-4k.jpg,assets/sky-gaia.jpg,assets/sky-gaia-2k.jpg,assets/deep-fields-1k.jpg,assets/giza-12km.jpg,assets/giza-120km.jpg,assets/egypt-1200km.jpg,assets/galaxies/antennae-s.jpg,assets/galaxies/antennae.jpg,assets/galaxies/ic10-s.jpg,assets/galaxies/ic10.jpg,assets/galaxies/ic1613-s.jpg,assets/galaxies/ic1613.jpg,assets/galaxies/lmc-s.jpg,assets/galaxies/lmc.jpg,assets/galaxies/m101-s.jpg,assets/galaxies/m101.jpg,assets/galaxies/m104-s.jpg,assets/galaxies/m104.jpg,assets/galaxies/m106-s.jpg,assets/galaxies/m106.jpg,assets/galaxies/m110-s.jpg,assets/galaxies/m110.jpg,assets/galaxies/m31-s.jpg,assets/galaxies/m31.jpg,assets/galaxies/m33-s.jpg,assets/galaxies/m33.jpg,assets/galaxies/m51-s.jpg,assets/galaxies/m51.jpg,assets/galaxies/m63-s.jpg,assets/galaxies/m63.jpg,assets/galaxies/m64-s.jpg,assets/galaxies/m64.jpg,assets/galaxies/m81-s.jpg,assets/galaxies/m81.jpg,assets/galaxies/m82-s.jpg,assets/galaxies/m82.jpg,assets/galaxies/m83-s.jpg,assets/galaxies/m83.jpg,assets/galaxies/m87-s.jpg,assets/galaxies/m87.jpg,assets/galaxies/neb-b33-s.jpg,assets/galaxies/neb-b33.jpg,assets/galaxies/neb-m1-s.jpg,assets/galaxies/neb-m1.jpg,assets/galaxies/neb-m16-s.jpg,assets/galaxies/neb-m16.jpg,assets/galaxies/neb-m17-s.jpg,assets/galaxies/neb-m17.jpg,assets/galaxies/neb-m20-s.jpg,assets/galaxies/neb-m20.jpg,assets/galaxies/neb-m27-s.jpg,assets/galaxies/neb-m27.jpg,assets/galaxies/neb-m42-s.jpg,assets/galaxies/neb-m42.jpg,assets/galaxies/neb-m45-s.jpg,assets/galaxies/neb-m45.jpg,assets/galaxies/neb-m57-s.jpg,assets/galaxies/neb-m57.jpg,assets/galaxies/neb-m8-s.jpg,assets/galaxies/neb-m8.jpg,assets/galaxies/neb-ngc2244-s.jpg,assets/galaxies/neb-ngc2244.jpg,assets/galaxies/neb-ngc3372-s.jpg,assets/galaxies/neb-ngc3372.jpg,assets/galaxies/neb-ngc6543-s.jpg,assets/galaxies/neb-ngc6543.jpg,assets/galaxies/neb-ngc7000-s.jpg,assets/galaxies/neb-ngc7000.jpg,assets/galaxies/neb-ngc7293-s.jpg,assets/galaxies/neb-ngc7293.jpg,assets/galaxies/ngc1300-s.jpg,assets/galaxies/ngc1300.jpg,assets/galaxies/ngc2403-s.jpg,assets/galaxies/ngc2403.jpg,assets/galaxies/ngc253-s.jpg,assets/galaxies/ngc253.jpg,assets/galaxies/ngc4565-s.jpg,assets/galaxies/ngc4565.jpg,assets/galaxies/ngc5128-s.jpg,assets/galaxies/ngc5128.jpg,assets/galaxies/ngc6822-s.jpg,assets/galaxies/ngc6822.jpg,assets/galaxies/ngc891-s.jpg,assets/galaxies/ngc891.jpg,assets/galaxies/smc-s.jpg,assets/galaxies/smc.jpg,assets/galaxies/webb-arp220-s.jpg,assets/galaxies/webb-arp220.jpg,assets/galaxies/webb-cartwheel-s.jpg,assets/galaxies/webb-cartwheel.jpg,assets/galaxies/webb-cas_a-s.jpg,assets/galaxies/webb-cas_a.jpg,assets/galaxies/webb-centaurus_a-s.jpg,assets/galaxies/webb-centaurus_a.jpg,assets/galaxies/webb-cosmic_cliffs_ngc3324-s.jpg,assets/galaxies/webb-cosmic_cliffs_ngc3324.jpg,assets/galaxies/webb-crab_m1-s.jpg,assets/galaxies/webb-crab_m1.jpg,assets/galaxies/webb-horsehead-s.jpg,assets/galaxies/webb-horsehead.jpg,assets/galaxies/webb-i_zw_18-s.jpg,assets/galaxies/webb-i_zw_18.jpg,assets/galaxies/webb-jupiter-s.jpg,assets/galaxies/webb-jupiter.jpg,assets/galaxies/webb-m104-s.jpg,assets/galaxies/webb-m104.jpg,assets/galaxies/webb-m51-s.jpg,assets/galaxies/webb-m51.jpg,assets/galaxies/webb-m74-s.jpg,assets/galaxies/webb-m74.jpg,assets/galaxies/webb-m82-s.jpg,assets/galaxies/webb-m82.jpg,assets/galaxies/webb-neptune-s.jpg,assets/galaxies/webb-neptune.jpg,assets/galaxies/webb-ngc1300-s.jpg,assets/galaxies/webb-ngc1300.jpg,assets/galaxies/webb-ngc1365-s.jpg,assets/galaxies/webb-ngc1365.jpg,assets/galaxies/webb-ngc1433-s.jpg,assets/galaxies/webb-ngc1433.jpg,assets/galaxies/webb-ngc346-s.jpg,assets/galaxies/webb-ngc346.jpg,assets/galaxies/webb-ngc7469-s.jpg,assets/galaxies/webb-ngc7469.jpg,assets/galaxies/webb-orion_bar-s.jpg,assets/galaxies/webb-orion_bar.jpg,assets/galaxies/webb-pillars_m16-s.jpg,assets/galaxies/webb-pillars_m16.jpg,assets/galaxies/webb-rho_ophiuchi-s.jpg,assets/galaxies/webb-rho_ophiuchi.jpg,assets/galaxies/webb-ring_m57-s.jpg,assets/galaxies/webb-ring_m57.jpg,assets/galaxies/webb-saturn-s.jpg,assets/galaxies/webb-saturn.jpg,assets/galaxies/webb-serpens-s.jpg,assets/galaxies/webb-serpens.jpg,assets/galaxies/webb-southern_ring_ngc3132-s.jpg,assets/galaxies/webb-southern_ring_ngc3132.jpg,assets/galaxies/webb-stephans_quintet-s.jpg,assets/galaxies/webb-stephans_quintet.jpg,assets/galaxies/webb-tarantula_30dor-s.jpg,assets/galaxies/webb-tarantula_30dor.jpg,assets/galaxies/webb-uranus-s.jpg,assets/galaxies/webb-uranus.jpg,assets/galaxies/webb-westerlund1-s.jpg,assets/galaxies/webb-westerlund1.jpg,assets/galaxies/wlm-s.jpg,assets/galaxies/wlm.jpg`.split(`,`)),du=new Set([`assets/earth-day.jpg`,`assets/earth-clouds.jpg`,`assets/deep-fields.jpg`]),fu={"assets/deep-fields-1k.jpg":[.75,.75],"assets/galaxies/antennae-s.jpg":[1,.671875],"assets/galaxies/antennae.jpg":[1,.6708984375],"assets/galaxies/ic10-s.jpg":[1,.642578125],"assets/galaxies/ic10.jpg":[1,.6435546875],"assets/galaxies/ic1613-s.jpg":[1,.6796875],"assets/galaxies/ic1613.jpg":[1,.6796875],"assets/galaxies/lmc-s.jpg":[1,.666015625],"assets/galaxies/lmc.jpg":[1,.6669921875],"assets/galaxies/m101-s.jpg":[1,.98046875],"assets/galaxies/m101.jpg":[1,.9814453125],"assets/galaxies/m104-s.jpg":[1,.80078125],"assets/galaxies/m104.jpg":[1,.7998046875],"assets/galaxies/m110-s.jpg":[.849609375,1],"assets/galaxies/m110.jpg":[.849609375,1],"assets/galaxies/m31-s.jpg":[1,.646484375],"assets/galaxies/m31.jpg":[1,.64697265625],"assets/galaxies/m33-s.jpg":[1,.9951171875],"assets/galaxies/m33.jpg":[1,.99560546875],"assets/galaxies/m51-s.jpg":[.80078125,1],"assets/galaxies/m51.jpg":[.7998046875,1],"assets/galaxies/m63-s.jpg":[1,.759765625],"assets/galaxies/m63.jpg":[1,.7587890625],"assets/galaxies/m64-s.jpg":[1,.80078125],"assets/galaxies/m64.jpg":[1,.7998046875],"assets/galaxies/m81-s.jpg":[1,.728515625],"assets/galaxies/m81.jpg":[1,.728515625],"assets/galaxies/m82-s.jpg":[1,.978515625],"assets/galaxies/m82.jpg":[1,.978515625],"assets/galaxies/m87-s.jpg":[1,.673828125],"assets/galaxies/m87.jpg":[1,.673828125],"assets/galaxies/neb-b33-s.jpg":[.984375,1],"assets/galaxies/neb-b33.jpg":[.9833984375,1],"assets/galaxies/neb-m1-s.jpg":[1,.97265625],"assets/galaxies/neb-m1.jpg":[1,.9736328125],"assets/galaxies/neb-m16-s.jpg":[1,.85546875],"assets/galaxies/neb-m16.jpg":[1,.8564453125],"assets/galaxies/neb-m27-s.jpg":[1,.83984375],"assets/galaxies/neb-m27.jpg":[1,.83984375],"assets/galaxies/neb-m42-s.jpg":[1,.775390625],"assets/galaxies/neb-m42.jpg":[1,.7763671875],"assets/galaxies/neb-m45-s.jpg":[1,.73046875],"assets/galaxies/neb-m45.jpg":[1,.73046875],"assets/galaxies/neb-m57-s.jpg":[1,.927734375],"assets/galaxies/neb-m57.jpg":[1,.9287109375],"assets/galaxies/neb-m8-s.jpg":[.998046875,1],"assets/galaxies/neb-m8.jpg":[.998046875,1],"assets/galaxies/neb-ngc2244-s.jpg":[1,.849609375],"assets/galaxies/neb-ngc2244.jpg":[1,.8505859375],"assets/galaxies/neb-ngc3372-s.jpg":[1,.587890625],"assets/galaxies/neb-ngc3372.jpg":[1,.5869140625],"assets/galaxies/ngc2403-s.jpg":[1,.703125],"assets/galaxies/ngc2403.jpg":[1,.703125],"assets/galaxies/ngc253-s.jpg":[1,.7890625],"assets/galaxies/ngc253.jpg":[1,.7900390625],"assets/galaxies/ngc4565-s.jpg":[1,.80078125],"assets/galaxies/ngc4565.jpg":[1,.7998046875],"assets/galaxies/ngc5128-s.jpg":[1,.978515625],"assets/galaxies/ngc5128.jpg":[1,.9775390625],"assets/galaxies/ngc6822-s.jpg":[1,.904296875],"assets/galaxies/ngc6822.jpg":[1,.9052734375],"assets/galaxies/ngc891-s.jpg":[1,.7890625],"assets/galaxies/ngc891.jpg":[1,.7880859375],"assets/galaxies/smc-s.jpg":[1,.666015625],"assets/galaxies/smc.jpg":[1,.66650390625],"assets/galaxies/webb-arp220-s.jpg":[.84375,1],"assets/galaxies/webb-arp220.jpg":[.845703125,1],"assets/galaxies/webb-cartwheel-s.jpg":[1,.921875],"assets/galaxies/webb-cartwheel.jpg":[1,.9208984375],"assets/galaxies/webb-cas_a-s.jpg":[.873046875,1],"assets/galaxies/webb-cas_a.jpg":[.873046875,1],"assets/galaxies/webb-centaurus_a-s.jpg":[.890625,1],"assets/galaxies/webb-centaurus_a.jpg":[.890625,1],"assets/galaxies/webb-cosmic_cliffs_ngc3324-s.jpg":[1,.578125],"assets/galaxies/webb-cosmic_cliffs_ngc3324.jpg":[1,.5791015625],"assets/galaxies/webb-crab_m1-s.jpg":[1,.869140625],"assets/galaxies/webb-crab_m1.jpg":[1,.8681640625],"assets/galaxies/webb-horsehead-s.jpg":[.994140625,1],"assets/galaxies/webb-horsehead.jpg":[.9931640625,1],"assets/galaxies/webb-i_zw_18-s.jpg":[.978515625,1],"assets/galaxies/webb-i_zw_18.jpg":[.9775390625,1],"assets/galaxies/webb-jupiter-s.jpg":[1,.947265625],"assets/galaxies/webb-jupiter.jpg":[1,.9482421875],"assets/galaxies/webb-m104-s.jpg":[1,.93359375],"assets/galaxies/webb-m104.jpg":[1,.9326171875],"assets/galaxies/webb-m51-s.jpg":[1,.67578125],"assets/galaxies/webb-m51.jpg":[1,.677734375],"assets/galaxies/webb-m74-s.jpg":[1,.572265625],"assets/galaxies/webb-m74.jpg":[1,.5712890625],"assets/galaxies/webb-m82-s.jpg":[1,.673828125],"assets/galaxies/webb-m82.jpg":[1,.673828125],"assets/galaxies/webb-neptune-s.jpg":[1,.666015625],"assets/galaxies/webb-neptune.jpg":[1,.6669921875],"assets/galaxies/webb-ngc1300-s.jpg":[1,.6015625],"assets/galaxies/webb-ngc1300.jpg":[1,.6015625],"assets/galaxies/webb-ngc1365-s.jpg":[1,.796875],"assets/galaxies/webb-ngc1365.jpg":[1,.796875],"assets/galaxies/webb-ngc1433-s.jpg":[1,.70703125],"assets/galaxies/webb-ngc1433.jpg":[1,.70703125],"assets/galaxies/webb-ngc346-s.jpg":[.6875,1],"assets/galaxies/webb-ngc346.jpg":[.6884765625,1],"assets/galaxies/webb-ngc7469-s.jpg":[1,.99609375],"assets/galaxies/webb-ngc7469.jpg":[1,.99609375],"assets/galaxies/webb-orion_bar-s.jpg":[.900390625,1],"assets/galaxies/webb-orion_bar.jpg":[.8994140625,1],"assets/galaxies/webb-pillars_m16-s.jpg":[1,.935546875],"assets/galaxies/webb-pillars_m16.jpg":[1,.935546875],"assets/galaxies/webb-rho_ophiuchi-s.jpg":[1,.935546875],"assets/galaxies/webb-rho_ophiuchi.jpg":[1,.9365234375],"assets/galaxies/webb-ring_m57-s.jpg":[.986328125,1],"assets/galaxies/webb-ring_m57.jpg":[.9853515625,1],"assets/galaxies/webb-saturn-s.jpg":[1,.5625],"assets/galaxies/webb-saturn.jpg":[1,.5625],"assets/galaxies/webb-serpens-s.jpg":[1,.6328125],"assets/galaxies/webb-serpens.jpg":[1,.6337890625],"assets/galaxies/webb-southern_ring_ngc3132-s.jpg":[1,.9296875],"assets/galaxies/webb-southern_ring_ngc3132.jpg":[1,.931640625],"assets/galaxies/webb-stephans_quintet-s.jpg":[1,.95703125],"assets/galaxies/webb-stephans_quintet.jpg":[1,.958984375],"assets/galaxies/webb-tarantula_30dor-s.jpg":[1,.578125],"assets/galaxies/webb-tarantula_30dor.jpg":[1,.578125],"assets/galaxies/wlm-s.jpg":[1,.7421875],"assets/galaxies/wlm.jpg":[1,.7421875],"assets/deep-fields.jpg":[.999755859375,.999755859375]},pu=new Map,mu=[],hu=0,gu=-99,_u=[],vu=!1,yu=[];function bu(){vu||(vu=!0,yu.splice(0).forEach(e=>e()))}function xu(e){vu?e():yu.push(e)}function Su(e,t,n=!0){_u.some(t=>t.file===e)||_u.push({file:e,L:t,repeat:n})}function Cu(e=2){for(_u.sort((e,t)=>e.L-t.L);hu<e&&_u.length;){let e=_u.shift();pu.has(e.file)||Ju(e.file,e.repeat)}return _u.length}var wu=null;function Tu(e){try{wu=new iu().setTranscoderPath(`basis/v2/`).detectSupport(e)}catch{wu=null}let t=wu?.workerConfig;t?.dxtSupported&&(t.bptcSupported=!1,t.etc2Supported=!1,t.etc1Supported=!1)}function Eu(e){let t=[];for(let n=0;n<e[0].length;n++){let{width:r,height:i}=e[0][n];if(r%4||i%4||e.some(e=>!e[n]||e[n].width!==r||e[n].height!==i))break;let a=e[0][n].data.byteLength/(i/4),o=new Uint8Array(e[0][n].data.byteLength*4);for(let t=0;t<2;t++)for(let r=0;r<i/4;r++)for(let s=0;s<2;s++){let c=e[t*2+s][n].data;o.set(c.subarray(r*a,(r+1)*a),((i/4*t+r)*2+s)*a)}t.push({data:o,width:r*2,height:i*2})}return t}var Du=new Set;function Ou(e){Du.add(e)}var ku=new Set;function Au(e){return fetch(e,ku.has(e)?{cache:`force-cache`}:void 0).then(t=>{if(!t.ok||(t.headers.get(`content-type`)??``).includes(`text/html`))throw Error(`${e}: ${t.status}`);return ku.add(e),t.arrayBuffer()})}var ju=e=>du.has(e)?[0,1,2,3].map(t=>e.replace(/\.jpg$/,`.${t}.ktx2`)):[e.replace(/\.jpg$/,`.ktx2`)],Mu=(e,t)=>new Promise((n,r)=>e.parse(t,e=>n(e),r)),Nu=new Map,Pu=(e,t,n)=>t>e[0]-n&&t<e[1]+n,Fu=e=>Nu.get(e.userData.file);function Iu(e,t,n){Nu.set(e,[t,n])}var Lu=3,Ru=e=>{let t=Fu(e);return!t||Pu(t,gu,1)||Pu(t,gu,Lu)&&t[1]>gu},zu=e=>e.isCompressedTexture===!0||(e.image?.width??0)*(e.image?.height??0)<=42e5,Bu={decodes:0,redecodes:0,drawnWithoutData:0,drawn:[]},Vu=new Set([ee,M,ae,oe,be,xe]),Hu=typeof ImageData==`function`?new ImageData(1,1):null;function Uu(e){if(e.isCompressedTexture){let t=e;t.mipmaps=[{data:new Uint8Array(Vu.has(t.format)?8:16),width:4,height:4}]}else{let t=e.image;t&&typeof t.close==`function`&&t.close(),Hu&&(e.image=Hu)}}function Wu(e,t){wu=null;let n=e;n.isCompressedTexture=!1,n.mipmaps=[],n.format=w,n.type=l;let r=Du.has(t)||e.userData.noMips;n.generateMipmaps=!r,n.minFilter=r?o:c,n.magFilter=o,e.userData.kind=`jpg`}function Gu(e){let t=e.userData.file;e.userData.state=`downloading`,hu++;let n=e.userData.kind===`ktx`?ju(t):[t];Promise.all(n.map(e=>Au(e))).then(t=>{hu--,e.userData.state=`downloaded`,Ru(e)&&Ku(e,t)}).catch(()=>{hu--,e.userData.kind===`ktx`?(Wu(e,t),Gu(e)):e.userData.state=`none`})}function Ku(e,t){let n=e.userData.state;if(n!==`downloaded`&&n!==`parked`)return;let r=e.userData.file,i=!!e.userData.loaded;e.userData.state=`decoding`,Bu.decodes++,i&&Bu.redecodes++;let a=()=>{e.needsUpdate=!0,e.userData.loaded=!0,e.userData.back=i,e.userData.state=`decoded`,mu.push(e)},s=wu;if(e.userData.kind===`ktx`&&s){let n=e,i=ju(r);Promise.all(i.map((e,n)=>(t?.[n]?Promise.resolve(t[n]):Au(e)).then(e=>Mu(s,e)))).then(e=>{let t,i,s,{format:l,type:u}=e[0];if(e.length===4){if(t=Eu(e.map(e=>e.mipmaps)),!t.length||e.some(e=>e.format!==l))throw Error(`quarters do not match`);i=t[0].width,s=t[0].height}else t=e[0].mipmaps,i=e[0].image.width,s=e[0].image.height;e.forEach(e=>e.dispose()),n.dispose(),n.mipmaps=t,n.image={width:i,height:s},n.format=l,n.type=u;let d=t.length<=1;n.minFilter=d?o:c,n.magFilter=o,n.generateMipmaps=!1,n.userData.uvScale=fu[r]??[1,1],a()}).catch(()=>{Wu(e,r),e.userData.state=`parked`,Ku(e)});return}let l=t=>{e.dispose(),e.image=t,e.userData.uvScale=[1,1],a()},u=()=>new pa().load(r,l,void 0,()=>{e.userData.state=`parked`});typeof createImageBitmap==`function`?(t?.[0]?Promise.resolve(t[0]):Au(r)).then(e=>createImageBitmap(new Blob([e]),{premultiplyAlpha:`none`,colorSpaceConversion:`none`})).then(l).catch(u):u()}function qu(e){let t=e.userData.state;t===`decoded`?(e.userData.state=`uploaded`,Uu(e)):(t===`parked`||t===`downloaded`)&&(Bu.drawnWithoutData++,Ku(e))}function Ju(n,r=!1,i=!1,a=!0){let s=pu.get(n);if(s)return s;if(wu&&(uu.has(n)||du.has(n))){let n=new Ii([],1,1);n.flipY=!1,n.anisotropy=8,n.colorSpace=``,n.wrapS=r?e:t,n.wrapT=t,n.userData.kind=`ktx`,s=n}else s=new It,s.flipY=!1,s.anisotropy=8,s.colorSpace=``,s.wrapS=r?e:t,s.wrapT=t,(!a||Du.has(n))&&(s.generateMipmaps=!1,s.minFilter=o),s.userData.kind=`jpg`;s.userData.file=n,s.userData.noMips=!a,s.userData.state=`none`,s.onUpdate=qu,pu.set(n,s);let c=s;return i?xu(()=>Gu(c)):Gu(c),s}function Yu(e,t){for(gu=e,Qu(e);mu.length;){let n=mu[0];if(n.userData.state!==`decoded`){mu.shift();continue}let r=Fu(n);if(r&&!Pu(r,e,1))mu.shift();else return!t&&r&&!zu(n)?void 0:(mu.shift(),n)}}var Xu=-99,Zu=0;function Qu(e){Math.abs(e-Xu)>.001&&(Zu=Math.sign(e-Xu),Xu=e);let t=t=>Pu(t,e,1)||Pu(t,e,Lu)&&(Zu>0?t[1]>e:Zu<0&&t[0]<e);for(let n of pu.values()){let r=Fu(n);if(!r)continue;let i=n.userData.state;(i===`downloaded`||i===`parked`)&&t(r)?Ku(n):i===`decoded`&&Pu(r,e,1)&&!mu.includes(n)&&mu.push(n)}}function $u(e){gu=e;for(let t of pu.values()){let n=Fu(t);if(!n)continue;let r=t.userData.state;r===`uploaded`&&!Pu(n,e,1.5)?(t.dispose(),t.userData.state=`parked`):r===`decoded`&&!Pu(n,e,3.5)&&(Uu(t),t.userData.state=`parked`)}}function ed(e){let t={e:e.pyr[1].e,n:e.pyr[1].n},n=Math.hypot(t.e,t.n),r=t.e/n,i=t.n/n,a=e.pyr[1],o=(e,t)=>{let n=e*r+t*i,o=-22*Math.tanh(n/650);o+=6*Math.exp(-((e-a.e)**2+(t-a.n)**2)/(2*260**2));let s=e*.8+t*.35-1600;o-=32*pt.smoothstep(s,-60,160);let c=1-pt.smoothstep(s,-400,0);return o+=c*(Pl(e/900,t/900,4)-.5)*14,o+=(Pl(e/140,t/140,3)-.5)*2.2*c,o},s=o(0,0);return(e,t)=>o(e,t)-s}function td(e,t,n,r,i,a){let o=[],s=[],c=[],l=(e,t,n,r,i,a)=>{for(let l of[e,n,t,e,r,n])o.push(...l),s.push(...i),c.push(a,a,a)},u=t=>e/2*(1-t/n),d=t/r,f=[[0,1],[1,0],[0,-1],[-1,0]];for(let o=0;o<r;o++){let r=o*d,s=(o+1)*d,c=r>=t-i,p=u(r),m=u(s),h=.85+a()*.3;for(let[t,i]of f){let o=-i,u=t,d=(e,n,r)=>[t*e+o*r,n,i*e+u*r];if(c){let a=Math.atan2(e/2,n),o=[t*Math.cos(a),Math.sin(a),i*Math.cos(a)];l(d(p,r,-p),d(p,r,p),d(m,s,m),d(m,s,-m),o,h)}else{let e=p+(a()-.5)*.25*.3;l(d(e,r,-e),d(e,r,e),d(e,s,e),d(e,s,-e),[t,0,i],h),l(d(e,s,-e),d(e,s,e),d(m,s,m),d(m,s,-m),[0,1,0],h*1.05)}}}let p=u(t);l([-p,t,-p],[p,t,-p],[p,t,p],[-p,t,p],[0,1,0],1);let m=e/2;for(let[e,t]of f){let n=-t,r=e,i=(i,a)=>[e*m+n*a,i,t*m+r*a];l(i(-6,-m),i(-6,m),i(0,m),i(0,-m),[e,0,t],.9)}let h=new Tr;return h.setAttribute(`position`,new _r(o,3)),h.setAttribute(`normal`,new _r(s,3)),h.setAttribute(`color`,new _r(c,3)),h}var nd=`#include <common>
#include <logdepthbuf_pars_vertex>
attribute vec3 color; attribute vec3 fibre;
uniform float uCurv;
out vec3 vLocal; out vec3 vNormal; out vec3 vColor; out vec3 vView; out vec3 vFibre;
void main() {
vLocal = position; vNormal = normal; vColor = color; vFibre = fibre;
vec3 p = position;
p.y -= (p.x * p.x + p.z * p.z) * uCurv;
vec4 wp = modelMatrix * vec4(p, 1.0);
vView = wp.xyz;
gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,rd=`#include <common>
#include <logdepthbuf_pars_fragment>
${Fl}
${Ol}
uniform vec3 uSunLocal; uniform vec3 uSunT; uniform vec3 uCamKm; uniform vec3 uAmbient; uniform float uFade;
uniform sampler2D tShadowNear; uniform sampler2D tShadowFar; uniform mat4 uShadowNear; uniform mat4 uShadowFar;
uniform float uKind; uniform float uBody; uniform float uBone;
uniform sampler2D tNear; uniform sampler2D tFar;
in vec3 vLocal; in vec3 vNormal; in vec3 vColor; in vec3 vView; in vec3 vFibre;
uniform vec3 uCamLocal;
out vec4 fragColor;
float shadowAt(sampler2D tex, mat4 m, vec3 p, float bias, float soft) {
vec4 s = m * vec4(p, 1.0);
vec3 q = s.xyz * 0.5 + 0.5;
if (any(lessThan(q, vec3(0.0))) || any(greaterThan(q, vec3(1.0)))) return -1.0;
float lit = 0.0;
for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) {
float d = texture(tex, q.xy + vec2(i, j) * soft).r;
lit += q.z - bias > d ? 0.0 : 1.0;
}
return lit / 9.0;
}
void aerial(vec3 o, vec3 d, float t, out vec3 ins, out vec3 tr) {
ins = vec3(0.0); tr = vec3(1.0);
float mu = dot(d, uSunDir);
float pr = phaseR(mu), pm = phaseM(mu);
const int N = 6;
float ds = t / float(N);
for (int i = 0; i < N; i++) {
vec3 p = o + d * (ds * (float(i) + 0.5));
vec3 den = densities(p);
vec3 e = extinction(den);
vec3 st = exp(-e * ds);
ins += tr * (BR * den.x * pr + vec3(BM) * den.y * pm) * uSunT * (1.0 - st) / max(e, vec3(1e-9));
tr *= st;
}
ins *= uSunPower;
}
void main() {
#include <logdepthbuf_fragment>
vec3 p = vLocal;
vec3 n = normalize(vNormal);
vec3 albedo;
float dist = length(vView);
if (uKind < 0.5) {
float big = fbm2(p.xz / 300.0);
float mid = fbm2(p.xz / 23.0);
float fine = vn2(p.xz * 1.7) * 0.5 + vn2(p.xz * 6.0) * 0.25;
vec3 sand = mix(vec3(0.58, 0.42, 0.26), vec3(0.70, 0.55, 0.36), big);
vec3 rock = mix(vec3(0.46, 0.38, 0.29), vec3(0.62, 0.55, 0.45), mid);
float rockMask = smoothstep(0.55, 0.7, fbm2(p.xz / 60.0 + 3.0));
albedo = mix(sand, rock, rockMask * 0.7);
float near = 1.0 - smoothstep(30.0, 400.0, dist);
float ripple = sin(p.z * 9.0 + vn2(p.xz * 0.6) * 9.0) * 0.5 + 0.5;
albedo *= 1.0 + (ripple - 0.5) * 0.12 * near + (fine - 0.4) * 0.2 * near;
vec3 rn = vec3(0.0, 1.0, 0.0);
rn.z += cos(p.z * 9.0 + vn2(p.xz * 0.6) * 9.0) * 0.18 * near;
n = normalize(n + (rn - vec3(0, 1, 0)));
vec2 uv12 = vec2(0.5 + p.x / 24000.0, 0.5 + p.z / 24000.0);
vec2 uv120 = vec2(0.5 + p.x / 240000.0, 0.5 + p.z / 240000.0);
vec3 s2 = pow(texture(tFar, uv120).rgb, vec3(2.2));
float in12 = step(abs(uv12.x - 0.5), 0.49) * step(abs(uv12.y - 0.5), 0.49);
s2 = mix(s2, pow(texture(tNear, uv12).rgb, vec3(2.2)), in12);
s2 *= vec3(0.54, 0.42, 0.48);
float far = smoothstep(60.0, 900.0, length(p.xz));
vec3 tint = s2 / max(dot(s2, vec3(0.33)), 1e-3) * dot(albedo, vec3(0.33));
albedo = mix(mix(albedo, tint, 0.5), s2 * (0.9 + 0.2 * fine), far);
} else if (uKind < 1.5) {
vec2 uvw = vec2(p.x + p.z, p.y);
float course = floor(p.y / 0.68);
vec2 blk = vec2(floor((uvw.x + h12(vec2(course, 7.0)) * 3.0) / 1.6), course);
float bc = h12(blk);
vec3 lime = mix(vec3(0.66, 0.5, 0.32), vec3(0.78, 0.63, 0.44), bc) * vColor;
float joint = smoothstep(0.0, 0.06, fract((uvw.x + h12(vec2(course, 7.0)) * 3.0) / 1.6)) * smoothstep(0.0, 0.05, fract(p.y / 0.68));
float wear = fbm3(p * 0.9);
albedo = lime * mix(0.62, 1.0, joint) * (0.88 + 0.22 * wear);
albedo = mix(albedo, vec3(0.62, 0.47, 0.30), smoothstep(4.0, 0.0, p.y) * 0.6);
n = normalize(n + (vec3(vn3(p * 2.0), vn3(p * 2.0 + 9.0), vn3(p * 2.0 + 19.0)) - 0.5) * 0.18);
} else if (uBone > 0.5) {
float pore = 1.0 - smoothstep(0.0004, 0.0016, length(fwidth(p)));
albedo = mix(vec3(0.40, 0.36, 0.29), vColor, 0.3) * (0.9 + pore * (0.12 * vn3(p * 900.0) * vn3(p * 260.0) - 0.06 * vn3(p * 60.0)));
} else {
albedo = vColor;
vec3 f = vFibre * 2.0 - 1.0;
vec3 t = normalize(f - n * dot(f, n) + vec3(1e-4));
vec3 b = normalize(cross(n, t));
float across = dot(p, b) + vn3(p * 60.0) * 0.004;
float tendon = smoothstep(0.25, 0.6, albedo.g * 3.0);
float aa = 1.0 - smoothstep(0.4, 1.2, fwidth(across * 1300.0));
float bundle = sin(across * 1300.0);
float fine = sin(across * 4200.0 + vn3(p * 300.0) * 3.0) * (1.0 - smoothstep(0.4, 1.2, fwidth(across * 4200.0)));
float groove = smoothstep(0.82, 0.98, abs(sin(dot(p, b) * 70.0 + vn3(p * 9.0) * 4.0)));
albedo *= (1.0 + (bundle * 0.16 + fine * 0.06) * aa * (1.0 - tendon)) * (1.0 - groove * 0.35 * (1.0 - tendon));
n = normalize(n + b * (cos(across * 1300.0) * 0.22 * aa * (1.0 - tendon)));
}
float sh = shadowAt(tShadowNear, uShadowNear, p, 0.002, 0.0005);
if (sh >= 0.0) sh = mix(1.0, sh, uBody);
if (sh < 0.0) sh = shadowAt(tShadowFar, uShadowFar, p, 0.0015, 0.0005);
if (sh < 0.0) sh = 1.0;
float ndl = max(dot(n, uSunLocal), 0.0);
float sky = 0.55 + 0.45 * n.y;
vec3 radiance = albedo / PI * (uSunPower * uSunT * ndl * sh) + albedo * uAmbient * sky;
if (uKind > 1.5 && uBone > 0.5) {
float wrap = max((dot(n, uSunLocal) + 0.25) / 1.25, 0.0);
radiance = albedo / PI * (uSunPower * uSunT * wrap * mix(0.3, 1.0, sh)) + albedo * uAmbient * sky * 1.15;
vec3 v = normalize(uCamLocal - p);
radiance += uSunPower * uSunT * pow(max(dot(n, normalize(uSunLocal + v)), 0.0), 24.0) * 0.06 * sh * max(dot(n, uSunLocal), 0.0);
radiance += albedo * vec3(1.0, 0.85, 0.68) * pow(1.0 - max(dot(n, v), 0.0), 3.0) * uAmbient.b * 1.4;
} else if (uKind > 1.5) {
float wrap = max((dot(n, uSunLocal) + 0.35) / 1.35, 0.0);
radiance = albedo / PI * (uSunPower * uSunT * wrap * mix(0.35, 1.0, sh)) + albedo * uAmbient * sky;
vec3 v = normalize(uCamLocal - p);
vec3 hv = normalize(uSunLocal + v);
float spec = pow(max(dot(n, hv), 0.0), 70.0) * 0.6 + pow(max(dot(n, hv), 0.0), 12.0) * 0.06;
radiance += uSunPower * uSunT * spec * sh * max(dot(n, uSunLocal), 0.0) * 0.5;
radiance += albedo * vec3(0.9, 0.12, 0.08) * pow(1.0 - max(dot(n, v), 0.0), 3.0) * uAmbient.b * 2.0;
}
vec3 viewDirLocal = normalize(vView);
vec3 ins, tr;
aerial(uCamKm, viewDirLocal, dist / 1000.0, ins, tr);
fragColor = vec4(radiance * tr + ins, uKind > 1.5 ? uBody : uFade);
}`;function id(e,t=0){let n=Math.asin(Math.max(e,0))*180/Math.PI,r=1/(Math.max(e,0)+.50572*(n+6.07995)**-1.6364),i=Math.exp(-t/8),a=Math.exp(-t/1.2);return new H(...[.046416*i+.013986*a+.00975,.108464*i+.013986*a+.028215,.2648*i+.013986*a+.001275].map(e=>Math.exp(-e*r)))}function ad(e){let[t,n]=new Uint32Array(e,0,2),r=8,i=new Float32Array(e,r,t*3);r+=t*12;let a=new Float32Array(e,r,t*3);r+=t*12;let o=new Uint8Array(e,r,t*3);r+=t*3;let s=new Uint8Array(e,r,t*3);r+=t*3;let c=t>65535?new Uint32Array(e.slice(r,r+n*4)):new Uint16Array(e.slice(r,r+n*2)),l=Float32Array.from(o,e=>(e/255)**2.2),u=new Tr;return u.setAttribute(`position`,new K(new Float32Array(i),3)),u.setAttribute(`normal`,new K(new Float32Array(a),3)),u.setAttribute(`color`,new K(l,3)),u.setAttribute(`fibre`,new K(Float32Array.from(s,e=>e/255),3)),u.setIndex(new K(c,1)),u.rotateY(Math.PI),u}function od(e,t,n,r=!1){let i=new ci,a=new ai;i.add(a);let{E:o,U:s,N:c}=e,u=new gn().makeBasis(new H(...o),new H(...s),new H(-c[0],-c[1],-c[2]));a.quaternion.setFromRotationMatrix(u);let d=Z(e.sun,e.earthCenter),p=Math.hypot(...d),m=new H(Ic(d,o)/p,Ic(d,s)/p,-Ic(d,c)/p),h=new zt(2048,2048,{depthTexture:new zi(2048,2048,f),depthBuffer:!0,format:D,type:l,generateMipmaps:!1}),g=new zt(2048,2048,{depthTexture:new zi(2048,2048,f),depthBuffer:!0,format:D,type:l,generateMipmaps:!1}),_={uSunLocal:{value:m},uSunDir:{value:new H},uSunPower:{value:22},uSunT:{value:id(m.y,.06)},uCamKm:{value:new H},uAmbient:{value:new H(.22,.27,.4)},uFade:{value:1},uCurv:{value:1/12742e3},uBody:{value:0},uBone:{value:+!!r},uCamLocal:{value:new H},tTrans:{value:null},tShadowNear:{value:h.depthTexture},tShadowFar:{value:g.depthTexture},uShadowNear:{value:new gn},uShadowFar:{value:new gn},tNear:{value:(Iu(`assets/giza-12km.jpg`,-99,5.1),Ju(`assets/giza-12km.jpg`))},tFar:{value:Ju(`assets/giza-120km.jpg`)}},v=e=>{let t=new Jr({glslVersion:ze,vertexShader:nd,fragmentShader:rd,uniforms:{..._,uKind:{value:e}},side:0,...Sl});for(let e of Object.keys(_))t.uniforms[e]=_[e];return t},y=.25,b=[],x=[],S=[],C=(e,n)=>t(e,-n),w=e=>y*(9e4/y)**(e/319),T=new Float64Array(122880);for(let e=0;e<320;e++)for(let t=0;t<384;t++){let n=t/384*Math.PI*2;T[e*384+t]=C(Math.cos(n)*w(e),Math.sin(n)*w(e))}b.push(0,C(0,0),0),x.push(0,1,0);for(let e=0;e<320;e++){let t=w(e),n=Math.max(0,e-1),r=Math.min(319,e+1);for(let i=0;i<384;i++){let a=i/384*Math.PI*2,o=Math.cos(a),s=Math.sin(a),c=(T[r*384+i]-T[n*384+i])/(w(r)-w(n)),l=(T[e*384+(i+1)%384]-T[e*384+(i+384-1)%384])/(2*t*(2*Math.PI/384)),u=o*c-s*l,d=s*c+o*l,f=Math.hypot(u,1,d);b.push(o*t,T[e*384+i],s*t),x.push(-u/f,1/f,-d/f)}}for(let e=0;e<384;e++)S.push(0,1+(e+1)%384,1+e);for(let e=0;e<319;e++)for(let t=0;t<384;t++){let n=1+e*384+t,r=1+e*384+(t+1)%384,i=n+384,a=r+384;S.push(n,r,i,r,a,i)}let E=new Tr;E.setAttribute(`position`,new _r(b,3)),E.setAttribute(`normal`,new _r(x,3)),E.setAttribute(`color`,new _r(new Float32Array(b.length).fill(1),3)),E.setIndex(S);let O=new Lr(E,v(0));O.frustumCulled=!1,a.add(O);let k=v(1),A=new ai,j=7,ee=()=>(j=j*16807%2147483647,j/2147483647),M=[0,22,0],te=[203,190,90];e.pyr.forEach((e,n)=>{let r=td(e.base,e.height,e.apex,te[n],M[n],ee);r.translate(e.e,t(e.e,e.n),-e.n);let i=new Lr(r,k);i.frustumCulled=!1,A.add(i)});let N=e.pyr[2];[-1,0,1].forEach((e,n)=>{let r=N.e+e*70-10,i=N.n-105,a=td(n===0?44:31,n===0?21:13,n===0?28:18,n===0?30:18,0,ee);a.translate(r,t(r,i),-i);let o=new Lr(a,k);o.frustumCulled=!1,A.add(o)}),a.add(A);let P=!!n,ne=n?ad(n):new Tr;n&&(ne.rotateY(-Math.atan2(Ic(e.H,o),Ic(e.H,c))),ne.translate(0,t(0,0),0));let re=new ci,ie=new ai;re.add(ie),ie.quaternion.copy(a.quaternion);let ae=e=>{let t=v(2);return t.stencilWrite=!1,e?t.colorWrite=!1:(t.transparent=!0,t.depthWrite=!1),t};for(let[e,t]of[[ae(!0),0],[ae(!1),1]]){let n=new Lr(ne,e);n.renderOrder=t,n.frustumCulled=!1,ie.add(n)}let oe=e=>_.uCamLocal.value.copy(e.position).multiplyScalar(-1).applyQuaternion(e.quaternion.clone().invert()),se={name:`body`,unit:1,scene:re,root:ie,origin:()=>e.feet,weight:e=>P&&e.d>2.6&&e.d<3e3?1:0,clip:e=>[Math.max(.05,(e.d-3)*.5),e.d+10],update(){oe(ie)}},F=(e,t,n,r)=>{let i=new ma(-e,e,e,-e,n-r,n+r);return i.position.copy(t).addScaledVector(m,n),i.lookAt(t),i.updateMatrixWorld(),i.updateProjectionMatrix(),i},ce=e.pyr[1],le=F(22,new H(-m.x*14,t(0,0),-m.z*14),200,60),ue=F(1700,new H(ce.e,t(ce.e,ce.n),-ce.n),8e3,1500);return{name:`ground`,unit:1,scene:i,root:a,origin:()=>e.feet,weight:e=>+(e.d<12e4),clip:e=>[Math.max(.05,(e.d-300)*.5),2e5+e.d*2],setShadows(e){let t=new ci;t.overrideMaterial=new Wi,t.add(A.clone(),new Lr(ne));for(let[n,r,i]of[[h,le,_.uShadowNear],[g,ue,_.uShadowFar]])e.setRenderTarget(n),e.clear(),e.render(t,r),i.value.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse);e.setRenderTarget(null)},dropShadows(){h.dispose(),g.dispose()},update(e,t){_.uCamKm.value.copy(t.camEarthKm),_.uSunDir.value.copy(t.sunDir),_.uBody.value=Math.min(1,Math.max(0,(e.d-2.6)/1.6)),oe(a)},body:se}}var sd=42164,cd=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},ld=`#include <common>
#include <logdepthbuf_pars_vertex>
uniform mat3 uRot;
out vec3 vN; out vec3 vView; out vec3 vEcef;
void main() {
vEcef = normalize(position);
vN = normalize(uRot * position);
vec4 wp = modelMatrix * vec4(uRot * position, 1.0);
vView = wp.xyz;
gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,ud=`#include <common>
#include <logdepthbuf_pars_fragment>
${Fl}
${Ol}
uniform sampler2D tDay; uniform sampler2D tNight; uniform sampler2D tRegion; uniform sampler2D tLocal; uniform sampler2D tClouds;
uniform vec3 uCamKm; uniform vec3 uSiteKm; uniform vec3 uE; uniform vec3 uN; uniform float uFade; uniform float uClouds;
in vec3 vN; in vec3 vView; in vec3 vEcef;
out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
vec3 n = normalize(vN);
vec3 p = n * PR;
float lat = asin(clamp(vEcef.z, -1.0, 1.0));
float lon = atan(vEcef.y, vEcef.x);
vec2 uv = vec2(lon / (2.0 * PI) + 0.5, 0.5 - lat / PI);
vec3 day = pow(texture(tDay, uv).rgb, vec3(2.2));
vec3 rel = p - uSiteKm;
vec2 en = vec2(dot(rel, uE), dot(rel, uN));
vec2 uvE = vec2(0.5 + en.x / 2400.0, 0.5 - en.y / 2400.0);
vec2 uvG = vec2(0.5 + en.x / 240.0, 0.5 - en.y / 240.0);
float wE = (1.0 - smoothstep(0.42, 0.5, max(abs(uvE.x - 0.5), abs(uvE.y - 0.5))));
float wG = (1.0 - smoothstep(0.42, 0.5, max(abs(uvG.x - 0.5), abs(uvG.y - 0.5))));
vec3 eg = pow(texture(tRegion, uvE).rgb, vec3(2.2)) * vec3(0.54, 0.42, 0.48);
vec3 gz = pow(texture(tLocal, uvG).rgb, vec3(2.2)) * vec3(0.54, 0.42, 0.48);
day = mix(day, eg, wE * 0.9);
day = mix(day, gz, wG);
float water = smoothstep(0.02, 0.06, day.b - day.r) * step(day.g, 0.12);
float cover = smoothstep(0.06, 0.8, texture(tClouds, uv).r) * uClouds;
vec3 sunT = sunTransmittance(p + n * 0.05);
float ndl = dot(n, uSunDir);
float lit = max(ndl, 0.0);
vec3 surf = day / PI * uSunPower * sunT * lit;
vec3 v = normalize(-vView);
vec3 h = normalize(uSunDir + v);
surf += water * pow(max(dot(n, h), 0.0), 120.0) * uSunPower * sunT * 0.5 * lit;
vec3 cloudCol = vec3(0.9) / PI * uSunPower * sunT * (0.15 + 0.85 * smoothstep(-0.1, 0.3, ndl)) * lit;
surf = mix(surf, cloudCol, cover);
float night = smoothstep(0.05, -0.12, ndl);
float lights = pow(texture(tNight, uv).r, 2.2);
lights = smoothstep(0.08, 0.6, lights);
surf += night * lights * vec3(1.0, 0.72, 0.42) * 0.9 * (1.0 - cover * 0.8);
vec3 d = normalize(vView);
float t = length(vView);
vec3 ins, tr;
atmosphere(uCamKm, d, t, ins, tr);
fragColor = vec4(surf * tr + ins, 1.0);
}`;function dd(e,t){let n=new ci,r=new ai;n.add(r);let i=Math.max(window.innerWidth,window.innerHeight)<1e3;for(let e of[i?`assets/earth-day-4k.jpg`:`assets/earth-day.jpg`,`assets/earth-night.jpg`,i?`assets/earth-clouds-4k.jpg`:`assets/earth-clouds.jpg`,`assets/egypt-1200km.jpg`,`assets/giza-120km.jpg`])Iu(e,-99,13);let a=Zc(e.jd),o=new U().set(Math.cos(a),-Math.sin(a),0,Math.sin(a),Math.cos(a),0,0,0,1),s=Q(Z(e.feet,e.earthCenter),1/1e3),c={tDay:{value:Ju(i?`assets/earth-day-4k.jpg`:`assets/earth-day.jpg`,!0,!0)},tNight:{value:Ju(`assets/earth-night.jpg`,!0,!0)},tClouds:{value:Ju(i?`assets/earth-clouds-4k.jpg`:`assets/earth-clouds.jpg`,!0,!0)},tRegion:{value:Ju(`assets/egypt-1200km.jpg`)},tLocal:{value:Ju(`assets/giza-120km.jpg`)},uRot:{value:o},uSunDir:{value:new H},uSunPower:{value:22},uCamKm:{value:new H},uSiteKm:{value:new H(...s)},uE:{value:new H(...e.E)},uN:{value:new H(...e.N)},uFade:{value:1},uClouds:{value:1},tTrans:{value:null}};c.tTrans.value=t;let l=new Jr({glslVersion:ze,vertexShader:ld,fragmentShader:ud,uniforms:c,...Cl}),u=new Lr(new Hi(6371,512,256),l);u.frustumCulled=!1,r.add(u);let d=new vi({color:new G(.25,.32,.45),transparent:!0,opacity:0,blending:2,depthWrite:!1}),f=Array.from({length:512},(e,t)=>{let n=t/512*Math.PI*2;return new H(sd*Math.cos(n),sd*Math.sin(n),0)}),p=new Oi(new Tr().setFromPoints(f),d);return p.frustumCulled=!1,r.add(p),{name:`earth`,unit:1e3,scene:n,root:r,origin:()=>e.earthCenter,weight:e=>+(e.d>300&&e.L<13),clip:e=>{let t=Math.max(e.d/1e3,.3);return[Math.max(.01,t*.3),t+2*sd]},update(e,t){c.uCamKm.value.copy(t.camEarthKm),c.uSunDir.value.copy(t.sunDir);let n=cd(7.3,7.8,e.L)*(1-cd(8.8,9.3,e.L));d.opacity=.14*n/Math.max(t.exposure,.3),p.visible=n>.001}}}var fd=e=>(e.headers.get(`content-type`)??``).includes(`text/html`);async function pd(e){if(typeof DecompressionStream==`function`)try{let t=await fetch(`${e}.gz`);if(t.ok&&!fd(t)){let e=await t.arrayBuffer(),n=new Uint8Array(e,0,Math.min(2,e.byteLength));return n[0]!==31||n[1]!==139?e:await new Response(new Blob([e]).stream().pipeThrough(new DecompressionStream(`gzip`))).arrayBuffer()}}catch{}try{let t=await fetch(e);return t.ok&&!fd(t)?await t.arrayBuffer():void 0}catch{return}}var md=[[`Great Pyramid of Khufu`,29.97918,31.13436,0,`139 m high`],[`Pyramid of Khafre`,29.97606,31.13081,0,`136 m high`],[`Pyramid of Menkaure`,29.97253,31.12808,0,`61 m high`],[`Great Sphinx`,29.97526,31.13758,0,``],[`Pyramid builders' town`,29.9705,31.1395,0,``],[`Cairo`,30.04444,31.23583,23,``],[`Nile`,30.02083,31.22556,20,``],[`Saqqara`,29.8711,31.2167,50,`Oldest pyramid in Egypt`],[`Dahshur`,29.80639,31.20806,50,`Red and Bent pyramids`],[`Memphis`,29.84944,31.255,20,`Capital of ancient Egypt`],[`Alexandria`,31.1975,29.8925,5,``],[`Nile Delta`,30.9,31.11667,10,``],[`Luxor`,25.69667,32.64444,76,`Ancient Thebes`],[`Aswan`,24.08889,32.89972,194,``],[`Suez Canal`,30.705,32.34417,0,``],[`Mount Sinai`,28.53942,33.97542,2285,`2,285 m`],[`Sahara`,26.28333,28.21667,200,``],[`Red Sea`,26,35,0,``],[`Mediterranean Sea`,33,29,0,``]],hd=[[`Voyager 1`,-31.9581,-163.2891,36.0437,`1977`],[`Voyager 2`,39.4743,-60.6771,-122.8571,`1977`],[`New Horizons`,20.3216,-56.8939,-22.223,`2006`],[`Pioneer 10`,23.9497,124.1654,61.8245,`1972`],[`Pioneer 11`,28.6874,-111.8444,-17.9847,`1973`],[`Parker Solar Probe`,.5159,-.4094,-.2168,`2018`],[`Europa Clipper`,-1.1823,-1.4447,-.6021,`2024`],[`JUICE`,.145,-1.4358,-.6272,`2023`]],gd=[[`James Webb Space Telescope`,-882922.3,-1070228,-336603.9]],_d=[[`Halley's Comet`,-19.4477,29.1086,1.8564,`2061`]],vd=8307,yd=[19.5031,-26.1247,-14.0278],bd=[[`Proxima Centauri`,217.4289,-62.6795,4.246],[`Alpha Centauri A`,219.9021,-60.834,4.321],[`Barnard's Star`,269.4521,4.6934,5.963],[`Wolf 359`,164.1205,7.0147,7.856],[`Lalande 21185`,165.8341,35.9699,8.304],[`Sirius`,101.2872,-16.7161,8.601],[`Luyten 726-8`,24.7568,-17.9503,8.724],[`Ross 154`,282.4557,-23.8362,9.706],[`Epsilon Eridani`,53.2327,-9.4583,10.502],[`Lacaille 9352`,346.4668,-35.8531,10.724],[`Ross 128`,176.935,.8046,11.007],[`61 Cygni`,316.7247,38.7494,11.404],[`Procyon`,114.8255,5.225,11.462],[`Epsilon Indi`,330.8402,-56.786,11.867],[`Tau Ceti`,26.017,-15.9375,11.912],[`Teegarden's Star`,43.2537,16.8813,12.497],[`TRAPPIST-1`,346.6224,-5.0414,40.662],[`Altair`,297.6958,8.8683,16.73],[`Vega`,279.2347,38.7837,25.045],[`Fomalhaut`,344.4127,-29.6222,25.126],[`Arcturus`,213.9153,19.1824,36.717],[`Capella`,79.1723,45.998,42.803],[`Pollux`,116.329,28.0262,33.785],[`Aldebaran`,68.9802,16.5093,66.644],[`Regulus`,152.093,11.9672,79.299],[`Spica`,201.2982,-11.1613,249.7],[`Polaris`,37.9546,89.2641,432.6],[`Canopus`,95.988,-52.6957,309.2],[`Betelgeuse`,88.7929,7.4071,497.9],[`Antares`,247.3519,-26.432,553.7],[`Rigel`,78.6345,-8.2016,862.8],[`Deneb`,310.358,45.2803,1411.9],[`Kepler-452`,296.0037,44.2775,1806.7],[`Achernar`,24.4285,-57.2368,139.4]],xd=[[`Pleiades`,`open cluster`,56.6008,24.1139,442],[`Orion Nebula`,`nebula`,83.82,-5.3875,1350],[`Crab Nebula`,`supernova remnant`,83.6325,22.0175,6523],[`Omega Centauri`,`globular cluster`,201.697,-47.4795,17710],[`Sagittarius A*`,`supermassive black hole`,266.4168,-29.0078,26673],[`Eagle Nebula`,`nebula`,274.6879,-13.7919,5675],[`Hyades`,`open cluster`,67.4471,16.9481,153],[`Beehive Cluster`,`open cluster`,130.0542,19.6211,597],[`Ptolemy Cluster`,`open cluster`,268.4471,-34.8411,903],[`Helix Nebula`,`planetary nebula`,337.4106,-20.8372,653],[`Dumbbell Nebula`,`planetary nebula`,299.9015,22.7212,1248],[`Ring Nebula`,`planetary nebula`,283.3962,33.0291,2568],[`North America Nebula`,`nebula`,314.6958,44.33,2639],[`Cat's Eye Nebula`,`planetary nebula`,269.6392,66.633,4455],[`Trifid Nebula`,`nebula`,270.675,-22.9717,4041],[`Lagoon Nebula`,`nebula`,270.9042,-24.3867,4149],[`Rosette Nebula`,`nebula`,98.045,4.9139,4537],[`Omega Nebula`,`nebula`,275.1958,-16.1717,5225],[`Double Cluster`,`open cluster`,34.7408,57.1339,7246],[`Carina Nebula`,`nebula`,161.2593,-59.6999,8545],[`Great Hercules Cluster`,`globular cluster`,250.4235,36.4613,26092]],Sd=[[`Andromeda`,10.6846,41.2692,783,-21.52,0,0,0],[`Triangulum`,23.4621,30.6603,809.1,-18.84,0,0,0],[`Large Magellanic Cloud`,80.8938,-69.7561,50.6,-18.12,0,0,0],[`Small Magellanic Cloud`,13.1867,-72.8286,64,-16.83,0,0,0],[`M110`,10.0921,41.6853,824.1,-16.48,2.46,.43,28],[`M32`,10.6742,40.8653,805.4,-16.43,.47,.25,159],[`Barnard's Galaxy`,296.2358,-14.7892,459.2,-15.21,2.65,.24,330],[`IC 1613`,16.1992,2.1178,755.1,-15.19,6.81,.11,50],[`IC 10`,5.0721,59.3039,794.3,-15,2.65,.19,0],[`NGC 185`,9.7417,48.3375,616.6,-14.75,2.55,.15,35],[`NGC 147`,8.3004,48.5089,676.1,-14.65,3.17,.41,25],[`WLM`,.4925,-15.4608,933.3,-14.25,8.62,.55,179],[`Sagittarius dSph`,283.8313,-30.5453,26.3,-13.5,342,.64,102],[`Fornax`,39.9971,-34.4492,147.2,-13.46,18.4,.28,46],[`Andromeda VII`,351.6321,50.6758,762.1,-13.21,3.5,.13,94],[`Andromeda II`,19.1242,33.4192,651.6,-12.57,6.2,.2,34],[`UGC 4879`,139.0092,52.84,1361.4,-12.47,.41,.44,84.2],[`Andromeda XXXII`,8.9975,51.5597,776.2,-12.25,6.5,.5,-90],[`Pegasus dIrr`,352.1513,14.7431,920.4,-12.22,2.1,.46,120],[`Leo A`,149.8604,30.7464,798,-12.11,2.15,.4,114],[`Andromeda I`,11.4158,38.0411,744.7,-11.86,3.1,.22,22],[`Leo I`,152.1171,12.3064,253.5,-11.78,3.3,.3,78],[`Andromeda XXXI`,344.5679,41.2911,758.6,-11.7,4.2,.43,-59],[`Sagittarius dIrr`,292.4958,-17.6808,1066.6,-11.54,.91,.5,90],[`Andromeda VI`,357.9429,24.5825,783.4,-11.47,2.3,.41,163],[`Cetus`,6.5458,-11.0444,755.1,-11.29,3.2,.33,63],[`Sculptor`,15.0392,-33.7092,85.9,-10.82,12.33,.37,94],[`Aquarius`,311.7158,-12.8481,1071.5,-10.65,1.47,.5,98.7],[`Andromeda XXXIII`,45.3483,40.9883,772.7,-10.34,1.7,.43,-6],[`Andromeda XXIII`,22.3408,38.7189,769.1,-10.23,4.6,.4,138],[`Andromeda III`,8.8908,36.4978,748.2,-10.17,2.2,.52,136],[`LGS 3`,15.9792,21.885,769.1,-10.13,2.1,.2,0],[`Phoenix`,27.7763,-44.4447,409.3,-9.86,2.3,.3,8],[`Andromeda XXI`,358.6987,42.4708,827.9,-9.79,3.5,.2,110],[`Andromeda XXV`,7.5371,46.8519,812.8,-9.75,3,.25,170],[`Leo II`,168.37,22.1517,233.3,-9.74,2.48,.07,43],[`Andromeda V`,17.5713,47.6281,772.7,-9.54,1.4,.18,32],[`Tucana`,340.4567,-64.4194,887.2,-9.54,1.1,.48,97],[`Carina`,100.4029,-50.9661,105.2,-9.43,11.43,.37,60],[`Andromeda XVIII`,.5604,45.0889,1213.4,-9.42,.92,0,0],[`Andromeda XV`,18.5779,38.1175,625.2,-9.38,1.21,0,0],[`Sextans`,153.2625,-1.6147,85.9,-9.27,27.8,.35,56],[`Antlia II`,143.8867,-36.7672,131.8,-9.03,76.2,.38,156],[`Ursa Minor`,227.2854,67.2225,75.9,-9.03,17.32,.55,50],[`Andromeda XVI`,14.8742,32.3767,476.4,-8.99,.89,0,0],[`Andromeda XIX`,4.8838,35.0436,820.4,-8.97,6.2,.17,37],[`Draco`,260.0517,57.9153,75.9,-8.71,9.93,.3,87],[`Andromeda XIV`,12.8958,29.6969,794.3,-8.6,1.7,.31,0],[`Canes Venatici I`,202.0146,33.5558,217.8,-8.59,8.9,.39,70],[`Andromeda XVII`,9.2792,44.3222,727.8,-8.51,1.24,.27,122],[`Andromeda XXVIII`,338.1717,31.2161,660.7,-8.5,1.11,.34,39],[`Andromeda XXIX`,359.7317,30.7556,731.1,-8.32,1.7,.35,51],[`Crater II`,177.31,-18.4131,117.5,-8.2,31.2,.05,0],[`Andromeda IX`,13.2208,43.1958,765.6,-8.12,2.5,0,0],[`Andromeda XXX`,9.1454,49.6467,682.3,-7.97,1.35,0,0],[`Andromeda XXVII`,9.3629,45.3869,827.9,-7.89,1.8,.4,150],[`Leo T`,143.7225,17.0514,416.9,-7.6,1.25,.23,-107],[`Andromeda XXIV`,19.625,46.3661,599.8,-7.59,2.1,.25,5],[`Andromeda X`,16.6404,44.8044,669.9,-7.53,1.3,.44,46],[`Eridanus II`,56.0879,-43.5333,380.2,-7.21,1.81,.37,82],[`Andromeda XXVI`,5.94,47.9161,762.1,-7.11,1,.25,145]],Cd=[[`Local Void`,`void`,330.68,40.08,113.5,195.7],[`M81 group`,`group`,148.8882,69.0653,11.74,6.85],[`Centaurus A group`,`group`,201.3651,-43.0191,12.26,9.13],[`Sculptor group`,`group`,11.888,-25.2881,11.42,4.57],[`Leo Triplet`,`group`,170.0625,12.9916,35.22,0],[`M51`,`galaxy`,202.4696,47.1952,27.98,.07],[`M104`,`galaxy`,189.9976,-11.6231,31.15,.08],[`Virgo Cluster`,`cluster`,187.7059,12.3911,53.82,7.83],[`M87`,`galaxy`,187.7059,12.3911,54.47,.1],[`Fornax Cluster`,`cluster`,54.6209,-35.4502,65.23,4.57],[`Eridanus group`,`group`,55.0493,-18.58,81.87,0],[`Great Attractor`,`cluster`,243.6032,-60.8669,226.96,13],[`Centaurus Cluster`,`cluster`,192.2053,-41.3109,145.4,0],[`Hydra Cluster`,`cluster`,159.1783,-27.5281,173.1,0],[`Perseus Cluster`,`cluster`,49.9507,41.5117,240.2,11.68],[`Perseus-Pisces Supercluster`,`supercluster`,15.7,36.77,256.3,233],[`Coma Cluster`,`cluster`,194.953,27.981,335.2,18.54],[`Hercules Cluster`,`cluster`,241.3121,17.7429,509.6,0],[`Shapley Supercluster`,`supercluster`,201.9896,-31.5025,675.6,349.5],[`Bootes Void`,`void`,222.95,45.8,722.2,288.9],[`Laniakea Supercluster`,`supercluster`,202.49,-47.75,228.4,521.8],[`CfA2 Great Wall`,`wall`,188.12,26.22,372.7,792.1],[`Sloan Great Wall`,`wall`,168,0,1019.7,1365],[`Hercules-Corona Borealis Great Wall`,`wall`,243.4,43.8,16163,6523],[`3C 273`,`quasar`,187.2779,2.0524,2130.7,0],[`NGC 2403`,`galaxy`,114.2139,65.6027,10.42,0],[`Circinus Galaxy`,`galaxy`,213.2913,-65.339,13.55,0],[`Cigar Galaxy`,`galaxy`,148.9685,69.6797,11.79,0],[`Southern Pinwheel Galaxy`,`galaxy`,204.2538,-29.8658,15.2,0],[`Pinwheel Galaxy`,`galaxy`,210.8024,54.3488,22.67,0],[`M106`,`galaxy`,184.7401,47.3037,23.84,0],[`Black Eye Galaxy`,`galaxy`,194.1821,21.6827,17.19,0],[`Sunflower Galaxy`,`galaxy`,198.9553,42.0294,26.74,0],[`NGC 891`,`galaxy`,35.6371,42.3483,30.66,0],[`Needle Galaxy`,`galaxy`,189.0867,25.9874,43.8,0],[`NGC 1300`,`galaxy`,49.921,-19.4112,53.49,0],[`Antennae Galaxies`,`galaxy`,180.4708,-18.8676,72.02,0],[`Cartwheel Galaxy`,`galaxy`,9.4213,-33.7163,407.69,0],[`Stephan's Quintet`,`galaxy`,338.9896,33.96,283.76,0],[`Hoag's Object`,`galaxy`,229.31,21.5855,599.47,0]],wd={R0:8.15,arms:[[`3-kpc arm`,3.52,15,-4.2,-4.2,15,18,.18],[`Norma`,4.46,18,-1,19.5,5,54,.14],[`Scutum-Centaurus`,4.91,23,14.1,12.1,0,104,.23],[`Sagittarius-Carina`,6.04,24,17.1,1,2,97,.27],[`Local`,8.26,9,11.4,11.4,-8,34,.31],[`Perseus`,8.87,40,10.3,8.7,-23,115,.35],[`Outer`,12.24,18,3,9.4,-16,71,.65]],bar:[5,29.1,.28]},Td=[[`Large Magellanic Cloud`,80.89417,-69.75611,165035,170,35.4,9.1,`lmc`,.5237,.564,10.06033,6.726,-170.2,645.65],[`Small Magellanic Cloud`,13.15833,-72.80028,208740,45,61.7,8.9,`smc`,.4973,.5052,9.27917,6.18517,133.5,299.92],[`Andromeda`,10.68471,41.26875,2553801,35,72.2,3,`m31`,.5084,.5028,6.03217,3.90133,1.9,177.83],[`Triangulum`,23.46207,30.66018,2638928,22.7,55,5.9,`m33`,.5013,.4999,2.92567,2.913,90.1,62.09],[`M110`,10.09191,41.68542,2687852,170,90,-4.8,`m110`,.502,.498,.32133,.378,.1,16.22],[`Barnard's Galaxy`,296.23416,-14.79758,1497708,0,16.9,9.8,`ngc6822`,.4869,.5163,.42833,.38783,90,15.42],[`IC 10`,5.07223,59.30379,2590657,129,31.1,9.9,`ic10`,.5037,.5156,.28883,.18583,.1,6.68],[`IC 1613`,16.2017,2.1195,2462804,0,22.9,9.9,`ic1613`,.4804,.4816,.42233,.28717,0,18.32],[`WLM`,.49125,-15.46389,3044014,5,90,9.9,`wlm`,.4719,.5235,.49133,.3645,-90,10.45],[`M81`,148.88822,69.0653,11839463,157,62.7,2.4,`m81`,.502,.5018,.48133,.3505,89,21.63],[`Centaurus A`,201.36506,-43.01911,12151431,32.2,45.3,-2.1,`ngc5128`,.5371,.4434,.5645,.552,0,25.59],[`Sculptor Galaxy`,11.88806,-25.2888,12062227,52.5,90,5.1,`ngc253`,.5001,.499,.67633,.53483,0,26.79],[`Southern Pinwheel Galaxy`,204.25383,-29.86576,15198870,0,15.3,5,`m83`,.4999,.4998,.29317,.29317,0,13.61],[`Pinwheel Galaxy`,210.80243,54.34875,22667842,0,16.1,5.9,`m101`,.4824,.498,.5515,.54217,89.7,23.99],[`Whirlpool Galaxy`,202.46957,47.19526,24983550,163,32.6,4,`m51`,.4316,.7207,.27,.3425,.9,13.71],[`M87`,187.70593,12.39112,55772676,0,26.4,-4.3,`m87`,.4785,.5762,.20667,.13933,4.7,7.11],[`Black Eye Galaxy`,194.18207,21.68266,17188421,114,64,2.2,`m64`,.5488,.6035,.20017,.15817,-.3,10.52],[`Sunflower Galaxy`,198.95531,42.02937,26744792,103,54.9,4,`m63`,.4668,.4746,.34017,.25817,1.2,11.83],[`M106`,184.74008,47.30372,23842004,150,68.3,4,`m106`,.502,.4902,.5755,.5775,2.1,16.98],[`Needle Galaxy`,189.08668,25.98739,43802751,135.2,90,3.2,`ngc4565`,.4629,.4551,.3125,.248,1.4,16.75],[`NGC 891`,35.63711,42.34832,30658664,22,90,3.1,`ngc891`,.5034,.511,.30383,.23967,-90,13.03],[`NGC 2403`,114.21391,65.60268,10420684,126.3,61.3,6,`ngc2403`,.4977,.534,.48167,.33867,.3,19.95],[`Antennae Galaxies`,180.47084,-18.86759,72015245,0,51.9,8.9,`antennae`,.5199,.5628,.29333,.19683,42.3,5.42],[`NGC 1300`,49.92103,-19.41116,53489584,104.6,61.8,4,`ngc1300`,.5137,.4863,.15167,.15233,3,5.94]],Ed=[[`Aquila_Rift`,21.8,9.2,907],[`Aquila_Rift`,16.7,11.1,678],[`Aquila_Rift`,18.3,12.7,828],[`Aquila_Rift`,21.5,11.9,913],[`Aquila_Rift`,16,16.6,532],[`Aquila_S`,38.9,-19.1,401],[`Aquila_S`,39.3,-16.8,417],[`Aquila_S`,37.8,-17.5,440],[`Aquila_S`,36.8,-15.1,466],[`Ara`,336.7,-2,3470],[`Ara`,336.4,-1.7,3412],[`CB28`,204,-25.3,1298],[`CB29`,205.8,-21.6,1220],[`CB34`,187,-3.9,4312],[`CMa_OB1`,225.4,.3,4136],[`CMa_OB1`,225,-.2,4129],[`CMa_OB1`,222.9,-1.9,3813],[`CMa_OB1`,224.5,-.2,4116],[`California`,162.5,-9.5,1422],[`California`,161.2,-9,1481],[`California`,163.8,-7.9,1520],[`Cam`,148.8,17.8,1200],[`Cam`,144.8,17.8,718],[`Cam`,146.1,17.7,766],[`Cam`,148.4,17.7,1190],[`Cam`,146.6,17.2,701],[`Carina`,286.2,-.2,8343],[`Carina`,288.1,-1.1,7955],[`Carina`,286.3,.2,8157],[`Carina`,287.4,-.6,8128],[`Cepheus`,110.1,17.4,1099],[`Cepheus`,104,9.4,3408],[`Cepheus`,111.5,12.2,3125],[`Cepheus`,108.3,17.6,1128],[`Cepheus`,107,6,2939],[`Cepheus`,103.7,11.4,2828],[`Cepheus`,104,14.5,1112],[`Cepheus`,107.7,5.9,2772],[`Cepheus`,111.5,20.8,1080],[`Cepheus`,114.6,16.5,1128],[`Cepheus`,109.6,16.9,1122],[`Cepheus`,113.5,15.9,1096],[`Cepheus`,108.2,5.5,2906],[`Cepheus`,107.7,12.4,3134],[`Cepheus`,115.3,17.6,1168],[`Cepheus`,112.8,20.8,1223],[`Cepheus`,111.8,20.3,1187],[`Cepheus`,106.4,17.7,1230],[`Cepheus`,109,7.7,2661],[`Cepheus`,112.8,16.5,1122],[`Cepheus`,103.5,13.5,1171],[`Cepheus`,107,9.4,3216],[`Cepheus`,110.7,12.6,3226],[`Cepheus`,108.4,18.6,1083],[`Cepheus`,109.6,6.8,2873],[`Cepheus`,108.3,12.4,2984],[`Cepheus`,105.9,13.8,3102],[`Cepheus`,116.1,20.2,1138],[`Chamaeleon`,303.3,-14.2,620],[`Chamaeleon`,297.5,-15.3,685],[`Chamaeleon`,303,-16.7,525],[`Circinus`,318.4,-3.2,2228],[`Circinus`,316.9,-3.9,2202],[`Coalsack`,302.9,-2.6,613],[`Coalsack`,301.4,-2.6,594],[`Coalsack`,301.4,3.1,626],[`Coalsack`,302.8,1.8,610],[`Coalsack`,302.9,3.1,623],[`Coalsack`,300,3.1,629],[`Corona_Australis`,.8,-20.1,506],[`Corona_Australis`,359.5,-17.8,479],[`Corona_Australis`,359.5,-21,538],[`CygnusX`,82.9,.7,4149],[`CygnusX`,76.8,2.2,5290],[`CygnusX`,77.2,2.1,4269],[`CygnusX`,80.3,-2.4,4700],[`CygnusX`,80.5,1.1,3960],[`CygnusX`,79,3.7,4915],[`CygnusX`,77.7,1.3,2929],[`CygnusX`,80,-.7,3232],[`CygnusX`,79.1,3,3271],[`CygnusX`,80.3,2.9,3173],[`CygnusX`,80.2,.1,3999],[`CygnusX`,82.3,1,2482],[`CygnusX`,78.7,.6,2997],[`Draco`,89.5,38.4,1569],[`GGD4`,184.3,-4.2,4400],[`GGD4`,185.1,-4.3,4553],[`Gem_OB1`,189.9,-.3,5920],[`Gem_OB1`,189.5,.7,6080],[`Gem_OB1`,190.9,0,6083],[`Gem_OB1`,188.7,1,6429],[`Gem_OB1`,193,.6,5629],[`Hercules`,45.1,8.9,727],[`Hercules`,44.1,8.6,727],[`Hercules`,42.8,7.9,750],[`IC1396`,98.9,4,2988],[`IC1396`,100.1,4.2,2952],[`IC1396`,100.4,3.4,3069],[`IC1396`,99.1,4.7,2965],[`IC2118`,206.4,-26,1070],[`IC2118`,207.3,-27.2,890],[`IC2118`,206.9,-26.6,923],[`IC2944`,294.1,-1.6,7707],[`IC2944`,294.9,-1.5,7997],[`IC2944`,294.6,-2,7639],[`IC443`,189.2,3.2,5313],[`IC443`,189.2,4.7,5196],[`IC443`,189.6,4,5082],[`IC443`,189.1,4.1,5179],[`IC5146`,93.7,-4.6,2524],[`IC5146`,93.4,-4.2,2583],[`IC5146`,94,-4.9,2381],[`IC5146`,94.4,-5.5,2449],[`L1228`,111.8,20.2,1194],[`L1228D`,112.3,13.8,1601],[`L1251`,114.6,14.5,1145],[`L1265`,115.9,-2,1122],[`L1293`,121.7,.1,3532],[`L1302`,122,-1.4,2955],[`L1306`,125.6,-.6,2945],[`L1306`,126.8,-.8,3069],[`L1307`,124.3,3.3,2720],[`L1307`,124.6,2.6,2942],[`L1333`,128.9,13.7,923],[`L1335`,128.9,4.3,2110],[`L1340`,130,11.5,2798],[`L1355`,132.8,8.9,3092],[`L1355`,133.6,9.3,3014],[`L1616`,203.5,-24.8,1279],[`L1617`,203.5,-12,1350],[`L1622`,204.7,-11.8,1363],[`L1634`,207.6,-23.2,1269],[`L1634`,207.6,-22.8,1187],[`L291`,10.7,-2.8,4693],[`L291`,11.3,-2.1,4357],[`L291`,11.4,-2.7,4397],[`L379`,16.9,-2.2,7847],[`L379`,17.1,-2.9,6164],[`L379`,16.8,-2.7,6722],[`L977`,89.5,2,2153],[`L977`,89.8,2.2,2094],[`L988`,90.7,2.4,2045],[`L988`,90.2,2.3,1996],[`LBN906`,202.2,-31.4,936],[`LBN917`,203.7,-30.3,757],[`LBN942`,205.6,-22,838],[`LBN968`,208.4,-28.4,1040],[`LBN969`,208.4,-22.2,894],[`LBN991`,213.6,-28.9,1331],[`Lacerta`,96.1,-10.2,1644],[`Lacerta`,95.8,-11.5,1543],[`Lagoon`,6.9,-2.2,4322],[`Lagoon`,7.3,-2.4,3979],[`Lupus`,347.3,6.6,780],[`Lupus`,338.7,17.4,522],[`Lupus`,339,16.3,492],[`Lupus`,341.1,9.8,643],[`Lupus`,341.1,6.4,352],[`Lupus`,339,14.9,509],[`M16`,17.5,1.2,5672],[`M16`,17.9,1,5349],[`M17`,15.3,-1.1,5134],[`M17`,15.2,-.3,4922],[`M17`,15.5,-.8,4853],[`M20`,7.4,-.5,4087],[`M20`,6.7,-.5,4025],[`M20`,7,.1,3868],[`M20`,6.6,-.1,3862],[`Maddalena`,216.5,-2.5,6882],[`Maddalena`,217.1,.4,6158],[`Maddalena`,216.8,-2.2,6892],[`Maddalena`,216.4,.1,6846],[`Mon_OB1_NGC2264`,200.4,.8,2345],[`Mon_OB1_NGC2264`,201.2,1,2332],[`Mon_OB1_NGC2264`,201.4,1.1,2440],[`Mon_OB1_NGC2264`,203.1,1.8,2544],[`Mon_OB1_NGC2264`,202.8,2.3,2476],[`Mon_OB1_NGC2264`,202.1,2.7,2515],[`Mon_R2`,220.9,-8.3,2984],[`Mon_R2`,213,-12.5,2606],[`Mon_R2`,215.3,-12.9,2502],[`Mon_R2`,219.2,-7.7,3076],[`Mon_R2`,219.3,-9.5,3010],[`Mon_R2`,213.9,-11.9,2570],[`NGC2362`,239.5,-4.9,4295],[`NGC2362`,237.2,-4.9,3826],[`NGC2362`,238.7,-4.2,4429],[`NGC6604`,17.8,2.2,4410],[`NGC6604`,18.1,1.9,4971],[`NGC6604`,18.2,2.5,4351],[`Norma`,338.8,1.8,2352],[`North_America`,85.3,-.8,2557],[`North_America`,84.8,-1.2,2864],[`North_America`,85.8,-2.2,2720],[`North_America`,86.6,-2.1,2384],[`North_America`,84.6,.1,2583],[`North_America`,83.7,-2.1,2547],[`North_America`,82.8,-2.1,2639],[`North_America`,81.7,-1.7,2779],[`North_America`,84.2,-1.3,2645],[`North_America`,84.8,-1.7,2678],[`Northern_Coalsack`,91.3,4.2,1882],[`Northern_Coalsack`,92.6,3.5,1830],[`Northern_Coalsack`,92.2,4.3,1784],[`Ophiuchus`,352.7,15.4,453],[`Ophiuchus`,355.2,16,417],[`Ophiuchus`,357.1,15.7,385],[`Ophiuchus_Arc`,349.9,16.6,545],[`Ophiuchus_Arc`,349.3,14.9,506],[`Ophiuchus_Arc`,352.4,18.3,424],[`Ophiuchus_B44`,359.2,12,486],[`Ophiuchus_B44`,357.1,13.1,473],[`Ophiuchus_B44`,354.5,15,502],[`Ophiuchus_B45`,358.6,15.3,453],[`Ophiuchus_B45`,357.1,15.6,463],[`Ophiuchus_B45`,355.6,16.1,431],[`Ophiuchus_L1688`,353.2,16.6,453],[`Ophiuchus_North`,8.4,22,356],[`Ophiuchus_North`,4.2,18.2,492],[`Ophiuchus_North`,6.5,20.4,437],[`Orion`,206.4,-15.4,1412],[`Orion`,209,-20.1,1285],[`Orion`,209.1,-19.9,1451],[`Orion`,212.2,-18.6,1543],[`Orion`,202,-13.3,1569],[`Orion`,205.7,-14.8,1422],[`Orion`,212.4,-19.9,1354],[`Orion`,208.4,-19.6,1301],[`Orion`,207.9,-16.8,1341],[`Orion`,214.7,-19,1357],[`Orion`,209.8,-19.5,1429],[`Orion`,202,-14,1301],[`Orion`,204.7,-19.2,1363],[`Orion`,207.4,-16,1471],[`Orion`,204.8,-13.3,1354],[`Orion`,212.4,-17.3,1703],[`Orion`,201.3,-13.8,1370],[`Orion_Lam`,192.3,-8.9,1324],[`Orion_Lam`,196.7,-16.1,1389],[`Orion_Lam`,195.5,-13.7,1301],[`Orion_Lam`,199.6,-11.9,1282],[`Orion_Lam`,194.8,-12.1,1380],[`Orion_Lam`,194.7,-10.1,1386],[`Orion_Lam`,196.9,-8.2,1285],[`Pegasus`,104.2,-31.7,952],[`Pegasus`,88.8,-41.3,776],[`Pegasus`,92.2,-34.7,841],[`Pegasus`,95.3,-35.7,838],[`Pegasus`,105.6,-30.6,835],[`Perseus`,159.9,-18.1,995],[`Perseus`,158.6,-19.9,949],[`Perseus`,158.5,-22.1,793],[`Perseus`,159.3,-20.6,900],[`Perseus`,159.7,-19.7,1132],[`Perseus`,159.9,-18.9,910],[`Perseus`,159.4,-21.3,763],[`Perseus`,157.8,-22.8,861],[`Perseus`,160.8,-17,900],[`Perseus`,160.8,-18.7,930],[`Perseus`,159.1,-21.1,949],[`Perseus`,157.7,-21.4,783],[`Perseus`,158.2,-20.9,936],[`Perseus`,157.5,-17.9,936],[`Perseus`,160.4,-17.2,926],[`Perseus`,160,-17.6,1080],[`Perseus`,160.4,-16.7,835],[`Perseus`,160.7,-16.3,965],[`Pipe_B59`,356.9,7.3,587],[`Polaris`,123.5,37.9,1539],[`Polaris`,129.5,17.3,1112],[`Polaris`,126.3,21.2,1119],[`RCW38`,268,-1.2,5202],[`RCW38`,267.7,-1.2,5382],[`Rosette`,205.2,-2.6,4609],[`Rosette`,206.8,-1.2,4423],[`Rosette`,207.8,-2.1,4113],[`S106`,76,-.7,3558],[`Serpens`,29.6,3.9,1634],[`Serpens`,29.2,4.1,1813],[`Serpens`,28.5,3,1595],[`Serpens`,28.1,3.6,1432],[`Serpens_Low`,31.8,2.6,1611],[`Serpens_Low`,30.1,2.7,1520],[`Serpens_Low`,31.9,3,1588],[`Serpens_Low`,32.9,2.7,1716],[`Serpens_Main`,30.3,5.2,1598],[`Serpens_Main`,31.2,5.2,1386],[`Serpens_OB2`,18.8,1.2,5117],[`Serpens_OB2`,18,1.6,5143],[`Serpens_OB2`,18.4,1.3,5254],[`Serpens_W40`,28.8,3.5,1588],[`Sh2-231`,173,2.4,5271],[`Sh2-232`,173.5,2.9,5587],[`Spider`,134.8,40.5,1204],[`Taurus`,173.5,-14.2,479],[`Taurus`,171.6,-15.8,424],[`Taurus`,175.8,-12.9,509],[`Taurus`,172.2,-14.6,447],[`Taurus`,170.2,-12.3,554],[`Taurus`,174.5,-15.6,519],[`Taurus`,171.7,-17.2,486],[`Taurus`,166.2,-16.6,450],[`Taurus`,171.4,-13.5,502],[`Taurus`,169.9,-19.2,421],[`Ursa_Major`,158.5,35.2,1148],[`Ursa_Major`,143.4,38.5,1331],[`Ursa_Major`,146.9,40.7,1076],[`Ursa_Major`,153.5,36.7,1148],[`Vela_C`,266.1,1.4,2825],[`Vela_C`,265.3,1.2,3089],[`Vela_C`,265.3,1.8,2864],[`Vela_C`,264.7,1.4,3037],[`Vela_C`,264.3,2.5,3147],[`W3`,133.3,1.1,6109],[`W3`,133.7,1.3,7123],[`W3`,133.3,.5,5411],[`W4`,135.6,1.3,5952],[`W4`,135.3,1,5372],[`W4`,135.6,.2,4733],[`W4`,135.6,1.2,5724],[`W5`,136.5,1.2,6608],[`W5`,137,1.4,6774],[`W5`,137.8,1.5,6399],[`W5`,138,.9,5672],[`W5`,136.9,1,6859]],Dd=[[`Orion Nebula`,83.82,-5.3875,1350,`neb-m42`,.4642,.6174,.99917,.776,.2],[`Lagoon Nebula`,270.90417,-24.38667,4149,`neb-m8`,.5064,.4967,2.98967,2.99567,.3],[`Trifid Nebula`,270.675,-22.97167,4041,`neb-m20`,.3644,.6617,.415,.415,-12.4],[`Carina Nebula`,161.25929,-59.69994,8545,`neb-ngc3372`,.5405,.4064,2.2065,1.2965,90.8],[`Rosette Nebula`,98.045,4.91389,4537,`neb-ngc2244`,.5004,.4972,1.57917,1.34367,0],[`Helix Nebula`,337.41061,-20.83715,653,`neb-ngc7293`,.5026,.496,.62517,.62517,0],[`Dumbbell Nebula`,299.90151,22.7212,1248,`neb-m27`,.5013,.5151,.34367,.28867,90],[`Pleiades`,56.60083,24.11389,442,`neb-m45`,.512,.5803,1.14467,.8355,-90.7],[`North America Nebula`,314.69583,44.33,2639,`neb-ngc7000`,.4301,.4317,3.93717,3.93717,.9],[`Omega Nebula`,275.19583,-16.17167,5225,`neb-m17`,.5524,.4731,.89,.89,-.1],[`Cat's Eye Nebula`,269.63918,66.63299,4455,`neb-ngc6543`,.5039,.4956,.10667,.10667,-.1],[`Horsehead Nebula`,85.24583,-2.45833,1471,`neb-b33`,.4834,.466,.943,.95883,89.7]],Od=[[`Pillars of Creation`,274.72765,-13.83774,5675,`webb-pillars_m16`,.05933,.05554,-7.31,0],[`Cosmic Cliffs`,159.21304,-58.62017,8545,`webb-cosmic_cliffs_ngc3324`,.12146,.07035,-102.98,0],[`Southern Ring Nebula`,151.75589,-40.43594,2645,`webb-southern_ring_ngc3132`,.04028,.03751,-111.99,0],[`Ring Nebula`,283.39506,33.02928,2568,`webb-ring_m57`,.03573,.03624,-140.2,0],[`Crab Nebula`,83.63567,22.01635,6523,`webb-crab_m1`,.08875,.07708,-1.92,0],[`Rho Ophiuchi`,246.62735,-24.38539,419,`webb-rho_ophiuchi`,.11087,.10384,80.56,0],[`Cassiopeia A`,350.84976,58.81506,10926,`webb-cas_a`,.10145,.11618,-27.19,0],[`Tarantula Nebula`,84.69835,-69.09526,165035,`webb-tarantula_30dor`,.12127,.07013,13.46,1],[`NGC 346`,14.76797,-72.1738,208740,`webb-ngc346`,.06844,.0994,-5.4,1],[`Serpens Main`,277.48251,1.24296,1619,`webb-serpens`,.10978,.06956,108.94,0],[`Westerlund 1`,251.76623,-45.85137,12e3,`webb-westerlund1`,.09598,.09598,75.68,0],[`Phantom Galaxy`,24.17348,15.7827,31637132,`webb-m74`,.06098,.03485,110.08,2],[`Cartwheel Galaxy`,9.42347,-33.71323,40769e4,`webb-cartwheel`,.03904,.03593,27.97,2],[`Stephan's Quintet`,338.99763,33.9605,28376e4,`webb-stephans_quintet`,.10561,.10125,-62.02,2],[`Sombrero Galaxy`,189.99756,-11.62272,36757781,`webb-m104`,.10334,.09645,-16.47,2],[`Cigar Galaxy`,148.97397,69.6809,11787604,`webb-m82`,.15803,.10653,32.26,2],[`NGC 1365`,53.39849,-36.14427,57990537,`webb-ngc1365`,.04582,.0365,8.09,2],[`NGC 1433`,55.508,-47.2209,46314152,`webb-ngc1433`,.05086,.03594,29.53,2],[`I Zwicky 18`,143.51,55.24091,46640308,`webb-i_zw_18`,.01716,.01755,-113.62,2],[`Arp 220`,233.73856,23.50291,272340260,`webb-arp220`,.0279,.033,-41.52,2],[`NGC 7469`,345.81304,8.8747,227656888,`webb-ngc7469`,.03587,.03571,117.92,2]],kd=[[`Jupiter`,`webb-jupiter`],[`Saturn`,`webb-saturn`],[`Uranus`,`webb-uranus`],[`Neptune`,`webb-neptune`]],Ad=[`MoM-z14`,150.0933,2.2732,33.9],jd=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Md=(e,t,n,r,i)=>jd(t,n,e)*(1-jd(r,i,e));function Nd(e){let t=4600*(1/(.92*e+1.7)+1/(.92*e+.62))/100,n=t<=66?255:329.7*(t-60)**-.1332,r=t<=66?99.47*Math.log(t)-161.1:288.1*(t-60)**-.0755,i=t>=66?255:t<=19?0:138.5*Math.log(t-10)-305,a=e=>(Math.min(255,Math.max(0,e))/255)**2.2;n=a(n),r=a(r),i=a(i);let o=Math.max(n,r,i);return[n/o,r/o,i/o]}var Pd=`#include <common>
#include <logdepthbuf_pars_vertex>
attribute vec3 color; attribute float lum; attribute vec2 shape;
uniform float uGain; uniform float uPix; uniform float uFar; uniform float uMinSize;
out vec3 vCol; out vec2 vShape;
void main() {
vShape = shape;
vec4 wp = modelMatrix * vec4(position, 1.0);
float d = max(length(wp.xyz), 1e-6);
float flux = uFar > 0.5 ? lum : lum / (d * d);
float b = pow(flux, 0.5) * uGain;
vCol = color * min(b, 60.0);
gl_PointSize = clamp(uMinSize + sqrt(b) * 1.2, uMinSize, 9.0) * uPix;
gl_Position = projectionMatrix * viewMatrix * wp;
if (b < 0.004) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
#include <logdepthbuf_vertex>
}`,Fd=`#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uFade;
in vec3 vCol; in vec2 vShape; out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
vec2 q = gl_PointCoord * 2.0 - 1.0;
if (vShape.x > 0.0) { float c = cos(vShape.y), s = sin(vShape.y); q = vec2(c * q.x + s * q.y, (-s * q.x + c * q.y) / vShape.x); }
float r2 = dot(q, q);
if (r2 > 1.0) discard;
float a = exp(-r2 * 5.0);
fragColor = vec4(vCol * a * uFade, 1.0);
}`;function Id(e,t=1.6){return new Jr({glslVersion:ze,vertexShader:Pd,fragmentShader:Fd,uniforms:{uGain:{value:1},uPix:{value:1},uFar:{value:+!!e},uFade:{value:1},uMinSize:{value:t}},blending:2,depthWrite:!1,transparent:!0})}function Ld(e,t,n,r,i){let a=new Tr;i&&a.setAttribute(`shape`,new K(i,2)),a.setAttribute(`position`,new K(e,3)),a.setAttribute(`color`,new K(t,3)),a.setAttribute(`lum`,new K(n,1));let o=new Pi(a,r);return o.frustumCulled=!1,o}function Rd(e,t){let n=()=>{let r=performance.now();for(;performance.now()-r<6;)if(e.next().done){t();return}setTimeout(n,0)};setTimeout(n,0)}var zd=[0,0,0],Bd=new Set([]),Vd=e=>{zd=e.pos};async function Hd(){let e=new ci,t=new ai;e.add(t);let n=await pd(`assets/stars.bin`);if(!n)throw Error(`stars.bin missing`);let r=new Float32Array(n),i=r.length/5,a=new Float32Array(i*3),o=new Float32Array(i*3),s=new Float32Array(i);for(let e=0;e<i;e++)a.set([r[e*5]*1e4,r[e*5+1]*1e4,r[e*5+2]*1e4],e*3),o.set(Nd(r[e*5+4]),e*3),s[e]=10**(-.4*r[e*5+3]);let c=Object.assign(Id(!0,1.2),Cl);t.add(Ld(a,o,s,c));let l=Math.max(window.innerWidth,window.innerHeight)<1e3;Iu(l?`assets/sky-gaia-2k.jpg`:`assets/sky-gaia.jpg`,-99,19.8);let u=new Jr({glslVersion:ze,side:1,depthWrite:!1,transparent:!0,blending:2,uniforms:{uGX:{value:new H(...Wc)},uGY:{value:new H(...Kc)},uGZ:{value:new H(...Gc)},uFade:{value:1},uGain:{value:1},tSky:{value:Ju(l?`assets/sky-gaia-2k.jpg`:`assets/sky-gaia.jpg`,!0,!0)}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
out vec3 vDir;
void main() { vDir = normalize(position); gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform vec3 uGX; uniform vec3 uGY; uniform vec3 uGZ; uniform float uFade; uniform float uGain; uniform sampler2D tSky;
in vec3 vDir; out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
vec3 g = vec3(dot(vDir, uGX), dot(vDir, uGY), dot(vDir, uGZ));
float b = asin(clamp(g.z, -1.0, 1.0));
float l = atan(g.y, g.x);
vec3 c = pow(textureLod(tSky, vec2(0.5 - l / (2.0 * PI), 0.5 - b / PI), 0.0).rgb, vec3(2.2));
c = max(c - 0.0004, 0.0);
fragColor = vec4(c * 0.035 * uGain * uFade, 1.0);
}`});Object.assign(u,Cl);let d=new Lr(new Hi(5e3,64,32),u);return d.frustumCulled=!1,t.add(d),{name:`starsky`,unit:1,scene:e,root:t,origin:()=>zd,weight:e=>Md(e.L,-1,0,18.6,19.8),clip:()=>[1,2e4],setGain(e,t){c.uniforms.uGain.value=e,c.uniforms.uPix.value=t,u.uniforms.uGain.value=e},update(e){let t=Md(e.L,-1,0,18.6,19.8);c.uniforms.uFade.value=t,u.uniforms.uFade.value=t}}}function Ud(e){let t=new ci,n=new ai;t.add(n);let r=1e9,i=new Jr({glslVersion:ze,uniforms:{uTime:{value:0},uFade:{value:1},uBright:{value:1}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
out vec3 vN; out vec3 vView; out vec3 vP;
void main() { vP = position; vN = normalize(normalMatrix * normal); vec4 wp = modelMatrix * vec4(position, 1.0); vView = (viewMatrix * wp).xyz;
gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
${Fl}
uniform float uTime; uniform float uFade; uniform float uBright;
in vec3 vN; in vec3 vView; in vec3 vP; out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
float mu = max(dot(normalize(vN), normalize(-vView)), 0.0);
float limb = 0.3 + 0.7 * pow(mu, 0.55);
float gran = 0.85 + 0.15 * fbm3(normalize(vP) * 60.0 + uTime * 0.02);
vec3 c = vec3(1.0, 0.92, 0.8) * limb * gran;
fragColor = vec4(c * uBright * uFade, 1.0);
}`}),a=new Lr(new Hi(.6963,96,48),i);a.frustumCulled=!1,n.add(a);let o={mercury:{r:2440,c:[.5,.48,.45]},venus:{r:6052,c:[.9,.82,.62]},earth:{r:6371,c:[.35,.5,.85]},mars:{r:3390,c:[.75,.42,.25]},jupiter:{r:69911,c:[.82,.72,.58]},saturn:{r:58232,c:[.86,.78,.58]},uranus:{r:25362,c:[.62,.82,.88]},neptune:{r:24622,c:[.38,.52,.92]}},s=[],c=[],l=[],u=$c,d=e.sun;for(let t of u){let n=Q(Z(e.planets[t],d),1/r),{r:i,c:a}=o[t],u=Math.hypot(...n),f=(i/6371)**2/(u/149.6)**2*4e3;s.push(...n),c.push(...a),l.push(f)}let f=Id(!1,2.4);n.add(Ld(new Float32Array(s),new Float32Array(c),new Float32Array(l),f));let p=Q(Z(e.moon,d),1/r);n.add(Ld(new Float32Array(p),new Float32Array([.7,.7,.68]),new Float32Array([400]),f));let m={Jupiter:{aspect:1.055,fill:.9,px:34},Saturn:{aspect:1.778,fill:.5,px:48},Uranus:{aspect:1,fill:.66,px:30},Neptune:{aspect:1.499,fill:.46,px:30}},h=[],g=Math.max(window.innerWidth,window.innerHeight)<1e3;for(let[t,i]of kd){let a=m[t],o=e.planets[t.toLowerCase()];if(!a||!o)continue;let s=new Jr({glslVersion:ze,transparent:!0,depthWrite:!1,blending:2,uniforms:{tPhoto:{value:null},uUV:{value:new V(1,1)},uSize:{value:40},uAspect:{value:a.aspect},uFade:{value:0},uGain:{value:1}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
uniform float uSize;
void main() { gl_PointSize = uSize; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform sampler2D tPhoto; uniform vec2 uUV; uniform float uAspect; uniform float uFade; uniform float uGain; out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
vec2 q = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
q.y = (q.y - 0.5) * uAspect + 0.5;
if (q.y < 0.0 || q.y > 1.0) discard;
vec3 c = pow(texture(tPhoto, q * uUV).rgb, vec3(2.2));
vec2 e = min(q, 1.0 - q);
c *= smoothstep(0.0, 0.08, min(e.x, e.y));
fragColor = vec4(c * uGain * uFade, 1.0);
}`}),c=new Tr;c.setAttribute(`position`,new K(new Float32Array(Q(Z(o,d),1/r)),3));let l=new Pi(c,s);l.frustumCulled=!1,l.userData={file:`assets/galaxies/${i}${g?`-s`:``}.jpg`,look:a},Su(l.userData.file,10.6),Iu(l.userData.file,8,17.6),Bd.has(`webbplanets`)||n.add(l),h.push(s),s.userData=l.userData}let _=Id(!0,.9),v=null;xu(()=>pd(`assets/small-bodies.bin`).then(t=>{if(!t)return;let i=new Uint32Array(t,0,1)[0],a=new Float32Array(t,4,i*3),o=new Uint8Array(t,4+i*12,i),s=Nc/r,c=new Float32Array(i*3),l=new Float32Array(i*3),u=new Float32Array(i),f=Q(Z(e.sun,d),1/r);for(let e=0;e<i;e++){for(let t=0;t<3;t++)c[e*3+t]=a[e*3+t]*s+f[t];l.set(o[e]===2?[.62,.74,.95]:o[e]===1?[.85,.72,.58]:[.72,.7,.66],e*3),u[e]=o[e]===2?.05:.02}let p=Ld(c,l,u,_);v=p,Bd.has(`smallbodies`)||n.add(p)}));let y=new vi({color:new G(.25,.32,.45),transparent:!0,opacity:.6,blending:2,depthWrite:!1});for(let t of u){let i=rl(t,e.jd,512).map(e=>new H(...Q(e,1/r))),a=new Oi(new Tr().setFromPoints(i),y);a.frustumCulled=!1,n.add(a)}let b=new Jr({glslVersion:ze,transparent:!0,depthWrite:!1,blending:2,uniforms:{uSize:{value:40},uCore:{value:4},uRim:{value:3},uWide:{value:16},uBright:{value:1},uGlare:{value:1},uGlow:{value:1},uFade:{value:0}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
uniform float uSize;
void main() {
gl_PointSize = uSize;
gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uSize; uniform float uCore; uniform float uRim; uniform float uWide;
uniform float uBright; uniform float uGlare; uniform float uGlow; uniform float uFade;
out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
float r = length(gl_PointCoord * 2.0 - 1.0) * uSize * 0.5;
float core = 1.0 - smoothstep(uCore - 0.6, uCore + 0.6, r);
float rim = exp(-0.5 * pow(max(r - uCore, 0.0) / uRim, 2.0));
float wide = exp(-0.5 * r * r / (uWide * uWide));
fragColor = vec4(vec3(1.0, 0.94, 0.84) * (core * uBright + (1.0 - core) * rim * uGlare + wide * uGlow) * uFade, 1.0);
}`}),x=new Tr;x.setAttribute(`position`,new K(new Float32Array([0,0,0]),3));let S=new Pi(x,b);return S.frustumCulled=!1,Bd.has(`sunspot`)||n.add(S),{name:`solar`,unit:r,scene:t,root:n,origin:()=>e.sun,weight:e=>Md(e.L,8,9,16.5,17.6),clip:e=>[Math.max(1e-4,e.d/r*1e-4),1e7],update(e,t){let n=Md(e.L,8,9,16.5,17.6);i.uniforms.uTime.value=t.time,i.uniforms.uFade.value=n,i.uniforms.uBright.value=4/t.exposure,f.uniforms.uFade.value=n*Md(e.L,9.5,10.5,99,100),f.uniforms.uGain.value=1/t.exposure;let r=(4.5-3*jd(12.6,16.2,e.L))*t.dpr,a=b.uniforms,o=Math.min(Math.ceil(r*20),250);a.uCore.value=r,a.uRim.value=r*.6,a.uWide.value=Math.min(r*3,o/6.4),a.uSize.value=o,a.uBright.value=4/t.exposure,a.uGlare.value=.35/t.exposure,a.uGlow.value=.008/t.exposure,a.uFade.value=n,y.opacity=.5*Md(e.L,10.6,11.6,14.6,15.6)/Math.max(t.exposure,.3);let s=n*Md(e.L,11.2,11.7,14.4,14.9);for(let n of h)!n.uniforms.tPhoto.value&&e.L>10.6&&(n.uniforms.tPhoto.value=Ju(n.userData.file,!0)),n.uniforms.tPhoto.value&&n.uniforms.uUV.value.fromArray(n.uniforms.tPhoto.value.userData.uvScale??[1,1]),n.uniforms.uSize.value=n.userData.look.px/n.userData.look.fill*t.dpr,n.uniforms.uFade.value=s,n.uniforms.uGain.value=1.2/Math.max(t.exposure,.3);let c=n*Md(e.L,10.8,11.6,13.9,14.5)*(1-.85*jd(12.2,13.2,e.L));_.uniforms.uFade.value=c,v&&(v.visible=c>.001),_.uniforms.uGain.value=1/t.exposure}}}var Wd=[[219.902,-60.834,4.37,1.52,.71],[219.896,-60.837,4.37,.5,.88],[217.429,-62.68,4.24,.0017,1.82],[269.452,4.693,5.96,.0035,1.73],[164.12,7.015,7.86,.001,2],[165.836,35.97,8.31,.02,1.5],[101.287,-16.716,8.66,25.4,0],[24.75,-17.95,8.73,6e-4,1.85],[282.455,-23.836,9.69,.004,1.76],[355.48,44.18,10.3,.0018,1.9],[53.233,-9.458,10.5,.34,.88],[346.47,-35.85,10.7,.033,1.48],[176.937,.804,11,.0036,1.75],[339.68,-15.3,11.1,.001,1.9],[114.825,5.225,11.46,6.93,.42],[316.725,38.749,11.4,.15,1.18],[316.73,38.74,11.4,.085,1.37],[280.7,59.63,11.5,.01,1.6],[4.6,44.02,11.6,.006,1.56],[330.84,-56.79,11.9,.22,1.06],[127.45,26.78,11.8,4e-4,2],[26.017,-15.937,11.9,.52,.72],[53.99,-44.51,12,.001,1.9],[18.13,-16.99,12.1,.002,1.8],[111.85,5.23,12.4,.01,1.57],[43.25,16.88,12.5,7e-4,2.1],[77.92,-45.02,12.8,.012,1.56],[319.31,-38.87,12.9,.07,1.4],[337,57.7,13.1,.01,1.6],[247.58,-12.66,14,.01,1.6],[1.38,-37.35,14.2,.02,1.46],[12.29,5.39,14.1,2e-4,.56],[297.7,8.87,16.7,10.6,.22],[323.4,-49,16.2,.03,1.5],[63.82,-7.65,16.3,.46,.82],[271.36,2.5,16.6,.6,.86],[344.41,-29.62,25.1,16.6,.09],[279.234,38.784,25,40,0],[116.33,28.03,33.8,43,1],[213.915,19.182,36.7,170,1.23],[79.17,45.998,42.9,79,.8],[113.65,31.89,51,30,.03],[68.98,16.51,65,439,1.54],[152.09,11.97,79,288,-.11],[201.3,-11.16,250,20500,-.23],[88.79,7.41,548,9e4,1.85],[78.63,-8.2,860,12e4,-.03],[279.23,38.78,25,40,0]],Gd={Canopus:[10700,.15],Deneb:[196e3,.09],Antares:[75900,1.83],Polaris:[1260,.6],Achernar:[3150,-.16],"TRAPPIST-1":[55e-5,2],"Kepler-452":[1.2,.7]},Kd=105.6;function qd(e){let t=new ci,n=new ai;t.add(n);let r=Id(!1,1.4);(()=>{let e=jl(11),t=16e4,i=t+Wd.length+Object.keys(Gd).length+1,a=new Float32Array(i*3),o=new Float32Array(i*3),s=new Float32Array(i),c=0,l=(e,t,n)=>{a.set(e,c*3),o.set(n,c*3),s[c]=t,c++};l([0,0,0],1,Nd(.65));for(let[e,t,n,r,i]of Wd)l(Q(Vc(e,t),n),r,Nd(i));for(let[e,t,n,r]of bd)Gd[e]&&l(Q(Vc(t,n),r),Gd[e][0],Nd(Gd[e][1]));for(let n=0;n<t;n++){let t=1500*Math.sqrt(e())+15,n=e()*Math.PI*2,r=-Math.log(1-e()*.999)*110*(e()<.5?-1:1),i=[Math.cos(n)*t,Math.sin(n)*t,r],a=X(X(Q(Wc,i[0]),Q(Kc,i[1])),Q(Gc,i[2])),o=e(),s=o<.75?1.2+e()*.6:o<.985?.3+e()*.8:-.25+e()*.4;l(a,o<.75?.005+e()*.04:o<.985?.2+e()*4:30+e()**3*2e4,Nd(s))}n.add(Ld(a,o,s,r))})();let i=new Jr({glslVersion:ze,transparent:!0,depthWrite:!1,blending:2,uniforms:{uFade:{value:0}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
out vec3 vN; out vec3 vV;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = wp.xyz;
gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uFade; in vec3 vN; in vec3 vV; out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
fragColor = vec4(vec3(0.91, 0.62, 0.3) * (pow(f, 3.0) * 0.9 + 0.03) * uFade, 1.0);
}`}),a=new Lr(new Hi(Kd,96,48),i);return a.frustumCulled=!1,n.add(a),{name:`nearstars`,unit:Pc,scene:t,root:n,origin:()=>e.sun,weight:e=>Md(e.L,14.5,15.8,21,21.6),clip:e=>[Math.max(1e-6,e.d/Pc*1e-4),1e7],update(e,t){r.uniforms.uFade.value=Md(e.L,14.5,15.8,19.4,20.2),r.uniforms.uGain.value=9/t.exposure,i.uniforms.uFade.value=Md(e.L,18.05,18.6,21,21.6)*.5/t.exposure}}}var Jd=`#include <common>
#include <logdepthbuf_pars_fragment>
${Fl}
uniform float uArms; uniform float uPitch; uniform float uSeed; uniform float uFade; uniform float uBright; uniform float uBar; uniform float uIrregular;
in vec2 vUv; out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
vec2 p = (vUv - 0.5) * 2.0;
float r = length(p);
if (r > 1.0) discard;
float th = atan(p.y, p.x);
vec2 wq = p + (vec2(fbm2(p * 3.0 + uSeed), fbm2(p * 3.0 + uSeed + 9.0)) - 0.5) * 0.12;
float rw = length(wq), tw = atan(wq.y, wq.x);
float logr = log(max(rw, 0.02));
float phase = uArms * (tw - logr / tan(uPitch));
float arm = pow(0.5 + 0.5 * cos(phase), 3.0);
float dustArm = pow(0.5 + 0.5 * cos(phase + 0.9), 8.0);
float disc = exp(-rw / 0.28);
float barR = length(vec2(p.x, p.y * (1.0 + uBar * 2.5)));
float bulge = exp(-barR * barR / 0.012) * 1.6 + exp(-r / 0.07) * 0.8;
float clump = fbm2(p * 18.0 + uSeed) ;
float fine = vn2(p * 220.0 + uSeed) * vn2(p * 90.0);
float stars = disc * (0.35 + 1.4 * arm * (0.6 + 0.8 * clump)) * mix(1.0, fbm2(p * 6.0 + uSeed), uIrregular);
float dust = disc * dustArm * smoothstep(0.08, 0.3, rw) * (0.5 + 0.8 * fbm2(p * 30.0 + uSeed));
vec3 young = vec3(0.62, 0.74, 1.0), old = vec3(1.0, 0.82, 0.58), hii = vec3(1.0, 0.45, 0.6);
vec3 c = young * stars * (0.8 + fine * 0.8) + old * bulge;
c += hii * smoothstep(0.78, 0.95, clump * arm) * disc * 2.5;
c *= 1.0 - clamp(dust * 2.2, 0.0, 0.85);
c *= smoothstep(1.0, 0.75, r);
fragColor = vec4(c * uBright * uFade, 1.0);
}`;function Yd(e,t=2,n=.22,r=.3,i=0){return new Jr({glslVersion:ze,side:2,depthWrite:!1,transparent:!0,blending:2,uniforms:{uArms:{value:t},uPitch:{value:n},uSeed:{value:e},uFade:{value:1},uBright:{value:1},uBar:{value:r},uIrregular:{value:i}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
out vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
#include <logdepthbuf_vertex>
}`,fragmentShader:Jd})}function Xd(e,t,n,r,i=0){let a=new Lr(new Vi(t*2,t*2),e);return a.position.set(...n),a.quaternion.setFromUnitVectors(new H(0,0,1),new H(...r).normalize()),a.rotateZ(i),a.frustumCulled=!1,a}var Zd=3.26156,Qd=`#include <common>
#include <logdepthbuf_pars_fragment>
${Fl}
uniform float uFade; uniform float uBright;
uniform vec4 uArmA[7]; uniform vec4 uArmB[7]; uniform vec3 uBar;
in vec2 vG; out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
float R = length(vG);
if (R > 16.8) discard;
vec2 jit = (vec2(fbm2(vG * 0.35 + 3.0), fbm2(vG * 0.35 + 9.0)) - 0.5) * 0.9;
float Rj = length(vG + jit), bj = atan(vG.y + jit.y, -(vG.x + jit.x));
float arms = 0.0, lanes = 0.0;
for (int i = 1; i < 7; i++) {
vec4 A = uArmA[i], B = uArmB[i];
for (int k = -1; k <= 1; k++) {
float b = bj + float(k) * 6.2831853;
float measured = smoothstep(B.x - 0.3, B.x, b) * (1.0 - smoothstep(B.y, B.y + 0.3, b));
float extended = smoothstep(B.x - 2.4, B.x - 0.3, b) * (1.0 - smoothstep(B.y + 0.3, B.y + 2.4, b));
float wgt = max(measured, extended * 0.5);
if (wgt <= 0.0) continue;
float Ra = A.x * exp(-(b - A.y) * (b < A.y ? A.z : A.w));
float d = (Rj - Ra) / (B.z * (1.1 + 0.5 * Ra / A.x) + 0.25);
if (abs(d) > 4.0) continue;
arms += wgt * exp(-0.5 * d * d);
lanes += wgt * exp(-0.5 * pow((d + 1.15) / 0.35, 2.0));
}
}
float glow = min(arms, 1.5);
arms *= 0.55 + 0.9 * fbm2(vG * 0.9 + 3.0);
float knots = glow * smoothstep(0.62, 0.9, fbm2(vG * 2.6 + 7.0));
float dust = min(lanes, 1.2) * (0.6 + 0.6 * vn2(vG * 1.8));
vec2 ax = vec2(-cos(uBar.y), sin(uBar.y));
vec2 q = vec2(dot(vG, ax), dot(vG, vec2(-ax.y, ax.x)));
float bar = exp(-2.0 * (q.x * q.x) / (uBar.x * uBar.x) - 2.0 * (q.y * q.y) / (uBar.x * uBar.x * uBar.z * uBar.z));
float bulge = exp(-R * R / 0.9);
float disc = exp(-R / 3.4) * smoothstep(16.8, 12.0, R);
float px = max(fwidth(vG.x), fwidth(vG.y));
float k1 = 1.0 - smoothstep(0.02, 0.08, px), k2 = 1.0 - smoothstep(0.006, 0.025, px), k3 = 1.0 - smoothstep(0.002, 0.008, px);
float grain = mix(1.0, 0.85 + vn2(vG * 38.0) * 0.3, k2);
float sparks = (pow(vn2(vG * 160.0), 10.0) * 5.0 + pow(vn2(vG * 420.0 + 7.0), 14.0) * 7.0) * k3;
vec3 young = vec3(0.6, 0.73, 1.0), old = vec3(1.0, 0.82, 0.58), hii = vec3(1.0, 0.36, 0.5);
vec3 c = young * disc * (0.05 + 1.5 * arms) * grain;
c += vec3(0.85, 0.92, 1.0) * disc * knots * 1.2;
c += young * disc * arms * sparks;
c += old * (bar * 0.9 + exp(-R * R / 0.35) * 2.6 + bulge * 1.0 + disc * 0.18);
c += hii * knots * smoothstep(0.55, 0.9, fbm2(vG * 5.0 + 1.0)) * disc * 3.0 * mix(0.6, 1.0, k1);
c *= 1.0 - clamp(dust * disc * 1.6, 0.0, 0.85);
fragColor = vec4(c * uBright * uFade, 1.0);
}`,$d=wd.arms.map(([e,t,n,r,i,a,o,s])=>({name:e,Rk:t,bk:n*Math.PI/180,tb:Math.tan(r*Math.PI/180),ta:Math.tan(i*Math.PI/180),bmin:a*Math.PI/180,bmax:o*Math.PI/180,wk:s})),ef=(e,t)=>e.Rk*Math.exp(-(t-e.bk)*(t<e.bk?e.tb:e.ta));function tf(e){return e.updateMatrix(),new Jr({glslVersion:ze,side:2,depthWrite:!1,transparent:!0,blending:2,uniforms:{uFade:{value:1},uBright:{value:1},uLocal:{value:e.matrix.clone()},uGX:{value:new H(...Wc)},uGY:{value:new H(...Kc)},uArmA:{value:$d.map(e=>new Lt(e.Rk,e.bk,e.tb,e.ta))},uArmB:{value:$d.map(e=>new Lt(e.bmin,e.bmax,e.wk,1))},uBar:{value:new H(wd.bar[0],wd.bar[1]*Math.PI/180,wd.bar[2])}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
uniform mat4 uLocal; uniform vec3 uGX; uniform vec3 uGY;
out vec2 vG;
void main() {
vec3 rel = (uLocal * vec4(position, 1.0)).xyz;
vG = vec2(dot(rel, uGX), dot(rel, uGY)) / ${Zd.toFixed(5)};
gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
#include <logdepthbuf_vertex>
}`,fragmentShader:Qd})}function nf(e,t=new Set){let n=new ci,r=new ai;n.add(r);let i=1e3*Pc,a=(e,t,n)=>X(X(Q(Wc,e),Q(Kc,t)),Q(Gc,n)),o=[];for(let[e,t]of[[0,2.6]]){let n=new Lr(new Vi(110,110));n.position.set(...a(0,0,e)),n.quaternion.setFromUnitVectors(new H(0,0,1),new H(...Gc)),n.frustumCulled=!1;let i=tf(n);i.uniforms.uBright.value=t,n.material=i,o.push(i),r.add(n)}let s=Id(!1,1);(()=>{let e=jl(5),t=36e4,n=new Float32Array(t*3),i=new Float32Array(t*3),o=new Float32Array(t),c=()=>Math.sqrt(-2*Math.log(1-e()*.999))*Math.cos(2*Math.PI*e()),l=(e,t,r,s,c,l)=>{n.set(a(t*Zd,r*Zd,s*Zd),e*3),i.set(c,e*3),o[e]=l},u=()=>{for(;;){let t=$d[1+Math.floor(e()*($d.length-1))],n=t.bmin-2+e()*(t.bmax-t.bmin+4);if(n>=t.bmin-.3&&n<=t.bmax+.3||e()<.5)return{a:t,b:n,R:ef(t,n)}}};function*d(){let n=0;for(;n<t*.45;){n%4e3<70&&(yield);let{a:r,b:i,R:a}=u(),o=a+c()*r.wk*.8,s=-o*Math.cos(i),d=o*Math.sin(i),f=.03+e()*.08,p=20+Math.floor(e()*50);for(let r=0;r<p&&n<t*.45;r++,n++)l(n,s+c()*f,d+c()*f,c()*.03,e()<.8?[.72,.82,1]:[1,.9,.8],.0025+e()**3*.036);e()<.35&&n<t*.45&&l(n++,s+c()*.04,d+c()*.04,0,[1,.42,.55],.08+e()*.12)}for(;n<t;n++){n%4e3==0&&(yield);let t=e(),r,i;if(t<.5){let{a:e,b:t,R:n}=u(),a=n+c()*(e.wk+.3);r=-a*Math.cos(t),i=a*Math.sin(t)}else if(t<.75){let e=c()*wd.bar[0]*.5,t=c()*wd.bar[0]*wd.bar[2]*.5,n=wd.bar[1]*Math.PI/180;r=-Math.cos(n)*e-Math.sin(n)*t,i=Math.sin(n)*e-Math.cos(n)*t}else{let t=-Math.log(1-e()*.98)*3.4,n=e()*Math.PI*2;r=t*Math.cos(n),i=t*Math.sin(n)}let a=Math.hypot(r,i);l(n,r,i,c()*(t>=.5&&t<.75?.45:.12)*Math.exp(-a/12),t<.5&&e()<.5?[.75,.84,1]:[1,.85,.65],.0012+e()**4*.012)}}Rd(d(),()=>r.add(Ld(n,i,o,s)))})();let c=t=>Q(Z(t,e.galCenter),1/i),l=rf(X(Vc(10.68,131.27-77),[0,0,0])),u=[],d=(e,t,n,i,a,o,s)=>{let l=Yd(i,a,.25,.2,o);l.uniforms.uBright.value=s,u.push(l),r.add(Xd(l,t,c(e),n,i))};t.has(`Andromeda`)||d(e.m31,110,l,3.3,2,0,1.1),t.has(`Triangulum`)||d(e.m33,30,rf(Vc(63.46,-4.34)),6.1,2,.2,.8),t.has(`Large Magellanic Cloud`)||d(e.lmc,16,rf(Vc(80.9,-69.8+60)),8.2,1,.8,.9),t.has(`Small Magellanic Cloud`)||d(e.smc,9,rf(Vc(43.2,-72.8+50)),9.4,1,.9,.7);let f=[],p=[],m=[],h=jl(11);for(let[n,r,i,a,o,s,l,u]of Sd){if(t.has(n)||/^(Andromeda|Triangulum|Large Magellanic Cloud|Small Magellanic Cloud)$/.test(n))continue;let d=Vc(r,i),g=c(X(e.sun,Q(d,a*3261.56*Pc))),_=30*10**(-.2*(o+8));if(!s){f.push(...g),p.push(1,.88,.7),m.push(_);continue}let v=rf([-d[1],d[0],0]),y=[-d[2]*d[0],-d[2]*d[1],d[0]*d[0]+d[1]*d[1]],b=Math.hypot(...y),x=[y[0]/b,y[1]/b,y[2]/b],S=Math.cos(u*Math.PI/180),C=Math.sin(u*Math.PI/180),w=X(Q(x,S),Q(v,C)),T=X(Q(x,-C),Q(v,S)),E=s/60*(Math.PI/180)*a*3.26156/1.305,D=Math.round(Math.min(2400,120+900*10**(-.2*(o+9))));for(let e=0;e<D;e++){let e=.02+h()*.96,t=E/Math.sqrt(e**(-2/3)-1),n=2*h()-1,r=2*Math.PI*h(),i=Math.sqrt(1-n*n),a=t*i*Math.cos(r),o=t*i*Math.sin(r)*(1-l),s=t*n*(1-l);f.push(...X(g,X(X(Q(w,a),Q(T,o)),Q(d,s)))),p.push(1,.86+h()*.08,.66+h()*.12),m.push(_/D*(.3+1.4*h()))}}let g=Id(!1,1.5);return r.add(Ld(new Float32Array(f),new Float32Array(p),new Float32Array(m),g)),{name:`galaxy`,unit:i,scene:n,root:r,origin:()=>e.galCenter,weight:e=>Md(e.L,18.6,19.6,24.2,25.2),clip:e=>[Math.max(1e-4,e.d/i*1e-4),1e8],update(e,t){let n=Md(e.L,18.6,19.6,24.2,25.2),r=jd(19.4,20.6,e.L),i=1+1.5*jd(20.8,21.8,e.L);o.forEach(e=>{e.uniforms.uFade.value=n*r*i*.05/t.exposure}),s.uniforms.uFade.value=n*jd(19,20,e.L)*(1-jd(21.5,22.5,e.L)),s.uniforms.uGain.value=40/t.exposure,u.forEach(r=>{r.uniforms.uFade.value=n*jd(20.8,21.8,e.L)*.05/t.exposure}),g.uniforms.uFade.value=n*jd(21,22,e.L),g.uniforms.uGain.value=20/t.exposure}}}function rf(e){let t=Math.hypot(...e);return[e[0]/t,e[1]/t,e[2]/t]}function af(e){let t=new ci,n=new ai;t.add(n);let r=1e6*Pc,i=46500,a=Id(!1,.9);xu(()=>pd(`assets/galaxies.bin`).then(e=>{if(!e)return;let t=new Uint32Array(e,0,1)[0],r=new Float32Array(e,4,1)[0],i=new Int16Array(e,8,t*3),o=new Uint8Array(e,8+t*6,t),s=Float32Array.from(i,e=>e*r),c=new Float32Array(t*3),l=new Float32Array(t),u=new Float32Array(t*2),d=jl(23);for(let e=0;e<t;e++){let t=-17-o[e]/28;l[e]=2e3*10**(-.4*(t+23));let n=t<-23.5;c.set(n?[1,.84,.68]:[.8,.85,1],e*3),u[e*2]=n?.6+.4*d():Math.max(.2,d()),u[e*2+1]=d()*Math.PI}n.add(Ld(s,c,l,a,u))}));let o=[{radius:600,fade:[99,100,101,102]},{radius:6e3,fade:[24.5,25.2,26,26.6]},{radius:i,fade:[25.6,26.4,99,100]}],s=o.map(()=>Id(!1,.9)),c=[];xu(()=>fetch(`assets/web.bin`).then(e=>e.arrayBuffer()).then(e=>{let t=Array.from(new Uint32Array(e,0,o.length)),r=o.length*4,i=t.reduce((e,t)=>e+t,0),a=new Uint8Array(e,r+i*6,i),l=jl(3),u=0;function*d(){for(let[i,d]of o.entries()){let o=t[i],f=new Int16Array(e,r,o*3);r+=o*6;let p=new Float32Array(o*3),m=new Float32Array(o*3),h=new Float32Array(o),g=2e3*(d.radius/600)**2;for(let e=0;e<o;e++){e%5e3==0&&(yield);for(let t=0;t<3;t++)p[e*3+t]=f[e*3+t]/32767*d.radius;m.set(l()<.55?[1,.84,.68]:[.74,.82,1],e*3);let t=Math.hypot(p[e*3],p[e*3+1],p[e*3+2]),n=Math.min(1,Math.max(0,(t-500)/900));h[e]=l()<n?(2**(a[u]/60)-1)/4*g:0,u++}let _=Ld(p,m,h,s[i]);(c[i]??=[]).push(_),n.add(_)}}Rd(d(),()=>void 0)}));let l=Math.max(window.innerWidth,window.innerHeight)<1e3,u=new Jr({glslVersion:ze,transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uFade:{value:0},uInside:{value:1},tCmb:{value:null},uGX:{value:new H(...Wc)},uGY:{value:new H(...Kc)},uGZ:{value:new H(...Gc)}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
out vec3 vN; out vec3 vV;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = wp.xyz;
gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
${Fl}
uniform float uFade; uniform float uInside; uniform sampler2D tCmb; uniform vec3 uGX; uniform vec3 uGY; uniform vec3 uGZ;
in vec3 vN; in vec3 vV; out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
if (gl_FrontFacing == (uInside > 0.5)) discard;
vec3 d = normalize(vN);
vec3 g = vec3(dot(d, uGX), dot(d, uGY), dot(d, uGZ));
vec2 uv = vec2(0.5 - atan(g.y, g.x) / (2.0 * PI), 0.5 - asin(clamp(g.z, -1.0, 1.0)) / PI);
vec3 c = pow(textureLod(tCmb, uv, 0.0).rgb, vec3(2.2));
float rim = pow(1.0 - abs(dot(d, normalize(vV))), 3.0);
fragColor = vec4(c * (0.6 + 0.6 * rim) * uFade, 1.0);
}`}),d=new Jr({glslVersion:ze,transparent:!0,depthWrite:!1,blending:2,uniforms:{uSize:{value:24},uBright:{value:1},uFade:{value:0}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
uniform float uSize;
void main() {
gl_PointSize = uSize;
gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uBright; uniform float uFade;
out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
float r = length(gl_PointCoord * 2.0 - 1.0);
if (r > 1.0) discard;
float core = exp(-r * r * 22.0);
float halo = pow(1.0 - r, 3.0) * 0.3;
fragColor = vec4(vec3(1.0, 0.95, 0.88) * (core + halo) * uBright * uFade, 1.0);
}`}),f=new Tr;f.setAttribute(`position`,new K(new Float32Array([0,0,0]),3));let p=new Pi(f,d);p.frustumCulled=!1,n.add(p),Su(l?`assets/cmb-planck-2k.jpg`:`assets/cmb-planck.jpg`,24),Iu(l?`assets/cmb-planck-2k.jpg`:`assets/cmb-planck.jpg`,21.8,99);let m=new Lr(new Hi(i,128,64),u);return m.frustumCulled=!1,n.add(m),{name:`cosmos`,unit:r,scene:t,root:n,origin:()=>e.sun,weight:e=>Md(e.L,21.8,22.8,99,100),clip:e=>[Math.max(.001,e.d/r*1e-4),1e8],update(t,n){let f=Md(t.L,21.8,22.8,99,100)*(1-jd(29.15,29.58,t.L)),p=10**Math.max(0,t.L-26.8),h=1-jd(27.7,28.3,t.L);o.forEach((e,r)=>{s[r].uniforms.uFade.value=f*h*Md(t.L,e.fade[0],e.fade[1],e.fade[2],e.fade[3]),c[r]?.forEach(e=>{e.visible=h>.001}),s[r].uniforms.uGain.value=5/n.exposure*p}),a.uniforms.uFade.value=f*Md(t.L,22.6,23.3,25.6,26.2),a.uniforms.uGain.value=5/n.exposure*p,!u.uniforms.tCmb.value&&t.L>24&&(u.uniforms.tCmb.value=Ju(l?`assets/cmb-planck-2k.jpg`:`assets/cmb-planck.jpg`,!0)),m.visible=!!u.uniforms.tCmb.value,u.uniforms.uInside.value=+(Math.hypot(...Z(t.pos,e.sun))<i*r),u.uniforms.uFade.value=f*jd(25.6,26.5,t.L)*(1-jd(28,28.5,t.L))*.25/n.exposure;let g=Math.min(window.devicePixelRatio||1,1.6);d.uniforms.uSize.value=(4+24*(1-jd(28.3,29.5,t.L)))*g,d.uniforms.uFade.value=f*jd(27.9,28.6,t.L),d.uniforms.uBright.value=.45/n.exposure}}}var of=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},sf=Math.PI/180,cf=`#include <common>
#include <logdepthbuf_pars_vertex>
uniform float uBill; uniform float uGrow;
out vec3 vO; out vec3 vView;
void main() {
vO = position;
if (uBill > 0.5) {
vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
mv.xy += position.xy * uGrow;
vView = -mv.xyz;
gl_Position = projectionMatrix * mv;
} else {
vView = cameraPosition - (modelMatrix * vec4(position, 1.0)).xyz;
gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
#include <logdepthbuf_vertex>
}`,lf=`#include <common>
#include <logdepthbuf_pars_fragment>
uniform sampler2D tPhoto; uniform vec2 uUV; uniform vec3 uE; uniform vec3 uN; uniform float uScale;
uniform vec2 uCentre; uniform vec2 uFov; uniform float uNorth; uniform float uR; uniform float uBlack;
uniform float uGain; uniform float uFade; uniform vec3 uNormal; uniform float uCosE; uniform float uBill;
in vec3 vO; in vec3 vView; out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
float xi = dot(vO, uE) * uScale, eta = dot(vO, uN) * uScale;
float c = cos(uNorth), s = sin(uNorth);
vec2 uv = uCentre + vec2((-xi * c - eta * s) / uFov.x, (-xi * s + eta * c) / uFov.y);
if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) discard;
float r = length(vO) / uR;
vec2 e = min(uv, 1.0 - uv);
float mask = (1.0 - smoothstep(0.55, 1.0, r)) * smoothstep(0.0, 0.2, min(e.x, e.y));
float tilt = uBill > 0.5 ? 1.0 : clamp(uCosE / max(abs(dot(normalize(vView), uNormal)), 0.05), 0.25, 4.0);
vec3 col = pow(texture(tPhoto, uv * uUV).rgb, vec3(2.2));
col = max(col - uBlack, 0.0);
fragColor = vec4(col * mask * tilt * uGain * uFade, 1.0);
}`;function uf(e,t){let n=new ci,r=new ai;n.add(r);let i=1e3*Pc,a=Math.max(window.innerWidth,window.innerHeight)<1e3,o=[],s=[...Td.map(([,e,t,n,r,i,a,o,s,c,l,u,d,f])=>({ra:e,dec:t,distLy:n,pa:r,incl:i,t:a,file:o,cu:s,cv:c,fovW:l,fovH:u,north:d,radiusDeg:f/60*.5*1.6,nebula:!1,grow:n>5e6,win:[19.8,20.6,24.7,25.3]})),...Dd.map(([,e,t,n,r,i,a,o,s,c])=>({ra:e,dec:t,distLy:n,pa:0,incl:0,t:-5,file:r,cu:i,cv:a,fovW:o,fovH:s,north:c,radiusDeg:.5*Math.max(o,s),nebula:!0,grow:!0,win:[16.2,16.9,20.6,21.3]})),...Od.map(([,e,t,n,r,i,a,o,s])=>({ra:e,dec:t,distLy:n,pa:0,incl:0,t:-5,file:r,cu:.5,cv:.5,fovW:i,fovH:a,north:o,radiusDeg:.5*Math.max(i,a),nebula:!0,grow:s!==1,win:s===0?[16.2,16.9,20.6,21.3]:s===1?[19.8,20.6,22.6,23.2]:[19.8,20.6,24.7,25.3]}))];for(let{ra:t,dec:n,distLy:c,pa:l,incl:u,t:d,file:f,cu:p,cv:m,fovW:h,fovH:g,north:_,radiusDeg:v,nebula:y,grow:b,win:x}of s){let s=Vc(t,n),S=Q(X(e.sun,Q(s,c*Pc)),1/i),C=zc(Lc([0,0,1],s)),w=Lc(s,C),T=Q(s,-1),E=c/1e3,D=v*sf*E,O=d>-1&&u<75,k=X(Q(w,Math.cos(l*sf)),Q(C,Math.sin(l*sf))),A=X(Q(w,-Math.sin(l*sf)),Q(C,Math.cos(l*sf))),j=O?zc(X(Q(T,Math.cos(u*sf)),Q(A,Math.sin(u*sf)))):T,ee=O?k:C,M=zc(Lc(j,ee)),te=new Vi(D*2,D*2),N=te.attributes.position;if(!y)for(let e=0;e<N.count;e++){let t=N.getX(e),n=N.getY(e),r=X(Q(ee,t),Q(M,n));N.setXYZ(e,r[0],r[1],r[2])}let P=new Jr({glslVersion:ze,vertexShader:cf,fragmentShader:lf,transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{tPhoto:{value:null},uUV:{value:new V(1,1)},uE:{value:y?new H(-1,0,0):new H(...C)},uN:{value:y?new H(0,1,0):new H(...w)},uBill:{value:+!!y},uGrow:{value:1},uScale:{value:1/E/sf},uCentre:{value:new V(p,m)},uFov:{value:new V(h,g)},uNorth:{value:_*sf},uR:{value:D},uNormal:{value:new H(...j)},uCosE:{value:Math.abs(j[0]*T[0]+j[1]*T[1]+j[2]*T[2])},uBlack:{value:.004},uGain:{value:1},uFade:{value:0}}}),ne=new Lr(te,P);ne.position.set(...S),ne.frustumCulled=!1,r.add(ne),o.push({mat:P,center:S,radius:D,mesh:ne,beyond:b,win:x,url:`assets/galaxies/${f}${a?`-s`:``}.jpg`}),Su(`assets/galaxies/${f}${a?`-s`:``}.jpg`,x[0]),Iu(`assets/galaxies/${f}${a?`-s`:``}.jpg`,x[0],x[3])}let c=new Jr({glslVersion:ze,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,side:1,uniforms:{tDeep:{value:null},uFade:{value:0},uTiles:{value:3},uScale:{value:1}},vertexShader:`out vec3 vD;
void main() { vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w * 0.99999; }`,fragmentShader:`uniform sampler2D tDeep; uniform float uFade; uniform float uTiles; uniform float uScale;
in vec3 vD; out vec4 fragColor;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
vec3 d = normalize(vD), a = abs(d);
vec2 f; float face;
if (a.x >= a.y && a.x >= a.z) { f = d.yz / a.x; face = d.x > 0.0 ? 0.0 : 1.0; }
else if (a.y >= a.z) { f = d.xz / a.y; face = d.y > 0.0 ? 2.0 : 3.0; }
else { f = d.xy / a.z; face = d.z > 0.0 ? 4.0 : 5.0; }
vec2 g = (f * 0.5 + 0.5) * uTiles;
vec2 cell = floor(g), q = fract(g);
float h = hash(cell + face * 17.0);
if (h > 0.5) q.x = 1.0 - q.x;
float k = floor(fract(h * 7.0) * 4.0);
if (k == 1.0) q = vec2(1.0 - q.y, q.x); else if (k == 2.0) q = 1.0 - q; else if (k == 3.0) q = vec2(q.y, 1.0 - q.x);
float pick = floor(fract(h * 13.7) * 9.0);
vec2 at = (vec2(mod(pick, 3.0), 2.0 - floor(pick / 3.0)) + clamp(q, 0.003, 0.997)) / 3.0;
vec3 c = pow(textureLod(tDeep, at * uScale, 0.0).rgb, vec3(2.2));
vec2 e = min(q, 1.0 - q);
c *= smoothstep(0.0, 0.03, min(e.x, e.y));
fragColor = vec4(max(c - 0.002, 0.0) * uFade, 1.0);
}`});Su(a?`assets/deep-fields-1k.jpg`:`assets/deep-fields.jpg`,20.5),Ou(a?`assets/deep-fields-1k.jpg`:`assets/deep-fields.jpg`),Iu(a?`assets/deep-fields-1k.jpg`:`assets/deep-fields.jpg`,16,26.6);let l=new Lr(new Hi(1,48,24),c);l.frustumCulled=!1,l.renderOrder=-10,r.add(l);let u=new H;return{name:`photos`,unit:i,scene:n,root:r,photoNames:new Set(Td.map(e=>e[0])),origin:()=>e.sun,weight:e=>+(e.L>16&&e.L<26.6),clip:e=>[Math.max(1e-4,e.d/i*1e-4),1e8],update(n,r){let s=Q(Z(n.pos,e.sun),1/i);u.set(...s),l.position.copy(u);let d=Math.min(1e7,Math.max(10,n.d/i*10));l.scale.setScalar(d),!c.uniforms.tDeep.value&&n.L>20.5&&(c.uniforms.tDeep.value=Ju(a?`assets/deep-fields-1k.jpg`:`assets/deep-fields.jpg`,!0)),l.visible=!!c.uniforms.tDeep.value,l.visible&&(c.uniforms.uScale.value=c.uniforms.tDeep.value.userData.uvScale?.[0]??1),c.uniforms.uFade.value=.5*of(21.3,22.3,n.L)*(1-of(25.8,26.5,n.L))/r.exposure;let f=r.height/(2*Math.tan(t()*sf/2));for(let e of o){let t=Math.hypot(e.center[0]-s[0],e.center[1]-s[1],e.center[2]-s[2]),i=2*e.radius/t*f,a=e.beyond?Math.max(1,57.6/i):1;e.mesh.scale.setScalar(a),e.mat.uniforms.uGrow.value=a,!e.mat.uniforms.tPhoto.value&&i*a>1&&n.L>e.win[0]-.6&&(e.mat.uniforms.tPhoto.value=Ju(e.url,!0));let o=of(2,8,i*a)*of(1.2,3,t/e.radius)*of(e.win[0],e.win[1],n.L)*(1-of(e.win[2],e.win[3],n.L));e.mat.uniforms.uFade.value=o,e.mat.uniforms.uGain.value=.9/r.exposure,e.mesh.visible=o>.001&&!!e.mat.uniforms.tPhoto.value,e.mesh.visible&&e.mat.uniforms.uUV.value.fromArray(e.mat.uniforms.tPhoto.value.userData.uvScale??[1,1])}}}}var df=zc(Uc([Math.cos(5.1*Math.PI/180)*Math.cos(255.7*Math.PI/180),Math.cos(5.1*Math.PI/180)*Math.sin(255.7*Math.PI/180),Math.sin(5.1*Math.PI/180)])),ff=e=>120*(1+.9*((1-Math.cos(e))/2)**2);function pf(e){let t=new ci,n=new ai;t.add(n);let r=new Hi(1,128,64),i=r.attributes.position;for(let e=0;e<i.count;e++){let t=zc([i.getX(e),i.getY(e),i.getZ(e)]),n=ff(Math.acos(Math.max(-1,Math.min(1,Ic(t,df)))));i.setXYZ(e,t[0]*n,t[1]*n,t[2]*n)}r.computeVertexNormals();let a=new Jr({glslVersion:ze,transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uFade:{value:0},uNose:{value:new H(...df)}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
out vec3 vN; out vec3 vV; out float vAlong;
uniform vec3 uNose;
void main() { vAlong = dot(normalize(position), uNose); vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = cameraPosition - wp.xyz;
gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uFade; in vec3 vN; in vec3 vV; in float vAlong; out vec4 fragColor;
void main() {
#include <logdepthbuf_fragment>
float rim = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 6.0);
float tail = 1.0;
fragColor = vec4(vec3(0.35, 0.62, 0.75) * (0.11 * rim) * tail * uFade, 1.0);
}`}),o=new Lr(r,a);o.frustumCulled=!1,n.add(o);let s=jl(31),c=6e4,l=new Float32Array(c*3),u=new Float32Array(c*3),d=new Float32Array(c),f=e.eclNorth;for(let e=0;e<c;e++){let t=2e3,n=s(),r=(t**-.5-n*(t**-.5-1e5**-.5))**-2,i=2*s()-1,a=2*Math.PI*s(),o=Math.sqrt(1-i*i),c=[o*Math.cos(a),o*Math.sin(a),i],p=Math.max(.35,Math.min(1,r/2e4)),m=Ic(c,f);c=zc(X(c,Q(f,m*(p-1)))),l.set(Q(c,r),e*3),u.set([.62,.74,.95],e*3),d[e]=.018}let p=Id(!0,.9);return n.add(Ld(l,u,d,p)),{name:`outskirts`,unit:Nc,scene:t,root:n,origin:()=>e.sun,weight:e=>Md(e.L,12.8,13.4,19.2,19.8),clip:e=>[Math.max(.001,e.d/Nc*1e-4),1e7],update(e,t){a.uniforms.uFade.value=Md(e.L,13.2,13.8,15.6,16.4)/Math.max(t.exposure,.3),p.uniforms.uFade.value=Md(e.L,15.4,16.2,18.6,19.2),p.uniforms.uGain.value=1/t.exposure}}}function mf(e,t){let n=new ci,r=new ai;n.add(r);let i=jl(41),a=Ed.length*7,o=new Float32Array(a*3),s=new Float32Array(a),c=new Float32Array(a),l=new Float32Array(a),u=0;for(let[,e,t,n]of Ed){let r=Q(Jc(e,t),n),a=Math.max(6,n*.025);for(let e=0;e<7;e++,u++){let e=()=>(i()+i()+i()-1.5)*a;o.set(X(r,[e(),e(),e()]),u*3),s[u]=a*(.6+i()*.9),c[u]=i()*100,l[u]=i()}}let d=new Tr;d.setAttribute(`position`,new K(o,3)),d.setAttribute(`size`,new K(s,1)),d.setAttribute(`seed`,new K(c,1)),d.setAttribute(`tint`,new K(l,1));let f=new Jr({glslVersion:ze,transparent:!0,depthWrite:!1,blending:2,uniforms:{uFade:{value:0},uScale:{value:500}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
attribute float size; attribute float seed; attribute float tint;
uniform float uScale; out float vSeed; out float vTint; out float vDim;
void main() {
vec4 mv = modelViewMatrix * vec4(position, 1.0);
float px = size * uScale / max(-mv.z, 1e-3);
gl_PointSize = clamp(px, 1.0, 256.0);
vDim = smoothstep(256.0, 180.0, px) * smoothstep(1.0, 6.0, px);
vSeed = seed; vTint = tint;
gl_Position = projectionMatrix * mv;
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uFade; in float vSeed; in float vTint; in float vDim; out vec4 fragColor;
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main() {
#include <logdepthbuf_fragment>
vec2 q = gl_PointCoord * 2.0 - 1.0;
float r = length(q);
if (r > 1.0) discard;
vec2 p = q * 2.2 + vSeed;
float f = 0.5 * n2(p) + 0.25 * n2(p * 2.1) + 0.125 * n2(p * 4.3);
float a = smoothstep(1.0, 0.2, r + 0.45 * (f - 0.5)) * smoothstep(0.32, 0.7, f);
vec3 c = mix(vec3(0.55, 0.42, 0.34), vec3(0.42, 0.55, 0.78), step(0.7, vTint));
fragColor = vec4(c * a * vDim * uFade, 1.0);
}`}),p=new Pi(d,f);return p.frustumCulled=!1,r.add(p),{name:`clouds`,unit:Pc,scene:n,root:r,origin:()=>e.sun,weight:e=>Md(e.L,17.4,18,20.6,21.2),clip:e=>[Math.max(.001,e.d/Pc*1e-4),1e7],update(e,n){f.uniforms.uScale.value=n.height*n.dpr/(2*Math.tan(t()*Math.PI/360)),f.uniforms.uFade.value=.13*Md(e.L,17.6,18.3,20.2,20.9)/n.exposure}}}var hf=465e8,gf=17987547480,_f=e=>{let t=e>=100?0:e>=10?1:2;return e.toLocaleString(`en-GB`,{maximumFractionDigits:t,minimumFractionDigits:0})};function vf(e){let t=e/Pc;return t>4650465e4?null:e<1e3?`${_f(e)} m`:e<1e9?`${Math.round(e/1e3).toLocaleString(`en-GB`)} km`:e<gf*60?`${_f(e/gf)} light-minutes`:e<gf*60*24*2?`${_f(e/(gf*60))} light-hours`:t<.1?`${_f(e/(gf*60*24))} light-days`:t<1e3?`${_f(t)} light-years`:t<1e6?`${(Math.round(t/10**(Math.floor(Math.log10(t))-2))*10**(Math.floor(Math.log10(t))-2)).toLocaleString(`en-GB`)} light-years`:t<1e9?`${_f(t/1e6)} million light-years`:`${_f(t/1e9)} billion light-years`}var yf=67.7,bf=.31,xf=91e-6,Sf=.689909,Cf=977.79/yf,wf=(()=>{let e=[[0,0]],t=0,n=0,r=0,i=e=>Math.sqrt(bf*(1+e)**3+xf*(1+e)**4+Sf);for(;r<1e5;){let a=Math.max(1e-4,r*.002),o=r+a/2;t+=a/i(o)*Cf,n+=a/((1+o)*i(o))*Cf,r+=a,e.push([t,n])}return e})();function Tf(e){let t=e/1e9,n=0,r=wf.length-1;if(t>=wf[r][0])return wf[r][1];for(;r-n>1;){let e=n+r>>1;wf[e][0]<t?n=e:r=e}let[i,a]=wf[n],[o,s]=wf[r];return a+(s-a)*(t-i)/(o-i)}var $=(e,t)=>({L:e,text:t}),Ef=(e,t,n)=>({L:e,text:t,moment:n,keepNote:!0}),Df=[[-1,`Giza`],[2.2,`Above Giza`],[3.55,`Cairo and the Nile`],[4.9,`Egypt`],[5.9,`Earth`],[8.2,`Leaving Earth`],[11.55,`Solar System`],[15.25,`The nearest stars`],[19.55,`Milky Way`],[21.95,`Local Group`],[23.5,`Virgo Supercluster`],[24.45,`Laniakea Supercluster`],[25.9,`Observable universe`]],Of=[$(-1,`You are standing next to the pyramids of Giza`),$(.25,`The oldest of the Seven Wonders is the only one still standing`),{L:.8,text:`This is your body without skin or muscle`,hold:1.2},Ef(.81,`Under 2 mm of skin all adults have the same 206 bones`,1.5),Ef(.82,`All humans share 99.6% of their DNA`,1.3),Ef(.83,`Skin colour comes from a layer as thin as a sheet of paper`,1.4),Ef(.84,`All 8 billion people alive today have this same skeleton`,1.4),$(1.7,`The pyramid stone is made of sea shells 45 million years old`),$(2.25,`The Great Pyramid was Earth's tallest structure for over 3,700 years`),$(2.85,`The pyramid builders lived in a town 400 metres south of the Sphinx`),$(3.6,`Greater Cairo next to the pyramids is home to 23 million people`),$(4.15,`95% of Egyptians live within 20 km of the Nile`),$(4.7,`Space begins 100 km up: an hour's drive straight up`),$(5.2,`99% of Earth's air is within 30 km of the ground`),$(5.7,`Eratosthenes measured Earth from shadows 2,250 years ago`),$(6.2,`7,000 years ago the Sahara was grassland with lakes`),$(7.05,`The lights are cities from the Persian Gulf to India`),$(7.45,`Earth is the only known place with life`),$(7.85,`Only 12 people have ever walked on the Moon`),$(8.55,`In April 2026 the Artemis II crew went farther than anyone before`),$(8.95,`All seven other planets fit between Earth and the Moon at its farthest`),$(9.4,`Sunlight takes 8 minutes to reach the pyramids`),$(9.85,`Driving to the Sun at 100 km per hour would take 170 years`),$(10.35,`1.3 million Earths fit inside the Sun`),$(10.95,`In 1672 astronomers measured the Sun's distance using Mars`),$(11.6,`A year on Mars lasts 687 Earth days`),$(12.15,`If the Sun were a door Earth would be a coin 215 metres away`),$(12.4,`The Sun and planets fill less than a billionth of the Solar System`),$(12.7,`In 1990 Voyager 1 saw Earth from this far as less than one pixel`),$(12.95,`A year on Neptune lasts 165 Earth years`),$(13.25,`Voyager 1 is the farthest object people have made`),$(14.1,`Voyager 1 has crossed empty space at 17 km a second for 49 years`),$(15.3,`Proxima Centauri is the nearest star at 4.2 light-years`),$(15.42,`Proxima Centauri is 3.1 billion Earths away`),$(15.55,`A light-year is 9.5 trillion km`),$(15.85,`If the Sun were a grain of sand the nearest star would be 29 km away`),$(16.1,`Between the stars there is one atom per cubic centimetre`),$(16.35,`Air at sea level has 25 billion billion molecules per cubic centimetre`),$(16.6,`Voyager 1 would need 75,000 years to reach the nearest star`),$(16.85,`In 1838 Friedrich Bessel first measured the distance to a star`),$(17.95,`Our radio signals have travelled 100 light-years since the 1920s`),$(18.55,`No life has been found on over 6,000 planets around other stars`),$(19.05,`Driving 100 km per hour since the Big Bang covers 1,300 light-years`),$(19.6,`The Milky Way has 100 to 400 billion stars`),$(19.75,`The Milky Way has more planets than stars`),$(19.9,`The Milky Way is 74 trillion Earths across`),$(20.1,`Light from the galaxy's centre left it 27,000 years ago`),$(20.9,`In 1918 Shapley showed the Sun is far from the centre of the galaxy`),$(21.25,`At the centre is a black hole 4 million times heavier than the Sun`),$(22,`The Local Group has more than 100 galaxies`),$(22.2,`Andromeda is 1,900 trillion Earths away`),$(22.4,`Early humans lived in Africa when this light left Andromeda`),$(22.6,`When galaxies collide their stars almost never hit each other`),$(22.8,`In 1924 Edwin Hubble showed Andromeda is another galaxy`),$(23.2,`If the Milky Way were a plate Andromeda would be 6.5 metres away`),$(23.55,`The Local Group is one small part of the Virgo Supercluster`),$(23.9,`Light from the Virgo Cluster left it 54 million years ago`),$(24.2,`The first black hole ever photographed weighs 6.5 billion Suns`),$(24.5,`Galaxies gather in long strands around nearly empty voids`),$(24.62,`Laniakea is home to 100,000 galaxies`),$(24.75,`The name Laniakea is Hawaiian for immeasurable heaven`),$(25,`The dark band is our own galaxy's dust and stars blocking the view`),$(25.2,`The Boötes Void spans 300 million light-years with few galaxies`),$(25.3,`Atoms make up only 5% of the universe`),$(25.45,`On average the universe has one atom in every five cubic metres`),$(25.55,`In the 1920s Lemaître and Hubble found the universe is expanding`),$(25.95,`This is everything whose light has reached us`),$(26.25,`It is 93 billion light-years across because space kept stretching`),$(26.38,`The observable universe is 69 million trillion Earths across`),$(26.5,`The oldest light we can see was found by accident in 1965`),$(27.05,`Light from the edge left 13.8 billion years ago and arrives here now`),$(28.2,`Everything that can be seen from Earth is inside this dot`)];function kf(e){if(e>=29)return-1;let t=0;for(;t<Of.length-1&&e+1e-6>=Of[t+1].L;)t++;return t}var Af=[[8.2,9.9,`30 Earths would fit in the gap between Earth and the Moon`],[10.1,11.4,`A passenger jet flying non-stop would take 19 years to reach the Sun`],[12.3,13.6,`A passenger jet would take 570 years to reach Neptune`],[16.1,17.8,`A passenger jet would take 5 million years to reach the nearest star`],[20.8,21.9,`Crossing the Milky Way by jet would take nine times the age of the universe`],[22.2,23.4,`Reaching Andromeda by jet would take 3 trillion years`],[25.9,26.6,`Reaching the edge by jet would take 4 million times the age of the universe`]],jf=`For small creatures such as we the vastness is bearable only through love`,Mf=[`For small creatures such as we`,`the vastness is bearable only through love`],Nf=[`And the end of all our exploring`,`Will be to arrive where we started`,`And know the place for the first time`],Pf={giza:.403,earth:29.78,sun:230,andromeda:110,hydrogen:61e7,lightning:44,births:1325e5/31557600,cells:33e10/86400,heart:70/60,blood:5/60,breaths:15/60,sunlightDays:0x2686554ac87c000/0x17908200ec9d0000,neutrinos:61e9,allHearts:581e9/60,allBreaths:2075e6};function Ff(e){let t=10**Math.max(0,Math.floor(Math.log10(e))-1),n=Math.round(e/t)*t;return n>=0xe8d4a51000?`${+(n/0xe8d4a51000).toFixed(1)} trillion`:n>=1e9?`${+(n/1e9).toFixed(1)} billion`:n>=1e6?`${+(n/1e6).toFixed(1)} million`:n.toLocaleString(`en-GB`)}function If(e){let t=Math.round(e)<30,n=t?60:Math.round(e),r=Math.floor(n/60),i=n%60,a=[r?`${r} minute${r===1?``:`s`}`:``,i?`${i} second${i===1?``:`s`}`:``].filter(Boolean).join(` `);return[t?`In one minute`:`While you scrolled for ${a}`,`The spinning Earth carried Giza ${Ff(n*Pf.giza)} km`,`Earth moved ${Ff(n*Pf.earth)} km around the Sun`,`The Sun moved ${Ff(n*Pf.sun)} km around the galaxy`,`The Milky Way and Andromeda came ${Ff(n*Pf.andromeda)} km closer`,`The Sun turned ${Ff(n*Pf.hydrogen)} tonnes of hydrogen into helium`,`Sunlight gave Earth the energy all people use in ${Ff(n*Pf.sunlightDays)} days`,`${Ff(n*Pf.neutrinos)} neutrinos from the Sun passed through your fingernail`,`Lightning flashed ${Ff(n*Pf.lightning)} times on Earth`,`${Ff(n*Pf.births)} babies were born`,`An adult body made ${Ff(n*Pf.cells)} new cells`,`A resting heart beat ${Ff(n*Pf.heart)} times and pumped ${Ff(n*Pf.blood)} litres of blood`,`A resting adult took ${Ff(n*Pf.breaths)} breaths`,`The hearts of everyone alive beat ${Ff(n*Pf.allHearts)} times`,`Everyone alive took ${Ff(n*Pf.allBreaths)} breaths together`]}var Lf=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Rf=3261.56,zf={"Parker Solar Probe":`The spacecraft that has come closest to the Sun`,"Europa Clipper":`On its way to Jupiter's moon Europa`,JUICE:`On its way to Jupiter's moons`};function Bf(e){let t=[],n=(t,n,r)=>X(e.sun,Q(Vc(t,n),r*Pc)),r=e=>`${(e<100?Math.round(e*10)/10:e<1e4?Math.round(e):Math.round(e/1e3)*1e3).toLocaleString(`en-GB`)} light-years`,i=e=>e<1e3?`${e<100?e.toFixed(0):Math.round(e/10)*10} million light-years`:`${(e/1e3).toFixed(1)} billion light-years`,a=ed(e);for(let[n,r,i,o,s]of md){let c=/Pyramid|Sphinx/.test(n),l=/Cairo|Nile$|Saqqara|Dahshur|Memphis/.test(n),u;if(c){let{e:t,n:o}=cl(dl,r,i),s=e.pyr.find(e=>n.endsWith(e.name));u=X(e.feet,sl(e.frame,t,o,a(t,o)+(s?s.height:4)))}else u=X(e.earthCenter,al({lat:r,lon:i},o,e.jd));let d=c?[2,2.3,3.7,4]:l?[3.8,4.1,5.4,5.7]:[5.3,5.6,6.9,7.2],f=/Great Pyramid|Cairo/.test(n)?7:/Pyramid of|Nile$|Saqqara|Sahara|Sea$|Alexandria|Luxor/.test(n)?6:/builders|Memphis/.test(n)?4:5;t.push({name:n,sub:s,pos:u,win:d,pri:f,onEarth:!0})}for(let[n,r,i,a]of gd){let o=Math.hypot(r,i,a);t.push({name:n,sub:`${(o/1e6).toFixed(1)} million km from Earth`,pos:X(e.earthCenter,Q([r,i,a],1e3)),win:[8.7,9,10.3,10.7],pri:7,orbit:!0})}let o=zc([e.homeECI[0],e.homeECI[1],0]);t.push({name:`Geostationary satellites`,sub:`35,786 km up`,pos:X(e.earthCenter,Q(o,sd*1e3)),win:[7.4,7.7,8.7,9.1],pri:7,orbit:!0}),t.push({name:`Moon`,sub:``,pos:e.moon,win:[8,8.3,10.6,11],pri:9}),t.push({name:`Sun`,sub:``,pos:e.sun,win:[9.6,10,15,15.5],pri:10});for(let[n,r]of Object.entries({mercury:`Mercury`,venus:`Venus`,mars:`Mars`,jupiter:`Jupiter`,saturn:`Saturn`,uranus:`Uranus`,neptune:`Neptune`}))t.push({name:r,sub:``,pos:e.planets[n],win:[11.3,11.7,14.6,15],pri:n===`jupiter`||n===`saturn`?8:7});t.push({name:`Pluto`,sub:``,pos:X(e.sun,Q(yd,Nc)),win:[12.4,12.8,15,15.4],pri:6});for(let[n,r,i,a]of hd){if(zf[n])continue;let o=[r,i,a];t.push({name:n,sub:`${vf(Math.hypot(...o)*Nc)} from the Sun`,pos:X(e.sun,Q(o,Nc)),win:[12.8,13.2,15.2,15.6],pri:n===`Voyager 1`?8:6})}let s=(t,n)=>{let r=e.eclNorth,i=n*Math.PI/180,a=Math.cos(i),o=Math.sin(i),s=Ic(r,t);return X(X(Q(t,a),Q([r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]],o)),Q(r,s*(1-a)))},c=Z(e.planets.jupiter,e.sun),l=zc(Z(c,Q(e.eclNorth,Ic(c,e.eclNorth))));t.push({name:`Asteroid belt`,sub:`Each dot is a known asteroid where it was that day`,pos:X(e.sun,Q(s(l,150),2.8*Nc)),win:[11,11.4,12.9,13.3],pri:7}),t.push({name:`Jupiter's Trojans`,sub:`Asteroids that share Jupiter's orbit`,pos:X(e.sun,s(c,60)),win:[11.2,11.6,12.9,13.3],pri:6}),t.push({name:`Kuiper belt`,sub:`${vd.toLocaleString(`en-GB`)} known icy bodies beyond Neptune`,pos:X(e.sun,Q(zc(s(Z(X(e.sun,Q(yd,Nc)),e.sun),-35)),44*Nc)),win:[12.6,13,14.6,15],pri:7}),t.push({name:`Heliopause`,sub:`Where the Sun's wind meets the wind between the stars`,pos:X(e.sun,Q(df,ff(0)*Nc)),win:[13.4,13.8,15.4,15.8],pri:8}),t.push({name:`Oort cloud`,sub:`Icy bodies thought to orbit this far out; none has been seen there`,pos:X(e.sun,Q(zc(s(df,120)),3e4*Nc)),win:[16.2,16.6,18.2,18.6],pri:8});for(let[n,i]of Object.entries({Orion:`Orion clouds`,Taurus:`Taurus clouds`,Perseus:`Perseus clouds`,Ophiuchus:`Ophiuchus clouds`,Lupus:`Lupus clouds`,Chamaeleon:`Chamaeleon clouds`,Corona_Australis:`Corona Australis cloud`,Cepheus:`Cepheus clouds`,Aquila_Rift:`Aquila Rift`,Coalsack:`Coalsack`,California:`California cloud`,Serpens:`Serpens cloud`,Mon_R2:`Monoceros R2`,CygnusX:`Cygnus X`,Musca:`Musca cloud`})){let a=Ed.filter(e=>e[0]===n);if(!a.length)continue;let o=Q(a.reduce((e,[,t,n,r])=>X(e,Q(Jc(t,n),r)),[0,0,0]),1/a.length),s=Math.hypot(...o);t.push({name:i,sub:`Stars are forming here, ${r(s)} away`,pos:X(e.sun,Q(o,Pc)),win:s<800?[18,18.4,20,20.4]:[18.6,19,20.6,21],pri:5})}let u=/^(Ring Nebula|Crab Nebula|Sombrero Galaxy|Cigar Galaxy|Pillars of Creation|Serpens Main|Rho Ophiuchi|Cartwheel Galaxy|Stephan's Quintet)$/;for(let[e,a,o,s,,,,,c]of Od){if(u.test(e))continue;let l=c===0?[16.4,16.9,20.6,21.1]:c===1?[20.6,21,22.6,23]:s<6e7?[23.4,23.7,24.8,25.2]:[24.1,24.4,25.6,26];t.push({name:e,sub:s<1e6?r(s):i(s/1e6),pos:n(a,o,s),win:l,pri:5})}for(let[n,r,i,a]of hd)zf[n]&&t.push({name:n,sub:zf[n],pos:X(e.sun,Q([r,i,a],Nc)),win:[10.8,11.2,13,13.4],pri:5});for(let[n,r,i,a,o]of _d)t.push({name:n,sub:`${vf(Math.hypot(r,i,a)*Nc)} from the Sun, back in ${o}`,pos:X(e.sun,Q([r,i,a],Nc)),win:[12.5,12.8,14.6,15],pri:6});for(let[e,i,a,o]of bd){let s=o<20?[15.6,16,17.8,18.3]:o<100?[16.4,16.8,18.6,19.1]:[17.2,17.7,19.6,20.1],c=/Proxima|Alpha|Sirius|Barnard|61 Cygni|Vega|Polaris|Betelgeuse|Rigel|Deneb|TRAPPIST/.test(e);t.push({name:e,sub:r(o),pos:n(i,a,o),win:s,pri:c?6:4})}t.push({name:`Human radio signals`,sub:`${Math.round(Kd)} light-years out since the 1920s`,pos:X(e.sun,Q(Wc,Kd*Pc)),win:[17.9,18.3,21,21.5],pri:9});for(let[e,,i,a,o]of xd){let s=/Sagittarius A/.test(e);t.push({name:s?`Centre of the galaxy`:e,sub:r(o),pos:n(i,a,o),win:s?[19.6,20,22,22.4]:[16.4,16.9,20.6,21.1],pri:s?9:5})}Sd.forEach(([e,i,a,o,s],c)=>{let l=o*Rf,u=l<3e5,d=c<2;if(!u&&!d&&s>-14.5)return;let f=u?[20.6,21,22.6,23]:d?[21.6,22,23.8,24.2]:[22,22.3,23.3,23.7];t.push({name:e,sub:l<1e6?r(l):`${(l/1e6).toFixed(1)} million light-years`,pos:n(i,a,l),win:f,pri:d?9:u?6:4})}),t.push({name:`Milky Way`,sub:``,pos:e.galCenter,win:[22,22.4,24.4,24.8],pri:8});for(let n of $d){if(n.name.startsWith(`3-kpc`))continue;let r=(n.bmin+n.bmax)/2,i=ef(n,r)*Rf,a=X(e.galCenter,X(Q(Wc,-i*Math.cos(r)*Pc),Q(Kc,i*Math.sin(r)*Pc)));t.push({name:`${n.name} Arm`,sub:n.name===`Local`?`The Sun's arm`:``,pos:a,win:[20,20.4,21.6,22],pri:n.name===`Local`?7:6})}for(let[e,r,a,o,s]of Cd){if(s>800&&r!==`quasar`)continue;let c=s<40?[22.9,23.2,24.2,24.5]:s<120?[23.4,23.7,24.8,25.2]:s<400?[24.1,24.4,25.6,26]:[24.6,24.9,26,26.4],l=/Virgo Cluster|Laniakea|Great Attractor|Coma/.test(e)?9:r===`supercluster`||r===`void`?7:5;t.push({name:e,sub:i(s),pos:n(a,o,s*1e6),win:c,pri:l})}let[d,f,p,m]=Ad;return t.push({name:d,sub:`Farthest galaxy known at ${m} billion light-years`,pos:n(f,p,m*1e9),win:[25.8,26.1,26.9,27.2],pri:7}),t.map(label=>({...label,name:zh(label.name),sub:zh(label.sub)}))}var Vf=28;function Hf(e,t){let n=Bf(e),r=Array.from({length:Vf},()=>{let e=document.createElement(`div`);e.className=`label`;let n=e=>Object.assign(document.createElement(`span`),{className:e}),r=n(`t`),i=n(`n`),a=n(`s`);return r.append(i,a),e.append(r),t.appendChild(e),{el:e,n:i,s:a,key:``,left:!1}}),i=document.createElement(`div`);i.className=`label`,i.style.visibility=`hidden`;let a=Object.assign(document.createElement(`span`),{className:`t`});i.append(a),t.appendChild(i);let o=new Map;document.fonts?.ready.then(()=>o.clear());let s=e=>{let t=o.get(e);return t===void 0&&(a.textContent=e,t=a.getBoundingClientRect().width,o.set(e,t)),t},c=new H,l=(e,t)=>e[0]<t[2]&&e[2]>t[0]&&e[1]<t[3]&&e[3]>t[1];return function(t,i,a,o,u,d){let f=[];if(d<.99)for(let r of n){let n=Lf(r.win[0]-.15,r.win[1]+.15,t.L)*(1-Lf(r.win[2]-.15,r.win[3]+.15,t.L));if(n<.01)continue;let s=Z(r.pos,t.pos),l=Math.hypot(...s);if(r.onEarth){if(Ic(zc(Z(r.pos,e.earthCenter)),Q(s,-1/l))<.02||l<300)continue}else if(r.orbit){let n=Z(e.earthCenter,t.pos),r=Math.min(Math.max(Ic(n,s)/(l*l),0),1);if(Math.hypot(...Z(n,Q(s,r)))<6371e3)continue}if(c.set(s[0]/l,s[1]/l,s[2]/l).applyMatrix4(i.matrixWorldInverse),c.z>-.05)continue;c.applyMatrix4(i.projectionMatrix);let u=(c.x*.5+.5)*a,p=(-c.y*.5+.5)*o;u<8||u>a-8||p<8||p>o-8||f.push({d:r,x:u,y:p,a:n*(1-d)})}f.sort((e,t)=>t.d.pri-e.d.pri);let p=[...u],m=0;for(let e of f){if(m>=Vf)break;let t=Math.max(s(e.d.name),e.d.sub?s(e.d.sub):0)+14,n=e.d.sub?32:16,i=[e.x-4,e.y-8,e.x+t,e.y-8+n],o=[e.x-t,e.y-8,e.x+4,e.y-8+n],c=null,u=!1;if(i[2]<a-8&&!p.some(e=>l(e,i))?c=i:o[0]>8&&!p.some(e=>l(e,o))&&(c=o,u=!0),!c)continue;p.push(c);let d=r[m++];d.key!==e.d.name&&(d.key=e.d.name,d.n.textContent=e.d.name,d.s.textContent=e.d.sub),d.left!==u&&(d.left=u,d.el.classList.toggle(`left`,u)),d.el.style.transform=`translate(${(u?e.x-t+4:e.x-2).toFixed(1)}px, ${(e.y-8).toFixed(1)}px)`,d.el.style.opacity=e.a.toFixed(3)}for(;m<Vf;m++)r[m].el.style.opacity!==`0`&&(r[m].el.style.opacity=`0`)}}var Uf=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Wf=e=>document.getElementById(e),Gf=27,Kf=[[.23,`You`,0],[2.36,`Pyramids`,1],[7.1,`Earth`,0],[8.58,`Moon`,1],[11.17,`Sun`,0],[12.65,`Neptune`,1],[16.6,`Nearest star`,1],[20.98,`Milky Way`,0],[22.38,`Andromeda`,2],[23.7,`Virgo`,2],[24.69,`Laniakea`,1],[26.64,`Edge`,0]];function qf(e){let t=e/299792458;return t<.1||e>0xa155863bd7ba0?``:t<60?`${t<10?t.toFixed(1):Math.round(t)} seconds`:t<3600?`${Math.floor(t/60)} min ${Math.round(t%60)} s`:t<172800?`${Math.floor(t/3600)} h ${Math.round(t%3600/60)} min`:`${Math.round(t/86400)} days`}function Jf(e){let t=Wf(`place`),n=Wf(`caption`),r=Wf(`caption-text`),i=Wf(`note`),a=Wf(`moment`),o=Wf(`moment-text`),s=Wf(`instrument`),c=Wf(`dist`),l=Wf(`jet`),u=Wf(`light-k`),d=Wf(`light`),f=Wf(`ruler`),p=f.querySelector(`.done`),m=f.querySelector(`.now`),h=Wf(`marker`),g=Wf(`ring`),_=Wf(`mlabel`),v=Hf(e,Wf(`labels`));for(let e=0;e<=Gf;e++){let t=document.createElement(`div`);t.className=`tick${e%3==0?` major`:``}`,t.style.left=`${e/Gf*100}%`,f.appendChild(t)}let y=Kf.map(([e,t,n])=>{let r=document.createElement(`div`);return r.className=`mark${n>0?` minor`:``}${n>1?` wide`:``}`,r.textContent=t,r.style.left=`${e/Gf*100}%`,f.appendChild(r),{L:e,el:r,passed:!1}}),b=[{name:`You`,centre:X(e.feet,Q(e.U,.9)),radius:1,whole:!1},{name:`Pyramids of Giza`,centre:e.pyr[1].pos,radius:1e3,whole:!0},{name:`Earth`,centre:e.earthCenter,radius:6371e3,whole:!0},{name:`Solar System`,centre:e.sun,radius:30*Nc,whole:!0},{name:`Milky Way`,centre:e.galCenter,radius:5e4*Pc,whole:!0},{name:`Local Group`,centre:e.lgCenter,radius:5e6*Pc,whole:!0},{name:`Virgo Supercluster`,centre:e.virgoSC,radius:55e6*Pc,whole:!0},{name:`Laniakea Supercluster`,centre:e.greatAttractor,radius:26e7*Pc,whole:!0},{name:`Observable universe`,centre:e.earthCenter,radius:hf*Pc,whole:!0}].map(label=>({...label,name:zh(label.name)})),x=0,S=0,C=10,w=``,T=!1,E=-1,D=-1,O=0,k=new H,A=e=>{let t=0;for(;t<Df.length-1&&e>=Df[t+1][0];)t++;return Df[t][1]},j=e=>{let t=Of[e];if(t.moment){if(o.textContent=t.text,t.keepNote){let t=e-1;for(;t>0&&Of[t].moment;)t--;t>=0&&i.textContent!==Of[t].text&&(i.textContent=Of[t].text)}}else i.textContent=t.text;window.travelJourney&&(window.travelJourney.currentCueId=e)};return function(e,i,f,ee,M,te,N){let P=kf(e.L),ne=e=>e>=0&&!!Of[e].moment&&!!Of[e].keepNote;P!==D&&(D=P,O=M+(E<0?0:180),ne(P)||(r.style.opacity=`0`),o.style.opacity=`0`),D!==E&&M>=O&&(E=D,E>=0&&(j(E),r.style.opacity=`1`,o.style.opacity=`1`));let re=+(E>=0)*(1-Uf(28.9,29,e.L))*(1-te),ie=D>=0&&!!Of[D].moment;n.style.opacity=(ie&&!ne(D)?0:re).toFixed(3),a.style.opacity=(ie?re:0).toFixed(3);let ae=A(e.L);t.textContent!==ae&&(t.textContent=ae),t.style.opacity=(+(E>=0)*(1-Uf(28.9,29,e.L))*(1-N)).toFixed(3);let oe=(1-N)*(1-Uf(26.6,27,e.L));s.style.opacity=oe.toFixed(3);let se=vf(Math.max(e.d,.01))??``;c.textContent!==se&&(c.textContent=se);let F=Af.find(([t,n])=>e.L>=t&&e.L<=n),ce=F?F[2]:``;ce&&l.textContent!==ce&&(l.textContent=ce);let le=F?`1`:`0`;l.style.opacity!==le&&(l.style.opacity=le,document.body.classList.toggle(`jet-on`,!!F));let ue=e.d/Pc,de=qf(e.d),[fe,pe]=de?[zh(`Light takes`),de]:ue>12e8?[zh(`Light from here left`),zh(`${Tf(ue).toFixed(1)} billion years ago`)]:[``,``];u.textContent!==fe&&(u.textContent=fe),d.textContent!==pe&&(d.textContent=pe);let me=Math.min(1,Math.max(0,e.L/Gf));p.style.transform=`scaleX(${me.toFixed(4)})`,m.style.left=`${(me*100).toFixed(3)}%`;for(let t of y){let n=e.L>=t.L-.05;n!==t.passed&&(t.passed=n,t.el.classList.toggle(`passed`,n))}let I=ee/2/Math.tan(i.fov*Math.PI/360),he=.42*Math.min(f,ee),ge=-1,_e=-1;for(let t=0;t<b.length;t++){let n=b[t],r=Math.hypot(...Z(n.centre,e.pos)),i=(r>n.radius?Math.asin(n.radius/r):Math.PI/2)*I;i<7?_e=t:ge<0&&n.whole&&i<=he&&(ge=t)}let L=ge>=0?ge:_e,ve=0;if(L>=0){let t=b[L],n=Z(t.centre,e.pos),r=Math.hypot(...n);if(k.set(n[0]/r,n[1]/r,n[2]/r).applyMatrix4(i.matrixWorldInverse),k.z<0){k.applyMatrix4(i.projectionMatrix);let n=(k.x*.5+.5)*f,a=(-k.y*.5+.5)*ee,o=Math.max(10,Math.asin(Math.min(1,t.radius/r))*I+6);!T||w===t.name?(x=n,S=a):(x+=(n-x)*.35,S+=(a-S)*.35),C=T?C+(o-C)*.3:o,T=!0,w!==t.name&&Math.hypot(n-x,a-S)<1&&(w=t.name,_.textContent=t.name),w||(w=t.name,_.textContent=t.name),ve=Uf(2.4,2.9,e.L)*(1-Uf(29.15,29.58,e.L))*(ie?.35:1)*(1-N)}}h.style.opacity=ve.toFixed(3),h.style.transform=`translate(${x.toFixed(1)}px, ${S.toFixed(1)}px)`,g.style.width=g.style.height=`${(C*2).toFixed(1)}px`;let R=_.offsetWidth,z=x+C+8+R<f-12,ye=!z&&x-C-8-R>12,be=_.offsetHeight,xe=Math.min(ee-12,...[n,s].filter(e=>Number(e.style.opacity)>.05).map(e=>e.getBoundingClientRect().top-8)),Se=!z&&!ye&&S+C+10+be<=xe,Ce=!z&&!ye&&!Se&&S-C-10-be>=12,we=!z&&!ye&&!Se&&!Ce;_.classList.toggle(`flip`,ye),_.classList.toggle(`below`,Se||we),_.classList.toggle(`above`,Ce);let Te;if(z)_.style.left=`${C+8}px`,_.style.top=`0px`,Te=[x-C,S-C,x+C+8+R,S+C];else if(ye)_.style.left=`${-C-8}px`,_.style.top=`0px`,Te=[x-C-8-R,S-C,x+C,S+C];else{let e=Math.min(Math.max(0,12+R/2-x),f-12-R/2-x),t=Se?C+10:Ce?-C-10:Math.max(-C+10,12-S);_.style.left=`${e}px`,_.style.top=`${t}px`,Te=[x-Math.max(C,R/2),S-C-(Ce?be+10:0),x+Math.max(C,R/2),S+C+(Se?be+10:0)]}let Ee=[];for(let e of[n,s,t])if(Number(e.style.opacity)>.05){let t=e.getBoundingClientRect();Ee.push([t.left-8,t.top-8,t.right+8,t.bottom+8])}if(ie){let e=a.getBoundingClientRect();Ee.push([e.left-16,e.top-16,e.right+16,e.bottom+16])}ve>.05&&Ee.push(Te),v(e,i,f,ee,Ee,Math.max(N,ie?.6:0))}}function Yf(e,t,n){e.style.fontSize=``;let r=getComputedStyle(e),i=document.createElement(`span`);i.style.cssText=`position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap`;for(let e of[`fontFamily`,`fontSize`,`fontWeight`,`fontStyle`,`fontStretch`,`fontVariantNumeric`,`letterSpacing`])i.style[e]=r[e];document.body.appendChild(i);let a=0;for(let e of t)i.textContent=e,a=Math.max(a,i.getBoundingClientRect().width);i.remove(),a>n&&(e.style.fontSize=`${(parseFloat(r.fontSize)*n/a).toFixed(2)}px`)}function Xf(e=0){let t=document.createElement(`div`);t.style.cssText=`position:absolute;visibility:hidden;width:var(--edge)`,document.body.appendChild(t);let n=t.getBoundingClientRect().width||18;return t.remove(),window.innerWidth-2*n-e}
// Apply Chinese only to display data; preserve scientific data and animation.
Df = Df.map(([position,text]) => [position,zh(text)]);
Of.forEach(item => item.text = zh(item.text));
Af = Af.map(([start,end,text]) => [start,end,zh(text)]);
Kf = Kf.map(([position,text,level]) => [position,({Andromeda:"仙女座","Nearest star":"近邻恒星",Edge:"边缘"})[text] ?? zh(text),level]);
jf = zh(jf); Mf = Mf.map(zh); Nf = Nf.map(zh);
vf = distance; qf = lightTime; If = elapsed => facts(elapsed,Pf);
var Zf=document.getElementById(`view`);if(new URLSearchParams(location.search).has(`debug`)){let e=document.createElement(`pre`);e.style.cssText=`position:fixed;left:8px;bottom:8px;right:8px;max-height:45vh;overflow:auto;z-index:9;margin:0;padding:8px;background:rgba(0,0,0,0.8);color:#9f9;font:11px/1.35 ui-monospace,monospace;white-space:pre-wrap;pointer-events:auto`,document.body.appendChild(e);let t=t=>{e.textContent+=t+`
`},n=document.createElement(`canvas`).getContext(`webgl2`),r=n?.getExtension(`WEBGL_debug_renderer_info`);t(`webgl2: ${!!n}; renderer: ${n&&r?n.getParameter(r.UNMASKED_RENDERER_WEBGL):`?`}`),t(`color_buffer_float: ${!!n?.getExtension(`EXT_color_buffer_float`)}; half_float: ${!!n?.getExtension(`EXT_color_buffer_half_float`)}; max texture: ${n?.getParameter(n.MAX_TEXTURE_SIZE)}; max samples: ${n?.getParameter(n.MAX_SAMPLES)}`),window.addEventListener(`error`,e=>t(`error: ${e.message} ${e.filename?.split(`/`).pop()}:${e.lineno}`)),window.addEventListener(`unhandledrejection`,e=>t(`rejection: ${String(e.reason)}`)),Zf.addEventListener(`webglcontextlost`,()=>t(`webgl context lost`));let i=console.error.bind(console),a=console.warn.bind(console);console.error=(...e)=>{t(`console.error: `+e.map(String).join(` `).slice(0,600)),i(...e)},console.warn=(...e)=>{t(`console.warn: `+e.map(String).join(` `).slice(0,300)),a(...e)};let o=0,s=performance.now(),c=()=>{o++,performance.now()-s<5e3?requestAnimationFrame(c):t(`frames in 5 s: ${o}; scrollY ${Math.round(scrollY)} of ${document.documentElement.scrollHeight-innerHeight}`)};requestAnimationFrame(c)}if(!Zf.getContext(`webgl2`,El))throw Error(`no webgl2`);window.trustedTypes?.createPolicy(`default`,{createScriptURL:e=>e.startsWith(`blob:${location.origin}/`)?e:null});var Qf=new WeakSet;K.prototype.onUploadCallback=function(){Qf.add(this)};var $f=e=>e instanceof K&&Qf.has(e)&&e.usage===35044&&e.array.length>=4096;function ep(e){for(let t of e)t.traverse(e=>{let t=e.geometry;if(!t?.isBufferGeometry)return;let n=[...Object.values(t.attributes),t.index].filter($f);if(n.length){t.attributes.position?.array.length&&(t.boundingSphere||t.computeBoundingSphere(),t.boundingBox||t.computeBoundingBox());for(let e of n)e.array=e.array.slice(0,0)}})}Zf.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),tp=!0}),Zf.addEventListener(`webglcontextrestored`,()=>location.reload());var tp=!1,np=await pd(`assets/skeleton.bin`),rp=np??await pd(`assets/figure.bin`),ip=pl(),ap=ed(ip),op=xl(ip),sp=new Dl(Zf);sp.renderer.debug.checkShaderErrors=!1,Tu(sp.renderer);var cp=kl(sp.renderer),lp=Al();lp.uniforms.tTrans.value=cp;var up=()=>new Promise(e=>setTimeout(e,0)),dp=Hd(),fp=od(ip,ap,rp,!!np);np=rp=void 0,await up();var pp=dd(ip,cp);await up();var mp=await dp;await up();var hp=uf(ip,()=>Ap),gp=[mp];for(let e of[()=>af(ip),()=>hp,()=>nf(ip,hp.photoNames),()=>qd(ip),()=>mf(ip,()=>Ap),()=>pf(ip),()=>Ud(ip)])gp.push(e()),await up();gp.push(pp,fp);var _p=ml([0,4,7,11,13,17,21,24,27,28],[.32,.32,.3,.3,.9,2.2,2.6,3,3.2,3.2]),vp=52,yp=Math.min(window.devicePixelRatio||1,window.innerWidth*window.innerHeight<6e5?2:1.6),bp=Math.min(yp,1.25);new URLSearchParams(location.search);var xp=1,Sp=1,Cp=0,wp=1,Tp=1,Ep=window.matchMedia(`(pointer: coarse)`).matches,Dp=0;function Op(){let e=Zf.clientWidth||window.innerWidth,t=Zf.clientHeight||window.innerHeight;wp=e,Tp=t,e===xp&&t===Sp&&bp===Cp?(clearTimeout(Dp),Dp=0):Ep&&Cp&&e===xp&&bp===Cp&&Math.abs(t-Sp)<Sp*.25?(clearTimeout(Dp),Dp=window.setTimeout(kp,250)):kp()}function kp(){clearTimeout(Dp),Dp=0;let e=Zf.clientWidth||window.innerWidth,t=Zf.clientHeight||window.innerHeight;if(wp=e,Tp=t,e===xp&&t===Sp&&bp===Cp)return;xp=e,Sp=t,Cp=bp,sp.resize(e,t,bp);let n=e/t;Ap=Math.max(vp,2*Math.atan(Math.tan(42*Math.PI/180/2)/n)*180/Math.PI)}window.addEventListener(`scroll`,()=>{Dp&&=(clearTimeout(Dp),window.setTimeout(kp,250))},{passive:!0});var Ap=vp;window.addEventListener(`resize`,Op),new ResizeObserver(Op).observe(Zf),Op(),fp.setShadows(sp.renderer),(async()=>{for(let e of[...gp,fp.body])sp.renderer.setRenderTarget(sp.hdr),await sp.renderer.compileAsync(e.scene,sp.camera).catch(()=>void 0);sp.renderer.setRenderTarget(null)})();var jp=new URLSearchParams(location.search),Mp=Jf(ip);jp.has(`p`)||(history.scrollRestoration=`manual`,window.scrollTo(0,0));var Np=jp.has(`p`)?Number(jp.get(`p`)):null,Pp=new Set([]),Fp=document.getElementById(`journey-space`),Ip=0,Lp=1,Rp=1;function zp(){Ip=Fp.offsetTop,Lp=Fp.offsetHeight,Rp=window.innerHeight}zp(),window.addEventListener(`resize`,zp);var Bp=0,Vp=0,Hp=0;function Up(){Hp=window.scrollY,Bp=Math.min(1,Math.max(0,(Hp-Ip)/Lp))}window.addEventListener(`scroll`,Up,{passive:!0}),Up(),Vp=Bp;var Wp=document.getElementById(`prelude`),Gp=document.getElementById(`closing`),Kp=document.getElementById(`home`),qp=null,Jp=document.getElementById(`home-cue`),Yp=e=>{Kp.classList.toggle(`on`,e),Jp.classList.toggle(`on`,e)},Xp=document.querySelector(`#facts .h`),Zp=document.querySelector(`#facts .line`),Qp=[],$p=0,em=0,tm=(e,t)=>{e.style.opacity=t.toFixed(3),e.style.visibility=t>.01?`visible`:`hidden`},nm=[`assets/giza-12km.jpg`,`assets/giza-120km.jpg`].map(e=>Ju(e)),rm=performance.now(),im=!!navigator.connection?.saveData,am=!1,om=0,sm=!1,cm=!1,lm=!1,um=e=>document.getElementById(e),dm=()=>{Qp.length&&Yf(Zp,Qp,Xf())};function fm(e){Xp.textContent=e[0]??``,Qp=e.slice(1),$p=0,Zp.textContent=Qp[0]??``,dm(),clearInterval(em),em=window.setInterval(()=>{Qp.length&&(Zp.classList.add(`out`),setTimeout(()=>{$p=($p+1)%Qp.length,Zp.textContent=Qp[$p],Zp.classList.remove(`out`)},600))},3500)}function pm(){let e=Xf();Yf(um(`note`),Of.filter(e=>!e.moment).map(e=>e.text),e),Yf(um(`moment-text`),Of.filter(e=>e.moment).map(e=>e.text),e);let t=window.matchMedia(`(max-width: 700px)`).matches,n=e=>e.map((t,n)=>`${n===0?`“`:``}${t}${n===e.length-1?`”`:``}`);Yf(Gp.querySelector(`blockquote`),n(t?Mf:[jf]),e),Yf(document.querySelector(`#home .home-quote`),n(Nf),e);let r=document.querySelector(`#home .home-quote`);document.querySelector(`#home .home-by`).style.fontSize=`${(parseFloat(getComputedStyle(r).fontSize)*.8).toFixed(1)}px`,dm()}pm(),document.fonts?.ready.then(pm),window.addEventListener(`resize`,pm);var mm=0,hm=0,gm=op.Ls,_m=e=>{let t=0,n=gm.length-1;for(;t<n;){let r=t+n>>1;gm[r]<e?t=r+1:n=r}return t/(gm.length-1)},vm=null,ym=28.9,bm=ml([0,.5,3,8,12,17,20,24,27,28.9],[.15,.35,.6,.75,.85,1,1.1,1.2,1,.6]),xm=e=>{!vm||e&&e.timeStamp<=vm.t0+300||(vm.greeted&&Yp(!1),vm=null)};for(let e of[`wheel`,`touchstart`,`keydown`,`pointerdown`])window.addEventListener(e,xm,{passive:!0});document.getElementById(`flyback`).addEventListener(`click`,()=>{vm={t0:performance.now(),L:Math.min(op.at(Vp).L,ym),greeted:!1}});
const narrationProgressForLogDistance = distance => {
  if(distance<=op.at(0).L) return 0;
  let low=0, high=1;
  for(let step=0;step<24;step++) {
    const middle=(low+high)/2;
    if(op.at(middle).L < distance) low=middle; else high=middle;
  }
  return (low+high)/2;
};
window.travelJourney = {
  currentCueId: null, canNarrate: false,
  captionEndProgress: narrationProgressForLogDistance(28.9),
  // The artwork switches captions with a +1e-6 tolerance. Stop before that
  // tolerance too, especially at the flat timing holds around the skeleton.
  cues: Of.map((cue,id) => ({id,text:cue.text,progress:narrationProgressForLogDistance(cue.L - 2e-6)}))
};
var Sm=-1,Cm=-1,wm=performance.now(),Tm=!0,Em=0,Dm=0,Om=0,km=0,Am=performance.now(),jm=!1,Mm=0,Nm=new H,Pm=new H(...zc(Z(ip.sun,ip.earthCenter)));function Fm(e){if(tp)return;performance.now();let t=Math.min(.1,(e-wm)/1e3);wm=e;let n=Np===null?1-Math.min(1,Math.max(0,(Hp/Rp-.05)/.45)):0,r=Np!==null||vm?0:Math.min(1,Math.max(0,((Hp-Ip-Lp)/Rp+.3)/.6));jm||(Om+=t,km++);let i=!cm||r>.98;if(e-Am>(i?500:2e3)&&km>20){let t=Om/km,n=!!vm||Math.abs(Bp-Vp)>1e-4,r=bp,a=Math.min(yp,op.at(Vp).d<80?1:.6);i?r=t>.018?Math.max(a,bp*.85):t<.012?Math.min(yp,bp*1.12):bp:(Dm=n&&t>.02?Dm+1:0,Dm>=2&&(r=Math.max(a,bp*.85),Dm=0)),Math.abs(r-bp)>.04?(bp=r,Op()):am&&(sm=!0),Om=0,km=0,Am=e}if(vm){let n=vm.L=Math.max(0,vm.L-bm(vm.L)*t),r=_m(n);window.scrollTo(0,Ip+r*Lp),Bp=Vp=r,!vm.greeted&&n<.3&&(vm.greeted=!0,Yp(!0)),n<=0&&(vm=null,qp={at:e,y:null})}Vp+=(Bp-Vp)*(1-Math.exp(-t*7)),Math.abs(Bp-Vp)<1e-6&&(Vp=Bp),cm&&!im&&e-rm>1500&&Cu(2),(Math.abs(Bp-Vp)>1e-4||vm)&&(Mm=e);let a=op.at(Np??Vp).L,o=Yu(a,e-Mm>250);o&&sp.renderer.initTexture(o),e-Em>500&&(Em=e,$u(a),ep([...gp,fp.body].map(e=>e.scene)),Tm&&a>6.6?(fp.dropShadows(),Tm=!1):!Tm&&a<6.1&&(fp.setShadows(sp.renderer),Tm=!0)),jm=!!o,!am&&nm.every(e=>e.image&&!mu.includes(e))&&(am=!0,om=e,sm=!1,Om=0,km=0,Am=e),!cm&&(am&&(sm||e-om>1500)||n<.98||e-rm>1e4)&&(cm=!0,document.documentElement.classList.add(`ready`),bu());let s=Np??Vp;cm&&!lm&&s>1e-4&&(lm=!0,document.documentElement.classList.add(`moved`));let c=op.at(s);sp.aim(c,Ap);let l=Q(Z(c.pos,ip.earthCenter),1/1e3);Nm.set(l[0],l[1],l[2]);let u={time:e/1e3,width:xp,height:Sp,dpr:bp,exposure:_p(c.L),camEarthKm:Nm,sunDir:Pm};sp.begin(),Vd(c);let d=e=>{e.weight(c)<=0||Pp.has(e.name)||(e.update?.(c,u),sp.renderLayer(e,c))};d(fp),sp.camera.near=1,sp.camera.far=10,sp.camera.updateProjectionMatrix(),lp.update(sp.camera,Nm,Pm),lp.uniforms.uSunDisc.value=1-Math.min(1,Math.max(0,c.L-8.5)),Nm.length()<1e6&&!Pp.has(`sky`)&&sp.pass(lp.scene,`sky`);let f=Math.min(1,Math.max(0,(c.L-4.6)/.8));mp.setGain(f*1.6/u.exposure,bp);for(let e of gp)e!==fp&&!(e===mp&&f<=0)&&d(e);d(fp.body);let p=1-Math.min(1,Math.max(0,(c.L-27.4)/1.4));sp.finish(u.exposure,1,u.time,Pp.has(`bloom`)?0:.008+.052*p),tm(Wp,n),tm(Gp,r),!mm&&n<.5&&(mm=e),mm&&!hm&&s>.995&&(hm=e,fm(If((hm-mm)/1e3))),qp&&qp.y===null&&e-qp.at>300&&(qp.y=Hp),qp&&qp.y!==null&&Math.abs(Hp-qp.y)>4&&(qp=null,Yp(!1));let m=vm?0:Math.min(1,Math.max(0,(c.L-29.1)/.4)),h=vm||qp?1:Math.max(n,r),g=qp||vm?.greeted?1:Math.max(n,r,m);Sm<0&&(Sm=h,Cm=g);let _=1-Math.exp(-t*6);Sm+=(h-Sm)*_,Cm+=(g-Cm)*_,Mp(c,sp.camera,wp,Tp,e,Sm,Cm),window.travelJourney.canNarrate=!vm&&!qp&&n<.5&&r<.5,requestAnimationFrame(Fm)}requestAnimationFrame(Fm);
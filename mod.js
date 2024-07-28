// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function n(r){return r===e||r===t}var i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var a=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var c="function"==typeof Symbol?Symbol:void 0,u="function"==typeof c?c.toStringTag:"";var f=i&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,c;if(null==r)return a.call(r);t=r[u],c=u,e=null!=(i=r)&&o.call(i,c);try{r[u]=void 0}catch(e){return a.call(r)}return n=a.call(r),e?r[u]=t:delete r[u],n}:function(r){return a.call(r)},s="function"==typeof Uint32Array;var l="function"==typeof Uint32Array?Uint32Array:null;var p,v="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var r,e,t;if("function"!=typeof l)return!1;try{e=new l(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(s&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?v:function(){throw new Error("not implemented")};var g=p,y="function"==typeof Float64Array;var d="function"==typeof Float64Array?Float64Array:null;var h,w="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,e,t;if("function"!=typeof d)return!1;try{e=new d([1,3.14,-3.14,NaN]),t=e,r=(y&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?w:function(){throw new Error("not implemented")};var b=h,m="function"==typeof Uint8Array;var A="function"==typeof Uint8Array?Uint8Array:null;var _,E="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var r,e,t;if("function"!=typeof A)return!1;try{e=new A(e=[1,3.14,-3.14,256,257]),t=e,r=(m&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?E:function(){throw new Error("not implemented")};var U=_,S="function"==typeof Uint16Array;var I="function"==typeof Uint16Array?Uint16Array:null;var k,N="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,e,t;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,65536,65537]),t=e,r=(S&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var x,F={uint16:k,uint8:U};(x=new F.uint16(1))[0]=4660;var j=52===new F.uint8(x.buffer)[0],T=!0===j?1:0,O=new b(1),V=new g(O.buffer);function $(r){return O[0]=r,V[T]}function G(r,e){var t,n,i,a;return i=(a=r*r)*a,n=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*n-r*e))}var H=-.16666666666666632,W=.00833333333332249,C=-.0001984126982985795,L=27557313707070068e-22,P=-2.5050760253406863e-8,R=1.58969099521155e-10;function Z(r,e){var t,n,i;return t=W+(i=r*r)*(C+i*L)+i*(i*i)*(P+i*R),n=i*r,0===e?r+n*(H+i*t):r-(i*(.5*e-n*t)-e-n*H)}var M,X,Y=2147483647,z=2146435072,q=1048575,B=!0===j?0:1,D=new b(1),J=new g(D.buffer);!0===j?(M=1,X=0):(M=0,X=1);var K={HIGH:M,LOW:X},Q=new b(1),rr=new g(Q.buffer),er=K.HIGH,tr=K.LOW;function nr(r,e){return rr[er]=r,rr[tr]=e,Q[0]}var ir=Math.floor,ar=1023,or=1023,cr=-1023,ur=-1074,fr=2147483648,sr="function"==typeof Object.defineProperty?Object.defineProperty:null;var lr=Object.defineProperty;function pr(r){return"number"==typeof r}function vr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function gr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+vr(i):vr(i)+r,n&&(r="-"+r)),r}var yr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase;function hr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!pr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=gr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=gr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===dr.call(r.specifier)?dr.call(t):yr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var wr=Math.abs,br=String.prototype.toLowerCase,mr=String.prototype.toUpperCase,Ar=String.prototype.replace,_r=/e\+(\d)$/,Er=/e-(\d)$/,Ur=/^(\d+)$/,Sr=/^(\d+)e/,Ir=/\.0$/,kr=/\.0*e/,Nr=/(\..*[^0])0*e/;function xr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!pr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":wr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ar.call(t,Nr,"$1e"),t=Ar.call(t,kr,"e"),t=Ar.call(t,Ir,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ar.call(t,_r,"e+0$1"),t=Ar.call(t,Er,"e-0$1"),r.alternate&&(t=Ar.call(t,Ur,"$1."),t=Ar.call(t,Sr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===mr.call(r.specifier)?mr.call(t):br.call(t)}function Fr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var jr=String.fromCharCode,Tr=Array.isArray;function Or(r){return r!=r}function Vr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $r(r){var e,t,n,i,a,o,c,u,f,s,l,p,v;if(!Tr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)o+=n;else{if(e=void 0!==n.precision,!(n=Vr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Or(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Or(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=hr(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Or(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Or(a)?String(n.arg):jr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=xr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=gr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,v=void 0,(v=l-s.length)<0?s:s=p?s+Fr(v):Fr(v)+s)),o+=n.arg||"",c+=1}return o}var Gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Hr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Wr(r){var e,t,n,i;for(t=[],i=0,n=Gr.exec(r);n;)(e=r.slice(i,Gr.lastIndex-n[0].length)).length&&t.push(e),t.push(Hr(n)),i=Gr.lastIndex,n=Gr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Cr(r){var e,t;if("string"!=typeof r)throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Wr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return $r.apply(null,e)}var Lr=Object.prototype,Pr=Lr.toString,Rr=Lr.__defineGetter__,Zr=Lr.__defineSetter__,Mr=Lr.__lookupGetter__,Xr=Lr.__lookupSetter__;var Yr,zr,qr=function(){try{return sr({},"x",{}),!0}catch(r){return!1}}()?lr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Pr.call(r))throw new TypeError(Cr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Pr.call(t))throw new TypeError(Cr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Mr.call(r,e)||Xr.call(r,e)?(n=r.__proto__,r.__proto__=Lr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Rr&&Rr.call(r,e,t.get),o&&Zr&&Zr.call(r,e,t.set),r};function Br(r,e,t){qr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===j?(Yr=1,zr=0):(Yr=0,zr=1);var Dr={HIGH:Yr,LOW:zr},Jr=new b(1),Kr=new g(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,t,n){return Jr[0]=r,e[n]=Kr[Qr],e[n+t]=Kr[re],e}function te(r){return ee(r,[0,0],1,0)}Br(te,"assign",ee);var ne=[0,0];function ie(r,e){var t,n;return te.assign(r,ne,1,0),t=ne[0],t&=Y,n=$(e),nr(t|=n&=fr,ne[1])}var ae=22250738585072014e-324;function oe(r){return Math.abs(r)}var ce=4503599627370496;function ue(e,t,i,a){return r(e)||n(e)?(t[a]=e,t[a+i]=0,t):0!==e&&oe(e)<ae?(t[a]=e*ce,t[a+i]=-52,t):(t[a]=e,t[a+i]=0,t)}Br((function(r){return ue(r,[0,0],1,0)}),"assign",ue);var fe=2220446049250313e-31,se=2148532223,le=[0,0],pe=[0,0];function ve(i,a){var o,c;return 0===a||0===i||r(i)||n(i)?i:(ue(i,le,1,0),i=le[0],a+=le[1],a+=function(r){var e=$(r);return(e=(e&z)>>>20)-ar|0}(i),a<ur?ie(0,i):a>or?i<0?t:e:(a<=cr?(a+=52,c=fe):c=1,te.assign(i,pe,1,0),o=pe[0],o&=se,c*nr(o|=a+ar<<20,pe[1])))}function ge(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ye=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],de=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],he=16777216,we=5.960464477539063e-8,be=ge(20),me=ge(20),Ae=ge(20),_e=ge(20);function Ee(r,e,t,n,i,a,o,c,u){var f,s,l,p,v,g,y,d,h;for(p=a,h=n[t],d=t,v=0;d>0;v++)s=we*h|0,_e[v]=h-he*s|0,h=n[d-1]+s,d-=1;if(h=ve(h,i),h-=8*ir(.125*h),h-=y=0|h,l=0,i>0?(y+=v=_e[t-1]>>24-i,_e[t-1]-=v<<24-i,l=_e[t-1]>>23-i):0===i?l=_e[t-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,f=0,v=0;v<t;v++)d=_e[v],0===f?0!==d&&(f=1,_e[v]=16777216-d):_e[v]=16777215-d;if(i>0)switch(i){case 1:_e[t-1]&=8388607;break;case 2:_e[t-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=ve(1,i)))}if(0===h){for(d=0,v=t-1;v>=a;v--)d|=_e[v];if(0===d){for(g=1;0===_e[a-g];g++);for(v=t+1;v<=t+g;v++){for(u[c+v]=ye[o+v],s=0,d=0;d<=c;d++)s+=r[d]*u[c+(v-d)];n[v]=s}return Ee(r,e,t+=g,n,i,a,o,c,u)}}if(0===h)for(t-=1,i-=24;0===_e[t];)t-=1,i-=24;else(h=ve(h,-i))>=he?(s=we*h|0,_e[t]=h-he*s|0,i+=24,_e[t+=1]=s):_e[t]=0|h;for(s=ve(1,i),v=t;v>=0;v--)n[v]=s*_e[v],s*=we;for(v=t;v>=0;v--){for(s=0,g=0;g<=p&&g<=t-v;g++)s+=de[g]*n[v+g];Ae[t-v]=s}for(s=0,v=t;v>=0;v--)s+=Ae[v];for(e[0]=0===l?s:-s,s=Ae[0]-s,v=1;v<=t;v++)s+=Ae[v];return e[1]=0===l?s:-s,7&y}function Ue(r,e,t,n){var i,a,o,c,u,f,s;for(4,(a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),f=a-(o=n-1),s=o+4,u=0;u<=s;u++)be[u]=f<0?0:ye[f],f+=1;for(u=0;u<=4;u++){for(i=0,f=0;f<=o;f++)i+=r[f]*be[o+(u-f)];me[u]=i}return 4,Ee(r,e,4,me,c,4,a,o,be)}var Se=Math.round,Ie=.6366197723675814,ke=1.5707963267341256,Ne=6077100506506192e-26,xe=6077100506303966e-26,Fe=20222662487959506e-37,je=20222662487111665e-37,Te=84784276603689e-45,Oe=2047;function Ve(r,e,t){var n,i,a,o,c;return a=r-(n=Se(r*Ie))*ke,o=n*Ne,c=e>>20|0,t[0]=a-o,c-($(t[0])>>20&Oe)>16&&(o=n*Fe-((i=a)-(a=i-(o=n*xe))-o),t[0]=a-o,c-($(t[0])>>20&Oe)>49&&(o=n*Te-((i=a)-(a=i-(o=n*je))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var $e=0,Ge=16777216,He=1.5707963267341256,We=6077100506506192e-26,Ce=2*We,Le=3*We,Pe=4*We,Re=598523,Ze=1072243195,Me=1073928572,Xe=1074752122,Ye=1074977148,ze=1075183036,qe=1075388923,Be=1075594811,De=1094263291,Je=[0,0,0],Ke=[0,0];function Qe(r,e){var t,n,i,a,o,c,u;if((i=$(r)&Y|0)<=Ze)return e[0]=r,e[1]=0,0;if(i<=Xe)return(i&q)===Re?Ve(r,i,e):i<=Me?r>0?(u=r-He,e[0]=u-We,e[1]=u-e[0]-We,1):(u=r+He,e[0]=u+We,e[1]=u-e[0]+We,-1):r>0?(u=r-2*He,e[0]=u-Ce,e[1]=u-e[0]-Ce,2):(u=r+2*He,e[0]=u+Ce,e[1]=u-e[0]+Ce,-2);if(i<=Be)return i<=ze?i===Ye?Ve(r,i,e):r>0?(u=r-3*He,e[0]=u-Le,e[1]=u-e[0]-Le,3):(u=r+3*He,e[0]=u+Le,e[1]=u-e[0]+Le,-3):i===qe?Ve(r,i,e):r>0?(u=r-4*He,e[0]=u-Pe,e[1]=u-e[0]-Pe,4):(u=r+4*He,e[0]=u+Pe,e[1]=u-e[0]+Pe,-4);if(i<De)return Ve(r,i,e);if(i>=z)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return D[0]=r,J[B]}(r),u=nr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Je[o]=0|u,u=(u-Je[o])*Ge;for(Je[2]=u,a=3;Je[a-1]===$e;)a-=1;return c=Ue(Je,Ke,n,a),r<0?(e[0]=-Ke[0],e[1]=-Ke[1],-c):(e[0]=Ke[0],e[1]=Ke[1],c)}var rt=[0,0],et=2147483647,tt=1072243195,nt=1044381696,it=2146435072;function at(r){var e;if(e=$(r),(e&=et)<=tt)return e<nt?1:G(r,0);if(e>=it)return NaN;switch(3&Qe(r,rt)){case 0:return G(rt[0],rt[1]);case 1:return-Z(rt[0],rt[1]);case 2:return-G(rt[0],rt[1]);default:return Z(rt[0],rt[1])}}var ot=1072243195,ct=1045430272,ut=[0,0];function ft(r){var e;if(e=$(r),(e&=Y)<=ot)return e<ct?r:Z(r,0);if(e>=z)return NaN;switch(3&Qe(r,ut)){case 0:return Z(ut[0],ut[1]);case 1:return G(ut[0],ut[1]);case 2:return-Z(ut[0],ut[1]);default:return-G(ut[0],ut[1])}}var st=3.141592653589793;function lt(e){var t,i;return r(e)||n(e)?NaN:0===(t=oe(i=e%2))||1===t?ie(0,i):t<.25?ft(st*i):t<.75?ie(at(st*(t=.5-t)),i):t<1.25?(i=ie(1,i)-i,ft(st*i)):t<1.75?-ie(at(st*(t-=1.5)),i):(i-=ie(2,i),ft(st*i))}export{lt as default};
//# sourceMappingURL=mod.js.map

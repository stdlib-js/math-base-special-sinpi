// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,e=n,o=t;var u=function(r){return r===e||r===o};var a=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var f=function(){return a&&"symbol"==typeof Symbol.toStringTag},i=Object.prototype.toString,c=i;var v=function(r){return c.call(r)},y=Object.prototype.hasOwnProperty;var l=function(r,n){return null!=r&&y.call(r,n)},p="function"==typeof Symbol?Symbol.toStringTag:"",A=l,w=p,b=i;var s=v,U=function(r){var n,t,e;if(null==r)return b.call(r);t=r[w],n=A(r,w);try{r[w]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[w]=t:delete r[w],e},h=f()?U:s,N=h,m="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null,I=function(r){return m&&r instanceof Uint32Array||"[object Uint32Array]"===N(r)},F=d;var S=function(){var r,n;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),r=I(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var H="function"==typeof Uint32Array?Uint32Array:void 0,O=function(){throw new Error("not implemented")},g=S()?H:O,E=h,j="function"==typeof Float64Array;var T="function"==typeof Float64Array?Float64Array:null,G=function(r){return j&&r instanceof Float64Array||"[object Float64Array]"===E(r)},L=T;var W=function(){var r,n;if("function"!=typeof L)return!1;try{n=new L([1,3.14,-3.14,NaN]),r=G(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var M="function"==typeof Float64Array?Float64Array:void 0,P=function(){throw new Error("not implemented")},V=W()?M:P,Y=h,_="function"==typeof Uint8Array;var k="function"==typeof Uint8Array?Uint8Array:null,x=function(r){return _&&r instanceof Uint8Array||"[object Uint8Array]"===Y(r)},q=k;var z=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,256,257]),r=x(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var B="function"==typeof Uint8Array?Uint8Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,J=h,K="function"==typeof Uint16Array;var Q="function"==typeof Uint16Array?Uint16Array:null,R=function(r){return K&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)},X=Q;var Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,65536,65537]),r=R(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var $,rr="function"==typeof Uint16Array?Uint16Array:void 0,nr=function(){throw new Error("not implemented")},tr={uint16:Z()?rr:nr,uint8:D};($=new tr.uint16(1))[0]=4660;var er=52===new tr.uint8($.buffer)[0],or=g,ur=!0===er?1:0,ar=new V(1),fr=new or(ar.buffer);var ir=function(r){return ar[0]=r,fr[ur]};var cr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},vr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var yr=function(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*cr(u),e+=o*o*vr(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))},lr=-.16666666666666632;var pr=function(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(lr+o*t):r-(o*(.5*n-e*t)-n-e*lr)},Ar=g,wr=!0===er?0:1,br=new V(1),sr=new Ar(br.buffer);var Ur,hr,Nr=function(r){return br[0]=r,sr[wr]};!0===er?(Ur=1,hr=0):(Ur=0,hr=1);var mr=g,dr={HIGH:Ur,LOW:hr},Ir=new V(1),Fr=new mr(Ir.buffer),Sr=dr.HIGH,Hr=dr.LOW;var Or,gr,Er=function(r,n){return Fr[Sr]=r,Fr[Hr]=n,Ir[0]},jr=Er,Tr=Math.floor;!0===er?(Or=1,gr=0):(Or=0,gr=1);var Gr=g,Lr={HIGH:Or,LOW:gr},Wr=new V(1),Mr=new Gr(Wr.buffer),Pr=Lr.HIGH,Vr=Lr.LOW;var Yr=function(r,n){return Wr[0]=n,r[0]=Mr[Pr],r[1]=Mr[Vr],r};var _r=function(r,n){return 1===arguments.length?Yr([0,0],r):Yr(r,n)},kr=_r,xr=ir,qr=jr,zr=[0,0];var Br=function(r,n){var t,e;return kr(zr,r),t=zr[0],t&=2147483647,e=xr(n),qr(t|=e&=2147483648,zr[1])};var Cr=function(r){return Math.abs(r)},Dr=u,Jr=r,Kr=Cr;var Qr=function(r,n){return Jr(n)||Dr(n)?(r[0]=n,r[1]=0,r):0!==n&&Kr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Rr=ir;var Xr=function(r){var n=Rr(r);return(n=(2146435072&n)>>>20)-1023|0},Zr=n,$r=t,rn=r,nn=u,tn=Br,en=function(r,n){return 1===arguments.length?Qr([0,0],r):Qr(r,n)},on=Xr,un=_r,an=jr,fn=[0,0],cn=[0,0];var vn=function(r,n){var t,e;return 0===n||0===r||rn(r)||nn(r)?r:(en(fn,r),n+=fn[1],(n+=on(r=fn[0]))<-1074?tn(0,r):n>1023?r<0?$r:Zr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,un(cn,r),t=cn[0],t&=2148532223,e*an(t|=n+1023<<20,cn[1])))};var yn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var ln=Tr,pn=vn,An=function(r){return yn(0,r)},wn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],bn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],sn=5.960464477539063e-8,Un=An(20),hn=An(20),Nn=An(20),mn=An(20);function dn(r,n,t,e,o,u,a,f,i){var c,v,y,l,p,A,w,b,s;for(l=u,s=e[t],b=t,p=0;b>0;p++)v=sn*s|0,mn[p]=s-16777216*v|0,s=e[b-1]+v,b-=1;if(s=pn(s,o),s-=8*ln(.125*s),s-=w=0|s,y=0,o>0?(w+=p=mn[t-1]>>24-o,mn[t-1]-=p<<24-o,y=mn[t-1]>>23-o):0===o?y=mn[t-1]>>23:s>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<t;p++)b=mn[p],0===c?0!==b&&(c=1,mn[p]=16777216-b):mn[p]=16777215-b;if(o>0)switch(o){case 1:mn[t-1]&=8388607;break;case 2:mn[t-1]&=4194303}2===y&&(s=1-s,0!==c&&(s-=pn(1,o)))}if(0===s){for(b=0,p=t-1;p>=u;p--)b|=mn[p];if(0===b){for(A=1;0===mn[u-A];A++);for(p=t+1;p<=t+A;p++){for(i[f+p]=wn[a+p],v=0,b=0;b<=f;b++)v+=r[b]*i[f+(p-b)];e[p]=v}return dn(r,n,t+=A,e,o,u,a,f,i)}}if(0===s)for(t-=1,o-=24;0===mn[t];)t-=1,o-=24;else(s=pn(s,-o))>=16777216?(v=sn*s|0,mn[t]=s-16777216*v|0,o+=24,mn[t+=1]=v):mn[t]=0|s;for(v=pn(1,o),p=t;p>=0;p--)e[p]=v*mn[p],v*=sn;for(p=t;p>=0;p--){for(v=0,A=0;A<=l&&A<=t-p;A++)v+=bn[A]*e[p+A];Nn[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Nn[p];for(n[0]=0===y?v:-v,v=Nn[0]-v,p=1;p<=t;p++)v+=Nn[p];return n[1]=0===y?v:-v,7&w}var In=function(r,n,t,e){var o,u,a,f,i,c,v;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(a=e-1),v=a+4,i=0;i<=v;i++)Un[i]=c<0?0:wn[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=a;c++)o+=r[c]*Un[a+(i-c)];hn[i]=o}return 4,dn(r,n,4,hn,f,4,u,a,Un)},Fn=Math.round,Sn=ir;var Hn=ir,On=Nr,gn=jr,En=In,jn=function(r,n,t){var e,o,u,a,f;return u=r-1.5707963267341256*(e=Fn(.6366197723675814*r)),a=6077100506506192e-26*e,f=n>>20|0,t[0]=u-a,f-(Sn(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=u)-(u=o-(a=6077100506303966e-26*e))-a),t[0]=u-a,f-(Sn(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=u)-(u=o-(a=20222662487111665e-37*e))-a),t[0]=u-a)),t[1]=u-t[0]-a,e},Tn=1.5707963267341256,Gn=6077100506506192e-26,Ln=2*Gn,Wn=4*Gn,Mn=[0,0,0],Pn=[0,0];var Vn=function(r,n){var t,e,o,u,a,f,i;if((o=2147483647&Hn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?jn(r,o,n):o<=1073928572?r>0?(i=r-Tn,n[0]=i-Gn,n[1]=i-n[0]-Gn,1):(i=r+Tn,n[0]=i+Gn,n[1]=i-n[0]+Gn,-1):r>0?(i=r-2*Tn,n[0]=i-Ln,n[1]=i-n[0]-Ln,2):(i=r+2*Tn,n[0]=i+Ln,n[1]=i-n[0]+Ln,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?jn(r,o,n):r>0?(i=r-3*Tn,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*Tn,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?jn(r,o,n):r>0?(i=r-4*Tn,n[0]=i-Wn,n[1]=i-n[0]-Wn,4):(i=r+4*Tn,n[0]=i+Wn,n[1]=i-n[0]+Wn,-4);if(o<1094263291)return jn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=On(r),i=gn(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Mn[a]=0|i,i=16777216*(i-Mn[a]);for(Mn[2]=i,u=3;0===Mn[u-1];)u-=1;return f=En(Mn,Pn,e,u),r<0?(n[0]=-Pn[0],n[1]=-Pn[1],-f):(n[0]=Pn[0],n[1]=Pn[1],f)},Yn=ir,_n=yr,kn=pr,xn=Vn,qn=[0,0];var zn=ir,Bn=yr,Cn=pr,Dn=Vn,Jn=[0,0];var Kn=r,Qn=u,Rn=function(r){var n;if(n=Yn(r),(n&=2147483647)<=1072243195)return n<1044381696?1:_n(r,0);if(n>=2146435072)return NaN;switch(3&xn(r,qn)){case 0:return _n(qn[0],qn[1]);case 1:return-kn(qn[0],qn[1]);case 2:return-_n(qn[0],qn[1]);default:return kn(qn[0],qn[1])}},Xn=function(r){var n;if(n=zn(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Cn(r,0);if(n>=2146435072)return NaN;switch(3&Dn(r,Jn)){case 0:return Cn(Jn[0],Jn[1]);case 1:return Bn(Jn[0],Jn[1]);case 2:return-Cn(Jn[0],Jn[1]);default:return-Bn(Jn[0],Jn[1])}},Zn=Cr,$n=Br,rt=3.141592653589793;var nt=function(r){var n,t;return Kn(r)||Qn(r)?NaN:0===(n=Zn(t=r%2))||1===n?$n(0,t):n<.25?Xn(rt*t):n<.75?$n(Rn(rt*(n=.5-n)),t):n<1.25?(t=$n(1,t)-t,Xn(rt*t)):n<1.75?-$n(Rn(rt*(n-=1.5)),t):(t-=$n(2,t),Xn(rt*t))};export{nt as default};
//# sourceMappingURL=mod.js.map

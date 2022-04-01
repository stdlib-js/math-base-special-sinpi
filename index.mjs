// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cos@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-copysign@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@esm/index.mjs";var r=s,a=t,j=e,p=i,h=m,l=n,o=d;var c=function(s){var t,e;return r(s)||a(s)?NaN:0===(t=h(e=s%2))||1===t?l(0,e):t<.25?p(o*e):t<.75?l(j(o*(t=.5-t)),e):t<1.25?(e=l(1,e)-e,p(o*e)):t<1.75?-l(j(o*(t-=1.5)),e):(e-=l(2,e),p(o*e))};export{c as default};
//# sourceMappingURL=index.mjs.map
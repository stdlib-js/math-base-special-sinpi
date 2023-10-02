// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cos@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-copysign@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.1.0-esm/index.mjs";function r(r){var a,j;return s(r)||t(r)?NaN:0===(a=m(j=r%2))||1===a?n(0,j):a<.25?i(d*j):a<.75?n(e(d*(a=.5-a)),j):a<1.25?(j=n(1,j)-j,i(d*j)):a<1.75?-n(e(d*(a-=1.5)),j):(j-=n(2,j),i(d*j))}export{r as default};
//# sourceMappingURL=index.mjs.map

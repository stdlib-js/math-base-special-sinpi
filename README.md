<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# sinpi

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [sine][@stdlib/math/base/special/sin] of a number times [π][@stdlib/constants/float64/pi].



<section class="usage">

## Usage

```javascript
import sinpi from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@esm/index.mjs';
```

#### sinpi( x )

Computes `sin(πx)` more accurately than `sin(pi*x)`, especially for large `x`.

```javascript
var y = sinpi( 0.0 );
// returns 0.0

y = sinpi( 0.5 );
// returns 1.0

y = sinpi( 0.9 );
// returns ~0.309

y = sinpi( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import sinpi from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@esm/index.mjs';

var x = linspace( -100.0, 100.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( sinpi( x[ i ] ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/sin`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-sinpi.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-sinpi

[test-image]: https://github.com/stdlib-js/math-base-special-sinpi/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-sinpi/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-sinpi/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-sinpi?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-sinpi.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-sinpi/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-sinpi/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-sinpi/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-sinpi/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-sinpi/main/LICENSE

[@stdlib/constants/float64/pi]: https://github.com/stdlib-js/constants-float64-pi/tree/esm

<!-- <related-links> -->

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math-base-special-sin/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
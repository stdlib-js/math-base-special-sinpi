/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var isNegativeZero = require( '@stdlib/assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/assert-is-positive-zero' );
var isSameValue = require( '@stdlib/assert-is-same-value' );
var ulpdiff = require( '@stdlib/number-float64-base-ulp-difference' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var sinpi = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( sinpi instanceof Error )
};


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );
var decimals = require( './fixtures/julia/decimals.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sinpi, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided either positive or negative infinity', opts, function test( t ) {
	var v = sinpi( PINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	v = sinpi( NINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var y = sinpi( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var v = sinpi( -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var v = sinpi( 0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an integer, the function returns `+-0`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = integers.x;
	expected = integers.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = sinpi( x[i] );
		t.strictEqual( isSameValue( y, expected[ i ] ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function is odd', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = decimals.x;
	for ( i = 0; i < x.length; i++ ) {
		y = sinpi( -x[i] );
		expected = -sinpi( x[i] );
		t.strictEqual( y, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes `sin(πx)`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = decimals.x;
	expected = decimals.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = sinpi( x[i] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 1, true, 'returns expected value within 1 ulp' );
	}
	t.end();
});

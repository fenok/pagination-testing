QUnit.test( 'getNumbersArray()', function( assert )
{
	assert.deepEqual( [], getNumbersArray( 0, 0, 0 ), "Special case if zeros" );
	assert.deepEqual( [ 0 ], getNumbersArray( 1, 0, 0 ), "Incorrect current" );
	assert.deepEqual( [ 0 ], getNumbersArray( 0, 1, 0 ), "Incorrect showing" );
	assert.deepEqual( [ 0 ], getNumbersArray( 0, 0, 1 ), "Incorrect total" );
	assert.deepEqual( [ 1 ], getNumbersArray( 1, 1, 1 ), "Single page" );
	assert.deepEqual( [ 1, 2 ], getNumbersArray( 1, 1, 2 ), "Two pages -- 1" );
	assert.deepEqual( [ 1, 2 ], getNumbersArray( 2, 1, 2 ), "Two pages -- 2" );
	assert.deepEqual( [ 1, 2 ], getNumbersArray( 2, 10, 2 ), "Special case of huge showing" );
	assert.deepEqual( [ 1, 3, 4, 5, 6, 7, 10 ], getNumbersArray( 5, 5, 10 ), "Normal usage -- odd" );
	assert.deepEqual( [ 1, 2, 3, 4, 5, 6, 7, 10 ], getNumbersArray( 5, 6, 10 ), "Normal usage -- even" );
	assert.deepEqual( [ 1, 2, 3, 4, 10 ], getNumbersArray( 1, 3, 10 ), "Lover bound -- 1" );
	assert.deepEqual( [ 1, 2, 3, 4, 5, 6, 10 ], getNumbersArray( 2, 5, 10 ), "Lover bound -- 2" );
	assert.deepEqual( [ 1, 7, 8, 9, 10 ], getNumbersArray( 10, 3, 10 ), "Higher bound -- max" );
	assert.deepEqual( [ 1, 7, 8, 9, 10 ], getNumbersArray( 9, 3, 10 ), "Higher bound -- max-1" );
	assert.deepEqual( [ 1, 2, 3 ], getNumbersArray( 2, 1, 3 ), "Three pages" );
	assert.deepEqual( [ 0 ], getNumbersArray( -12, 1, 3 ), "Negative simple test" );
} );
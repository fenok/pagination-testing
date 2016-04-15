var qunitFixture = document.getElementById('qunit-fixture');
var scriptsArray = document.getElementsByClassName("scripts");
var jshintOutput = document.getElementById("jshint-output" );

var jshintHeader = document.createElement('div');
jshintHeader.innerText="JSHint results";
jshintOutput.appendChild(jshintHeader);

for (var ind = 0; ind < scriptsArray.length; ++ind)
{
	var err;
	var tableRow;
	var scriptText = scriptsArray[ ind ].import.body.innerText;
	var scriptInfoDiv = document.createElement('div');
	var tableHeader = document.createElement('div');
	var tableContent = document.createElement('div');
	tableHeader.innerHTML = scriptsArray[ind ].href;
	scriptInfoDiv.appendChild(tableHeader);
	scriptInfoDiv.appendChild(tableContent);

	tableHeader.addEventListener('click', function()
	{
		if (this.className)
		{
			this.className="";
		}
		else
		{
			this.className="active";
		}
	});

	JSHINT(scriptText, {}, {});

	if (JSHINT.errors.length)
	{
		for ( var errind = 0; errind < JSHINT.errors.length; ++errind )
		{
			err = JSHINT.errors[ errind ];
			if (err !== null)
			{
				tableRow = document.createElement('div');
				tableRow.innerHTML = err.line + ":" + err.character + " " + err.reason/* + "(" + err.evidence + ")"*/;
				tableContent.appendChild(tableRow);
			}
		}
	}
	else
	{
		tableRow = document.createElement('div');
		tableRow.innerHTML = "No errors";
		tableContent.appendChild(tableRow);
	}
	jshintOutput.appendChild(scriptInfoDiv);
}

QUnit.test( 'getNumbersArray()', function( assert )
{
	assert.deepEqual( [], getNumbersArray( 0, 0, 0 ), "Special case of zeros" );
	assert.deepEqual( [ 0 ], getNumbersArray( 1, 0, 0 ), "Incorrect current" );
	assert.deepEqual( [ 0 ], getNumbersArray( 0, 1, 0 ), "Incorrect showing" );
	assert.deepEqual( [ 0 ], getNumbersArray( 0, 0, 1 ), "Incorrect total" );
	assert.deepEqual( [ 1 ], getNumbersArray( 1, 1, 1 ), "Single page" );
	assert.deepEqual( [ 1, 2 ], getNumbersArray( 1, 1, 2 ), "Two pages -- 1" );
	assert.deepEqual( [ 1, 2 ], getNumbersArray( 2, 1, 2 ), "Two pages -- 2" );
	assert.deepEqual( [ 1, 2 ], getNumbersArray( 2, 10, 2 ), "Special case of huge showing" );
	assert.deepEqual( [ 1, 3, 4, 5, 6, 7, 10 ], getNumbersArray( 5, 5, 10 ), "Normal usage -- odd" );
	assert.deepEqual( [ 1, 2, 3, 4, 5, 6, 7, 10 ], getNumbersArray( 5, 6, 10 ), "Normal usage -- even" );
	assert.deepEqual( [ 1, 2, 3, 4, 10 ], getNumbersArray( 1, 3, 10 ), "Lower bound -- 1" );
	assert.deepEqual( [ 1, 2, 3, 4, 5, 6, 10 ], getNumbersArray( 2, 5, 10 ), "Lower bound -- 2" );
	assert.deepEqual( [ 1, 7, 8, 9, 10 ], getNumbersArray( 10, 3, 10 ), "Higher bound -- max" );
	assert.deepEqual( [ 1, 7, 8, 9, 10 ], getNumbersArray( 9, 3, 10 ), "Higher bound -- max-1" );
	assert.deepEqual( [ 1, 2, 3 ], getNumbersArray( 2, 1, 3 ), "Three pages" );
	assert.deepEqual( [ 0 ], getNumbersArray( -12, 1, 3 ), "Negative simple test" );
} );

QUnit.test( 'formPager()', function( assert )
{
	var pagerDiv = document.createElement('div');
	pagerDiv.id = "pager";
	qunitFixture.innerHTML = "";
	qunitFixture.appendChild(pagerDiv);
	formPager(1,7,20);
	assert.equal(pagerDiv.childElementCount, 10, "Simple count test -- Lower bound");
	formPager(16,7,20);
	assert.equal(pagerDiv.childElementCount, 10, "Simple count test -- Higher bound");
	formPager(11,7,20);
	assert.equal(pagerDiv.childElementCount, 11, "Simple count test -- Middle");
	formPager(21,7,20);
	assert.equal(pagerDiv.childElementCount, 0, "Simple count test -- Error");
	qunitFixture.innerHTML = "";
});
var total   = 20;
var showing = 7;

function formPager( current, showing, total )
{
	var pagerDiv       = document.getElementById( "pager" );
	pagerDiv.innerHTML = '';
	var numbers        = getNumbersArray( current, showing, total );
	var ref;
	for ( var index = 0; index < numbers.length; ++index )
	{
		ref           = document.createElement( 'a' );
		ref.href      = "#" + numbers[ index ];
		ref.innerText = numbers[ index ];
		if ( numbers[ index ] === current )
		{
			ref.className = 'selected';
		}
		pagerDiv.appendChild( ref );
		if ( (index === 0 && numbers[ index + 1 ] !== 2) || (index === numbers.length - 2 && numbers[ index ] !== total - 1) )
		{
			ref           = document.createElement( 'span' );
			ref.innerText = '...';
			pagerDiv.appendChild( ref );
		}
	}
}

function formPagerFromHash()
{
	var hashValue = parseInt( window.location.hash.substr( 1 ), 10 );
	if ( !hashValue || 1 > hashValue || hashValue > total )
	{
		window.location.hash = '#1';
		hashValue            = 1;
	}
	formPager( hashValue, showing, total );
}

window.addEventListener( 'hashchange', function()
{
	formPagerFromHash();
} );

window.addEventListener( 'load', function()
{
	formPagerFromHash();
} );
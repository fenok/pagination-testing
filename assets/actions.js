var total   = 20;
var showing = 7;

window.addEventListener( 'hashchange', function()
{
	formPagerFromHash( showing, total );
} );

window.addEventListener( 'load', function()
{
	formPagerFromHash( showing, total );
} );

function formPagerFromHash( showing, total )
{
	var hashValue = parseInt( window.location.hash.substr( 1 ), 10 );
	if ( !hashValue || 1 > hashValue || hashValue > total )
	{
		window.location.hash = '#1';
		hashValue            = 1;
	}
	formPager( hashValue, showing, total );
}
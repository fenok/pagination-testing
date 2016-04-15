function formPager( current, showing, total )
{
	var pagerDiv       = document.getElementById( "pager" );
	pagerDiv.innerHTML = '';
	var numbers        = getNumbersArray( current, showing, total );
	var ref;
	if ( numbers[ 0 ] !== 0 )
	{
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
}
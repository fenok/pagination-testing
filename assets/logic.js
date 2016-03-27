function getNumbersArray( current, showing, total )
{
	if ( current === 0 && showing === 0 && total === 0 )
	{
		return [];
	}
	if ( current < 1 || current > total || showing < 1 )
	{
		return [ 0 ];
	}
	if ( total === 1 )
	{
		return [ 1 ];
	}
	var result = [];
	var num    = current - (showing / 2 >> 0);
	while ( num < 2 )
	{
		++num;
	}
	var numOrigin = num;
	while ( showing > 0 && num < total )
	{
		result.push( num++ );
		--showing;
	}
	while ( showing > 0 && numOrigin > 2 )
	{
		result.unshift( --numOrigin );
		--showing;
	}
	result.unshift( 1 );
	result.push( total );

	return result;
}
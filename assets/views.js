function formPager(current, showing, total)
{
	var pagerDiv = document.getElementById("pager");
	pagerDiv.innerHTML = '';
	var numbers = getNumbersArray(current, showing, total);
	var ref;
	for(var index = 0; index < numbers.length; ++index)
	{
		ref = document.createElement('a');
		ref.href = "#" + numbers[index];
		ref.innerText = numbers[index];
		pagerDiv.appendChild(ref);
		if ((index === 0 && numbers[index+1] !== 2) || (index === numbers.length - 2 && numbers[index] !== total - 1))
		{
			ref = document.createElement('span');
			ref.innerText = '...';
			pagerDiv.appendChild(ref);
		}
	}
}

window.addEventListener('hashchange', function()
{
	formPager(window.location.hash.substr(1),7,20);
});

window.addEventListener('load', function()
{
	window.location.hash = '#1';
	formPager(window.location.hash.substr(1),7,20);
});
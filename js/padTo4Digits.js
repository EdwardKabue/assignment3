var input=prompt("give me a number to pad");
var output=padTo4Digits(input);
console.log(output);

function padTo4Digits(toPad)
{
	if(toPad.length==1)
	{
		toPad="000"+toPad
		return toPad;
	}

	else if(toPad.length==2)
	{
		toPad="00"+toPad;
		return toPad;
	}

	else if(toPad.length==3)
	{
		toPad="0"+toPad;
		return toPad;
	}

	else if(toPad.length>=4)
	{
		return toPad;
	}

}
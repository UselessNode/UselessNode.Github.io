function first() 
{
	let currentDate = new Date();
	let cDay = currentDate.getDate();
	let cMonth = currentDate.getMonth() + 1;
	let cYear = currentDate.getFullYear();
	date = cDay + '/' +  cMonth + '/' + cYear + '';
	alert(date);
}
function second()
{
	num = Number(document.getElementById("num").value);
	answer = num % 2 === 0 ? "Чётное" : "Не чётное";
	alert(num + ' -- ' + answer);
}
var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'

function formatDate(date) {
  	var year = date.getFullYear() % 100;
	var month = date.getMonth() + 1;
	var day = date.getDate();
	
	if (year < 10) year = '0' + year;
	if (month < 10) month = '0' + month;
	if (day < 10) day = '0' + day;
	
	return (day + '.' + month + '.' + year);
}
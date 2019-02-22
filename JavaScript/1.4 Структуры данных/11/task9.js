alert( formatDate(new Date(new Date - 1)) ); // "только что"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) );  // вчерашняя дата в формате "дд.мм.гг чч:мм"

function formatDate(date) {
  var now = new Date();
  
  dif = now - date;
  if (dif < 1000) {
	  return 'только что';
  } else if (dif < 60 * 1000) {
	  return dif / 1000 + ' сек. назад';
  } else if (dif < 60 * 60 * 1000) {
	  return dif / 60 / 1000 + ' мин. назад';
  } else {
      return useFormatDate(date);
  }
  
}

function useFormatDate(date) {
  	var year = date.getFullYear() % 100;
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	
	if (year < 10) year = '0' + year;
	if (month < 10) month = '0' + month;
	if (day < 10) day = '0' + day;
	
	return (day + '.' + month + '.' + year + ' ' + hour + ':' + minutes);
}
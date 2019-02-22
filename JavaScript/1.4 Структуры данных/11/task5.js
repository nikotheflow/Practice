alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28

function getLastDayOfMonth(year, month) {
  var date = new Date(year, month);
  
  while (date.getMonth() == month) {
	var res = date.getDate();
    date.setDate(date.getDate() + 1);
  }
  
  return res;
}
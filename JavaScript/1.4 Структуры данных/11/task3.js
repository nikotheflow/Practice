var date = new Date(2012, 0, 3);  // 3 янв 2012
alert(getLocalDay(date));         // вторник, выведет 2

function getLocalDay(date) {
  if (date.getDay() == 0) return 7;
  return date.getDay();
}
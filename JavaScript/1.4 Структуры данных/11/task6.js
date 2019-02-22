getSecondsToday();

function getSecondsToday() {
  var d = new Date();
  
  alert(d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds());
}
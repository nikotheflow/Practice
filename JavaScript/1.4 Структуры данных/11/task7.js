alert(getSecondsToTomorrow());

function getSecondsToTomorrow() {
  var today = new Date();
  var nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  
  return Math.floor((nextDay - today) / 1000);
}
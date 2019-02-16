function isEmpty(obj) {
  var count = 0;
  
  for (var key in obj) {
    count += 1;
  }
  
  if (count != 0) return false;
  
  return true;
}

var schedule = {};
alert(isEmpty(schedule)); //true
schedule['8:30'] = 'подъем';
alert(isEmpty(schedule)); //false
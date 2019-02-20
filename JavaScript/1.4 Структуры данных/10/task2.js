function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

alert(sum()); // 0
alert(sum(1)); // 1
alert(sum(1, 2)); // 3
alert(sum(1, 2, 3)); // 6
alert(sum(1, 2, 3, 4)); // 10
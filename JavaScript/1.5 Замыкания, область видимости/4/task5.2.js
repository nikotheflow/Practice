function filter(arr, func) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (func(val)) {
      result.push(val);
    }
  }

  return result;
}

function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }

var arr = [1, 2, 3, 4, 5, 6, 7];
alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
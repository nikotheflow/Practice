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

function inArray(arr) {
    return function(x) {
      return arr.indexOf(x) != -1;
    };
  }

var arr = [1, 2, 3, 4, 5, 6, 7];
alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
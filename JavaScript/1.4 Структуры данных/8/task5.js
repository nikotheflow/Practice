var arr = [5, 2, 1, -10, 8, 12];

arr.sort(compareNumberic);

alert( arr ); // 8, 5, 2, 1, -10


function compareNumberic(a, b) {
  return a - b;
}
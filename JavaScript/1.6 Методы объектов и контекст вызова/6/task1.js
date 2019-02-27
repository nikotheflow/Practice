function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)


function sumArgs() {
  // запустим reduce из массива напрямую
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
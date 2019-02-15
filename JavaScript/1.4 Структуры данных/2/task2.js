function fib(n) {
  var a = 1,
    b = 0,
    x;
  for (i = 0; i < n; i++) {
    x = a + b;
    a = b
    b = x;
  }
  return b;
}


function fibBinet(n) {
  var phi = ((1 + Math.sqrt(5)) / 2);
  var res = Math.pow(phi, n) / Math.sqrt(5);
  
  return res;
}

alert(fib(77));
alert(fibBinet(77));
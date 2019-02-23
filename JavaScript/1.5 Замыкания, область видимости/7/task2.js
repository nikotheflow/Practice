var a = 1;
var b;

var obj = {
  b: 2
}

with(obj) {
  alert( a + b );
}
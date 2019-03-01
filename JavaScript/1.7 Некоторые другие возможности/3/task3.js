var timer = setInterval(function() {
  i++;
}, 10);

setTimeout(function() {
  clearInterval(timer);
  alert( i ); // (*)
}, 50);

var i;

function f() {
  for (i = 0; i < 1e8; i++) f[i % 2] = i;
}

f();
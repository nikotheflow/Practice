function f() {
  alert(1)
}

var obj = {
  f: function() {
    alert(2)
  }
};

with(obj) {
  f();
}
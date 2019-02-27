function f() {
  alert( this );
}

var user = {
  g: f.bind("Hello")
}

user.g(); // hello
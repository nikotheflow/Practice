var value = 0;

function f() {
  if (1) {
    value = true;
  } else {
    var value = false;
  }

  alert( value );
}

f();
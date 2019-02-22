function test() {

  alert( window ); // undefined

  var window = 5;

  alert( window ); // 5
}

test();
var currentCount = 1;

function makeCounter() {
  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();
var counter2 = makeCounter();

alert( counter() ); // 1
alert( counter() ); // 2

alert( counter2() ); // 3
alert( counter2() ); // 4
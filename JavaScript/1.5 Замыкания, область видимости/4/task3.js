function makeBuffer() {
  var temp = '';  
  
  function buffer(str) {
	if (arguments.length == 0) return temp;
	temp += str;
  };
  
  buffer.clear = function() {
    temp = '';
  };
  
  return buffer;
  
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""
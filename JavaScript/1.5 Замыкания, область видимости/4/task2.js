function makeBuffer() {
  var temp = '';
  
  
  return function(str) {
	if (arguments.length == 0) return temp;
	temp += str;
  };
}

var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert( buffer() );

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);
alert( buffer2() );
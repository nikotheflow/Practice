"use strict";

var menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

multiplyNumeric(menu);

alert(menu.width);
alert(menu.height);
alert(menu.title);


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) {
	  obj[key] *=  2;
	}
  }
}


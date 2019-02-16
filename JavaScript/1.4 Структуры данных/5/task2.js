"use strict";

function sumSal(obj) {
  var sum = 0;
  
  for (var name in obj) {
    sum += obj[name];
  }
  
  return sum;
}

var salaries = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250
};

var salariesEmpty = {};

alert(sumSal(salaries));
alert(sumSal(salariesEmpty));
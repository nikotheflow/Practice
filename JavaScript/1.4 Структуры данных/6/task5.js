var arr = [];
var sum = 0;

while (true) {
  var value = prompt('Введите число', '');
  if (value === '' || value === null || isNaN(value)) break;
  arr.push(+value);
  sum += +value;
}

alert(sum);
  


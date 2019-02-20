var arr = [1, 2, 3, 4, 5];

arr.sort(randomNumeric);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]

function randomNumeric(a, b) {
  return Math.random() - 0.5;
}
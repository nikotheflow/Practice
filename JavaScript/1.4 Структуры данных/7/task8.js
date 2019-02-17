var n = 100, p = 2, sum = 0;
var numbers = [], dataArray = [], dataArrayP = [];

for (i = 2; i <= n; i++) {
  numbers.push(i);
}

while (p < Math.sqrt(n)) {
	dataArrayP.push(p);
	for (i = 0; i < numbers.length; i++) {
	  if (numbers[i] % p != 0) {
		dataArray.push(numbers[i]);
	  }	
	}
		
	p = dataArray[0];
	clearArray(numbers);
	cloneArray(dataArray, numbers);
	clearArray(dataArray);
}

dataArray.push(dataArrayP);
dataArray.push(numbers);

alert(dataArray);



	
function cloneArray(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
}

function clearArray(arr) {
  arr.length = 0;
}
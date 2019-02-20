var arr = [1, 2, 3, 4, 5]

alert(getSums(arr));

function getSums(arr) {
  var resArr = [];
  if (!arr.length) return resArr;
  
  var totalSum = arr.reduce(function(sum, item) {
    resArr.push(sum);
	return sum + item;
  });
  resArr.push(totalSum);
  
  return resArr;	
}
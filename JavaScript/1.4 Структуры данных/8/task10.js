var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор", "озв"];

aclean(arr); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
alert(arr);

function aclean(arr) {
  var baseLetters = [];
  var compareLetters = [];
    
  for (i = 0; i < arr.length; i++) {
    var baseWord = arr[i];
	baseLetters = baseWord.split('');
	
	for (j = arr.length - 1; j > i; j--) {
	  var compareWord = arr[j];
	  compareLetters = compareWord.split('');
	  
	  if (baseLetters.sort()
		             .join('')
	                 .toLowerCase() 
		  == compareLetters.sort()
		                   .join('')
						   .toLowerCase()) {
		  arr.splice(j, 1);
	  }
	}
  }
  return(arr);
}
function pow(x, n) {	
	
	var res = x;
	
	for (i = 1; i < n; i++) {
		res = res * x;		
	}
	
	return(res);
}

var x = prompt('Введите x', '');
var n = prompt('Введите n', '');
while (n < 1) {
	n = prompt('Значение n должно быть натуральным', '')
}

alert(pow(x, n))

function fib(n) {
	
	var i, cur = next = 1;
	
	for (i = 2; i < n; i++) {
		res = cur + next;
		cur = next;
		next = res;
	}
	
	return res;
}


alert( fib(3) );
alert( fib(7) );
alert( fib(77));
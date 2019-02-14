function sumToCycle(n) {
	
	var res = 0;
	while (n != 0) {		
		res += n;
		n--;
	}
	
	return res;
}


function sumToRec(n) {

	if (n != 1) {
		return n + sumToRec(n - 1);
	} else {
		return 1;
	}
	
}


function sumToProg(n) {
	
	return n * (1 + n) / 2;
	
}

alert(sumToProg(5));
function randomInteger(min, max) {
	var res = min - 0.5 + Math.random() * (max - min + 1);
	res = Math.round(res);
	
  return res;
}

alert(randomInteger(1, 3));
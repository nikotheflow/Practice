for (var i = 2; i <= 10; i += 2) alert(i);



for (var i = 2; i <= 10; i++) {
	if (i % 2 == 1) continue;
	alert(i);
}
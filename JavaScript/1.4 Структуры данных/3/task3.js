alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) == "Вот, что мне хоте...")
alert(truncate("Всем привет!", 20) == "Всем привет!")

function truncate(str, maxlenght) {
	if (str.length <= maxlenght) return str;
	
	return str = str.slice(0, 17) + '...';
}
var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert(unique(strings)); // кришна, харе, 8-()

/*
function unique(arr) {
  var res = arr.slice()
  
  for (i = 0; i < res.length; i++) {
	
	for (j = res.length; j > i; j--) {
      if (res[i] == res[j]) res.splice(j, 1);
	}
  }
  return res;
}
*/

function unique(arr) {
  var res = {};
  
  for (i = 0; i < arr.length; i++) {
    res[arr[i]] = true;
  }
  return Object.keys(res);
}
var obj = {
  className: 'open open menu'
};

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

alert(obj.className);

function removeClass(obj, cls) {
  var classes = obj.className.split(' ');  
  var numOfDel = '';
  
  for (var i = classes.length; i >= 0; i--) {
    if (classes[i] == cls) {
	  numOfDel += i;	  
	}
  }
  
  for (var i = 0; i < numOfDel.length; i++) {
    classes.splice(numOfDel[i], 1);
  }
  
  obj.className = classes.join(' ');
}
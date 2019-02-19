var obj = {
  className: 'open menu'
}


addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует) 
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"


function addClass(obj, cls) {
  var arr = obj.className.split(' ');
  
  if (!(~arr.indexOf(cls))) {
	arr.push(cls);
  }
  
  obj.className = arr.join(' ');
  
}
var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printReverseList2(list);

function printList1(list) {
  var tmp = list;
  
  while (tmp) {
    alert(tmp.value);
	tmp = tmp.next;
  }
}

function printList2(list) {
  alert(list.value);
  
  if (list.next) {
    printList2(list.next);
  }
}

function printReverseList1(list) {
  if (list.next) {
    printReverseList1(list.next);
  }
  
  alert(list.value);
}

function printReverseList2(list) {
  var arr = [];
  var tmp = list;
  
  while (tmp) {
    arr.push(tmp.value);
	tmp = tmp.next;
  }
  
  for (var i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}
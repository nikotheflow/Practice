function ucFirst(str) {
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

alert(ucFirst("вася") == "Вася");
alert(ucFirst("") == "");

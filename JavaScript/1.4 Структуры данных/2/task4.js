function randomNumber(min, max) {
  return (min + Math.random() * (max - min));
}

alert(randomNumber(5, 20));
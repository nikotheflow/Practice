var fruits = ["Яблоко", "Груша", "Слива"];

//task1
var lastItem = goods[goods.length - 1];

//task2
goods[goods.length] = 'Компьютер';

//task3
var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");
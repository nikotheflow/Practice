var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);

// теперь people: [vovochka, masha, vasya]
alert(people[0].age); // 6

for (var i = 0; i < people.length; i++) {
	alert(people[i].name);
}

function compareAge(a, b) {
  return a.age - b.age;
}
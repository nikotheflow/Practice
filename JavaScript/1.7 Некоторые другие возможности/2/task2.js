var leader = {
  id: 12,
  name: "Василий Иванович"
};

var soldier = {
  id: 51,
  name: "Петька"
};

// поменяли прямую ссылку на ID
leader.soldierId = 51;
soldier.leaderId = 12;

var team = {
  12: leader,
  51: soldier
};
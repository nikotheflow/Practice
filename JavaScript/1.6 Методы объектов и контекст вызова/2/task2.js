var foo = {
  toString: function() {
    return 'foo';
  },
  valueOf: function() {
    return 2;
  }
};

alert( foo ); // 'foo'
alert( foo + 1 ); // 3
alert( foo + "3" ); // '23'
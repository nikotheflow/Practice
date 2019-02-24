var name = "";

var user = {
  name: "Василий",

  export: function() {
    return this;
  }

};

alert( user.export().name ); // Василий
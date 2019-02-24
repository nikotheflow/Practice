var name = "";

var user = {
  name: "Василий",

  export: function() {
    return {
      value: this
    };
  }

};

alert( user.export().value.name ); // Василий
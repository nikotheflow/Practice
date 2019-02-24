"use strict"

var obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();            // (1) object

(obj.go)();          // (2) object

(method = obj.go)();      // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
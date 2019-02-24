var obj = {
  go: function() {
    alert(this)
  }
}

(obj.go)() // error!

// 'this' is the global window object
console.log(this);

function a() {
  console.log(this);
  this.newVariable = "hello";
}

var b = function() {
  console.log(this);
}
a();
console.log(newVariable);
b();

// method of an object
// 'this' will point to the object
var c = {
  name: 'The c object',
  log: function() {
    this.name = "updated c object";
    console.log(this);

    // methods inside function
    var setName = function(newName) {
      // this now points to the global object and not the c object - considered by some a bug but it's how js is designed.
      // check the window obect to find global name variable
      this.name = newName;
    }
    setName('Updated again! The c object');
    console.log(this);
  }
}

var d = {
  name: 'The c object',
  log: function() {
    //save reference to this object for use in internal functions and expressions.
    var self = this;

    self.name = "updated c object";
    console.log(self);

    // now this will change the object's name
    var setName = function(newName) {
      // self isn't declared in this function so will look in the scope chain (outer environment)
      self.name = newName;
    }
    setName('Updated again! The c object');
    console.log(self);
  }
}

c.log();

d.log();
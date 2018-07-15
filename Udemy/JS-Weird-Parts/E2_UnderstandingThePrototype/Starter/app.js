var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
// bad for performance
john.__proto__ = person;

// gets the getFullName method from the person prototype
console.log(john.getFullName());

// doesn't get default form prototype because of
// ptototype chain
console.log(john.firstname);


var jane = {
  firstname: 'Jane'
}

jane.__proto__ = person;

console.log(jane.getFullName());


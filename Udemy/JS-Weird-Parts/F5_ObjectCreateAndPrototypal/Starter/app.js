// object literal
var person = {
  // object doesn't create an execution context
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    // 'this' refers to the object
    return 'Hi ' + this.firstname;
  }
}

// Using Object.create() (for newer browsers)
// build a new object and set its prototype to person
var john = Object.create(person);
console.log(john);
console.log(john.greet());
// pure prototypal inheritance
// override default properties and methods of the base/default object.
// can easily mutate the prototype along the way
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);
console.log(john.greet());


// polyfill for when Object.crete doesn't exist if useing old browsers
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation' + ' only accepts the first parameter.')
    }
    function F() {}
    F.prototype = o;
    return new F();
  }
}
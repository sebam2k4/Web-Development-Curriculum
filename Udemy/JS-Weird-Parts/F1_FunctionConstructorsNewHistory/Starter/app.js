// function constructor used to create objects
function Person(firstname, lastname) {
  console.log(this); // empty object
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked');
  //console.log(this); // object now filled with properties

}
// 'new' is actually an operators
// new creates an empty object and invokes the function and changes 'this' to point to the new object
var john = new Person();
console.log(john);
console.log("---------");


var jane = new Person();
console.log(jane);
console.log("---------");
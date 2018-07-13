var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    // this points to the person object
    var fullname = this.firstname + ' ' + this.lastname;

    return fullname;
  }
}


var logName = function(lang1, lang2) {
  // this points to the global object - window
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('----------');
}

// pass whatever object you want to bind it to the 'this' variable for the function. (makes copy of logName function)
var logPersonName = logName.bind(person);

logPersonName()
logPersonName('en')

// logName();
// invoke function with specified object for the 'this' variable and arguments
logName.call(person, 'en', 'es');
// same as above, but args in array.
logName.apply(person, ['en', 'pl']);

// can also do this. IIFE with .apply
(function(lang1, lang2) {
  // this points to the global object - window
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('----------');
}).apply(person, ['ch', 'mo'])




// How is the above useful?

// function borrowing //
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
}

//borrowed the getFullName() method from person object
console.log(person.getFullName.apply(person2));



// function currying
function multiply(a, b) {
  return a * b;
}
// the optional argument sets a permanent value for the first argument - in this case, a
// sets default parameters
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(3));
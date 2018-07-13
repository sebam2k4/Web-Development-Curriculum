var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);

var english = {};



// english.greetings = {};
// english.greetings.greet = 'Hello';

// english.greet = 'Hello!';

var english = {
  greetings: {
    basic: 'Hello!'
  }
}

var spanish = {};
spanish.greet = 'Hola!';

console.log(english.greetings.basic);
console.log(spanish.greet);
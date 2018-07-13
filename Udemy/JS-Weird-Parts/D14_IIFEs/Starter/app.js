// function statement
// is put in memory, but doesn't do anything with it
// needs to be invoked
function greet(name) {
  console.log('Hello ' + name);
}

greet('Sebek');

// function expression
// is not put into memory initially, but rather during execution
// once js parser reaches this line it creates the function object on the fly
var greeting = function(name) {
  console.log('Hello ' + name);
};

greeting('John');

// Immediately Invoked Function Expression (IIFE)
var greeting2 = function(name) {
  // console.log('Hello ' + name);
  return 'Hello ' + name;
}('Ania');

console.log(greeting2);




// the following expressions are valid, but just don't do anything
3;
"I'm a string";
{
  name: 'John'
}

// function statement - invalid - this doesn't work. This is really just a statement and doesn't do anything
// function(name) {
//   return 'Hello ' + name; 
// }

// Immediately Invoked Function Expression (IIFE)
// wrap in paranthesis to group
// function created on fly and immediately invoked
(function(name) {
  console.log('Inside IIFE: Hello ' + name);
}('Steve'));

greet();

// function statement
// is hoisted & placed in memory but doesn't result in a value in execution phase.
// defines a function without invoking it.
// value is never returned anywhere until the function is actually invoked.
function greet() {
  console.log('hi');
}

// function expression
// results in a value - we get a function object
// in exection phase, the function statement results in an object being created - hence it's an expression
var anonymousGreet = function() {
  console.log('hi');
}

// invoke function expression
anonymousGreet();

function log(a) {
  console.log(a);
  a();
}

// pass function in as a parameter to another function
log(function() {
  console.log('hi');
});
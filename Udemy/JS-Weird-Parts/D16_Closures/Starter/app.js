// CLOSURES

function greet(whattosay) {

  return function(name) {
    console.log(whattosay + ' ' + name)
  }

}

// invoke a function that returns a function then invoke the function that was returned
greet('Hi')('Sebek');

var sayHi = greet('Hello');
sayHi('Ania');

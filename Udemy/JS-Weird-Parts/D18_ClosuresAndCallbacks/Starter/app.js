function sayHiLater() {
  var greeting = 'Hi!';

  setTimeout(function() {
    console.log(greeting);
  }, 3000);
}

sayHiLater()


function tellMeWhenDone(callback) {

  var a = 1000; // some work
  var b = 2000; // some work

  callback(); // the 'callback, it runs the function I give it!
}

// callback ex 1
tellMeWhenDone(function() {

  console.log('I am done!');
});

// callback ex 2
var sqrtOfNine = function() {

  var a = 9;
  a = Math.sqrt(a)
  alert(a + ", I'm also done!");
}

tellMeWhenDone(sqrtOfNine);
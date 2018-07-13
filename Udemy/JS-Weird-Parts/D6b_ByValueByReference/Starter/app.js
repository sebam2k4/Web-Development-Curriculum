// by value (primitives)
var a = 3;
var b;

b = a;

a = 2;
console.log(a);
console.log(b);

// by reference (all objects - including functions)
var c = { greeting: 'hi'};
var d;

d = c; // setting both to 'point at same memory spot

console.log(c);
console.log(d);

c.greeting = 'hello'; //mutate object

console.log(c);
console.log(d);

// by reference (even as parameters)

function changeGreeting(obj) {
  obj.greeting='Hola'; //mutate object
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals operators sets up new memory space (new address)

c = { greeting: 'howdy'};

console.log(c);
console.log(d);

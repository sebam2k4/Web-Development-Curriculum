// object.property
// object.method()
// in js, almost everything is an object
// strings, booleans, and numbers are primitives, but can use methods on primitives

const s1 = 'Hello';

const s2 = new String('Hello');

console.log("s1: " + typeof(s1), "s2: " + typeof(s2));

// window is the parent object
console.log(window.document.head);

console.log(navigator.appVersion);
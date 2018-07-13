var arr = new Array();

console.log(arr);

var arr2 = [1,2,3];

console.log(arr2);

var arr3 = [
  1,
  false,
  {
    name: 'Sebek',
    address: '1 Main St.'
  },
  function(name) {
    var greeting = 'Hello';
    console.log(greeting + " " + name);
  },
  "Hello"
];

console.log(arr3);

// invoke a function stored inside an array
arr3[3](arr3[2].name);
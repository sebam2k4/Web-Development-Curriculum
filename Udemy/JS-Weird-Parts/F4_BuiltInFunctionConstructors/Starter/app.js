String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}

console.log("John".isLengthGreaterThan(3))



// Dangerous Aside: Arrays and for..in
Array.prototype.myCustomFeature = 'Cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
  // prop actually is the property name: 0, 1, 2 (like index)
  console.log(prop + ': ' + arr[prop]);
}

console.log('-----------');

// for arrays don't use for..in, it's ok for objects
for (let i = 0; i < arr.length; i++) {
  console.log(i + ': ' + arr[i])
  
}
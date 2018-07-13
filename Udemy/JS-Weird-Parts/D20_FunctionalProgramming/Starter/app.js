// Beauty of functional programming

// mapping function - take array and do something to it and output as new array
function mapForEach(arr, fn) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )
  };

  return newArr;
}

function multiplyByThree(num) {
  return num * 3;
}



var arr1 = [1,2,3];
console.log(arr1);

// multiply values of array by 2 and push to new array. Kinda sucks. Better to make or use a map function like above
var arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
  
}

console.log(arr2);

// pass in array and function to the map function
var arrMultiplyByThree = mapForEach(arr2, multiplyByThree);

console.log(arrMultiplyByThree);

var arr3 = mapForEach(arr2, function(item) {
  return item * 5;
})

console.log(arr3);

// change to do different work with different function.
// using first class function to advantage.
var arr4 = mapForEach(arr1, function(item) {
  return item > 0;
})

console.log(arr4);


// how to use more parameters when the map function expects only 1? use .bind()
var checkPastLimit = function(limiter, item) {
  return item > limiter;
}

var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1)); // limiter = 1;

console.log(arr5);


var checkPastLimitSimplified = function(limiter) {
  // the function isn't executed - only a function object is created and returned
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr6 = mapForEach(arr1, checkPastLimitSimplified(2));

console.log(arr6);

// small functions like above should not change/mutate data. Best to return something new.
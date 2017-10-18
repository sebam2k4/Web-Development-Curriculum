//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  
  function isTruthy(value) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== false || null || 0 || "" || undefined || NaN) {
        return value;
      }
    }
  }
  
  console.log(arr.filter(isTruthy));
  return arr.filter(isTruthy);
}

bouncer([7, "ate", "", false, 9]); // >>> should return [7, "ate", 9]
bouncer(["a", "b", "c"]) // >>> should return ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]) // >>> should return []
bouncer([1, null, NaN, 2, undefined]) // >>> should return [1, 2]

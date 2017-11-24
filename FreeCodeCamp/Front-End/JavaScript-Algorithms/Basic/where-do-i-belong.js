```
Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted. The returned value
should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is
greater than 1 (index 0), but less than 2 (index 1).
```

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
        return i;
        } 
    }
    return arr.length;
  
}
  
getIndexToIns([40, 60], 50);

getIndexToIns([10, 20, 30, 40, 50], 35) // ==> 3.
getIndexToIns([10, 20, 30, 40, 50], 30) // ==> 2.
getIndexToIns([40, 60], 50) // ==> 1.
getIndexToIns([3, 10, 5], 3) // ==> 0.
getIndexToIns([5, 3, 20, 3], 5) // ==> 2.
getIndexToIns([2, 20, 10], 19) // ==> 2.
getIndexToIns([2, 5, 10], 15) // ==> 3.
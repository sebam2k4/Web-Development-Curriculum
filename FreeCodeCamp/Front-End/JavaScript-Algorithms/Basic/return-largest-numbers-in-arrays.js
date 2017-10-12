// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
    var largestNumber = [0,0,0,0]; // create an array to hold the largest numbers
    
    //first for loop to iterate through the sub-arrays
    for (i = 0; i < arr.length; i++) {
      
      //second for loop to iterate through the values of each sub-array
      for (j = 0; j < arr[i].length; j++) {
        
        // find the largest number in sub-array and assign it to largestNumber array
        if (arr[i][j] > largestNumber[i]) {
          largestNumber[i] = arr[i][j];
        }
      }
    }
    return largestNumber;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
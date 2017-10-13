// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    wordsArray = [];

    // convert string to lowercase and split by word into an array
    var wordsArray = str.toLowerCase().split(" ");
    
    // iterate over the array 
    for ( var i in wordsArray) {
      wordsArray[i] = wordsArray[i].split("");  // split words into letters creating subarrays containing letters
      wordsArray[i][0] = wordsArray[i][0].toUpperCase();  // convert first letter of each word into uppercase (convert index 0 of every subarray to uppercase)
      wordsArray[i] = wordsArray[i].join("");  // join the letters back into words (join each contents of each subarray together)
    }
    str = wordsArray.join(" "); // join all the words together into a single string.
    console.log(str);
    return str;  // returns the string with with the first letter of each word capitalized
  }
  
  titleCase("I'm a little tea pot");
  
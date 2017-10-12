// Check if a string (first argument, str) ends with the given target string (second argument, target).

// substr() Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

function confirmEnding(str, target) {
    str = str.substr(str.length - target.length);   //substr(start, [length])
    if (str == target) {
      return true;
    } else return false;
  }
  
  confirmEnding("Bastian", "n");
  

/* Below is a simpler method:

function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
}
*/
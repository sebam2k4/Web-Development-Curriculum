/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"],;  // >>> true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"];  // >>> false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"],;  // >>> true because all of the letters in "line" are present in "Alien".

*/

function mutation(arr) {
    var testArr = arr[1].toLowerCase();
    var targetArr = arr[0].toLowerCase();
    for (i=0;i<testArr.length;i++) {
      if (targetArr.indexOf(testArr[i]) === -1)
        return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);  // >>> true

  mutation(["hello", "Hello"]);  // >>> true.
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);  // >>> true.
  mutation(["Mary", "Army"]);  // >>> true.
  mutation(["Mary", "Aarmy"]);  // >>> true.
  mutation(["Alien", "line"]);  // >>> true.
  mutation(["floor", "for"]);  // >>> true.
  mutation(["hello", "neo"]);  // >>> false.
  mutation(["voodoo", "no"]);  // >>> false.
  
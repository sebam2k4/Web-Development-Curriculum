/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
    var words = str.split(" ");
  
    var length = 0;
    var longest;
  
    for(var i=0; i < words.length; i++){
      if(words[i].length > length){
          length = words[i].length;
      }      
    } 
    return length;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");

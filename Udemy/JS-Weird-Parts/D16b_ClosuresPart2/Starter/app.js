function buildFunctions() {

  var arr = [];

  for (var i = 0; i < 3; i++) {
    
    // push a function into array
    arr.push(
      function() {
        console.log(i);
      }
    )
    
  }

  return arr;
}


var fs = buildFunctions();
console.log(fs);

fs[0]();
fs[1]();
fs[2]();





function buildFunctions2() {

  var arr = [];

  for (var j = 0; j < 3; j++) {
    // push a function into array
    arr.push(
      (function(index) {
        return function() {
          console.log(index);
        }
      }(j))
    )
    
  }

  return arr;
}


var fs2 = buildFunctions2();
console.log(fs2);

fs2[0]();
fs2[1]();
fs2[2]();
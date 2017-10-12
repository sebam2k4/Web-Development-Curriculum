// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    var string = "";  // create a variable that will hold the new repeated string

    // return empty string when num is less than 0
    if (num < 0) {
        return "";
    } else {
    
    // repeat the string
    while(num > 0) {
        string += str;
        num--;
    }
    console.log(string);
    return string;
    }
}

repeatStringNumTimes("abc", 3);  // ==> abcabcabc
    
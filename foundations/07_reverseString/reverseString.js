const reverseString = function(string) {
    // reverse the provided string
    let splitString = string.split("");
    let result = [];

    for (i = 0; i < string.length; i++){
        result.push(splitString.pop());
    }
    

    return result.join("");
};

console.log(reverseString('test'));

// Do not edit below this line
module.exports = reverseString;
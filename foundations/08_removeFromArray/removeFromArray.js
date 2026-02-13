const removeFromArray = function(array, ...remove) {
    let result = array.slice();
    
    for (let i = 0; i < remove.length; i++){
        for (let j = 0; j < result.length; j++){
            if(result[j] === remove[i]){
                console.log("found a match");
                result.splice(j, 1);
                j--;
            }
        }
    }

    return result;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 1));

// Do not edit below this line
module.exports = removeFromArray;

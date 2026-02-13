const sumAll = function(a, b) {

    if( a < 0 ||
        b < 0 ||
        !Number.isInteger(a) ||
        !Number.isInteger(b) ||
        typeof a !== "number" ||
        typeof b !== "number"
    ){
        return 'ERROR';
    }
    
    let array = [a, b];
    let sum = 0;

    array.sort((a, b) => a - b);

    for(let i = array[0]; i <= array[1]; i++){
        sum += i;
    }

    return sum;
};

console.log(sumAll(4, 1));

// Do not edit below this line
module.exports = sumAll;

const repeatString = function(inputString, numRepeated) {
    let result = '';
    if (numRepeated < 0) return 'ERROR';
    for (let i = 0; i < numRepeated; i++) {
        result += inputString;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

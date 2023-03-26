const reverseString = function(inputString) {
    let inputChars = inputString.split('');
    inputChars = inputChars.reverse();
    let res = '';
    for (char of inputChars) {
        res += char;
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;

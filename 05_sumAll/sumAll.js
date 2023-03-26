const sumAll = function(num1, num2) {
    if ((num1 < 0) || (num2 < 0)) return 'ERROR';
    if ((typeof num1 !== "number") || (typeof num2 !== "number")) return 'ERROR';
    const largerNum = Math.max(num1, num2);
    const smallerNum = Math.min(num1, num2);
    let res = 0;
    for (let i = smallerNum; i <= largerNum; i++) {
        res += i;
    }
    return res

};

// Do not edit below this line
module.exports = sumAll;

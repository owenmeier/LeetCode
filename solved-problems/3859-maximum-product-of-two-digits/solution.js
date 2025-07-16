/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const num = n.toString();
    let digOne = 0;
    let digTwo = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] > digOne && digOne >= digTwo) {
            digTwo = digOne;
            digOne = num[i];
        } else if (num[i] > digTwo) digTwo = num[i];
    }
    return digOne * digTwo;
};

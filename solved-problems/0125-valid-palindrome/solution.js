/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // console.log(s);
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        if (s[left] !== s[right]) return false;
        left ++;
        right--;
    }
    return true;
    
};

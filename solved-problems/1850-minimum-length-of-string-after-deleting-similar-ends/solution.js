/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    while (s[0] == s[s.length-1]) {
        if (s.length == 1) return 1;
        let i = 1;
        let j = 1;

        while (s[0] == s[i] && s.length !== null) {
            i++;
            if (i >= s.length) {
                return 0;
            }
        }
        
        while (s[s.length - 1] == s[s.length - j - 1]) {
            j++;
        }
        s = s.slice(i, s.length - j);
        
    }
    return s.length
};

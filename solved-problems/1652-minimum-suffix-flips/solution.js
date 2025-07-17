/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {

    let count = 0;
    let targetArr = target.split('');
    prev = '0'

    for (let i = 0; i < targetArr.length; i++) {
            if (target[i] !== prev) {
                count++;
                prev = target[i];
            }
            
            
        
    }

    return count;
    
};

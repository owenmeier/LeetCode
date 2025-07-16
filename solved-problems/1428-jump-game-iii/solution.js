/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visited = new Set();

    return helper(start);

    function helper(start) {
        const value = arr[start]
        if (start < 0 || start >= arr.length || visited.has(start)) return false;
        if (arr[start] == 0) return true;

        visited.add(start);

        if (helper(start + value)) {
            return true;
        } else {
            return helper(start - value)
        }
    }

    

    
    
    
};

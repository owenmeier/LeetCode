/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {

    let smallest;
    let largest;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest || largest == null) largest = nums[i];
        if (nums[i] < smallest || smallest == null) smallest = nums[i];
    }

    const sum = largest - smallest;
    if (sum - k*2 <= 0) {
        return 0;
    } else {
        return sum - k*2;
    }
    
    
};

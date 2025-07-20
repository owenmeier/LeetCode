/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    nums.sort((a,b) => a - b);
    // console.log(nums);
    let count = 1;
    let max = 1;
    let maxVal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            count++;
            continue;
        } 
        
        if (count > max) {
            max = count;
            maxVal = nums[i - 1];
        }
        count = 1;
        
    }
    return count > max ? nums[nums.length - 1] : maxVal;
};

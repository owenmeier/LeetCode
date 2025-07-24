/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0;
    let j = 1;
    let n = nums.length;

    while (n !== 1) {
        if (j == n) {
            i = 0;
            j = 1;
            n--;
        } else if (nums[i] > nums[j]) {
            nums[i] = nums[i] + nums[j];
            nums[j] = nums[i] - nums[j];
            nums[i] = nums[i] - nums[j];
        } else {
            i++;
            j++;
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const sorted = nums.map((value, index) => ({value, index}));
    sorted.sort((a, b) => a.value - b.value);
    // console.log(sorted);
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        
        // const leftVal = sorted[left].value;
        // const rightVal = sorted[right].value;
        // console.log(leftVal, rightVal, left, right);
        if (sorted[left].value + sorted[right].value > target) {
            right--;
            continue;
        } else if (sorted[left].value + sorted[right].value < target) {
            left++;
            continue;
        } else return [sorted[left].index, sorted[right].index];
    // console.log(left, right);
    }

    // console.log(nums);

    // while (left < right) {
    //     if (nums[left] >= 0 && nums[right] > target) right--;

    // }
    
};

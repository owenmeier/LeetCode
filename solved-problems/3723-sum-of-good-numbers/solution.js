/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        curNum = nums[i];

        if (!nums[i - k] && !nums[i + k]) count += curNum;

        let pass = 0;
        if (nums[i + k] && curNum > nums[i + k]) {
            pass++;
        } else if (!nums[i + k]) pass++;

        if (nums[i - k] && curNum > nums[i - k]) {
            pass++;
        } else if (!nums[i - k]) pass++;

        if (pass == 2) count += curNum;

        // console.log(`${i}, ${count}`);
    }

    return count;
    
};

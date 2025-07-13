/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {

    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {

        let leftCount = 0;
        let rightCount = 0;
        let j = 0;

        for (; j < i; j++) {
            leftCount += nums[j];
        }
        for (; j < nums.length; j++) {
            rightCount += nums[j];
        }

        if ((leftCount - rightCount) % 2 == 0) count++;
    }

    return count;
};

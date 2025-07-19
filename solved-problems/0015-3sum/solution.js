/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  // console.log(nums);
  const triples = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        triples.push([nums[i], nums[left], nums[right]]);
        // console.log([])
        left++;
        while (nums[left] == nums[left - 1] && left < right) left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return triples;

  // console.log(sortedNums);

  // while (i < nums.length) {
  // if nums[i]= 0 look for two values that are equal and opposite
  // if nums[i] > 0 then look for
  // }
};

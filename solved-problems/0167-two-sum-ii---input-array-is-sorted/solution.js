/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (right > left) {
    if (numbers[left] + numbers[right] == target) return [left + 1, right + 1];
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    const answer = [];
    const rightArr = [];
    let left = 1;
    let right = 1;

    rightArr.push(right);

    for (let j = nums.length - 1; j > 0; j--) {
        right *= nums[j];
        rightArr.push(right + 0);
        
    }

    // console.log(rightArr);

    for (let i = 0; i < nums.length; i++) {
        // until i = nums.length / 2, all answers will be multipled by the same digits after i
        // for any answers after 
        // console.log(rightArr[rightArr.length - 1 - i]);
        if (!i) answer.push(rightArr[rightArr.length - 1]);
        else {
            left *= nums[i - 1];
            // console.log(left);
            // console.log(left * rightArr[rightArr.length - 1 - i]);
            // console.log(left * rightArr[rightArr.length - 1 - i]);
            answer.push(left * rightArr[rightArr.length - 1 - i]);
        }
        
    }

    return answer;
    
};

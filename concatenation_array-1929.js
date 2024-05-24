// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// length n = 6

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

let concatation = function (nums) {
  let mainValue = [...nums];

  let mainLength = nums.length;

  for (let index = mainLength; index < nums.length * 2; index++) {
    // const element = nums[index];
    if (index > mainLength - 1) {
      let value = nums[index - mainLength];
      // nums.push(nums[index - mainLength]);
      mainValue.push(value);
    }
  }
  return mainValue;
};

console.log(concatation([0, 1, 1]));

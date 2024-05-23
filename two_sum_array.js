//Array
// 1.Two Sum 

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]

var buildArray = function (nums) {
    let ans = [];
    for (let index = 0; index < nums.length; index++) {
      const element = nums[nums[index]];
      ans.push(element);
    }
    return ans;
  };
  
  console.log(buildArray([5, 0, 1, 2, 3, 4]));
  
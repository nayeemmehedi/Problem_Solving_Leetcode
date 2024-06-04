// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums) {
  let value = [];
  let make = {};

  // Collect unique values
  for (let duplicat = 0; duplicat < nums.length; duplicat++) {
    const element = nums[duplicat];
    if (!make[element]) {
      make[element] = true;
      value.push(element);
    }
  }

  // Update the original array in place
  for (let i = 0; i < value.length; i++) {
    nums[i] = value[i];
    console.log("Added duplicate",nums[i]);
  }

  // Fill the rest of the array with underscores
  for (let i = value.length; i < nums.length; i++) {
    nums[i] = "_";
    console.log("Add",  nums[i] = "_");

  }

  return value.length;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k); // Output: 5
console.log(nums); // Output: [0, 1, 2, 3, 4, "_", "_", "_", "_", "_"]

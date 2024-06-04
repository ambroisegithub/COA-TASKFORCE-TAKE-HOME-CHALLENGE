// Function to check if there exists a contiguous subarray that sums up to the target
function findSubarrayWithSum(nums, targetSum) {
  let sumSoFar = 0; // Initialize the current sum
  let startIndex = 0; // Start index of the subarray

  // Iterate through the array
  for (let endIndex = 0; endIndex < nums.length; endIndex++) {
    sumSoFar += nums[endIndex]; // Add the current element to the current sum

    // If the current sum exceeds the target, remove elements from the start
    while (sumSoFar > targetSum && startIndex <= endIndex) {
      sumSoFar -= nums[startIndex]; // Subtract the element at start index
      startIndex++; // Move the start index to the right
    }

    // Check if the current sum matches the target
    if (sumSoFar === targetSum) {
      return true; // Return true if the subarray with the target sum is found
    }
  }

  return false; // Return false if no such subarray is found
}

// Function to run a test case and print the result
function runTestCase(nums, targetSum, expectedResult) {
  const result = findSubarrayWithSum(nums, targetSum); // Get the result from the function
  console.log(
    `Input: nums = ${JSON.stringify(nums)}, targetSum = ${targetSum}`
  );
  console.log(`Expected: ${expectedResult}, Actual: ${result}`);
  console.log(result === expectedResult ? "✅ Test Passed" : "❌ Test Failed");
  console.log("");
}

// Define test cases with different arrays and target sums
const testCases = [
  {
    nums: [4, 2, 7, 1, 9, 5],
    targetSum: 14,
    expectedResult: true,
    // Explanation: The subarray [7, 1, 6] sums up to 14, which matches the targetSum.
  },
  {
    nums: [1, 2, 3, 4, 5],
    targetSum: 9,
    expectedResult: true,
    // Explanation: The subarray [2, 3, 4] sums up to 9, which matches the targetSum.
  },
  {
    nums: [1, 2, 3, 4, 5],
    targetSum: 15,
    expectedResult: true,
    // Explanation: The subarray [1, 2, 3, 4, 5] sums up to 15, which matches the targetSum.
  },
  {
    nums: [1, 2, 3, 4, 5],
    targetSum: 16,
    expectedResult: false,
    // Explanation: No subarray sums up to 16, so the result is false.
  },
  {
    nums: [0, 0, 0, 0],
    targetSum: 0,
    expectedResult: true,
    // Explanation: The subarray [0] or any subarray containing only zeros sums up to 0, which matches the targetSum.
  },
  {
    nums: [5],
    targetSum: 10,
    expectedResult: false,
    // Explanation: The single element 5 does not sum up to 10, so the result is false.
  },
  {
    nums: [5, -3, 2, 3, 1],
    targetSum: 5,
    expectedResult: true,
    // Explanation: The subarray [5] or [2, 3] or [5, -3, 2, 3] sums up to 5, which matches the targetSum.
  },
  {
    nums: [1, -1, 1, -1, 1, -1],
    targetSum: 0,
    expectedResult: true,
    // Explanation: The subarray [1, -1, 1, -1, 1, -1] or any zero-sum subarray sums up to 0, which matches the targetSum.
  },
];

// Run and print results for each test case
testCases.forEach((test, index) => {
  console.log(`Test Case ${index + 1}:`);
  runTestCase(test.nums, test.targetSum, test.expectedResult);
});

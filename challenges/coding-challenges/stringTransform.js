// Function to transform the input string based on specified rules
function transformString(str) {
    let result = str; // Initialize the result with the input string

    // Check if the length of the string is divisible by 3
    if (str.length % 3 === 0) {
        // Reverse the string if the length is divisible by 3
        result = result.split('').reverse().join('');
    }

    // Check if the length of the string is divisible by 5
    if (str.length % 5 === 0) {
        // Replace each character with its ASCII code if the length is divisible by 5
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return result; // Return the transformed string
}

// Define test cases with different input strings and expected results
const testCases = [
    { input: "abcabcabc", expected: "cbacbacba" },
    // Explanation: Length is 9 (divisible by 3), so the string is reversed.

    { input: "hello", expected: "104 101 108 108 111" },
    // Explanation: Length is 5 (divisible by 5), so each character is replaced with its ASCII code.

    { input: "abcdef", expected: "fedcba" },
    // Explanation: Length is 6 (divisible by 3), so the string is reversed.

    { input: "Hello World!!!!", expected: "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72" }
    // Explanation: Length is 15 (divisible by both 3 and 5), so the string is first reversed and then each character is replaced with its ASCII code.
];

// Function to run a test case and print the result
function runTestCase(input, expected) {
    const output = transformString(input); // Get the output from the function
    console.log(`Input: "${input}"`);
    console.log(`Expected Output: "${expected}"`);
    console.log(`Actual Output: "${output}"`);
    console.log(output === expected ? "✅ Test Passed" : "❌ Test Failed");
    console.log('');
}

// Run and print results for each test case
testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log(`Length of input "${test.input}" is ${test.input.length}`);
    runTestCase(test.input, test.expected);
});

// Example usage
const inputExample = "Hello World!!!!";
console.log(`Example usage with input "${inputExample}":`);
console.log(transformString(inputExample)); // Output: "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72"

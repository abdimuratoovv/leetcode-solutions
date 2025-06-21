// Day 1 - LeetCode 30 Days of JavaScript
// Problem: Create Hello World Function
// Link: https://leetcode.com/problems/create-hello-world-function/

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    };
};

// Example usage:
const f = createHelloWorld();
console.log(f()); // Output: "Hello World"

// JavaScript/day03_expectFunction.js

var expect = function(val) {
    return {
        toBe: function(val2) {
            if (val === val2) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(val2) {
            if (val !== val2) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

// Example usage:
const result1 = expect(5).toBe(5);      // true
const result2 = expect("hi").notToBe("bye");  // true

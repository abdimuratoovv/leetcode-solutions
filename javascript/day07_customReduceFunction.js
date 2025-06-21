var reduce = function(nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
};

// Test examples
console.log(reduce([1, 2, 3], (a, b) => a + b, 0));   // 6
console.log(reduce([5, 2], (a, b) => a - b, 10));     // 3
console.log(reduce([], (a, b) => a + b, 42));         // 42

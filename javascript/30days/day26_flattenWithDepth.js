var flatten = function(arr, n) {
    const result = [];

    const helper = (arr, depth) => {
        for (const item of arr) {
            if (Array.isArray(item) && depth < n) {
                helper(item, depth + 1);
            } else {
                result.push(item);
            }
        }
    };

    helper(arr, 0);
    return result;
};

// Test
console.log(flatten([1, [2, [3, [4]]]], 1));  // [1, 2, [3, [4]]]
console.log(flatten([1, [2, [3, [4]]]], 2));  // [1, 2, 3, [4]]
console.log(flatten([1, [2, [3, [4]]]], 3));  // [1, 2, 3, 4]

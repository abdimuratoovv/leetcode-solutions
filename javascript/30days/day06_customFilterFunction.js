var filter = function(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;
};

// Example usage
console.log(filter([1, 2, 3, 4], (n) => n > 2));      // [3, 4]
console.log(filter([10, 20, 30], (n, i) => i !== 1)); // [10, 30]

var map = function(arr, fn) {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i));
    }

    return res;
};

// Example usage
const result = map([10, 20, 30], (value, index) => value + index);
console.log(result); // [10, 21, 32]

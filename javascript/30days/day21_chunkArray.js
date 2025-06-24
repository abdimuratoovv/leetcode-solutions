var chunk = function(arr, size) {
    const res = [];

    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }

    return res;
};

// Tests
console.log(chunk([1, 2, 3, 4, 5], 2));      // [[1,2], [3,4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6], 3));   // [[1,2,3], [4,5,6]]
console.log(chunk([1, 2, 3], 5));            // [[1,2,3]]
console.log(chunk([], 3));                  // []

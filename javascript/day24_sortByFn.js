var sortBy = function(arr, fn) {
    return [...arr].sort((a, b) => fn(a) - fn(b));
};

// Tests
console.log(sortBy([5, 3, 1, 4], x => x * -1)); 
// [5, 4, 3, 1]

console.log(sortBy(["a", "abc", "ab"], x => x.length));
// ['a', 'ab', 'abc']

console.log(sortBy([10, 20, 30], x => x % 3)); 
// [30, 10, 20]

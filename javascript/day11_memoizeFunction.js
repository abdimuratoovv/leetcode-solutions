var memoize = function(fn) {
    const cache = new Map();

    return function(...args) {
        const key = args.join(",");
        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

// Example: sum
let callCount = 0;
const sum = (a, b) => {
    callCount++;
    return a + b;
};

const memoSum = memoize(sum);
console.log(memoSum(1, 2)); // 3
console.log(memoSum(1, 2)); // 3 (cached)
console.log(memoSum(2, 1)); // 3 (new, not cached)
console.log(callCount);     // 2

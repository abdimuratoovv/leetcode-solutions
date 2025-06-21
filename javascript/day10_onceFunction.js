var once = function(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    };
};

// Example usage
let add = (a, b) => a + b;
let onceAdd = once(add);

console.log(onceAdd(3, 4)); // 7 (1st call)
console.log(onceAdd(1, 2)); // undefined (2nd call)
console.log(onceAdd(5, 5)); // undefined (3rd call)

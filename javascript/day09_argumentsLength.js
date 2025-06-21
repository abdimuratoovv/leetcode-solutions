var argumentsLength = function(...args) {
    return args.length;
};

// Test examples
console.log(argumentsLength(1, 2, 3));     // 3
console.log(argumentsLength());           // 0
console.log(argumentsLength("a", null));  // 2

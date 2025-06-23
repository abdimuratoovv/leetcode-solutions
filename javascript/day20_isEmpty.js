var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};

// Tests
console.log(isEmpty({}));          // true
console.log(isEmpty([]));          // true
console.log(isEmpty({ x: 1 }));    // false
console.log(isEmpty([10, 20]));    // false

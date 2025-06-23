Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length - 1];
};

// Tests
console.log([1, 2, 3].last());     // 3
console.log([].last());            // -1
console.log(["hello", "world"].last()); // "world"

Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) => {
        const key = fn(item);
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(item);
        return grouped;
    }, {});
};

// Tests
console.log(
    [1, 2, 3, 4, 5, 6].groupBy(x => x % 3)
);
// { 0: [3, 6], 1: [1, 4], 2: [2, 5] }

console.log(
    ['cat', 'car', 'dog', 'door'].groupBy(word => word[0])
);
// { c: ['cat', 'car'], d: ['dog', 'door'] }

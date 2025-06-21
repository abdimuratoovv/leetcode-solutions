var createCounter = function(init) {
    let current = init;

    return {
        increment: function() {
            current += 1;
            return current;
        },
        decrement: function() {
            current -= 1;
            return current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
};

// Example usage
const counter = createCounter(1);
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 0
console.log(counter.reset());     // 1

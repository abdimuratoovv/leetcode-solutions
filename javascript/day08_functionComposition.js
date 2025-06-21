var compose = function(functions) {
    return function(x) {
        let result = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    };
};

// Test examples
const fn1 = compose([x => x + 1, x => 2 * x]);
console.log(fn1(4)); // (4 * 2) + 1 = 9

const fn2 = compose([]);
console.log(fn2(10)); // identity: returns 10

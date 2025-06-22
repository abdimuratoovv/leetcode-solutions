var timeLimit = function(fn, t) {
    return async function(...args) {
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject("Time Limit Exceeded"), t)
        );

        return Promise.race([
            fn(...args),
            timeoutPromise
        ]);
    };
};

// Test example
const slowFunction = async (ms) => {
    await new Promise(resolve => setTimeout(resolve, ms));
    return `Resolved after ${ms}ms`;
};

const limited = timeLimit(slowFunction, 1000);

limited(500).then(console.log).catch(console.error);  // Resolved after 500ms
limited(1500).then(console.log).catch(console.error); // Time Limit Exceeded

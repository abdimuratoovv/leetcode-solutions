var cancellable = function(fn, args, t) {
    fn(...args); // Immediately call

    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearInterval(intervalId);
    };
};

// Example usage:
const logMessage = (msg) => console.log("Log:", msg, "Time:", Date.now());

const cancel = cancellable(logMessage, ["Running..."], 1000);

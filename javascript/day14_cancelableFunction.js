var cancellable = function(fn, args, t) {
    const timerId = setTimeout(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearTimeout(timerId);
    };
};

// Example usage:
const fn = (msg) => console.log("Executed:", msg);

const cancel = cancellable(fn, ["Hello"], 3000);

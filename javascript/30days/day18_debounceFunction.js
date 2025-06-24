var debounce = function(fn, t) {
    let timerId = null;

    return function(...args) {
        if (timerId !== null) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

// Example
const sayHello = (name) => {
    console.log(`Hello, ${name}! at ${Date.now()}`);
};

const debouncedSayHello = debounce(sayHello, 100);

debouncedSayHello("Tursınbay");
setTimeout(() => debouncedSayHello("Ali"), 50);
setTimeout(() => debouncedSayHello("John"), 120);

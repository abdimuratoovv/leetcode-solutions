var addTwoPromises = function(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(([val1, val2]) => val1 + val2);
};

// Test
const promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 100));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(15), 150));

addTwoPromises(promise1, promise2).then(result => {
    console.log(result); // 25
});

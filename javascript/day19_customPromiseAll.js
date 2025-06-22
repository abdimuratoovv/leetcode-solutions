var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const n = functions.length;
        const results = new Array(n);
        let completed = 0;

        functions.forEach((fn, i) => {
            fn()
                .then((val) => {
                    results[i] = val;
                    completed++;
                    if (completed === n) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });

        if (n === 0) {
            resolve([]);
        }
    });
};

// Example
const f1 = () => new Promise(res => setTimeout(() => res("X"), 100));
const f2 = () => new Promise(res => setTimeout(() => res("Y"), 200));
const f3 = () => new Promise(res => setTimeout(() => res("Z"), 50));

promiseAll([f1, f2, f3])
  .then(console.log)  // ['X', 'Y', 'Z']
  .catch(console.error);

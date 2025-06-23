var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.map(compactObject).filter(Boolean);
    } else if (typeof obj === 'object' && obj !== null) {
        const res = {};
        for (const key in obj) {
            const val = compactObject(obj[key]);
            if (Boolean(val)) {
                res[key] = val;
            }
        }
        return res;
    } else {
        return obj;
    }
};

// Test
console.log(compactObject({
  a: null,
  b: [false, 1],
  c: { d: 0, e: "hi" }
}));
// { b: [1], c: { e: "hi" } }

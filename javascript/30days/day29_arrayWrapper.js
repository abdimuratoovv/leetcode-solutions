class ArrayWrapper {
    constructor(arr) {
        this.arr = arr;
    }

    valueOf() {
        return this.arr.reduce((sum, val) => sum + val, 0);
    }

    toString() {
        return `[${this.arr.join(",")}]`;
    }
}

// Test
const a = new ArrayWrapper([1, 2, 3]);
const b = new ArrayWrapper([4, 5]);

console.log(a + b);         // 15
console.log(String(a));     // "[1,2,3]"
console.log(String(b));     // "[4,5]"

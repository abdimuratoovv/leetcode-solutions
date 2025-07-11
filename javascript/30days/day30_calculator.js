class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Test
const result = new Calculator(10)
    .add(5)
    .subtract(2)
    .multiply(3)
    .divide(2)
    .power(2)
    .getResult();

console.log(result); // 380.25

class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                const index = this.events[eventName].indexOf(callback);
                if (index !== -1) {
                    this.events[eventName].splice(index, 1);
                }
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return [];
        }

        return this.events[eventName].map(callback => callback(...args));
    }
}

// Test
const emitter = new EventEmitter();

function cb1(x) { return x * 2; }
function cb2(x) { return x + 10; }

const s1 = emitter.subscribe("calc", cb1);
const s2 = emitter.subscribe("calc", cb2);

console.log(emitter.emit("calc", [5])); // [10, 15]

s1.unsubscribe();
console.log(emitter.emit("calc", [5])); // [15]

s2.unsubscribe();
console.log(emitter.emit("calc", [5])); // []

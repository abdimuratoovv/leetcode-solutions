class TimeLimitedCache {
    constructor() {
        this.store = new Map();
    }

    set(key, value, duration) {
        const now = Date.now();
        const hasUnexpired = this.store.has(key) && this.store.get(key).expiresAt > now;

        this.store.set(key, {
            value,
            expiresAt: now + duration
        });

        return hasUnexpired;
    }

    get(key) {
        const now = Date.now();

        if (!this.store.has(key)) return -1;

        const entry = this.store.get(key);
        if (entry.expiresAt <= now) {
            this.store.delete(key);
            return -1;
        }

        return entry.value;
    }

    count() {
        const now = Date.now();
        let count = 0;

        for (const [key, entry] of this.store.entries()) {
            if (entry.expiresAt > now) {
                count++;
            } else {
                this.store.delete(key);
            }
        }

        return count;
    }
}

// Example usage
const cache = new TimeLimitedCache();
console.log(cache.set(1, 100, 1000));  // false
console.log(cache.get(1));             // 100

setTimeout(() => {
    console.log(cache.get(1));         // -1 (expired)
    console.log(cache.count());        // 0
}, 1100);

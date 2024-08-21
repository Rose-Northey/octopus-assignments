"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FibonacciStore = exports.FibonacciBottomUp = void 0;
class FibonacciBottomUp {
    constructor() {
        this.cachedSequence = [0, 1];
    }
    getNumberAtIndex(desiredIndex) {
        if (this.cachedSequence.length > desiredIndex) {
            return this.cachedSequence[desiredIndex];
        }
        else {
            this.cachedSequence.push(this.cachedSequence[this.cachedSequence.length - 1] +
                this.cachedSequence[this.cachedSequence.length - 2]);
            return this.getNumberAtIndex(desiredIndex);
        }
    }
}
exports.FibonacciBottomUp = FibonacciBottomUp;
class FibonacciStore {
    constructor() {
        this.cachedSequence = [0, 1];
    }
    getNumberAtIndex(desiredIndex) {
        if (this.cachedSequence[desiredIndex] === undefined) {
            this.cachedSequence.push(this.getNumberAtIndex(desiredIndex - 1) +
                this.getNumberAtIndex(desiredIndex - 2));
        }
        return this.cachedSequence[desiredIndex];
    }
}
exports.FibonacciStore = FibonacciStore;

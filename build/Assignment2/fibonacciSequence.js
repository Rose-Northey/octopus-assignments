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
// a number in JS is not the same as an integer (it's 8bytes -> because its a double precision float)
// -> worst case scenario = linear relationship with n O(n)
// -> best case scenario = index is simply acessed O(1) (constant)
// space complexity -> (cachedSequence = 8n bytes) + (desired index = 4 bytes) + (return = 4 bytes) -> 8n+16 therefore space complexity is linear??
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
// -> worst case scenario = linear relationship with n O(n)
// -> best case scenario = index is simply acessed O(1)
// calculate time complexity by dropping the lower order terms and also the
// multiply the time complexity of nested loops e.g. n^2 if there are two forloops nested within eachother
// sequential statements  -> we add the time taken for each sequential statment. and simplify as above
// if else statments -> we consider the worst case scenario if this is the case.
// Space Complexity -> each integer variable takes 4 bytes. Each integer is 4 bytes plus return variable is also 4 bytes if its an integer

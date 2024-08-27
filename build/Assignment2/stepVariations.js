"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stepVariationsBottomUp = exports.StepVariationsTopDown = void 0;
class StepVariationsTopDown {
    constructor() {
        this.cachedNumberOfVariations = [0, 1, 2];
    }
    getNumberOfVariations(stepsLeft) {
        if (this.cachedNumberOfVariations[stepsLeft] !== undefined) {
            return this.cachedNumberOfVariations[stepsLeft];
        }
        else {
            this.cachedNumberOfVariations[stepsLeft] =
                this.getNumberOfVariations(stepsLeft - 1) +
                    this.getNumberOfVariations(stepsLeft - 2);
            return this.cachedNumberOfVariations[stepsLeft];
        }
    }
}
exports.StepVariationsTopDown = StepVariationsTopDown;
class stepVariationsBottomUp {
    constructor() {
        this.cachedNumberOfVariations = [0, 1, 2];
    }
    getNumberOfVariations(stepsLeft) {
        if (stepsLeft >= this.cachedNumberOfVariations.length) {
            this.cachedNumberOfVariations.push(this.cachedNumberOfVariations[this.cachedNumberOfVariations.length - 1] +
                this.cachedNumberOfVariations[this.cachedNumberOfVariations.length - 2]);
        }
        else {
            return this.cachedNumberOfVariations[stepsLeft];
        }
        return this.getNumberOfVariations(stepsLeft);
    }
}
exports.stepVariationsBottomUp = stepVariationsBottomUp;

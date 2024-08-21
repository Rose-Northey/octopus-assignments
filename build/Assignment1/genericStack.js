"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericStack = exports.GenericPlate = void 0;
class GenericPlate {
    constructor(newData, lowerPlate) {
        this.lowerPlate = lowerPlate;
        this.data = newData;
    }
    printData() {
        return this.data;
    }
}
exports.GenericPlate = GenericPlate;
class GenericStack {
    constructor() {
        this.size = 0;
        this.topPlate = undefined;
    }
    Push(newPlateData) {
        const newPlate = new GenericPlate(newPlateData, this.topPlate);
        if (!this.bottomPlate) {
            this.bottomPlate = newPlate;
        }
        this.topPlate = newPlate;
        this.size++;
        return this.topPlate.data;
    }
    Pop() {
        if (this.size === 1) {
            this.bottomPlate === undefined;
        }
        if (!this.topPlate) {
            throw new Error('no plates to pop');
        }
        else {
            const poppedPlateData = this.topPlate.data;
            this.topPlate = this.topPlate.lowerPlate;
            this.size--;
            return poppedPlateData;
        }
    }
    PeakTop() {
        if (!this.topPlate) {
            throw new Error('no plates in the stack');
        }
        else {
            return this.topPlate.data;
        }
    }
    PeakBottom() {
        if (!this.bottomPlate) {
            throw new Error('no plates in the stack');
        }
        else {
            return this.bottomPlate.data;
        }
    }
}
exports.GenericStack = GenericStack;

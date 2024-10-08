"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = exports.Plate = void 0;
class Plate {
    constructor(newData, lowerPlate) {
        this.lowerPlate = lowerPlate;
        this.data = newData;
        if (!lowerPlate || newData > lowerPlate.max) {
            this.max = newData;
        }
        else {
            this.max = lowerPlate.max;
        }
    }
    printData() {
        return this.data;
    }
}
exports.Plate = Plate;
class Stack {
    constructor() {
        this.size = 0;
        this.topPlate = undefined;
    }
    Push(newPlateData) {
        const newPlate = new Plate(newPlateData, this.topPlate);
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
    Max() {
        if (!this.topPlate) {
            throw new Error('no plates in the stack');
        }
        else {
            return this.topPlate.max;
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
exports.Stack = Stack;

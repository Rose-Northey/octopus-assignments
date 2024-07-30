"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class stack {
    constructor() {
        this.data = [];
    }
    Push(newNumber) {
        this.data.push(newNumber);
    }
    Pop() {
        this.data.pop();
    }
    Max() {
        return Math.max(...this.data);
    }
}
exports.default = stack;

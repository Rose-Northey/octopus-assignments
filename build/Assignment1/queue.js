"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("./stack");
class queue {
    constructor() {
        this.inPatients = new stack_1.Stack();
        this.outPatients = new stack_1.Stack();
        this.queueSize = 0;
    }
    Push(ailments) {
        this.inPatients.Push(ailments);
        this.queueSize++;
    }
    Pop() {
        this.throwErrorIfQueueEmpty();
        if (this.outPatients.size === 0) {
            while (this.inPatients.size > 0) {
                this.outPatients.Push(this.inPatients.Pop());
            }
        }
        this.queueSize--;
        return this.outPatients.Pop();
    }
    Max() {
        this.throwErrorIfQueueEmpty();
        let inPatientsMax = 0;
        let outPatientsMax = 0;
        if (this.inPatients.size > 0) {
            inPatientsMax = this.inPatients.Max();
        }
        if (this.outPatients.size > 0) {
            outPatientsMax = this.outPatients.Max();
        }
        return Math.max(inPatientsMax, outPatientsMax);
    }
    FrontOfQueue() {
        this.throwErrorIfQueueEmpty();
        if (this.outPatients.size > 0) {
            return this.outPatients.PeakTop();
        }
        else {
            return this.inPatients.PeakBottom();
        }
    }
    BackOfQueue() {
        this.throwErrorIfQueueEmpty();
        if (this.inPatients.size > 0) {
            return this.inPatients.PeakTop();
        }
        else {
            return this.outPatients.PeakBottom();
        }
    }
    throwErrorIfQueueEmpty() {
        if (this.queueSize === 0) {
            throw new Error('there are no patients at all!');
        }
    }
}
exports.default = queue;

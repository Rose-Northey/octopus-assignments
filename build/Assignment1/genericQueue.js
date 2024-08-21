"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericStack_1 = require("./genericStack");
class queue {
    constructor() {
        this.inPatients = new genericStack_1.GenericStack();
        this.outPatients = new genericStack_1.GenericStack();
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

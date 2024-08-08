"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = __importDefault(require("./queue"));
describe('test queue', () => {
    test('first removed number is first added', () => {
        const queue1 = new queue_1.default();
        const firstNumber = 1;
        const otherNumber = 3;
        queue1.Push(firstNumber);
        queue1.Push(otherNumber);
        queue1.Push(otherNumber);
        const returnedValue = queue1.Pop();
        const actual = queue1.ToList();
        expect(returnedValue).toEqual(firstNumber);
    });
    test('error is thrown when pop comes before push', () => {
        const queue1 = new queue_1.default();
        expect(() => queue1.Pop()).toThrow();
    });
    test('error is thrown when nothing left to pop', () => {
        const queue1 = new queue_1.default();
        queue1.Push(1);
        queue1.Pop();
        expect(() => queue1.Pop()).toThrow();
    });
});

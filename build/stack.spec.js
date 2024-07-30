"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = __importDefault(require("./stack"));
describe('Assignment 1', () => {
    test('stack adds new number to the array', () => {
        const stack1 = new stack_1.default();
        stack1.Push(1);
        const actual = stack1.data;
        const expected = [1];
        expect(actual).toEqual(expected);
    });
});

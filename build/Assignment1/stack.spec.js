"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("./stack");
describe('Assignment 1 Create a Stack', () => {
    const firstPlate = 1;
    const secondPlate = 2;
    const thirdPlate = 1;
    const fourthPlate = 4;
    describe('Stack adds 2 number to the array', () => {
        const myStack = new stack_1.Stack(firstPlate);
        myStack.Push(secondPlate);
        test('size is 2', () => {
            expect(myStack.size).toEqual(2);
        });
        test('after push, secondPlate is top', () => {
            expect(myStack.topPlate.data).toEqual(secondPlate);
        });
    });
    describe('Stack removes last added number first', () => {
        const myStack = new stack_1.Stack(firstPlate);
        myStack.Push(secondPlate);
        myStack.Pop();
        test('after pop, firstPlate is top', () => {
            expect(myStack.topPlate.data).toBe(firstPlate);
        });
        test('after pop, size is 1', () => {
            expect(myStack.size).toBe(1);
        });
    });
    test('Stack returns maximum number correctly when max in middle', () => {
        const myStack = new stack_1.Stack(firstPlate);
        myStack.Push(secondPlate);
        myStack.Push(thirdPlate);
        expect(myStack.Max()).toEqual(2);
    });
    test('Stack returns maximum number correctly when a new max is added then taken away', () => {
        const myStack = new stack_1.Stack(firstPlate);
        myStack.Push(secondPlate);
        myStack.Push(thirdPlate);
        myStack.Push(fourthPlate);
        const firstMax = myStack.Max();
        myStack.Pop();
        expect(myStack.Max()).not.toEqual(firstMax);
    });
    // test('undefined thrown for max when no numbers in Stack', () => {
    //   const myStack = new Stack();
    //   const actual = () => myStack.Max();
    //   const expected = 'there are no numbers in this Stack!';
    //   expect(() => myStack.Max()).toThrow();
    // });
});

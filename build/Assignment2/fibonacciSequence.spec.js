"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fibonacciSequence_1 = require("./fibonacciSequence");
describe('print Fibonacci Sequence given n using BottomUp', () => {
    test('print Fibonacci Sequence for n=0', () => {
        const myFibonacci = new fibonacciSequence_1.FibonacciBottomUp();
        const sequenceIndex = 0;
        const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
        expect(numberAtIndex).toEqual(0);
    });
    test('print Fibonacci Sequence for n=1', () => {
        const myFibonacci = new fibonacciSequence_1.FibonacciBottomUp();
        const sequenceIndex = 1;
        const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
        expect(numberAtIndex).toEqual(1);
    });
    test('print Fibonacci Sequence for n=2', () => {
        const myFibonacci = new fibonacciSequence_1.FibonacciBottomUp();
        const sequenceIndex = 2;
        const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
        expect(numberAtIndex).toEqual(1);
    });
    test('print Fibonacci Sequence for n=10', () => {
        const myFibonacci = new fibonacciSequence_1.FibonacciBottomUp();
        const sequenceIndex = 10;
        const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
        expect(numberAtIndex).toEqual(55);
    });
    test('print Fibonacci Sequence for n=80', () => {
        const myFibonacci = new fibonacciSequence_1.FibonacciBottomUp();
        const sequenceIndex = 80;
        const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
        expect(numberAtIndex).toEqual(23416728348467685);
    });
});
describe('print Fibonacci Sequence given n using a store', () => {
    test('print Fibonacci Sequence for n=0', () => {
        const myFibonacci = new fibonacciSequence_1.FibonacciStore();
        const sequenceIndex = 0;
        const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
        expect(numberAtIndex).toEqual(0);
    });
    test('print Fibonacci Sequence for n=1', () => {
        const myFibonacci = new fibonacciSequence_1.FibonacciStore();
        const sequenceIndex = 1;
        const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
        expect(numberAtIndex).toEqual(1);
    });
    test('print Fibonacci Sequence for n=2', () => {
        const myFibonacci = new fibonacciSequence_1.FibonacciStore();
        const sequenceIndex = 2;
        const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
        expect(numberAtIndex).toEqual(1);
    });
    test('print Fibonacci Sequence for n=10', () => {
        const myFibonacci = new fibonacciSequence_1.FibonacciStore();
        const sequenceIndex = 10;
        const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
        expect(numberAtIndex).toEqual(55);
    });
    test('print Fibonacci Sequence for n=80', () => {
        const myFibonacci = new fibonacciSequence_1.FibonacciStore();
        const sequenceIndex = 80;
        const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
        expect(numberAtIndex).toEqual(23416728348467685);
    });
});

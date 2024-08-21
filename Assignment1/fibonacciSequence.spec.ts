import {Fibonacci} from './fibonacciSequence';

describe('print Fibonacci Sequence given n', () => {
  test('print Fibonacci Sequence for n=0', () => {
    const myFibonacci = new Fibonacci();
    const sequenceIndex = 0;
    const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
    expect(numberAtIndex).toEqual(0);
  });
  test('print Fibonacci Sequence for n=1', () => {
    const myFibonacci = new Fibonacci();
    const sequenceIndex = 1;
    const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
    expect(numberAtIndex).toEqual(1);
  });
  test('print Fibonacci Sequence for n=2', () => {
    const myFibonacci = new Fibonacci();
    const sequenceIndex = 2;
    const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
    expect(numberAtIndex).toEqual(1);
  });
  test('largest safe number of fibonacci sequence n=97', () => {
    const myFibonacci = new Fibonacci();
    const sequenceIndex = 80;
    const numberAtIndex = myFibonacci.getNumberAtIndex(sequenceIndex);
    expect(numberAtIndex).toEqual(23416728348467685);
  });
});

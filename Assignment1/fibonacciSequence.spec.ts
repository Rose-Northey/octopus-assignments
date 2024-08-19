import {generateFibonacciSequence} from './fibonacciSequence';

describe('print Fibonacci Sequence given n', () => {
  test('print Fibonacci Sequence for n=0', () => {
    const n = 0;
    const lastFNumber = generateFibonacciSequence(n);
    expect(lastFNumber).toEqual(0);
  });
  test('print Fibonacci Sequence for n=1', () => {
    const n = 1;
    const lastFNumber = generateFibonacciSequence(n);
    expect(lastFNumber).toEqual(1);
  });
  test('print Fibonacci Sequence for n=2', () => {
    const n = 2;
    const lastFNumber = generateFibonacciSequence(n);
    expect(lastFNumber).toEqual(1);
  });
  test('largest safe number of fibonacci sequence n=97', () => {
    const n = 97;
    const lastFNumber = generateFibonacciSequence(n);
    expect(lastFNumber).toEqual(83621143489848422977);
  });
  test('smallest unsafe number of fibonacci sequence n=98', () => {
    const n = 98;
    const lastFNumber = generateFibonacciSequence(n);
    expect(lastFNumber).toEqual(135301852344706746049);
  });
  9007199254740991;
});

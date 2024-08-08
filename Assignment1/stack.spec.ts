import {Stack} from './stack';

describe('Assignment 1 Create a Stack', () => {
  const firstPlate = 1;
  const secondPlate = 2;
  const thirdPlate = 1;
  const fourthPlate = 4;

  describe('Stack adds 2 number to the array', () => {
    const myStack = new Stack();
    myStack.Push(firstPlate);
    myStack.Push(secondPlate);

    test('after push, size is 2', () => {
      expect(myStack.size).toEqual(2);
    });

    test('after push, secondPlate is top', () => {
      expect(myStack.topPlate?.data).toEqual(secondPlate);
    });
  });

  describe('Stack removes last added number first', () => {
    const myStack = new Stack();
    myStack.Push(firstPlate);
    myStack.Push(secondPlate);
    myStack.Pop();

    test('after pop, firstPlate is top', () => {
      expect(myStack.topPlate?.data).toBe(firstPlate);
    });
    test('after pop, size is 1', () => {
      expect(myStack.size).toBe(1);
    });
  });

  describe('stack finds max', () => {
    const myStack = new Stack();
    myStack.Push(firstPlate);
    myStack.Push(secondPlate);
    myStack.Push(thirdPlate);
    test('Stack returns maximum number correctly when max in middle', () => {
      expect(myStack.Max()).toEqual(2);
    });

    test('Stack returns maximum number correctly when a new max is added then taken away', () => {
      myStack.Push(fourthPlate);
      const firstMax = myStack.Max();
      myStack.Pop();
      expect(myStack.Max()).not.toEqual(firstMax);
    });
  });
  describe('errors are handled', () => {
    const myStack = new Stack();
    test('undefined thrown for max when no numbers in Stack', () => {
      expect(() => myStack.Max()).toThrow();
    });
    test('when stack is empty, pop throws error', () => {
      myStack.Push(firstPlate);
      myStack.Pop();
      expect(() => myStack.Pop()).toThrow(new Error('no plates to pop'));
    });
  });
});

import stack from './stack';

describe('Assignment 1', () => {
  test('stack adds new number to the array', () => {
    const stack1 = new stack();
    stack1.Push(1);
    const actual = stack1.data;
    const expected = [1];
    expect(actual).toEqual(expected);
  });
  test('stack adds another new number to the end of the array', () => {
    const stack1 = new stack();
    stack1.Push(1);
    stack1.Push(2);
    const actual = stack1.data;
    const expected = [1, 2];
    expect(actual).toEqual(expected);
  });
  test('stack removes last added number first', () => {
    const stack1 = new stack();
    stack1.Push(1);
    stack1.Push(2);
    stack1.Pop();
    const actual = stack1.data;
    const expected = [1];
    expect(actual).toEqual(expected);
  });
  test('stack returns maximum number correctly', () => {
    const stack1 = new stack();
    stack1.Push(1);
    stack1.Push(4);
    stack1.Push(3);
    const actual = stack1.Max();
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  test('stack returns maximum number correctly when a new max is added then taken away', () => {
    const stack1 = new stack();
    stack1.Push(1);
    stack1.Push(4);
    stack1.Push(3);
    stack1.Push(5);
    stack1.Pop();
    const actual = stack1.Max();
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  test('undefined thrown for max when no numbers in stack', () => {
    const stack1 = new stack();
    const actual = () => stack1.Max();
    const expected = 'there are no numbers in this stack!';
    expect(() => stack1.Max()).toThrow();
  });
});

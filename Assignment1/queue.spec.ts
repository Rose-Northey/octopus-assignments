import queue from './queue';

describe('test queue', () => {
  test('first removed number is first added', () => {
    const queue1 = new queue();
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
    const queue1 = new queue();
    expect(() => queue1.Pop()).toThrow();
  });
  test('error is thrown when nothing left to pop', () => {
    const queue1 = new queue();
    queue1.Push(1);
    queue1.Pop();
    expect(() => queue1.Pop()).toThrow();
  });
});

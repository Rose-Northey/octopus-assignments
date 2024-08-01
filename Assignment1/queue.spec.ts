import queue from './queue';

describe('test queue', () => {
  test('first removed number is first added', () => {
    const queue1 = new queue();
    const firstNumber = 1;
    const otherNumber = 3;
    queue1.Push(firstNumber);
    queue1.Push(otherNumber);
    queue1.Push(otherNumber);
    queue1.Pop();
    const actual = queue1.data;
    expect(actual).not.toContain(firstNumber);
  });
});

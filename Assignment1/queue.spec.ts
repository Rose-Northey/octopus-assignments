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
    queue1.Pop();
    const actual = queue1.data;
    queue1.Push(8);
    expect(actual).not.toContain(firstNumber);
  });
  //   test('correctly calculates Max of 3 added numbers', () => {
  //     const queue1 = new queue();
  //     queue1.Push(1);
  //     queue1.Push(3);
  //     queue1.Push(2);
  //     const actual = queue1.Max();
  //     const expected = 3;
  //     expect(actual).toEqual(expected);
  //   });
  //   test('correctly calculates Max when high number is added then removed', () => {
  //     const queue1 = new queue();
  //     queue1.Push(30);
  //     queue1.Push(1);
  //     queue1.Push(1);
  //     queue1.Pop();
  //     const actual = queue1.Max();
  //     const expected = 1;
  //     expect(actual).toEqual(expected);
  //   });
});

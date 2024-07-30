import Greeter from './greeter';

describe('test the test', () => {
  test('return hello world when world input', () => {
    const expected = 'Hello, world';
    const greeter1 = new Greeter('world');
    const actual = greeter1.greet();
    expect(actual).toBe(expected);
  });
});

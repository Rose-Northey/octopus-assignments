import queue from './queue';

describe('test queue', () => {
  const firstPatient = 4;
  const secondPatient = 3;
  const thirdPatient = 1;
  const fourthPatient = 5;

  describe('First Patient in is First Patient out', () => {
    const myQueue = new queue();
    myQueue.Push(firstPatient);
    myQueue.Push(secondPatient);
    myQueue.Push(thirdPatient);
    const firstPopped = myQueue.Pop();
    myQueue.Pop();
    const lastPopped = myQueue.Pop();
    test('of 3 patients added, patient 1 is popped first', () => {
      expect(firstPopped).toBe(firstPatient);
    });
    test('of 3 patients added, patient 3 is popped last', () => {
      expect(lastPopped).toBe(thirdPatient);
    });
  });
  describe('Correctly calculates the max', () => {
    const myQueue = new queue();
    myQueue.Push(firstPatient);
    myQueue.Push(secondPatient);
    myQueue.Push(thirdPatient);
    test('of 3 pushed numbers', () => {
      expect(myQueue.Max()).toBe(firstPatient);
    });
    test('when old max is popped', () => {
      myQueue.Pop();
      expect(myQueue.Max()).toBe(secondPatient);
    });
    test('when new max is added', () => {
      myQueue.Push(fourthPatient);
      expect(myQueue.Max()).toBe(fourthPatient);
    });
  });

  describe('Correctly handles errors', () => {
    test('throws an error when nothing added to queue', () => {
      const myQueue = new queue();
      expect(() => myQueue.Pop()).toThrow(
        new Error('there are no patients at all!')
      );
    });
  });
});

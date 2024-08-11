import queue from './queue';

describe('test queue', () => {
  const myQueue = new queue();
  const firstPatient = 1;
  const secondPatient = 2;
  const thirdPatient = 4;
  const fourthPatient = 2;
  describe('First Patient in is First Patient out', () => {
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
});

import quicksort from './quicksort';
describe('quicksort works', () => {
  test('correctly sorts [3,2,4,1] into ascending order', () => {
    const unsortedArray = [3, 2, 4, 1];
    const sortedArray = quicksort(unsortedArray);
    expect(sortedArray).toBe([1, 2, 3, 4]);
  });
});

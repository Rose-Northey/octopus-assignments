import quicksort from './quicksort';
describe('quicksort works', () => {
  test('correctly sorts [3,2,4,1] into ascending order', () => {
    const array = [3, 2, 4, 1];
    const sortedArray = [1, 2, 3, 4];
    quicksort(array);
    expect(array).toEqual(sortedArray);
  });
  test('correctly sorts [3,6,2,7,9,4,1] into ascending order', () => {
    const array = [3, 6, 2, 7, 9, 4, 1];
    const sortedArray = [1, 2, 3, 4, 6, 7, 9];
    quicksort(array);
    expect(array).toEqual(sortedArray);
  });
  test('correctly returns already sorted array', () => {
    const array = [1, 2, 3, 4, 6, 7, 9];
    const sortedArray = [1, 2, 3, 4, 6, 7, 9];
    quicksort(array);
    expect(array).toEqual(sortedArray);
  });
});

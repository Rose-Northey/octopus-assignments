import {sortingFunctions} from './quicksort';
// import {quicksort} from './quicksort';
describe('quicksortPretty', () => {
  test('sorts [3,2,4,1]', () => {
    const array = [3, 4, 2];
    const sortedArray = [2, 3, 4];
    const mySortingFunction = new sortingFunctions();
    const resultArray = mySortingFunction.quicksortPretty(array);
    console.log(
      `quickSortPretty ${mySortingFunction.functionCount} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('sorts [3,6,2,7,9,4,1]', () => {
    const array = [3, 6, 2, 7, 9, 4, 1];
    const sortedArray = [1, 2, 3, 4, 6, 7, 9];
    const mySortingFunction = new sortingFunctions();
    const resultArray = mySortingFunction.quicksortPretty(array);
    console.log(
      `quickSortPretty ${mySortingFunction.functionCount} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('correctly returns already sorted array', () => {
    const array = [1, 2, 3, 4, 6, 7, 9];
    const sortedArray = [1, 2, 3, 4, 6, 7, 9];
    const mySortingFunction = new sortingFunctions();
    const resultArray = mySortingFunction.quicksortPretty(array);
    console.log(
      `quickSortPretty ${mySortingFunction.functionCount} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('sorts long array', () => {
    const unsortedArray = [
      42, 76, 15, 3, 67, 55, 9, 24, 70, 81, 5, 62, 38, 13, 20, 86, 4, 58, 11,
      49, 93, 8, 99, 25, 34, 1, 96, 77, 28, 74, 7, 50, 89, 66, 23, 72, 17, 44,
      35, 91, 18, 61, 29, 100, 53, 26, 39, 21, 47, 68, 82, 92, 14, 60, 2, 32,
      30, 73, 78, 98, 63, 6, 87, 10, 90, 51, 22, 27, 36, 56, 88, 65, 19, 40, 41,
      97, 31, 48, 16, 12,
    ];
    const sortedArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 38, 39, 40, 41,
      42, 44, 47, 48, 49, 50, 51, 53, 55, 56, 58, 60, 61, 62, 63, 65, 66, 67,
      68, 70, 72, 73, 74, 76, 77, 78, 81, 82, 86, 87, 88, 89, 90, 91, 92, 93,
      96, 97, 98, 99, 100,
    ];
    const mySortingFunction = new sortingFunctions();
    const resultArray = mySortingFunction.quicksortPretty(unsortedArray);
    console.log(
      `quickSortPretty ${mySortingFunction.functionCount} iterations for long array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
});

describe('quicksortUgly', () => {
  test('sorts [3,2,4,1]', () => {
    const array = [3, 4, 2];
    const sortedArray = [2, 3, 4];
    const mySortingFunction = new sortingFunctions();
    const resultArray = mySortingFunction.quicksortUgly(array);
    console.log(
      `quicksortUgly ${mySortingFunction.functionCount} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('sorts [3,6,2,7,9,4,1]', () => {
    const array = [3, 6, 2, 7, 9, 4, 1];
    const sortedArray = [1, 2, 3, 4, 6, 7, 9];
    const mySortingFunction = new sortingFunctions();
    const resultArray = mySortingFunction.quicksortUgly(array);
    console.log(
      `quicksortUgly ${mySortingFunction.functionCount} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('correctly returns already sorted array', () => {
    const array = [1, 2, 3, 4, 6, 7, 9];
    const sortedArray = [1, 2, 3, 4, 6, 7, 9];
    const mySortingFunction = new sortingFunctions();
    const resultArray = mySortingFunction.quicksortUgly(array);
    console.log(
      `quicksortUgly ${mySortingFunction.functionCount} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('sorts long array', () => {
    const unsortedArray = [
      42, 76, 15, 3, 67, 55, 9, 24, 70, 81, 5, 62, 38, 13, 20, 86, 4, 58, 11,
      49, 93, 8, 99, 25, 34, 1, 96, 77, 28, 74, 7, 50, 89, 66, 23, 72, 17, 44,
      35, 91, 18, 61, 29, 100, 53, 26, 39, 21, 47, 68, 82, 92, 14, 60, 2, 32,
      30, 73, 78, 98, 63, 6, 87, 10, 90, 51, 22, 27, 36, 56, 88, 65, 19, 40, 41,
      97, 31, 48, 16, 12,
    ];
    const sortedArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 38, 39, 40, 41,
      42, 44, 47, 48, 49, 50, 51, 53, 55, 56, 58, 60, 61, 62, 63, 65, 66, 67,
      68, 70, 72, 73, 74, 76, 77, 78, 81, 82, 86, 87, 88, 89, 90, 91, 92, 93,
      96, 97, 98, 99, 100,
    ];
    const mySortingFunction = new sortingFunctions();
    const resultArray = mySortingFunction.quicksortUgly(unsortedArray);
    console.log(
      `quicksortUgly ${mySortingFunction.functionCount} iterations for long array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
});

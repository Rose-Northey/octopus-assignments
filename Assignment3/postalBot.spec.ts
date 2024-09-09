import {PostalBot} from './postalBot';
describe('quicksortPretty', () => {
  test('returns [] when given []', () => {
    const UAPB = new PostalBot();
    expect(UAPB.quicksortPretty([])).toEqual([]);
  });
  test('returns [1] when given [1]', () => {
    const UAPB = new PostalBot();
    expect(UAPB.quicksortPretty([1])).toEqual([1]);
  });
  test('sorts [3,2,4,1]', () => {
    const array = [3, 4, 2];
    const sortedArray = [2, 3, 4];
    const UAPB = new PostalBot();
    const resultArray = UAPB.quicksortPretty(array);
    console.log(
      `quickSortPretty ${UAPB.countRecursiveCalls} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('sorts [3,6,2,7,9,4,1]', () => {
    const array = [3, 6, 2, 7, 9, 4, 1];
    const sortedArray = [1, 2, 3, 4, 6, 7, 9];
    const UAPB = new PostalBot();
    const resultArray = UAPB.quicksortPretty(array);
    console.log(
      `quickSortPretty ${UAPB.countRecursiveCalls} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('correctly returns already sorted array', () => {
    const array = [1, 2, 3, 4, 6, 7, 9];
    const sortedArray = [1, 2, 3, 4, 6, 7, 9];
    const UAPB = new PostalBot();
    const resultArray = UAPB.quicksortPretty(array);
    console.log(
      `quickSortPretty ${UAPB.countRecursiveCalls} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('sorts array with repeated numbers', () => {
    const array = [1, 4, 2, 1, 4];
    const sortedArray = [1, 1, 2, 4, 4];
    const UAPB = new PostalBot();
    const resultArray = UAPB.quicksortPretty(array);
    console.log(
      `quickSortPretty ${UAPB.countRecursiveCalls} iterations for ${array} array`
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
    const UAPB = new PostalBot();
    const resultArray = UAPB.quicksortPretty(unsortedArray);
    console.log(
      `quickSortPretty ${UAPB.countRecursiveCalls} iterations for long array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
});

describe('quickSort', () => {
  test('returns [] when given []', () => {
    const UAPB = new PostalBot();
    expect(UAPB.quickSort([])).toEqual([]);
  });
  test('returns [1] when given [1]', () => {
    const UAPB = new PostalBot();
    expect(UAPB.quickSort([1])).toEqual([1]);
  });
  test('sorts [3,2,4,1]', () => {
    const array = [3, 4, 2];
    const sortedArray = [2, 3, 4];
    const UAPB = new PostalBot();
    const resultArray = UAPB.quickSort(array);
    console.log(
      `quickSort ${UAPB.countRecursiveCalls} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('sorts [3,6,2,7,9,4,1]', () => {
    const array = [3, 6, 2, 7, 9, 4, 1];
    const sortedArray = [1, 2, 3, 4, 6, 7, 9];
    const UAPB = new PostalBot();
    const resultArray = UAPB.quickSort(array);
    console.log(
      `quickSort ${UAPB.countRecursiveCalls} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('correctly returns already sorted array', () => {
    const array = [1, 2, 3, 4, 6, 7, 9];
    const sortedArray = [1, 2, 3, 4, 6, 7, 9];
    const UAPB = new PostalBot();
    const resultArray = UAPB.quickSort(array);
    console.log(
      `quickSort ${UAPB.countRecursiveCalls} iterations for ${array} array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
  test('sorts array with repeated numbers', () => {
    const array = [1, 4, 2, 1, 4];
    const sortedArray = [1, 1, 2, 4, 4];
    const UAPB = new PostalBot();
    const resultArray = UAPB.quickSort(array);
    console.log(
      `quickSort ${UAPB.countRecursiveCalls} iterations for ${array} array`
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
    const UAPB = new PostalBot();
    const resultArray = UAPB.quickSort(unsortedArray);
    console.log(
      `quickSort ${UAPB.countRecursiveCalls} iterations for long array`
    );
    expect(resultArray).toEqual(sortedArray);
  });
});

test.each([
  {allMail: [], expectedNumberLetters: 0},
  {allMail: [3], expectedNumberLetters: 0},
  {allMail: [4], expectedNumberLetters: 1},
  {allMail: [4, 1], expectedNumberLetters: 1},
  {allMail: [7, 5, 2, 1, 7, 4, 19], expectedNumberLetters: 1},
  {allMail: [7, 5, 2, 1, 7, 3, 19], expectedNumberLetters: 0},
  {allMail: [7, 5, 4, 1, 7, 4, 19], expectedNumberLetters: 2},
  {allMail: [7, 5, 4, 1, 4, 7, 4, 19, 4], expectedNumberLetters: 4},
])(
  'given allMail, find correct expectedNumberLetters for houseNumber 4',
  ({allMail, expectedNumberLetters}) => {
    const UAPB = new PostalBot();
    UAPB.addMail(allMail);
    const actualNumberOfLetters = UAPB.getMailCountForHouseNumber(4);
    expect(actualNumberOfLetters).toBe(expectedNumberLetters);
  }
);

test.each([
  {allMail: []},
  {allMail: [3]},
  {allMail: [4]},
  {allMail: [4, 1]},
  {allMail: [7, 5, 2, 1, 7, 4, 19]},
  {allMail: [7, 5, 2, 1, 7, 3, 19]},
  {allMail: [7, 5, 4, 1, 7, 4, 19]},
  {allMail: [7, 5, 4, 1, 4, 7, 4, 19, 4]},
])(
  'given allMail, ensure all mail for house number 4 is deleted from post office records',
  ({allMail}) => {
    const UAPB = new PostalBot();
    UAPB.addMail(allMail);
    UAPB.getMailCountForHouseNumber(4);
    expect(UAPB.mail).not.toContain(4);
  }
);

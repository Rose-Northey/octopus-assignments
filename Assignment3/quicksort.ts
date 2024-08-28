// Make a function to sort each element into place

export default function quicksort(
  array: number[],
  iPivot = 0,
  iLastInSortRange = array.length - 1
) {
  const iLastLower = findIndexOfLowerFromRight(array, iPivot, iLastInSortRange);
  const iFirstHigher = findIndexOfHigherFromLeft(
    array,
    iPivot,
    iLastInSortRange
  );
  if (!iLastLower) {
    iPivot++;
  } else if (!iFirstHigher) {
    swapValues(array, iPivot, iLastInSortRange);
    iLastInSortRange--;
  } else if (iFirstHigher > iLastLower) {
    swapValues(array, iPivot, iLastLower);
  } else if (iFirstHigher < iLastLower) {
    swapValues(array, iFirstHigher, iLastLower);
  }

  if (iPivot < iLastInSortRange) {
    return quicksort(array, iPivot, iLastInSortRange);
  }
  return array;
}

function findIndexOfLowerFromRight(
  array: number[],
  iPivot: number,
  iLastInSortRange: number
): number | undefined {
  for (let i = iLastInSortRange; i > iPivot; i--)
    if (array[i] < array[iPivot]) {
      return i;
    }
}

function findIndexOfHigherFromLeft(
  array: number[],
  iPivot: number,
  iLastInSortRange: number
): number | undefined {
  for (let i = iPivot + 1; i <= iLastInSortRange; i++) {
    if (array[i] > array[iPivot]) {
      return i;
    }
  }
}

function swapValues(array: number[], iOne: number, iTwo: number): void {
  const oldOne = array[iOne];
  array[iOne] = array[iTwo];
  array[iTwo] = oldOne;
}

export default function quicksort(
  array: number[],
  lowerBound = 0,
  upperBound = array.length - 1
) {
  const pivot = array[lowerBound];
  let iLeft = lowerBound + 1;
  const iHigherFromLeft = findIndexOfHigherFromLeft(
    array,
    lowerBound + 1,
    upperBound,
    pivot
  );
  if (iHigherFromLeft === undefined) {
    lowerBound++;
    return quicksort(array, lowerBound, upperBound);
  }
  const iLowerFromRight = findIndexOfLowerFromRight(
    array,
    lowerBound + 1,
    upperBound,
    pivot
  );
  if (iLowerFromRight === undefined) {
    const highest = array[lowerBound];
    array[lowerBound] = array[upperBound];
    array[upperBound] = highest;
    upperBound--;
    return quicksort(array, lowerBound, upperBound);
  }
  if (iHigherFromLeft < iLowerFromRight) {
    const higher = array[iHigherFromLeft];
    array[iHigherFromLeft] = array[iLowerFromRight];
    array[iLowerFromRight] = higher;
    return quicksort(array, lowerBound, upperBound);
  }
  if (iHigherFromLeft < iLowerFromRight) {
    array[lowerBound] = array[iLowerFromRight];
    array[iLowerFromRight] = pivot;
    return quicksort(array, lowerBound, i);
  }
}
//first item in the ray is pivot
// if next number is higher than pivot, it is HigherOnLeft
// if no items are higher than the pivot, call the function again but leave out the pivot

//HigherOnLeft
//LowerOnRight

function findIndexOfLowerFromRight(
  array: number[],
  iStart: number,
  iEnd: number,
  pivot: number
): number | undefined {
  for (let i = iEnd; i >= iStart; i--) {
    if (array[i] < pivot) {
      return i;
    }
  }
}

function findIndexOfHigherFromLeft(
  array: number[],
  iStart: number,
  iEnd: number,
  pivot: number
): number | undefined {
  for (let i = iStart; i <= iEnd; i++) {
    if (array[i] > pivot) {
      return i;
    }
  }
}

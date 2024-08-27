export default function quicksort(
  array: number[],
  iLowerLimit = 0,
  iUpperLimit = array.length - 1
) {
  const pivot = array[iLowerLimit];
  let iLeft = iLowerLimit + 1;
  const iHigherFromLeft = findIndexOfHigherFromLeft(
    array,
    iLowerLimit + 1,
    iUpperLimit,
    pivot
  );
  if (iHigherFromLeft === undefined) {
    iLowerLimit++;
    return quicksort(array, iLowerLimit, iUpperLimit);
  }
  const iLowerFromRight = findIndexOfLowerFromRight(
    array,
    iLowerLimit + 1,
    iUpperLimit,
    pivot
  );
  if (iLowerFromRight === undefined) {
    const highest = array[iLowerLimit];
    array[iLowerLimit] = array[iUpperLimit];
    array[iUpperLimit] = highest;
    iUpperLimit--;
    return quicksort(array, iLowerLimit, iUpperLimit);
  }
  if (iHigherFromLeft < iLowerFromRight) {
    const higher = array[iHigherFromLeft];
    array[iHigherFromLeft] = array[iLowerFromRight];
    array[iLowerFromRight] = higher;
    return quicksort(array, iLowerLimit, iUpperLimit);
  }
  if (iHigherFromLeft < iLowerFromRight) {
    array[iLowerLimit] = array[iLowerFromRight];
    array[iLowerFromRight] = pivot;
    return quicksort(array, iLowerLimit, i);
  }
  // how do I call quicksort for both the upper and lower section??
}

// when I find their true position I push them into a new array??
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

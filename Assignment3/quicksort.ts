export class sortingFunctions {
  functionCount: number;
  constructor() {
    this.functionCount = 0;
  }
  public quicksortPretty(array: number[]): number[] {
    this.functionCount++;
    if (array.length <= 1) {
      return array;
    }

    const pivot = this.findOptimisedPivot(array);
    const highArray = [];
    const lowArray = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] > pivot) {
        highArray.push(array[i]);
      } else {
        lowArray.push(array[i]);
      }
    }
    return [
      ...this.quicksortPretty(lowArray),
      pivot,
      ...this.quicksortPretty(highArray),
    ];
  }
  public quicksortUgly(
    array: number[],
    iPivot = 0,
    iLastInSortRange = array.length - 1
  ): number[] {
    this.functionCount++;
    const iLastLower = this.findIndexOfLowerFromRight(
      array,
      iPivot,
      iLastInSortRange
    );
    const iFirstHigher = this.findIndexOfHigherFromLeft(
      array,
      iPivot,
      iLastInSortRange
    );
    if (!iLastLower) {
      iPivot++;
    } else if (!iFirstHigher) {
      this.swapValues(array, iPivot, iLastInSortRange);
      iLastInSortRange--;
    } else if (iFirstHigher > iLastLower) {
      this.swapValues(array, iPivot, iLastLower);
    } else if (iFirstHigher < iLastLower) {
      this.swapValues(array, iFirstHigher, iLastLower);
    }

    if (iPivot < iLastInSortRange) {
      return this.quicksortUgly(array, iPivot, iLastInSortRange);
    }
    return array;
  }

  findOptimisedPivot(array: number[]): number {
    if (array.length > 3) {
      const arrayMiddleIndex = Math.floor(array.length / 2);
      const optimalPivot = this.quicksortPretty([
        array[0],
        array[arrayMiddleIndex],
        array[array.length - 1],
      ])[1];

      if (array[arrayMiddleIndex] === optimalPivot) {
        this.swapValues(array, arrayMiddleIndex, 0);
      } else if (array[array.length - 1] === optimalPivot) {
        this.swapValues(array, array.length - 1, 0);
      }
    }
    return array[0];
  }
  swapValues(array: number[], iOne: number, iTwo: number): void {
    const oldOne = array[iOne];
    array[iOne] = array[iTwo];
    array[iTwo] = oldOne;
  }
  findIndexOfLowerFromRight(
    array: number[],
    iPivot: number,
    iLastInSortRange: number
  ): number | undefined {
    for (let i = iLastInSortRange; i > iPivot; i--)
      if (array[i] < array[iPivot]) {
        return i;
      }
  }
  findIndexOfHigherFromLeft(
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
}

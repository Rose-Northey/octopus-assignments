export class FibonacciBottomUp {
  cachedSequence: number[];
  constructor() {
    this.cachedSequence = [0, 1];
  }
  public getNumberAtIndex(desiredIndex: number): number {
    if (this.cachedSequence.length > desiredIndex) {
      return this.cachedSequence[desiredIndex];
    } else {
      this.cachedSequence.push(
        this.cachedSequence[this.cachedSequence.length - 1] +
          this.cachedSequence[this.cachedSequence.length - 2]
      );
      return this.getNumberAtIndex(desiredIndex);
    }
  }
}

export class FibonacciStore {
  cachedSequence: number[];
  constructor() {
    this.cachedSequence = [0, 1];
  }
  public getNumberAtIndex(desiredIndex: number): number {
    if (this.cachedSequence[desiredIndex] === undefined) {
      this.cachedSequence.push(
        this.getNumberAtIndex(desiredIndex - 1) +
          this.getNumberAtIndex(desiredIndex - 2)
      );
    }
    return this.cachedSequence[desiredIndex];
  }
}

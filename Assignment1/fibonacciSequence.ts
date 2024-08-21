export class Fibonacci {
  cachedSequence: number[];
  topNumber: number;
  beforeTopNumber: number;
  constructor() {
    this.cachedSequence = [0, 1];
    this.topNumber = this.cachedSequence[1];
    this.beforeTopNumber = this.cachedSequence[0];
  }
  public getNumberAtIndex(desiredIndex: number): number {
    if (this.cachedSequence.length > desiredIndex) {
      return this.cachedSequence[desiredIndex];
    } else {
      this.topNumber = this.topNumber + this.beforeTopNumber;
      this.beforeTopNumber = this.topNumber - this.beforeTopNumber;
      this.cachedSequence.push(this.topNumber);
      return this.getNumberAtIndex(desiredIndex);
    }
  }
}

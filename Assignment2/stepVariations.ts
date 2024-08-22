export class StepVariationsTopDown {
  cachedNumberOfVariations: number[];
  constructor() {
    this.cachedNumberOfVariations = [0, 1, 2];
  }
  public getNumberOfVariations(stepsLeft: number): number {
    if (this.cachedNumberOfVariations[stepsLeft] !== undefined) {
      return this.cachedNumberOfVariations[stepsLeft];
    } else {
      this.cachedNumberOfVariations[stepsLeft] =
        this.getNumberOfVariations(stepsLeft - 1) +
        this.getNumberOfVariations(stepsLeft - 2);
      return this.cachedNumberOfVariations[stepsLeft];
    }
  }
}

export class stepVariationsBottomUp {
  cachedNumberOfVariations: number[];
  constructor() {
    this.cachedNumberOfVariations = [0, 1, 2];
  }
  public getNumberOfVariations(stepsLeft: number): number {
    if (stepsLeft >= this.cachedNumberOfVariations.length) {
      this.cachedNumberOfVariations.push(
        this.cachedNumberOfVariations[
          this.cachedNumberOfVariations.length - 1
        ] +
          this.cachedNumberOfVariations[
            this.cachedNumberOfVariations.length - 2
          ]
      );
    } else {
      return this.cachedNumberOfVariations[stepsLeft];
    }
    return this.getNumberOfVariations(stepsLeft);
  }
}

export class terribleStepVariations {
  stepCount: number;
}

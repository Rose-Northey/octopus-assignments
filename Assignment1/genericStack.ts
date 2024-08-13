export class GenericPlate<DataType> {
  public data: DataType;
  public lowerPlate: GenericPlate<DataType> | undefined;

  constructor(
    newData: DataType,
    lowerPlate: GenericPlate<DataType> | undefined
  ) {
    this.lowerPlate = lowerPlate;
    this.data = newData;
  }
  public printData() {
    return this.data;
  }
}

export class GenericStack<DataType> {
  public topPlate: GenericPlate<DataType> | undefined;
  public bottomPlate: GenericPlate<DataType> | undefined;
  public size: number;
  constructor() {
    this.size = 0;
    this.topPlate = undefined;
  }
  public Push(newPlateData: DataType) {
    const newPlate = new GenericPlate(newPlateData, this.topPlate);
    if (!this.bottomPlate) {
      this.bottomPlate = newPlate;
    }
    this.topPlate = newPlate;
    this.size++;
    return this.topPlate.data;
  }
  public Pop() {
    if (this.size === 1) {
      this.bottomPlate === undefined;
    }
    if (!this.topPlate) {
      throw new Error('no plates to pop');
    } else {
      const poppedPlateData = this.topPlate.data;
      this.topPlate = this.topPlate.lowerPlate;
      this.size--;
      return poppedPlateData;
    }
  }
  public PeakTop() {
    if (!this.topPlate) {
      throw new Error('no plates in the stack');
    } else {
      return this.topPlate.data;
    }
  }
  public PeakBottom() {
    if (!this.bottomPlate) {
      throw new Error('no plates in the stack');
    } else {
      return this.bottomPlate.data;
    }
  }
}

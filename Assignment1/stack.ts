export class Plate {
  public data: number;
  public max: number;
  public lowerPlate: Plate | undefined;

  constructor(newData: number, lowerPlate: Plate | undefined) {
    this.lowerPlate = lowerPlate;
    this.data = newData;
    if (!lowerPlate || newData > lowerPlate.max) {
      this.max = newData;
    } else {
      this.max = lowerPlate.max;
    }
  }
  public printData() {
    return this.data;
  }
}

export class Stack {
  public topPlate: Plate | undefined;
  public bottomPlate: Plate | undefined;
  public size: number;
  constructor() {
    this.size = 0;
    this.topPlate = undefined;
  }
  public Push(newPlateData: number) {
    const newPlate = new Plate(newPlateData, this.topPlate);
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
  public Max() {
    if (!this.topPlate) {
      throw new Error('no plates in the stack');
    } else {
      return this.topPlate.max;
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
// create a plate
// make the plate refer to the lowerPlate which is also of type plate
// create a stack
//

// const newPlateMax = newPlateData > this.topPlate.max? newPlateData: this.topPlate.max;

// export default class stack {
//   data: number[];
//   maxNumbers: number[];

//   constructor() {
//     this.data = [];
//     this.maxNumbers = [];
//   }
//   Push(newNumber: number) {
//     this.data.push(newNumber);

//     const currentMax = this.maxNumbers[this.maxNumbers.length - 1];

//     if (!currentMax || newNumber >= currentMax) {
//       this.maxNumbers.push(newNumber);
//     } else {
//       this.maxNumbers.push(currentMax);
//     }
//   }

//   Pop() {
//     this.data.pop();
//     this.maxNumbers.pop();
//   }

//   Max() {
//     if (!this.maxNumbers.length) {
//       throw new Error('there are no numbers in this stack!');
//     }
//     return this.maxNumbers[this.maxNumbers.length - 1];
//   }
// }

export default class queue {
  private data: number[];
  iFront: number;
  iBack: number;
  iMax: number;
  // orderedData: number[] you won't know where to put numbers which fall in between maximums

  constructor() {
    this.data = new Array(5);
    this.iFront = 0;
    this.iBack = 0;
    this.iMax = 0;
  }
  Push(newNumber: number) {
    this.data[this.iBack] = newNumber;
    this.iBack++;
  }
  Pop() {
    if (this.iFront === this.iBack) {
      throw new Error('Nothing to pop!');
    }
    const returnedValue = this.data[this.iFront];
    this.iFront++;
    return returnedValue;
  }
  ToList() {
    return this.data;
  }
  Max() {}
}

// this.data[this.iFront] = undefined;
// INDEX LOOKUP IS constant Big O notation!!
// Maximum array but with indexes?
// e.g. [6, 3, 5, 2]
//
//store the index of the maximum numbers NOT the actual number
// maximumIndexes = 0
// -> for each number you add, compare it to the index at the maximum index point
// when you add one to the end, imagine that you are
// 2nd max index
// [6, 5, 5, 2]
// AND if you had [6, 3, 5, 2, 7] -> [7, 7, 7, 7, 7]
// HOW DO I MAKE THIS?
// [6] -> [6]
// [6, 3] -> [6, 3]
// [6, 3, 5] -> [6, 5, 5] change previous to 5
// [6, 3, 5, 2] -> [6, 5, 5, 2]
// [6, 3, 5, 2, 7] -> change all to 7 [7,7,7,7,7] DOES EXPAND WITH N

// If I have a maximum index array I would want it to be
// [0 2 2 3]
// so if nothing is popped, index points to 6, if 6 is popped index points to 5, if 5 is popped, index points to 2

// HOW DO I MAKE THIS
// [6] -> [0]
// [6, 3] -> [0, 1]
// [6, 3, 5] -> I check out what is at 1 and compare it to my new number IF its bigger, then

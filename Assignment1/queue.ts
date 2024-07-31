export default class queue {
  data: {[key: number]: number};
  iFront: number;
  iBack: number;

  constructor() {
    this.data = [];
    this.iFront = 0;
    this.iBack = 0;
  }
  Push(newNumber: number) {
    this.data[this.iBack] = newNumber;
    this.iBack++;
    console.log(this.data);
  }
  Pop() {
    delete this.data[this.iFront];
    this.iFront++;
  }

  // Max() {
  // }
  // [1 2 5 7 2 9 2 6 3 0 6]
  // [1 2 5 7 2 9 2 6 3 0 6] -> 9
  // [2 5 7 2 9 2 6 3 0 6] -> 9
  // [2 6 3 0 6] -> 6
  // [2 6 3 0 6 8] -> 8
}

// there are 2 types of changes to the max number
// 1. changes to front of queue
// 2. changes to back of the queue
// -------> Any number could be the maximum given those two changes

export default class queue {
  data: (number | undefined)[];
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
  }
  Pop() {
    this.data[this.iFront] = undefined;
    this.iFront++;
  }
}
// maxLength = 3
// queues don't need to be reusable
[1, 2, 3];

// export default class queue {
//   data: {[key: number]: number};
//   iFront: number;
//   iBack: number;
//   // max: {[key: number]: number};

//   constructor() {
//     this.data = {};
//     this.iFront = 0;
//     this.iBack = 0;
//     // this.max = {};
//   }
//   Push(newNumber: number) {
//     this.data[this.iBack] = newNumber;
//     this.iBack++;
//   }
//   Pop() {
//     delete this.data[this.iFront];
//     this.iFront++;
//   }
// }

// Max() {
// }
// [1 2 5 7 2 9 2 6 3 0 6] -> 9
// [1 2 5 7 7 9 9 9 9 9 9]

// [2 5 7 2 9 2 6 3 0 6] -> 9
// [2 6 3 0 6] -> 6
// [2 6 3 0 6 8] -> 8

// there are 2 types of changes to the max number
// 1. changes to front of queue
// 2. changes to back of the queue
// -------> Any number could be the maximum given those two changes

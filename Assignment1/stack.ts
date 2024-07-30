export default class stack {
  data: number[];
  maxNumbers: number[];

  constructor() {
    this.data = [];
    this.maxNumbers = [];
  }
  Push(newNumber: number) {
    this.data.push(newNumber);

    const currentMax = this.maxNumbers[this.maxNumbers.length - 1];

    if (!currentMax || newNumber >= currentMax) {
      this.maxNumbers.push(newNumber);
    } else {
      this.maxNumbers.push(currentMax);
    }
  }

  Pop() {
    this.data.pop();
    this.maxNumbers.pop();
  }

  Max() {
    if (!this.maxNumbers.length) {
      throw new Error('there are no numbers in this stack!');
    }
    return this.maxNumbers[this.maxNumbers.length - 1];
  }
}

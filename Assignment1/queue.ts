import {Stack} from './stack';
export default class queue {
  public inPatients: Stack;
  public outPatients: Stack;
  constructor() {
    this.inPatients = new Stack();
    this.outPatients = new Stack();
  }
  public Push(ailments: number) {
    this.inPatients.Push(ailments);
  }
  public Pop() {
    if (!this.inPatients.size && !this.outPatients.size) {
      throw new Error('no patients to pop');
    }
    if (this.outPatients.size === 0) {
      while (this.inPatients.size > 0) {
        this.outPatients.Push(this.inPatients.Pop());
      }
    }
    this.outPatients.Pop();
  }
  public Max() {
    if (!this.inPatients.size && !this.outPatients.size) {
      throw new Error('no patients at all');
    }
    let inPatientsMax = 0;
    let outPatientsMax = 0;
    if (this.inPatients.size > 0) {
      inPatientsMax = this.inPatients.Max();
    }
    if (this.outPatients.size > 0) {
      outPatientsMax = this.outPatients.Max();
    }
    return Math.max(inPatientsMax, outPatientsMax);
  }
}

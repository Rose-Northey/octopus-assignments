import {Stack} from './stack';
export default class queue {
  public inPatients: Stack;
  public outPatients: Stack;
  public queueSize: number;

  constructor() {
    this.inPatients = new Stack();
    this.outPatients = new Stack();
    this.queueSize = 0;
  }

  public Push(ailments: number) {
    this.inPatients.Push(ailments);
    this.queueSize++;
  }

  public Pop() {
    this.throwErrorIfQueueEmpty();
    if (this.outPatients.size === 0) {
      while (this.inPatients.size > 0) {
        this.outPatients.Push(this.inPatients.Pop());
      }
    }
    this.queueSize--;
    return this.outPatients.Pop();
  }

  public Max() {
    this.throwErrorIfQueueEmpty();
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

  public FrontOfQueue() {
    this.throwErrorIfQueueEmpty();
    if (this.outPatients.size > 0) {
      return this.outPatients.PeakTop();
    } else {
      return this.inPatients.PeakBottom();
    }
  }

  public BackOfQueue() {
    this.throwErrorIfQueueEmpty();
    if (this.inPatients.size > 0) {
      return this.inPatients.PeakTop();
    } else {
      return this.outPatients.PeakBottom();
    }
  }

  private throwErrorIfQueueEmpty() {
    if (this.queueSize === 0) {
      throw new Error('there are no patients at all!');
    }
  }
}

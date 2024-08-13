import {GenericStack} from './genericStack';

export default class queue<DataType> {
  public inPatients: GenericStack<DataType>;
  public outPatients: GenericStack<DataType>;
  public queueSize: number;

  constructor() {
    this.inPatients = new GenericStack<DataType>();
    this.outPatients = new GenericStack<DataType>();
    this.queueSize = 0;
  }

  public Push(ailments: DataType) {
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

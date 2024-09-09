// create a node which has...
//      one parent (or undefined)
//      one left (or undefined)
//      one right (or undefined)

class Nodule {
  parent: Nodule | undefined;
  left: Nodule | undefined;
  right: Nodule | undefined;
  houseNumber: number;
  constructor(
    parent: Nodule | undefined,
    left: Nodule | undefined,
    right: Nodule | undefined,
    houseNumber: number
  ) {
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.houseNumber = houseNumber;
  }
}

export class BinaryTree {
  root: Nodule | undefined;
  constructor();
}

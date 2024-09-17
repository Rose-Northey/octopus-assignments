class nodule {
  parent: nodule | undefined;
  left: nodule | undefined;
  right: nodule | undefined;
  height: number;
  balance: number;
  houseNumber: number;
  constructor(
    parent: nodule | undefined,
    left: nodule | undefined,
    right: nodule | undefined,
    houseNumber: number
  ) {
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.houseNumber = houseNumber;
    this.balance = 0;
    this.height = 1;
  }
  calculateBalance = () => {
    this.balance = (this.left?.height ?? 0) - (this.right?.height ?? 0);
  };
  calculateHeight = () => {
    1 + Math.max(this.left?.height ?? 0, this.right?.height ?? 0);
  };
  determineRotationType = () => {
    if (this.balance > 1) {
      if ((this.left?.balance ?? 0) > 0) {
        // perform RIGHT rotation
      }
      if ((this.left?.balance ?? 0) < 0) {
        // perform LEFT RIGHT rotation
      }
    }
    if (this.balance < -1) {
      if ((this.right?.balance ?? 0) < 0) {
        // RIGHT
        // perform right totation on this node
      }
      if ((this.right?.balance ?? 0) > 0) {
        // LEFT RIGHT
        // perform left rotation on right node
        // perform right rotation on this node
      }
    }
  };
  leftRotation = (rotatingNode: nodule) => {
    // node y = one underneath
    // node x = one ontop
  };
}

// if there are children, take the tallest child height +1
// if there are no children, height = 1

// height left - height right

export class BinaryTree {
  root: nodule | undefined;
  sortedArray: nodule[];
  constructor() {
    this.sortedArray = [];
    this.root = undefined;
  }
  public addPackage(houseNumber: number) {
    const incomingPackage = new nodule(
      undefined,
      undefined,
      undefined,
      houseNumber
    );
    addToSortedArray(incomingPackage);
    balanceTree();
  }

  addToSortedArray(incomingPackage: nodule) {}
  balanceTree() {}
}

// items will be added one at a time
// first item goes in the root
// create an ordered list and also have it be the root
//

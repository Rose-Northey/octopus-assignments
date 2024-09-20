class Parcel {
  parent: Parcel | undefined;
  left: Parcel | undefined;
  right: Parcel | undefined;
  height: number;
  balance: number;
  houseNumber: number;
  constructor(houseNumber: number) {
    this.houseNumber = houseNumber;
    this.balance = 0;
    this.height = 1;
  }
  calculateBalance = () => {
    this.balance = (this.left?.height ?? 0) - (this.right?.height ?? 0);
  };
  calculateHeightAndBalance = () => {
    const oldHeight = this.height;
    this.height = 1 + Math.max(this.left?.height ?? 0, this.right?.height ?? 0);
    this.balance = (this.left?.height ?? 0) - (this.right?.height ?? 0);
    if (this.height === oldHeight || !this.parent) {
      return;
    } else {
      this.parent.calculateHeightAndBalance();
    }
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
  leftRotation = (rotatingNode: Parcel) => {
    // node y = one underneath
    // node x = one ontop
  };
}

// if there are children, take the tallest child height +1
// if there are no children, height = 1

// height left - height right

export class ParcelTree {
  root: Parcel | undefined;

  public addParcel(houseNumber: number) {
    const incomingParcel = new Parcel(houseNumber);
    if (!this.root) {
      this.root = incomingParcel;
      return;
    } else {
      this.findParcelHome(incomingParcel, this.root);
    }
  }
  findParcelHome(homelessParcel: Parcel, potentialParent: Parcel) {
    if (homelessParcel.houseNumber <= potentialParent.houseNumber) {
      if (!potentialParent.left) {
        potentialParent.left = homelessParcel;
        homelessParcel.parent = potentialParent;
        homelessParcel.parent.calculateHeightAndBalance();
      } else {
        this.findParcelHome(homelessParcel, potentialParent.left);
      }
    } else {
      if (!potentialParent.right) {
        potentialParent.right = homelessParcel;
        homelessParcel.parent = potentialParent;
        homelessParcel.parent.calculateHeightAndBalance();
      } else {
        this.findParcelHome(homelessParcel, potentialParent.right);
      }
    }
  }
}

// findPlacement
// start at the root
// if < root.houseNUmber -> {{put in left}}
// {{{make root the parent of the new node}}}

// items will be added one at a time
// first item goes in the root
// create an ordered list and also have it be the root
//

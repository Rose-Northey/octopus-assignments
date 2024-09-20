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
}

export class ParcelTree {
  root: Parcel | undefined;

  public addParcel(houseNumber: number) {
    const incomingParcel = new Parcel(houseNumber);
    if (!this.root) {
      this.root = incomingParcel;
      return;
    } else {
      this.placeParcel(incomingParcel, this.root);
    }
  }
  calculateHeightAndBalance = (parcel: Parcel) => {
    const left = parcel.left;
    const right = parcel.right;
    const parent = parcel.parent;
    const oldHeight = parcel.height;

    parcel.height = 1 + Math.max(left?.height ?? 0, right?.height ?? 0);
    parcel.balance = (left?.height ?? 0) - (right?.height ?? 0);

    if (parcel.balance < -1 || parcel.balance > 1) {
      this.rotateParcel(parcel);
    }

    if (parcel.height === oldHeight || !parent) {
      return;
    } else {
      this.calculateHeightAndBalance(parent);
    }
  };

  placeParcel(homelessParcel: Parcel, potentialParent: Parcel) {
    if (homelessParcel.houseNumber <= potentialParent.houseNumber) {
      if (!potentialParent.left) {
        potentialParent.left = homelessParcel;
        homelessParcel.parent = potentialParent;
        this.calculateHeightAndBalance(homelessParcel);
      } else {
        this.placeParcel(homelessParcel, potentialParent.left);
      }
    } else {
      if (!potentialParent.right) {
        potentialParent.right = homelessParcel;
        homelessParcel.parent = potentialParent;
        this.calculateHeightAndBalance(homelessParcel.parent);
      } else {
        this.placeParcel(homelessParcel, potentialParent.right);
      }
    }
  }
  leftRotation(parcel: Parcel) {
    const parent = parcel.parent;
    const replacementParcel = parcel.right;
    if (!parent && replacementParcel) {
      this.root = replacementParcel;
      this.root.parent = undefined;
    } else if (parent && replacementParcel) {
      parent.right = replacementParcel;
    } else if (replacementParcel) {
      this.placeParcel(parcel, replacementParcel);
    } else {
      console.log('something went wrong 1');
    }
  }

  //  5
  // 4 6
  //    7
  //     8
  rotateParcel = (parcel: Parcel) => {
    this.leftRotation(parcel);
    // if (parcel.balance > 1) {
    //   if ((parcel.left?.balance ?? 0) > 0) {
    //     // perform RIGHT rotation
    //   }
    //   if ((parcel.left?.balance ?? 0) < 0) {
    //     // perform LEFT RIGHT rotation
    //   }
    // }
    // if (parcel.balance < -1) {
    //   if ((parcel.right?.balance ?? 0) < 0) {

    //   }
    //   if ((parcel.right?.balance ?? 0) > 0) {
    //     // LEFT RIGHT
    //     // perform left rotation on right node
    //     // perform right rotation on this node
    //   }
    // }
  };
}

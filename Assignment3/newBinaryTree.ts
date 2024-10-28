class Parcel {
  parent: Parcel | undefined;
  data: number;
  left: Parcel | undefined;
  right: Parcel | undefined;
  height: number;
  balance: number;

  constructor(data: number) {
    this.data = data;
    this.height = 1;
    this.balance = 0;
  }
}
type ParcelWithLeft = Parcel & {left: Parcel};

export class ParcelTree {
  root: Parcel | undefined;
  public addParcel(data: number) {
    const newParcel = new Parcel(data);
    if (!this.root) {
      this.root = newParcel;
      console.log(`root changed to ${this.root.data}`);
    } else this.placeParcel(this.root, newParcel);
  }
  placeParcel(parcelInTree: Parcel, parcelToPlace: Parcel) {
    if (parcelToPlace.data <= parcelInTree.data) {
      if (!parcelInTree.left) {
        parcelInTree.left = parcelToPlace;
        parcelToPlace.parent = parcelInTree;
        this.recalculateHeightsAndBalancesOfBranch(parcelToPlace);
      } else {
        this.placeParcel(parcelInTree.left, parcelToPlace);
      }
    } else {
      if (!parcelInTree.right) {
        parcelInTree.right = parcelToPlace;
        parcelToPlace.parent = parcelInTree;
        this.recalculateHeightsAndBalancesOfBranch(parcelToPlace);
      } else {
        this.placeParcel(parcelInTree.right, parcelToPlace);
      }
    }
    return;
  }

  recalculateHeightsAndBalancesOfBranch(parcel: Parcel) {
    parcel.height = this.calculateHeight(parcel);
    parcel.balance = this.calculateBalance(parcel);
    if (Math.abs(parcel.balance) > 1) {
      this.rebalanceBranch(parcel);
    } else if (parcel.parent) {
      this.recalculateHeightsAndBalancesOfBranch(parcel.parent);
    }
    return;
  }

  calculateHeight(parcel: Parcel) {
    return 1 + Math.max(parcel.left?.height ?? 0, parcel.right?.height ?? 0);
  }
  calculateBalance(parcel: Parcel) {
    return (parcel.left?.height ?? 0) - (parcel.right?.height ?? 0);
  }
  rebalanceBranch(unbalancedParcel: Parcel) {
    if (unbalancedParcel.balance > 1 && unbalancedParcel.left) {
      if (unbalancedParcel.left?.balance > 0) {
        console.log('right rotation');
        this.rightRotation(unbalancedParcel);
      } else if (unbalancedParcel.left?.balance < 0) {
        console.log('rightLeft rotation');
        this.rightLeftRotation(unbalancedParcel);
      }
    } else if (unbalancedParcel.balance < -1 && unbalancedParcel.right) {
      if (unbalancedParcel.right?.balance < 0) {
        console.log('left rotation');
        this.leftRotation(unbalancedParcel);
      } else if (unbalancedParcel.right?.balance > 0) {
        console.log('leftRight rotation');
        this.leftRightRotation(unbalancedParcel);
      }
    }
  }
  rightRotation(unbalancedParcel: Parcel): void {
    if (unbalancedParcel.left) {
      const newTop = unbalancedParcel.left;
      if (unbalancedParcel === this.root) {
        this.root = newTop;
        console.log(`root changed to ${this.root.data}`);
      }
      if (unbalancedParcel.parent) {
        unbalancedParcel.parent.left = newTop;
      }
      newTop.parent = unbalancedParcel.parent;
      unbalancedParcel.left = undefined;
      unbalancedParcel.parent = undefined;
      this.recalculateHeightsAndBalancesOfBranch(unbalancedParcel);
      this.placeParcel(newTop, unbalancedParcel);
    }
  }
  leftRotation(unbalancedParcel: Parcel): void {
    if (unbalancedParcel.right) {
      const newTop = unbalancedParcel.right;
      if (unbalancedParcel === this.root) {
        this.root = newTop;
        console.log(`root changed to ${this.root.data}`);
      }
      if (unbalancedParcel.parent) {
        unbalancedParcel.parent.right = newTop;
      }
      newTop.parent = unbalancedParcel.parent;
      unbalancedParcel.right = undefined;
      unbalancedParcel.parent = undefined;
      this.recalculateHeightsAndBalancesOfBranch(unbalancedParcel);
      this.placeParcel(newTop, unbalancedParcel);
    }
  }
  rightLeftRotation(unbalancedParcel: Parcel) {
    if (unbalancedParcel.left && unbalancedParcel.left.right) {
      const homelessParcel = unbalancedParcel.left;
      unbalancedParcel.left = unbalancedParcel.left.right;
      unbalancedParcel.left.parent = unbalancedParcel;
      homelessParcel.right = undefined;
      this.recalculateHeightsAndBalancesOfBranch(homelessParcel);
      this.placeParcel(unbalancedParcel, homelessParcel);
    }
  }
  leftRightRotation(unbalancedParcel: Parcel) {
    if (unbalancedParcel.right && unbalancedParcel.right.left) {
      const homelessParcel = unbalancedParcel.right;
      unbalancedParcel.right = unbalancedParcel.right.left;
      unbalancedParcel.right.parent = unbalancedParcel;
      homelessParcel.left = undefined;
      this.recalculateHeightsAndBalancesOfBranch(homelessParcel);
      this.placeParcel(unbalancedParcel, homelessParcel);
    }
  }
}

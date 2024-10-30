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

export class ParcelTree {
  root: Parcel | undefined;
  public addParcel(data: number) {
    const newParcel = new Parcel(data);
    if (!this.root) {
      this.root = newParcel;
    } else this.placeParcel(this.root, newParcel);
  }
  placeParcel(parcelInTree: Parcel, homelessParcel: Parcel) {
    if (homelessParcel.data <= parcelInTree.data) {
      if (!parcelInTree.left) {
        parcelInTree.left = homelessParcel;
        homelessParcel.parent = parcelInTree;
        this.recalculateHeightsAndBalancesOfBranch(homelessParcel);
      } else {
        this.placeParcel(parcelInTree.left, homelessParcel);
      }
    } else {
      if (!parcelInTree.right) {
        parcelInTree.right = homelessParcel;
        homelessParcel.parent = parcelInTree;
        this.recalculateHeightsAndBalancesOfBranch(homelessParcel);
      } else {
        this.placeParcel(parcelInTree.right, homelessParcel);
      }
    }
    return;
  }

  recalculateHeightsAndBalancesOfBranch(parcel: Parcel) {
    parcel.height =
      1 + Math.max(parcel.left?.height ?? 0, parcel.right?.height ?? 0);
    parcel.balance = (parcel.left?.height ?? 0) - (parcel.right?.height ?? 0);
    if (Math.abs(parcel.balance) > 1) {
      this.rebalanceBranch(parcel);
    } else if (parcel.parent) {
      this.recalculateHeightsAndBalancesOfBranch(parcel.parent);
    }
    return;
  }

  rebalanceBranch(unbalancedParcel: Parcel) {
    if (unbalancedParcel.balance > 1 && unbalancedParcel.left) {
      if (unbalancedParcel.left?.balance > 0) {
        this.rotateToRight(unbalancedParcel);
      } else if (unbalancedParcel.left?.balance < 0) {
        this.rotateLeftChildToLeft(unbalancedParcel);
      }
    } else if (unbalancedParcel.balance < -1 && unbalancedParcel.right) {
      if (unbalancedParcel.right?.balance < 0) {
        this.rotateToLeft(unbalancedParcel);
      } else if (unbalancedParcel.right?.balance > 0) {
        this.rotateRightChildToRight(unbalancedParcel);
      }
    }
  }
  rotateToRight(unbalancedParcel: Parcel): void {
    if (unbalancedParcel.left) {
      const newTop = unbalancedParcel.left;
      if (!unbalancedParcel.parent) {
        this.root = newTop;
      } else {
        unbalancedParcel.parent.left = newTop;
      }
      newTop.parent = unbalancedParcel.parent;
      unbalancedParcel.left = undefined;
      unbalancedParcel.parent = undefined;
      this.placeParcel(newTop, unbalancedParcel);
    }
  }

  rotateToLeft(unbalancedParcel: Parcel): void {
    if (unbalancedParcel.right) {
      const newTop = unbalancedParcel.right;
      if (!unbalancedParcel.parent) {
        this.root = newTop;
      } else {
        unbalancedParcel.parent.right = newTop;
      }
      newTop.parent = unbalancedParcel.parent;
      unbalancedParcel.right = undefined;
      unbalancedParcel.parent = undefined;
      this.placeParcel(newTop, unbalancedParcel);
    }
  }
  rotateLeftChildToLeft(unbalancedParcel: Parcel) {
    if (unbalancedParcel.left && unbalancedParcel.left.right) {
      const newLeft = unbalancedParcel.left.right;
      const homelessParcel = unbalancedParcel.left;

      unbalancedParcel.left = newLeft;
      newLeft.parent = unbalancedParcel;
      homelessParcel.right = undefined;

      this.placeParcel(newLeft, homelessParcel);
    }
  }
  rotateRightChildToRight(unbalancedParcel: Parcel) {
    if (unbalancedParcel.right && unbalancedParcel.right.left) {
      const newRight = unbalancedParcel.right.left;
      const homelessParcel = unbalancedParcel.right;

      unbalancedParcel.right = newRight;
      newRight.parent = unbalancedParcel;
      homelessParcel.left = undefined;

      this.placeParcel(newRight, homelessParcel);
    }
  }
}

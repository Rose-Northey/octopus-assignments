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
    if (parcel.parent) {
      parcel.parent.height = this.calculateHeight(parcel.parent);
      parcel.parent.balance = this.calculateBalance(parcel.parent);
      if (Math.abs(parcel.parent.balance) > 1) {
        this.rebalanceBranch(parcel.parent);
      } else {
        this.recalculateHeightsAndBalancesOfBranch(parcel.parent);
      }
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
        const newTop = unbalancedParcel.left;
        if (unbalancedParcel === this.root) {
          this.root = newTop;
        }
        unbalancedParcel.left = undefined;
        unbalancedParcel.height = this.calculateHeight(unbalancedParcel);
        this.placeParcel(newTop, unbalancedParcel);
        //   newTop = left
        // if unbalanced parcel === root then the new root is NewTop
        //
        // homelessParcel = unbalancedParcel
        // placeParcel is called with newTop and unbalancedParcel
      } else if (unbalancedParcel.left?.balance < 0) {
        console.log('rightLeft rotation');
      }
    } else if (unbalancedParcel.balance < -1 && unbalancedParcel.right) {
      if (unbalancedParcel.right?.balance < 0) {
        console.log('left rotation');
      } else if (unbalancedParcel.right?.balance > 0) {
        console.log('leftRight rotation');
      }
    }
  }
}

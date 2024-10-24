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
    //   determine whether we place on left
    // if left is empty, place parcel there, if not, run placeParcelAgain
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

  //   findParcelPlace and then PlaceParcel -> calculate height and balance happen after the parcel is placed.
  // after you say ParcelInTree.left = parcelToPlace then you calculate the height of the parent going up until there is no parent
  selectSideForPlacement(parent: Parcel, parcel: Parcel): Parcel | undefined {
    if (parcel.data <= parent.data) {
      return parent.left;
    } else {
      return parent.right;
    }
  }

  recalculateHeightsAndBalancesOfBranch(parcel: Parcel) {
    console.log(
      `the parcel is ${parcel.data}, the parent is ${parcel.parent?.data}`
    );
    if (parcel.parent) {
      // the parent exists therefore recalculate the parcel's parent's height
      parcel.parent.height = this.calculateHeight(parcel.parent);
      parcel.parent.balance = this.calculateBalance(parcel.parent);
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
}

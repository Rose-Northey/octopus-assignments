class Parcel {
  parent: Parcel | undefined;
  houseNumber: number;
  left: Parcel | undefined;
  right: Parcel | undefined;
  height: number;
  balance: number;
  contents: string;

  constructor(houseNumber: number, contents: string) {
    this.houseNumber = houseNumber;
    this.height = 1;
    this.balance = 0;
    this.contents = contents;
  }
}

export class ParcelTree {
  root: Parcel | undefined;
  public addParcel(houseNumber: number, contents = '') {
    const newParcel = new Parcel(houseNumber, contents);
    if (!this.root) {
      this.root = newParcel;
      console.log(`new root is ${this.root.houseNumber}`);
    } else this.placeParcel(this.root, newParcel);
  }
  placeParcel(parcelInTree: Parcel, homelessParcel: Parcel) {
    if (homelessParcel.houseNumber <= parcelInTree.houseNumber) {
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
        console.log(
          `${unbalancedParcel.houseNumber} is unbalanced, rotate to right`
        );
      } else if (unbalancedParcel.left?.balance < 0) {
        this.rotateLeftChildToLeft(unbalancedParcel);
        console.log(
          `${unbalancedParcel.houseNumber} is unbalanced, rotate child to left`
        );
      }
    } else if (unbalancedParcel.balance < -1 && unbalancedParcel.right) {
      if (unbalancedParcel.right?.balance < 0) {
        this.rotateToLeft(unbalancedParcel);
        console.log(
          `${unbalancedParcel.houseNumber} is unbalanced, rotate to left`
        );
      } else if (unbalancedParcel.right?.balance > 0) {
        this.rotateRightChildToRight(unbalancedParcel);
        console.log(
          `${unbalancedParcel.houseNumber} is unbalanced, rotate child to left`
        );
      }
    }
  }
  rotateToRight(unbalancedParcel: Parcel): void {
    if (unbalancedParcel.left) {
      this.rotate(unbalancedParcel, unbalancedParcel.left, true);
    }
  }

  rotateToLeft(unbalancedParcel: Parcel): void {
    if (unbalancedParcel.right) {
      this.rotate(unbalancedParcel, unbalancedParcel.right, false);
    }
  }

  rotate(
    unbalancedParcel: Parcel,
    childOfInterest: Parcel,
    isLeft: boolean
  ): void {
    const newTop = childOfInterest;
    if (!unbalancedParcel.parent) {
      this.root = newTop;
      console.log(`new root is ${this.root.houseNumber}`);
    } else {
      if (isLeft) {
        unbalancedParcel.parent.left = newTop;
      } else {
        unbalancedParcel.parent.right = newTop;
      }
    }
    newTop.parent = unbalancedParcel.parent;
    if (isLeft) {
      unbalancedParcel.left = undefined;
    } else {
      unbalancedParcel.right = undefined;
    }

    unbalancedParcel.parent = undefined;
    this.placeParcel(newTop, unbalancedParcel);
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
  public locateParcel(
    desiredHouseNumber: number,
    currentParcel = this.root
  ): Parcel | undefined {
    if (!currentParcel) {
      throw new Error('there are no parcels of this house number in the tree');
    }
    if (currentParcel.houseNumber === desiredHouseNumber) {
      return currentParcel;
    } else if (currentParcel.houseNumber > desiredHouseNumber) {
      return this.locateParcel(desiredHouseNumber, currentParcel.left);
    } else if (currentParcel.houseNumber < desiredHouseNumber) {
      return this.locateParcel(desiredHouseNumber, currentParcel.right);
    }
  }

  public deleteParcel(parcelToDeleteHouseNumber: number) {
    const parcelToDelete = this.locateParcel(parcelToDeleteHouseNumber);
    if (!parcelToDelete) {
      throw new Error('this parcel already does not exist');
    }
    const parentOfDeleted = parcelToDelete.parent;
    const replacement = this.findReplacementForparcelToDelete(parcelToDelete);
    let disownedParentOfReplacement = replacement?.parent ?? undefined;
    const abandonedChildOfReplacement = replacement?.left ?? undefined;

    // give replacement deleted's parents
    if (parentOfDeleted) {
      parentOfDeleted.left === parcelToDelete
        ? (parentOfDeleted.left = replacement)
        : (parentOfDeleted.right = replacement);
    } else {
      this.root = replacement;
    }

    // if the replacement
    // if parent of replacement exists and is not the same as the parcelToDelete node, adopt left child to its right
    if (
      disownedParentOfReplacement &&
      disownedParentOfReplacement !== parcelToDelete
    ) {
      disownedParentOfReplacement.right = abandonedChildOfReplacement;
      if (abandonedChildOfReplacement) {
        abandonedChildOfReplacement.parent = disownedParentOfReplacement;
      }
    }

    //  replacement adopts all chidren of parcelToDelete
    if (replacement) {
      replacement.parent = parentOfDeleted;
      if (parcelToDelete.left !== replacement) {
        replacement.left = parcelToDelete.left;
      }
      if (parcelToDelete.right !== replacement) {
        replacement.right = parcelToDelete.right;
      }
    }
  }

  findReplacementForparcelToDelete(parcelToDelete: Parcel): Parcel | undefined {
    if (parcelToDelete.left) {
      return this.findFurthestRightParcelInBranch(parcelToDelete.left);
    }
    if (parcelToDelete.right) {
      return parcelToDelete.right;
    }
    return undefined;
  }

  findFurthestRightParcelInBranch(currentParcel: Parcel): Parcel {
    if (currentParcel.right) {
      return this.findFurthestRightParcelInBranch(currentParcel.right);
    }
    return currentParcel;
  }
}

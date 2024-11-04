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
  public findParcel() {}
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
  locateParcel(
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

  public deleteParcel(deletedParcelHouseNumber: number) {
    const deleted = this.locateParcel(deletedParcelHouseNumber);
    if (!deleted) {
      throw new Error('this parcel already does not exist');
    }
    const parentOfDeleted = deleted.parent;
    const leftOfDeleted = deleted.left;
    const rightOfDeleted = deleted.right;

    const replacement = this.findReplacementForDeleted(deleted);
    const parentOfReplacement = replacement?.parent ?? undefined;
    const leftOfReplacement = replacement?.left ?? undefined;

    // adopt replacement
    if (!parentOfDeleted) {
      this.root = replacement;
    } else {
      parentOfDeleted.left === deleted
        ? (parentOfDeleted.left = replacement)
        : (parentOfDeleted.right = replacement);
    }

    // readopt replacement's potential child or mark empty space with undefined
    if (parentOfReplacement && parentOfReplacement != deleted) {
      parentOfReplacement.right = leftOfReplacement;
      leftOfReplacement
        ? (leftOfReplacement.parent = parentOfReplacement)
        : null;
    }

    // if there's nothing on the left, right becomes top
    // if (!leftOfDeleted) {
    //   const replacement = rightOfDeleted;
    //   if (!parentOfDeleted) {
    //     this.root = replacement;
    //   } else {
    //     parentOfDeleted.left === deleted
    //       ? (parentOfDeleted.left = replacement)
    //       : (parentOfDeleted.right = replacement);
    //   }
    //   return;
    // } else {
    //   const replacement = this.findHighestInBranch(leftOfDeleted);
    //   const parentOfReplacement = replacement.parent;
    //   if (!parentOfReplacement) {
    //     this.root = replacement;
    //   } else {
    //     const leftOfReplacement = replacement.left;
    //     if (parentOfReplacement != deleted) {
    //       parentOfReplacement.right = leftOfReplacement;
    //     }
    //   }
    // }
  }

  findReplacementForDeleted(deleted: Parcel): Parcel | undefined {
    const leftOfDeleted = deleted.left;
    const rightOfDeleted = deleted.right;
    if (!leftOfDeleted) {
      return rightOfDeleted ?? undefined;
    }
    return this.findHighestInBranch(leftOfDeleted);
  }

  findHighestInBranch(topOfBranch: Parcel): Parcel {
    if (!topOfBranch.right) {
      return topOfBranch;
    }
    return this.findHighestInBranch(topOfBranch.right);
  }
}
// if the currentParcel is the desiredHouseNumber, return that, else if

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcelTree = void 0;
class Parcel {
    constructor(houseNumber, contents) {
        this.houseNumber = houseNumber;
        this.height = 1;
        this.balance = 0;
        this.contents = contents;
    }
}
class ParcelTree {
    addParcel(houseNumber, contents = "") {
        const newParcel = new Parcel(houseNumber, contents);
        if (!this.root) {
            this.root = newParcel;
            // console.log(`new root is ${this.root.houseNumber}`);
        }
        else
            this.placeParcel(this.root, newParcel);
    }
    placeParcel(parcelInTree, homelessParcel) {
        if (homelessParcel.houseNumber <= parcelInTree.houseNumber) {
            if (!parcelInTree.left) {
                parcelInTree.left = homelessParcel;
                homelessParcel.parent = parcelInTree;
                this.recalculateHeightsAndBalancesOfBranch(homelessParcel);
            }
            else {
                this.placeParcel(parcelInTree.left, homelessParcel);
            }
        }
        else {
            if (!parcelInTree.right) {
                parcelInTree.right = homelessParcel;
                homelessParcel.parent = parcelInTree;
                this.recalculateHeightsAndBalancesOfBranch(homelessParcel);
            }
            else {
                this.placeParcel(parcelInTree.right, homelessParcel);
            }
        }
        return;
    }
    recalculateHeightsAndBalancesOfBranch(parcel) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        parcel.height = 1 + Math.max((_b = (_a = parcel.left) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 0, (_d = (_c = parcel.right) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 0);
        parcel.balance = ((_f = (_e = parcel.left) === null || _e === void 0 ? void 0 : _e.height) !== null && _f !== void 0 ? _f : 0) - ((_h = (_g = parcel.right) === null || _g === void 0 ? void 0 : _g.height) !== null && _h !== void 0 ? _h : 0);
        if (Math.abs(parcel.balance) > 1) {
            this.rebalanceBranch(parcel);
        }
        else if (parcel.parent) {
            this.recalculateHeightsAndBalancesOfBranch(parcel.parent);
        }
        return;
    }
    rebalanceBranch(unbalancedParcel) {
        var _a, _b, _c, _d;
        if (unbalancedParcel.balance > 1 && unbalancedParcel.left) {
            if (((_a = unbalancedParcel.left) === null || _a === void 0 ? void 0 : _a.balance) > 0) {
                this.rotateToRight(unbalancedParcel);
                // console.log(`${unbalancedParcel.houseNumber} is unbalanced, rotate to right`);
            }
            else if (((_b = unbalancedParcel.left) === null || _b === void 0 ? void 0 : _b.balance) < 0) {
                this.rotateLeftChildToLeft(unbalancedParcel);
                // console.log(`${unbalancedParcel.houseNumber} is unbalanced, rotate child to left`);
            }
        }
        else if (unbalancedParcel.balance < -1 && unbalancedParcel.right) {
            if (((_c = unbalancedParcel.right) === null || _c === void 0 ? void 0 : _c.balance) < 0) {
                this.rotateToLeft(unbalancedParcel);
                // console.log(`${unbalancedParcel.houseNumber} is unbalanced, rotate to left`);
            }
            else if (((_d = unbalancedParcel.right) === null || _d === void 0 ? void 0 : _d.balance) > 0) {
                this.rotateRightChildToRight(unbalancedParcel);
                // console.log(`${unbalancedParcel.houseNumber} is unbalanced, rotate child to left`);
            }
        }
    }
    rotateToRight(unbalancedParcel) {
        if (unbalancedParcel.left) {
            this.rotate(unbalancedParcel, unbalancedParcel.left, true);
        }
    }
    rotateToLeft(unbalancedParcel) {
        if (unbalancedParcel.right) {
            this.rotate(unbalancedParcel, unbalancedParcel.right, false);
        }
    }
    rotate(unbalancedParcel, childOfInterest, isLeft) {
        const newTop = childOfInterest;
        if (!unbalancedParcel.parent) {
            this.root = newTop;
            // console.log(`new root is ${this.root.houseNumber}`);
        }
        else {
            if (isLeft) {
                unbalancedParcel.parent.left = newTop;
            }
            else {
                unbalancedParcel.parent.right = newTop;
            }
        }
        newTop.parent = unbalancedParcel.parent;
        if (isLeft) {
            unbalancedParcel.left = undefined;
        }
        else {
            unbalancedParcel.right = undefined;
        }
        unbalancedParcel.parent = undefined;
        this.placeParcel(newTop, unbalancedParcel);
    }
    rotateLeftChildToLeft(unbalancedParcel) {
        if (unbalancedParcel.left && unbalancedParcel.left.right) {
            const newLeft = unbalancedParcel.left.right;
            const homelessParcel = unbalancedParcel.left;
            unbalancedParcel.left = newLeft;
            newLeft.parent = unbalancedParcel;
            homelessParcel.right = undefined;
            this.placeParcel(newLeft, homelessParcel);
        }
    }
    rotateRightChildToRight(unbalancedParcel) {
        if (unbalancedParcel.right && unbalancedParcel.right.left) {
            const newRight = unbalancedParcel.right.left;
            const homelessParcel = unbalancedParcel.right;
            unbalancedParcel.right = newRight;
            newRight.parent = unbalancedParcel;
            homelessParcel.left = undefined;
            this.placeParcel(newRight, homelessParcel);
        }
    }
    locateParcel(desiredHouseNumber, currentParcel = this.root) {
        if (!currentParcel) {
            throw new Error("there are no parcels of this house number in the tree");
        }
        if (currentParcel.houseNumber === desiredHouseNumber) {
            return currentParcel;
        }
        else if (currentParcel.houseNumber > desiredHouseNumber) {
            return this.locateParcel(desiredHouseNumber, currentParcel.left);
        }
        else if (currentParcel.houseNumber < desiredHouseNumber) {
            return this.locateParcel(desiredHouseNumber, currentParcel.right);
        }
    }
    deleteParcel(parcelToDeleteHouseNumber) {
        var _a, _b;
        const parcelToDelete = this.locateParcel(parcelToDeleteHouseNumber);
        if (!parcelToDelete) {
            throw new Error("this parcel already does not exist");
        }
        const replacement = this.findReplacementForparcelToDelete(parcelToDelete);
        this.parentReplacesFirstChildWithSecondChild(parcelToDelete, replacement);
        if (!replacement) {
            return;
        }
        // if parent of replacement exists and is not the same as the parcelToDelete node, adopt left child to its right
        let disownedParentOfReplacement = (_a = replacement.parent) !== null && _a !== void 0 ? _a : undefined;
        const abandonedChildOfReplacement = (_b = replacement.left) !== null && _b !== void 0 ? _b : undefined;
        if (disownedParentOfReplacement && disownedParentOfReplacement !== parcelToDelete) {
            disownedParentOfReplacement.right = abandonedChildOfReplacement;
            if (abandonedChildOfReplacement) {
                abandonedChildOfReplacement.parent = disownedParentOfReplacement;
            }
        }
        replacement.parent = parcelToDelete.parent;
        if (parcelToDelete.left !== replacement) {
            replacement.left = parcelToDelete.left;
        }
        if (parcelToDelete.right !== replacement) {
            replacement.right = parcelToDelete.right;
        }
    }
    parentReplacesFirstChildWithSecondChild(oldChild, newChild) {
        const parent = oldChild.parent;
        if (parent) {
            parent.left === newChild ? (parent.left = newChild) : (parent.right = newChild);
        }
        else {
            this.root = newChild;
        }
    }
    findReplacementForparcelToDelete(parcelToDelete) {
        if (parcelToDelete.left) {
            return this.findFurthestRightParcelInBranch(parcelToDelete.left);
        }
        if (parcelToDelete.right) {
            return parcelToDelete.right;
        }
        return undefined;
    }
    findFurthestRightParcelInBranch(currentParcel) {
        if (currentParcel.right) {
            return this.findFurthestRightParcelInBranch(currentParcel.right);
        }
        return currentParcel;
    }
}
exports.ParcelTree = ParcelTree;

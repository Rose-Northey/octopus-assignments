"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcelTree = void 0;
class Parcel {
    constructor(houseNumber) {
        this.houseNumber = houseNumber;
        this.balance = 0;
        this.height = 1;
    }
}
class ParcelTree {
    constructor() {
        this.calculateHeightAndBalance = (parcel) => {
            var _a, _b, _c, _d;
            const left = parcel.left;
            const right = parcel.right;
            const parent = parcel.parent;
            const oldHeight = parcel.height;
            const absBalance = Math.abs(parcel.balance);
            parcel.height = 1 + Math.max((_a = left === null || left === void 0 ? void 0 : left.height) !== null && _a !== void 0 ? _a : 0, (_b = right === null || right === void 0 ? void 0 : right.height) !== null && _b !== void 0 ? _b : 0);
            parcel.balance = ((_c = left === null || left === void 0 ? void 0 : left.height) !== null && _c !== void 0 ? _c : 0) - ((_d = right === null || right === void 0 ? void 0 : right.height) !== null && _d !== void 0 ? _d : 0);
            if (absBalance > 1) {
                this.rotateParcel(parcel);
            }
            if (parcel.height === oldHeight || !parent) {
                return;
            }
            else {
                this.calculateHeightAndBalance(parent);
            }
        };
        //  5
        // 4 6
        //    7
        //     8
        this.rotateParcel = (parcel) => {
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
    addParcel(houseNumber) {
        const incomingParcel = new Parcel(houseNumber);
        if (!this.root) {
            this.root = incomingParcel;
            return;
        }
        else {
            this.placeParcel(incomingParcel, this.root);
        }
    }
    placeParcel(homelessParcel, potentialParent) {
        if (homelessParcel.houseNumber <= potentialParent.houseNumber) {
            if (!potentialParent.left) {
                potentialParent.left = homelessParcel;
                homelessParcel.parent = potentialParent;
                this.calculateHeightAndBalance(homelessParcel);
            }
            else {
                this.placeParcel(homelessParcel, potentialParent.left);
            }
        }
        else {
            if (!potentialParent.right) {
                potentialParent.right = homelessParcel;
                homelessParcel.parent = potentialParent;
                this.calculateHeightAndBalance(homelessParcel.parent);
            }
            else {
                this.placeParcel(homelessParcel, potentialParent.right);
            }
        }
    }
    leftRotation(parcel) {
        const parent = parcel.parent;
        const replacementParcel = parcel.right;
        //if the rotation will create a new root (i.e. parent does not exist)
        if (!parent && replacementParcel) {
            this.root = replacementParcel;
            this.root.parent = undefined;
            // else if the node has a
        }
        else if (parent && replacementParcel) {
            parent.right = replacementParcel;
        }
        else if (replacementParcel) {
            this.placeParcel(parcel, replacementParcel);
        }
        else {
            console.log('something went wrong 1');
        }
    }
}
exports.ParcelTree = ParcelTree;

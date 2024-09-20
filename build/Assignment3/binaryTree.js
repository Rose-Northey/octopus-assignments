"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
class nodule {
    constructor(parent, left, right, houseNumber) {
        this.calculateBalance = () => {
            var _a, _b, _c, _d;
            this.balance = ((_b = (_a = this.left) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 0) - ((_d = (_c = this.right) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 0);
        };
        this.calculateHeight = () => {
            var _a, _b, _c, _d;
            1 + Math.max((_b = (_a = this.left) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 0, (_d = (_c = this.right) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 0);
        };
        this.determineRotationType = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (this.balance > 1) {
                if (((_b = (_a = this.left) === null || _a === void 0 ? void 0 : _a.balance) !== null && _b !== void 0 ? _b : 0) > 0) {
                    // perform RIGHT rotation
                }
                if (((_d = (_c = this.left) === null || _c === void 0 ? void 0 : _c.balance) !== null && _d !== void 0 ? _d : 0) < 0) {
                    // perform LEFT RIGHT rotation
                }
            }
            if (this.balance < -1) {
                if (((_f = (_e = this.right) === null || _e === void 0 ? void 0 : _e.balance) !== null && _f !== void 0 ? _f : 0) < 0) {
                    // RIGHT
                    // perform right totation on this node
                }
                if (((_h = (_g = this.right) === null || _g === void 0 ? void 0 : _g.balance) !== null && _h !== void 0 ? _h : 0) > 0) {
                    // LEFT RIGHT
                    // perform left rotation on right node
                    // perform right rotation on this node
                }
            }
        };
        this.leftRotation = (rotatingNode) => {
            // node y = one underneath
            // node x = one ontop
        };
        this.parent = parent;
        this.left = left;
        this.right = right;
        this.houseNumber = houseNumber;
        this.balance = 0;
        this.height = 1;
    }
}
// if there are children, take the tallest child height +1
// if there are no children, height = 1
// height left - height right
class BinaryTree {
    constructor() {
        this.sortedArray = [];
        this.root = undefined;
    }
    addPackage(houseNumber) {
        const incomingPackage = new nodule(undefined, undefined, undefined, houseNumber);
    }
}
exports.BinaryTree = BinaryTree;
// items will be added one at a time
// first item goes in the root
// create an ordered list and also have it be the root
//

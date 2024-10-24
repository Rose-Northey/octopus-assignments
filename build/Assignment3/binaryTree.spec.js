"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaryTree_1 = require("./binaryTree");
describe('add parcels to tree', () => {
    describe('correctly create one node tree', () => {
        const myParcelTree = new binaryTree_1.ParcelTree();
        myParcelTree.addParcel(6);
        test('one package is added to right place', () => {
            var _a;
            expect((_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(6);
        });
        test('calculate height', () => {
            var _a;
            expect((_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(1);
        });
        test('calculate balance', () => {
            var _a;
            expect((_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(0);
        });
    });
    describe('correctly create tree with root and one leaf', () => {
        const myParcelTree = new binaryTree_1.ParcelTree();
        myParcelTree.addParcel(6);
        myParcelTree.addParcel(5);
        test('adds left child', () => {
            var _a, _b;
            expect((_b = (_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(5);
        });
        test('height at root correct', () => {
            var _a;
            expect((_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(2);
        });
        test('root balance is correct', () => {
            var _a;
            expect((_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(1);
        });
        test('leaf balance is correct', () => {
            var _a, _b;
            expect((_b = (_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.balance).toBe(0);
        });
    });
    describe('correctly create tree with root, and two leafs', () => {
        const myParcelTree = new binaryTree_1.ParcelTree();
        myParcelTree.addParcel(6);
        myParcelTree.addParcel(5);
        myParcelTree.addParcel(7);
        test('adds right child', () => {
            var _a, _b;
            expect((_b = (_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(7);
        });
        test('root height is correct', () => {
            var _a;
            expect((_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(2);
        });
        test('leaf height is correct', () => {
            var _a, _b;
            expect((_b = (_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.height).toBe(1);
        });
        test('root balance is correct with 2 leaves', () => {
            var _a;
            expect((_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(0);
        });
    });
    describe('correctly create tree with root, and two leafs', () => {
        const myParcelTree = new binaryTree_1.ParcelTree();
        const newParcelDestination = 6;
        myParcelTree.addParcel(newParcelDestination);
        myParcelTree.addParcel(5);
        myParcelTree.addParcel(7);
        myParcelTree.addParcel(4);
        test('adds aditional child to the left of the left', () => {
            var _a, _b, _c;
            expect((_c = (_b = (_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.left) === null || _c === void 0 ? void 0 : _c.houseNumber).toBe(4);
        });
        test('root balance is correct with 3 parcels beneath (slightly left heavy)', () => {
            var _a;
            expect((_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(1);
        });
        test('root height is correct with 3 parcels beneath (slightly left heavy)', () => {
            var _a;
            expect((_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(3);
        });
    });
});
describe('correctly left rotates 3 node tree', () => {
    var _a, _b, _c;
    const myParcelTree = new binaryTree_1.ParcelTree();
    myParcelTree.addParcel(6);
    myParcelTree.addParcel(7);
    myParcelTree.addParcel(8);
    console.log(`root houseNumber is ${(_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber}`);
    console.log(`child houseNumbers are ${(_c = (_b = myParcelTree.root) === null || _b === void 0 ? void 0 : _b.right) === null || _c === void 0 ? void 0 : _c.houseNumber}`);
    test('successfully rotates to the left', () => {
        var _a;
        expect((_a = myParcelTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(7);
    });
});

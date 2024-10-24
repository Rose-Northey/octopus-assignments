"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newBinaryTree_1 = require("./newBinaryTree");
describe('new nodes are added to the tree', () => {
    test('first node added becomes the root', () => {
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(5);
        expect(myTree.root.data).toBe(5);
    });
});

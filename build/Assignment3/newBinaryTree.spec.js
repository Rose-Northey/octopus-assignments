"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newBinaryTree_1 = require("./newBinaryTree");
describe("new nodes are added to the tree", () => {
    test("first node added becomes the root", () => {
        var _a;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(5);
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(5);
    });
    test("first node added has a height of 1", () => {
        var _a;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(5);
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(1);
    });
    test("first node added has a balance of 0", () => {
        var _a;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(5);
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(0);
    });
    test("add 4,2 and ensure 2 is left of the root", () => {
        var _a, _b;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.addParcel(2);
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(2);
    });
    test("add 4,2 and ensure root has a height of 1", () => {
        var _a;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.addParcel(2);
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(2);
    });
    test("add 4,2,6 and ensure 6 is right of the root", () => {
        var _a, _b;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.addParcel(2);
        myTree.addParcel(6);
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(6);
    });
    test("add 4,2,6 and ensure root has a height of 2", () => {
        var _a;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.addParcel(2);
        myTree.addParcel(6);
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(2);
    });
    test("add 4,2,6,5 and ensure 5 is right then left of the root", () => {
        var _a, _b, _c;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.addParcel(2);
        myTree.addParcel(6);
        myTree.addParcel(5);
        expect((_c = (_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.left) === null || _c === void 0 ? void 0 : _c.houseNumber).toBe(5);
    });
    test("add 4,2,6,5 and ensure root has a height of 3", () => {
        var _a;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.addParcel(2);
        myTree.addParcel(6);
        myTree.addParcel(5);
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(3);
    });
    test("add 4,2,6,5 and ensure root has a height of 3", () => {
        var _a;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.addParcel(2);
        myTree.addParcel(6);
        myTree.addParcel(5);
        myTree.addParcel(7);
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(3);
    });
    test("add 4,2,6,5 and ensure root has a balance of -1", () => {
        var _a;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.addParcel(2);
        myTree.addParcel(6);
        myTree.addParcel(5);
        myTree.addParcel(7);
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(-1);
    });
});
describe("tree performs left rotations on 4,3,2", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(3);
    myTree.addParcel(2);
    test("root changes to 3 ", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(3);
    });
    test("new right is 4", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(4);
    });
    test("new height of 4 is 1", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.height).toBe(1);
    });
    test("new height of root is 2", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(2);
    });
    test("new balance of root is 0", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(0);
    });
});
describe("tree performs left rotations on 4,3,2,5,1", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(3);
    myTree.addParcel(2);
    myTree.addParcel(5);
    myTree.addParcel(1);
    test("root changes to 3 ", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(3);
    });
    test("new right is 4", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(4);
    });
    test("new right of right is is 5", () => {
        var _a, _b, _c;
        expect((_c = (_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.right) === null || _c === void 0 ? void 0 : _c.houseNumber).toBe(5);
    });
    test("new height of root is 3", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(3);
    });
    test("new balance of root is 0", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(0);
    });
});
describe("tree performs right rotation on 4,5,6", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(5);
    myTree.addParcel(6);
    test("root changes to 5 ", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(5);
    });
    test("new left is 4", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(4);
    });
    test("new height of 4 is 1", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.height).toBe(1);
    });
    test("new height of root is 2", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(2);
    });
    test("new balance of root is 0", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(0);
    });
});
describe("tree performs right rotation on 4,5,6,3,7", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(5);
    myTree.addParcel(6);
    myTree.addParcel(3);
    myTree.addParcel(7);
    test("root changes to 5 ", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(5);
    });
    test("new right is 6", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(6);
    });
    test("new right of right is is 7", () => {
        var _a, _b, _c;
        expect((_c = (_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.right) === null || _c === void 0 ? void 0 : _c.houseNumber).toBe(7);
    });
    test("new left is 4", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(4);
    });
    test("new left of left is is 3", () => {
        var _a, _b, _c;
        expect((_c = (_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.left) === null || _c === void 0 ? void 0 : _c.houseNumber).toBe(3);
    });
    test("new height of root is 3", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(3);
    });
    test("new balance of root is 0", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(0);
    });
});
describe("tree performs left rotations on 5,3,6,2,4,1", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(5);
    myTree.addParcel(3);
    myTree.addParcel(6);
    myTree.addParcel(2);
    myTree.addParcel(4);
    myTree.addParcel(1);
    test("root changes to 3 ", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(3);
    });
    test("new right is 5", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(5);
    });
    test("new right of right of right is is 6", () => {
        var _a, _b, _c;
        expect((_c = (_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.right) === null || _c === void 0 ? void 0 : _c.houseNumber).toBe(6);
    });
    test("new height of root is 4", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.height).toBe(3);
    });
    test("new balance of root is 0", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(0);
    });
});
describe("tree performs leftRight rotation on 4,2,3", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(2);
    myTree.addParcel(3);
    test("root changes to 3 ", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(3);
    });
});
describe("tree performs complex leftRight rotation on 20,4,26,3,9,15", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(20);
    myTree.addParcel(4);
    myTree.addParcel(26);
    myTree.addParcel(3);
    myTree.addParcel(9);
    myTree.addParcel(15);
    test("root changes to 15", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(9);
    });
    test("right of the root is 20", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(20);
    });
    test("root should be balanced", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.balance).toBe(0);
    });
});
describe("tree performs complex rightLeft rotation on 10,30,25,20,5,15", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(25);
    myTree.addParcel(10);
    myTree.addParcel(30);
    myTree.addParcel(31);
    myTree.addParcel(29);
    myTree.addParcel(28);
    test("new root should be 29", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(29);
    });
});
describe("tree is able to locate parcel sent to number 7", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(10, "birthday card");
    myTree.addParcel(8, "pickles");
    myTree.addParcel(12, "a stack of bills");
    myTree.addParcel(7, "teddy bear");
    myTree.addParcel(14, "paint thinner");
    const myParcel = myTree.locateParcel(7);
    test("parcel number 7 to contain a teddybear", () => {
        expect(myParcel === null || myParcel === void 0 ? void 0 : myParcel.contents).toBe("teddy bear");
    });
});
describe("tree is able to delete nodes and rebalance", () => {
    test("throws error when node to delete does not exist", () => {
        const myTree = new newBinaryTree_1.ParcelTree();
        expect(() => myTree.deleteParcel(4)).toThrow();
    });
    test("deletes only node on tree", () => {
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.deleteParcel(4);
        expect(() => {
            myTree.locateParcel(4);
        }).toThrow();
    });
    test("in left heavy two node tree, left child becomes root", () => {
        var _a;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.addParcel(1);
        myTree.deleteParcel(4);
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(1);
    });
    test("in right heavy two node tree, left child becomes root", () => {
        var _a;
        const myTree = new newBinaryTree_1.ParcelTree();
        myTree.addParcel(4);
        myTree.addParcel(6);
        myTree.deleteParcel(4);
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(6);
    });
});
describe("correct child replaces delete of a 3 node tree", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(6);
    myTree.addParcel(1);
    myTree.deleteParcel(4);
    test("root correct", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(1);
    });
    test("right child correct", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(6);
    });
});
describe("rightmost child on the left is new root and all children are kept", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(6);
    myTree.addParcel(1);
    myTree.addParcel(2);
    myTree.deleteParcel(4);
    test("root correct", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(2);
    });
    test("right child correct", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(6);
    });
    test("left child correct", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(1);
    });
});
describe("right most chid on left becomes new root and its previous child is adopted by its previous parent", () => {
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(10);
    myTree.addParcel(5);
    myTree.addParcel(20);
    myTree.addParcel(1);
    myTree.addParcel(7);
    myTree.addParcel(25);
    myTree.addParcel(6);
    myTree.deleteParcel(10);
    test("root correct", () => {
        var _a;
        expect((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.houseNumber).toBe(7);
    });
    test("left child correct", () => {
        var _a, _b, _c;
        expect((_c = (_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.right) === null || _c === void 0 ? void 0 : _c.houseNumber).toBe(6);
    });
});
describe("right most chid on left becomes new root and its previous child is adopted by its previous parent", () => {
    var _a;
    const myTree = new newBinaryTree_1.ParcelTree();
    myTree.addParcel(30);
    myTree.addParcel(10);
    myTree.addParcel(50);
    myTree.addParcel(40);
    myTree.addParcel(60);
    myTree.addParcel(5);
    myTree.addParcel(35);
    myTree.addParcel(20);
    myTree.addParcel(1);
    myTree.addParcel(7);
    myTree.addParcel(25);
    myTree.addParcel(6);
    myTree.deleteParcel(10);
    console.log(myTree.root);
    console.log((_a = myTree.root) === null || _a === void 0 ? void 0 : _a.left);
    test("root new left child is correct new node", () => {
        var _a, _b;
        expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.houseNumber).toBe(7);
    });
    test("root new left child also considers it to be a parent", () => {
        var _a, _b, _c;
        expect((_c = (_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.parent) === null || _c === void 0 ? void 0 : _c.houseNumber).toBe(30);
    });
});

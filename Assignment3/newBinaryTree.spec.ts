import {ParcelTree} from './newBinaryTree';

// describe('new nodes are added to the tree', () => {
//   test('first node added becomes the root', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(5);
//     expect(myTree.root?.data).toBe(5);
//   });
//   test('first node added has a height of 1', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(5);
//     expect(myTree.root?.height).toBe(1);
//   });
//   test('first node added has a balance of 0', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(5);
//     expect(myTree.root?.balance).toBe(0);
//   });

//   test('add 4,2 and ensure 2 is left of the root', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(4);
//     myTree.addParcel(2);
//     expect(myTree.root?.left?.data).toBe(2);
//   });
//   test('add 4,2 and ensure root has a height of 1', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(4);
//     myTree.addParcel(2);
//     expect(myTree.root?.height).toBe(2);
//   });
//   test('add 4,2,6 and ensure 6 is right of the root', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(4);
//     myTree.addParcel(2);
//     myTree.addParcel(6);
//     expect(myTree.root?.right?.data).toBe(6);
//   });
//   test('add 4,2,6 and ensure root has a height of 2', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(4);
//     myTree.addParcel(2);
//     myTree.addParcel(6);
//     expect(myTree.root?.height).toBe(2);
//   });
//   test('add 4,2,6,5 and ensure 5 is right then left of the root', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(4);
//     myTree.addParcel(2);
//     myTree.addParcel(6);
//     myTree.addParcel(5);
//     expect(myTree.root?.right?.left?.data).toBe(5);
//   });
//   test('add 4,2,6,5 and ensure root has a height of 3', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(4);
//     myTree.addParcel(2);
//     myTree.addParcel(6);
//     myTree.addParcel(5);
//     expect(myTree.root?.height).toBe(3);
//   });
//   test('add 4,2,6,5 and ensure root has a height of 3', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(4);
//     myTree.addParcel(2);
//     myTree.addParcel(6);
//     myTree.addParcel(5);
//     myTree.addParcel(7);
//     expect(myTree.root?.height).toBe(3);
//   });
//   test('add 4,2,6,5 and ensure root has a balance of -1', () => {
//     const myTree = new ParcelTree();
//     myTree.addParcel(4);
//     myTree.addParcel(2);
//     myTree.addParcel(6);
//     myTree.addParcel(5);
//     myTree.addParcel(7);
//     expect(myTree.root?.balance).toBe(-1);
//   });
// });

// describe('tree performs left rotations on 4,3,2', () => {
//   const myTree = new ParcelTree();
//   myTree.addParcel(4);
//   myTree.addParcel(3);
//   myTree.addParcel(2);
//   test('root changes to 3 ', () => {
//     expect(myTree.root?.data).toBe(3);
//   });
//   test('new right is 4', () => {
//     expect(myTree.root?.right?.data).toBe(4);
//   });
//   test('new height of 4 is 1', () => {
//     expect(myTree.root?.right?.height).toBe(1);
//   });
//   test('new height of root is 2', () => {
//     expect(myTree.root?.height).toBe(2);
//   });
//   test('new balance of root is 0', () => {
//     expect(myTree.root?.balance).toBe(0);
//   });
// });

// describe('tree performs left rotations on 4,3,2,5,1', () => {
//   const myTree = new ParcelTree();
//   myTree.addParcel(4);
//   myTree.addParcel(3);
//   myTree.addParcel(2);
//   myTree.addParcel(5);
//   myTree.addParcel(1);
//   test('root changes to 3 ', () => {
//     expect(myTree.root?.data).toBe(3);
//   });
//   test('new right is 4', () => {
//     expect(myTree.root?.right?.data).toBe(4);
//   });
//   test('new right of right is is 5', () => {
//     expect(myTree.root?.right?.right?.data).toBe(5);
//   });
//   test('new height of root is 3', () => {
//     expect(myTree.root?.height).toBe(3);
//   });
//   test('new balance of root is 0', () => {
//     expect(myTree.root?.balance).toBe(0);
//   });
// });

// describe('tree performs right rotation on 4,5,6', () => {
//   const myTree = new ParcelTree();
//   myTree.addParcel(4);
//   myTree.addParcel(5);
//   myTree.addParcel(6);
//   test('root changes to 5 ', () => {
//     expect(myTree.root?.data).toBe(5);
//   });
//   test('new left is 4', () => {
//     expect(myTree.root?.left?.data).toBe(4);
//   });
//   test('new height of 4 is 1', () => {
//     expect(myTree.root?.left?.height).toBe(1);
//   });
//   test('new height of root is 2', () => {
//     expect(myTree.root?.height).toBe(2);
//   });
//   test('new balance of root is 0', () => {
//     expect(myTree.root?.balance).toBe(0);
//   });
// });

// describe('tree performs right rotation on 4,5,6,3,7', () => {
//   const myTree = new ParcelTree();
//   myTree.addParcel(4);
//   myTree.addParcel(5);
//   myTree.addParcel(6);
//   myTree.addParcel(3);
//   myTree.addParcel(7);
//   test('root changes to 5 ', () => {
//     expect(myTree.root?.data).toBe(5);
//   });
//   test('new right is 6', () => {
//     expect(myTree.root?.right?.data).toBe(6);
//   });
//   test('new right of right is is 7', () => {
//     expect(myTree.root?.right?.right?.data).toBe(7);
//   });
//   test('new left is 4', () => {
//     expect(myTree.root?.left?.data).toBe(4);
//   });
//   test('new left of left is is 3', () => {
//     expect(myTree.root?.left?.left?.data).toBe(3);
//   });
//   test('new height of root is 3', () => {
//     expect(myTree.root?.height).toBe(3);
//   });
//   test('new balance of root is 0', () => {
//     expect(myTree.root?.balance).toBe(0);
//   });
// });

// describe('tree performs left rotations on 5,3,6,2,4,1', () => {
//   const myTree = new ParcelTree();
//   myTree.addParcel(5);
//   myTree.addParcel(3);
//   myTree.addParcel(6);
//   myTree.addParcel(2);
//   myTree.addParcel(4);
//   myTree.addParcel(1);
//   test('root changes to 3 ', () => {
//     expect(myTree.root?.data).toBe(3);
//   });
//   test('new right is 5', () => {
//     expect(myTree.root?.right?.data).toBe(5);
//   });
//   test('new right of right of right is is 6', () => {
//     expect(myTree.root?.right?.right?.data).toBe(6);
//   });
//   test('new height of root is 4', () => {
//     expect(myTree.root?.height).toBe(3);
//   });
//   test('new balance of root is 0', () => {
//     expect(myTree.root?.balance).toBe(0);
//   });
// });

// describe('tree performs rightLeft rotation on 4,2,3', () => {
//   const myTree = new ParcelTree();
//   myTree.addParcel(4);
//   myTree.addParcel(2);
//   myTree.addParcel(3);
//   test('root changes to 3 ', () => {
//     expect(myTree.root?.data).toBe(3);
//   });
// });

describe('tree performs complex rightLeft rotation on 20,4,26,3,9,15', () => {
  const myTree = new ParcelTree();
  myTree.addParcel(20);
  myTree.addParcel(4);
  myTree.addParcel(26);
  myTree.addParcel(3);
  myTree.addParcel(9);
  myTree.addParcel(15);
  test('root changes to 15', () => {
    expect(myTree.root?.data).toBe(9);
  });
  test('right of the root is 20', () => {
    expect(myTree.root?.right?.data).toBe(20);
  });
  test('root should be balanced', () => {
    expect(myTree.root?.balance).toBe(0);
  });
});

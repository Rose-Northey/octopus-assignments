// PLEASE REFER TO NEWBINARYTREE
// import {ParcelTree} from './binaryTree';
// describe('add parcels to tree', () => {
//   describe('correctly create one node tree', () => {
//     const myParcelTree = new ParcelTree();
//     myParcelTree.addParcel(6);
//     test('one package is added to right place', () => {
//       expect(myParcelTree.root?.houseNumber).toBe(6);
//     });
//     test('calculate height', () => {
//       expect(myParcelTree.root?.height).toBe(1);
//     });
//     test('calculate balance', () => {
//       expect(myParcelTree.root?.balance).toBe(0);
//     });
//   });
//   describe('correctly create tree with root and one leaf', () => {
//     const myParcelTree = new ParcelTree();
//     myParcelTree.addParcel(6);
//     myParcelTree.addParcel(5);
//     test('adds left child', () => {
//       expect(myParcelTree.root?.left?.houseNumber).toBe(5);
//     });
//     test('height at root correct', () => {
//       expect(myParcelTree.root?.height).toBe(2);
//     });
//     test('root balance is correct', () => {
//       expect(myParcelTree.root?.balance).toBe(1);
//     });
//     test('leaf balance is correct', () => {
//       expect(myParcelTree.root?.left?.balance).toBe(0);
//     });
//   });
//   describe('correctly create tree with root, and two leafs', () => {
//     const myParcelTree = new ParcelTree();
//     myParcelTree.addParcel(6);
//     myParcelTree.addParcel(5);
//     myParcelTree.addParcel(7);
//     test('adds right child', () => {
//       expect(myParcelTree.root?.right?.houseNumber).toBe(7);
//     });
//     test('root height is correct', () => {
//       expect(myParcelTree.root?.height).toBe(2);
//     });
//     test('leaf height is correct', () => {
//       expect(myParcelTree.root?.left?.height).toBe(1);
//     });
//     test('root balance is correct with 2 leaves', () => {
//       expect(myParcelTree.root?.balance).toBe(0);
//     });
//   });

//   describe('correctly create tree with root, and two leafs', () => {
//     const myParcelTree = new ParcelTree();
//     const newParcelDestination = 6;
//     myParcelTree.addParcel(newParcelDestination);
//     myParcelTree.addParcel(5);
//     myParcelTree.addParcel(7);
//     myParcelTree.addParcel(4);
//     test('adds aditional child to the left of the left', () => {
//       expect(myParcelTree.root?.left?.left?.houseNumber).toBe(4);
//     });
//     test('root balance is correct with 3 parcels beneath (slightly left heavy)', () => {
//       expect(myParcelTree.root?.balance).toBe(1);
//     });
//     test('root height is correct with 3 parcels beneath (slightly left heavy)', () => {
//       expect(myParcelTree.root?.height).toBe(3);
//     });
//   });
// });

// describe('correctly left rotates 3 node tree', () => {
//   const myParcelTree = new ParcelTree();
//   myParcelTree.addParcel(6);
//   myParcelTree.addParcel(7);
//   myParcelTree.addParcel(8);
//   console.log(`root houseNumber is ${myParcelTree.root?.houseNumber}`);
//   console.log(
//     `child houseNumbers are ${myParcelTree.root?.right?.houseNumber}`
//   );
//   test('successfully rotates to the left', () => {
//     expect(myParcelTree.root?.houseNumber).toBe(7);
//   });
// });

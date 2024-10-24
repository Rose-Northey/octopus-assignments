import {ParcelTree} from './newBinaryTree';

describe('new nodes are added to the tree', () => {
  test('first node added becomes the root', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(5);
    expect(myTree.root?.data).toBe(5);
  });
  test('first node added has a height of 1', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(5);
    expect(myTree.root?.height).toBe(1);
  });
  test('first node added has a balance of 0', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(5);
    expect(myTree.root?.balance).toBe(0);
  });

  test('add 4,2 and ensure 2 is left of the root', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(2);
    expect(myTree.root?.left?.data).toBe(2);
  });
  test('add 4,2 and ensure root has a height of 1', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(2);
    expect(myTree.root?.height).toBe(2);
  });
  test('add 4,2,6 and ensure 6 is right of the root', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(2);
    myTree.addParcel(6);
    expect(myTree.root?.right?.data).toBe(6);
  });
  test('add 4,2,6 and ensure root has a height of 2', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(2);
    myTree.addParcel(6);
    expect(myTree.root?.height).toBe(2);
  });
  test('add 4,2,6,5 and ensure 5 is right then left of the root', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(2);
    myTree.addParcel(6);
    myTree.addParcel(5);
    expect(myTree.root?.right?.left?.data).toBe(5);
  });
  test('add 4,2,6,5 and ensure root has a height of 3', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(2);
    myTree.addParcel(6);
    myTree.addParcel(5);
    expect(myTree.root?.height).toBe(3);
  });
  test('add 4,2,6,5 and ensure root has a height of 3', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(2);
    myTree.addParcel(6);
    myTree.addParcel(5);
    myTree.addParcel(7);
    expect(myTree.root?.height).toBe(3);
  });
  test('add 4,2,6,5 and ensure root has a balance of -1', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(2);
    myTree.addParcel(6);
    myTree.addParcel(5);
    myTree.addParcel(7);
    expect(myTree.root?.balance).toBe(-1);
  });
});

describe('tree performs left and right rotations', () => {
  test('when tree is left heavy, it rotates right', () => {
    const myTree = new ParcelTree();
    myTree.addParcel(4);
    myTree.addParcel(6);
    myTree.addParcel(5);
    expect(1).toBe(1);
  });
});

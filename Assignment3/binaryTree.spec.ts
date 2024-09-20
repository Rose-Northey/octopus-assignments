import {ParcelTree} from './binaryTree';
describe('add parcels to tree', () => {
  test('add one package to tree', () => {
    const myParcelTree = new ParcelTree();
    const newParcelDestination = 6;
    myParcelTree.addParcel(newParcelDestination);
    expect(myParcelTree.root?.houseNumber).toBe(newParcelDestination);
  });
  test('add an aditional package to the left of the root', () => {
    const myParcelTree = new ParcelTree();
    const newParcelDestination = 6;
    myParcelTree.addParcel(newParcelDestination);
    myParcelTree.addParcel(5);
    expect(myParcelTree.root?.left?.houseNumber).toBe(5);
  });
  test('add an aditional package to the right of the root', () => {
    const myParcelTree = new ParcelTree();
    const newParcelDestination = 6;
    myParcelTree.addParcel(newParcelDestination);
    myParcelTree.addParcel(7);
    expect(myParcelTree.root?.right?.houseNumber).toBe(7);
  });
  test('correctly calculate the height of the root with no other additions', () => {
    const myParcelTree = new ParcelTree();
    const newParcelDestination = 6;
    myParcelTree.addParcel(newParcelDestination);
    expect(myParcelTree.root?.height).toBe(1);
  });
  test('correctly calculate the height of the root with one addition', () => {
    const myParcelTree = new ParcelTree();
    const newParcelDestination = 6;
    myParcelTree.addParcel(newParcelDestination);
    myParcelTree.addParcel(5);
    expect(myParcelTree.root?.height).toBe(2);
  });
  describe('correctly calculate the height of the root with both left and right children', () => {
    const myParcelTree = new ParcelTree();
    const newParcelDestination = 6;
    myParcelTree.addParcel(newParcelDestination);
    myParcelTree.addParcel(5);
    myParcelTree.addParcel(7);
    test('root height is correct', () => {
      expect(myParcelTree.root?.height).toBe(2);
    });
    test('leaf height is correct', () => {
      expect(myParcelTree.root?.left?.height).toBe(1);
    });
  });
  describe('correctly calculate the balances with one left child', () => {
    const myParcelTree = new ParcelTree();
    const newParcelDestination = 6;
    myParcelTree.addParcel(newParcelDestination);
    myParcelTree.addParcel(5);
    test('root balance is correct', () => {
      expect(myParcelTree.root?.balance).toBe(1);
    });
    test('leaf balance is correct', () => {
      expect(myParcelTree.root?.left?.balance).toBe(0);
    });
  });
});

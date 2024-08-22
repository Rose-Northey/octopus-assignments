import {StepVariationsTopDown, stepVariationsBottomUp} from './stepVariations';

describe('calculate number of step variations using topDown', () => {
  test('0 variations when steps=0', () => {
    const steps = 0;
    const myStepVariations = new StepVariationsTopDown();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(0);
  });
  test('1 variations when steps=1', () => {
    const steps = 1;
    const myStepVariations = new StepVariationsTopDown();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(1);
  });
  test('2 variations when steps=2', () => {
    const steps = 2;
    const myStepVariations = new StepVariationsTopDown();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(2);
  });
  test('3 variations when steps=3', () => {
    const steps = 3;
    const myStepVariations = new StepVariationsTopDown();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(3);
  });
  test('5 variations when steps=4', () => {
    const steps = 3;
    const myStepVariations = new StepVariationsTopDown();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(3);
  });
  test('10 variations when steps=89', () => {
    const steps = 3;
    const myStepVariations = new StepVariationsTopDown();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(3);
  });
});

describe('calculate number of step variations using Bottom Up', () => {
  test('0 variations when steps=0', () => {
    const steps = 0;
    const myStepVariations = new stepVariationsBottomUp();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(0);
  });
  test('1 variations when steps=1', () => {
    const steps = 1;
    const myStepVariations = new stepVariationsBottomUp();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(1);
  });
  test('2 variations when steps=2', () => {
    const steps = 2;
    const myStepVariations = new stepVariationsBottomUp();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(2);
  });
  test('3 variations when steps=3', () => {
    const steps = 3;
    const myStepVariations = new stepVariationsBottomUp();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(3);
  });
  test('5 variations when steps=4', () => {
    const steps = 3;
    const myStepVariations = new stepVariationsBottomUp();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(3);
  });
  test('10 variations when steps=89', () => {
    const steps = 3;
    const myStepVariations = new stepVariationsBottomUp();
    const numberOfVariations = myStepVariations.getNumberOfVariations(steps);
    expect(numberOfVariations).toBe(3);
  });
});

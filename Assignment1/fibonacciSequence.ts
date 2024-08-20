export function generateFibonacciSequence(
  nFinal: number,
  currentSequence: bigint[] = [BigInt(0), BigInt(1)]
): bigint {
  if (nFinal >= currentSequence.length) {
    const onePrior = currentSequence[currentSequence.length - 1];
    const twoPrior = currentSequence[currentSequence.length - 2];
    const newInSequence = onePrior + twoPrior;
    currentSequence.push(onePrior + twoPrior);
    return generateFibonacciSequence(nFinal, currentSequence);
  } else {
    return currentSequence[nFinal];
  }
}

class FibonacciNumber {
  onePrior: FibonacciNumber | undefined;
  twoPrior: FibonacciNumber | undefined;
  count: number;
  constructor(
    onePrior: FibonacciNumber | undefined,
    twoPrior: FibonacciNumber | undefined
  ) {
    this.onePrior = onePrior;
    this.twoPrior = twoPrior;
    this.count = (onePrior?.count ?? 0) + (twoPrior?.count ?? 0);
  }
}

export default class fibonacciSequenceClass {
  i: number;
  nFinal: number;
  top: FibonacciNumber | undefined;
  oneFromTop: FibonacciNumber | undefined;
  constructor(nFinal: number) {
    this.i = 0;
    this.nFinal = nFinal;
    this.top = undefined;
    this.oneFromTop = undefined;
  }
  calculateNext() {}
}

// past a certain point, one section of the array will exceed maximum safe integer
// if i use an ordered list using references then

// -> findNewNumber(prev, beforePrev)
// new class FibonacciNumber(prev, beforePrev)
// update previous nodes
// _> continue until i=nFinal;
//  np while or for

// no loops??
// reference itself - recursion

// I want the count to take nFinal, start with 0, keep track of second
// 1st iteratiojn -> fib(undefined, undefined,5){}
// if 5>1
// calculate current number, set the current number to be the first undefined

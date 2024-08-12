# Assignment #1: Linear Algorithms

## Materials to Read

- [Data Structures](https://en.wikipedia.org/wiki/List_of_data_structures)
- [Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation)
- [Computational Complexity](https://en.wikipedia.org/wiki/Computational_complexity_theory)

## Tasks

1. **Implement a Stack**

   - Operations: `Push`, `Pop`, `Max`
   - Each operation must take constant time: `O(c)`

2. **Implement a Queue**

   - Operations: `Push`, `Pop`, `Max`
   - Each operation must take constant time: `O(c)`

3. **Bracket Sequence Checker**
   - Input: A string consisting of brackets of different types: `(`, `)`, `[`, `]`, `{`, `}`
   - Implement an algorithm to check if the sequence is correct (i.e., each opening bracket has a corresponding closing bracket)
   - Example:
     - Correct sequences: c, `()()`
     - Incorrect sequences: `[)`, `[(])`
   - The algorithm should have a time complexity of `O(n)`, where `n` is the length of the input string.

<!-- `([{}])`
when I come across a new opening bracket, add it to stack
when I come across a new closing bracket delete it from stack
->()[]{} -> delete from stack AND check if the one we are deleting is correct, throw an error if its not
->

 -->
<!-- '([{ last in first out -> its a stack not a queue -->

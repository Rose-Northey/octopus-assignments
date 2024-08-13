import {StringStack} from './stringStack';

function isLeftBracket(bracket: string) {
  if (bracket === '(' || bracket === '{' || bracket === '[') {
    return true;
  } else {
    return false;
  }
}

function isBracketPair(poppedBracket: string, rightBracket: string) {
  if (poppedBracket === '{' && rightBracket === '}') {
    return true;
  } else if (poppedBracket === '[' && rightBracket === ']') {
    return true;
  } else if (poppedBracket === '(' && rightBracket === ')') {
    return true;
  } else {
    return false;
  }
}

export default function isBracketSequenceCorrect(brackets: string) {
  const bracketItems = brackets.split('');
  const bracketStack = new StringStack();
  let i = 0;

  while (i < bracketItems.length) {
    const bracket = bracketItems[i];
    if (isLeftBracket(bracket)) {
      bracketStack.Push(bracket);
    } else {
      try {
        const poppedBracket = bracketStack.Pop();
        if (!isBracketPair(poppedBracket, bracket)) {
          return false;
        }
      } catch (error) {
        return false;
      }
    }
    i++;
  }

  if (bracketStack.size !== 0) {
    return false;
  }
  return true;
}

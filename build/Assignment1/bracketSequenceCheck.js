"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isBracketSequenceCorrect;
const genericStack_1 = require("./genericStack");
function isLeftBracket(bracket) {
    if (bracket === '(' || bracket === '{' || bracket === '[') {
        return true;
    }
    else {
        return false;
    }
}
function isBracketPair(poppedBracket, rightBracket) {
    if (poppedBracket === '{' && rightBracket === '}') {
        return true;
    }
    else if (poppedBracket === '[' && rightBracket === ']') {
        return true;
    }
    else if (poppedBracket === '(' && rightBracket === ')') {
        return true;
    }
    else {
        return false;
    }
}
function isBracketSequenceCorrect(brackets) {
    const bracketItems = brackets.split('');
    const bracketStack = new genericStack_1.GenericStack();
    let i = 0;
    while (i < bracketItems.length) {
        const bracket = bracketItems[i];
        if (isLeftBracket(bracket)) {
            bracketStack.Push(bracket);
        }
        else {
            try {
                const poppedBracket = bracketStack.Pop();
                if (!isBracketPair(poppedBracket, bracket)) {
                    return false;
                }
            }
            catch (error) {
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

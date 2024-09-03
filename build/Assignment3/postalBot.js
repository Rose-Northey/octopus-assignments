"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalBot = void 0;
class PostalBot {
    constructor() {
        this.recursionCount = 0;
        this.mail = [];
    }
    addMail(incomingMail) {
        this.mail = [...incomingMail];
        this.quickSort(this.mail);
    }
    quickSort(array, iPivot = 0, iLastInSortRange = array.length - 1) {
        this.recursionCount++;
        const iLastLower = this.findIndexOfLowerFromRight(array, iPivot, iLastInSortRange);
        const iFirstHigher = this.findIndexOfHigherFromLeft(array, iPivot, iLastInSortRange);
        if (!iLastLower) {
            iPivot++;
        }
        else if (!iFirstHigher) {
            this.swapValues(array, iPivot, iLastInSortRange);
            iLastInSortRange--;
        }
        else if (iFirstHigher > iLastLower) {
            this.swapValues(array, iPivot, iLastLower);
        }
        else if (iFirstHigher < iLastLower) {
            this.swapValues(array, iFirstHigher, iLastLower);
        }
        if (iPivot < iLastInSortRange) {
            return this.quickSort(array, iPivot, iLastInSortRange);
        }
        return array;
    }
    findIndexOfLowerFromRight(array, iPivot, iLastInSortRange) {
        for (let i = iLastInSortRange; i > iPivot; i--)
            if (array[i] < array[iPivot]) {
                return i;
            }
    }
    findIndexOfHigherFromLeft(array, iPivot, iLastInSortRange) {
        for (let i = iPivot + 1; i <= iLastInSortRange; i++) {
            if (array[i] > array[iPivot]) {
                return i;
            }
        }
    }
    swapValues(array, iOne, iTwo) {
        const oldOne = array[iOne];
        array[iOne] = array[iTwo];
        array[iTwo] = oldOne;
    }
    quicksortPretty(array) {
        this.recursionCount++;
        if (array.length <= 1) {
            return array;
        }
        const pivot = this.findOptimisedPivot(array);
        const highArray = [];
        const lowArray = [];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > pivot) {
                highArray.push(array[i]);
            }
            else {
                lowArray.push(array[i]);
            }
        }
        return [
            ...this.quicksortPretty(lowArray),
            pivot,
            ...this.quicksortPretty(highArray),
        ];
    }
    findOptimisedPivot(array) {
        if (array.length > 3) {
            const arrayMiddleIndex = Math.floor(array.length / 2);
            const optimalPivot = this.quicksortPretty([
                array[0],
                array[arrayMiddleIndex],
                array[array.length - 1],
            ])[1];
            if (array[arrayMiddleIndex] === optimalPivot) {
                this.swapValues(array, arrayMiddleIndex, 0);
            }
            else if (array[array.length - 1] === optimalPivot) {
                this.swapValues(array, array.length - 1, 0);
            }
        }
        return array[0];
    }
}
exports.PostalBot = PostalBot;

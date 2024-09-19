"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalBot = void 0;
class PostalBot {
    constructor() {
        this.countRecursiveCalls = 0;
        this.mail = [];
    }
    addMail(incomingMail) {
        this.mail = [...incomingMail];
        this.quickSort(this.mail);
    }
    getMailCountForHouseNumber(houseNumber, startIndex = 0, searchRangeSize = this.mail.length, mailCountForHouse = 0) {
        if (!searchRangeSize) {
            return mailCountForHouse;
        }
        const midRangeIndex = Math.floor(searchRangeSize / 2) + startIndex;
        if (houseNumber === this.mail[midRangeIndex]) {
            this.mail.splice(midRangeIndex, 1);
            return this.getMailCountForHouseNumber(houseNumber, startIndex, --searchRangeSize, ++mailCountForHouse);
        }
        if (houseNumber < this.mail[midRangeIndex]) {
            const lowerHalfLetterCount = midRangeIndex - startIndex - 1;
            return this.getMailCountForHouseNumber(houseNumber, startIndex, lowerHalfLetterCount, mailCountForHouse);
        }
        if (houseNumber > this.mail[midRangeIndex]) {
            const upperHalfLetterCount = searchRangeSize - midRangeIndex;
            return this.getMailCountForHouseNumber(houseNumber, midRangeIndex + 1, upperHalfLetterCount, mailCountForHouse);
        }
        return mailCountForHouse;
    }
    quickSort(array, iPivot = 0, iLastInSortRange = array.length - 1) {
        this.countRecursiveCalls++;
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
        this.countRecursiveCalls++;
        if (array.length <= 1) {
            return array;
        }
        const pivot = this.getOptimalPivot(array);
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
    getOptimalPivot(array) {
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

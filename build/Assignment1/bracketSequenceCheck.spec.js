"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bracketSequenceCheck_1 = __importDefault(require("./bracketSequenceCheck"));
describe('3. **Bracket Sequence Checker**', () => {
    describe('approves correct sequences', () => {
        test('empty string', () => {
            expect((0, bracketSequenceCheck_1.default)('')).toBe(true);
        });
        test('nested bracket string ([{}])', () => {
            expect((0, bracketSequenceCheck_1.default)('([{}])')).toBe(true);
        });
        test('seperate brackets ()[]{}', () => {
            expect((0, bracketSequenceCheck_1.default)('()[]{}')).toBe(true);
        });
    });
    describe('rejects incorrect sequences', () => {
        test('single left bracket', () => {
            expect((0, bracketSequenceCheck_1.default)('{')).toBe(false);
        });
        test('nested bracket string with intruder ([({}])', () => {
            expect((0, bracketSequenceCheck_1.default)('([({}])')).toBe(false);
        });
        test('wrong character included (a)[]{}', () => {
            expect((0, bracketSequenceCheck_1.default)('(a)[]{}')).toBe(false);
        });
        test('all right brackets })]', () => {
            expect((0, bracketSequenceCheck_1.default)('})]')).toBe(false);
        });
        test('all left brackets {{[', () => {
            expect((0, bracketSequenceCheck_1.default)('{{[')).toBe(false);
        });
        test('no brackets at all a', () => {
            expect((0, bracketSequenceCheck_1.default)('a')).toBe(false);
        });
    });
});

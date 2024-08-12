import isBracketSequenceCorrect from './bracketSequenceCheck';

describe('3. **Bracket Sequence Checker**', () => {
  describe('approves correct sequences', () => {
    test('empty string', () => {
      expect(isBracketSequenceCorrect('')).toBe(true);
    });
    test('nested bracket string ([{}])', () => {
      expect(isBracketSequenceCorrect('([{}])')).toBe(true);
    });
    test('seperate brackets ()[]{}', () => {
      expect(isBracketSequenceCorrect('()[]{}')).toBe(true);
    });
  });
  describe('rejects incorrect sequences', () => {
    test('single left bracket', () => {
      expect(isBracketSequenceCorrect('{')).toBe(false);
    });
    test('nested bracket string with intruder ([({}])', () => {
      expect(isBracketSequenceCorrect('([({}])')).toBe(false);
    });
    test('wrong character included (a)[]{}', () => {
      expect(isBracketSequenceCorrect('(a)[]{}')).toBe(false);
    });
    test('all right brackets })]', () => {
      expect(isBracketSequenceCorrect('})]')).toBe(false);
    });
    test('all left brackets {{[', () => {
      expect(isBracketSequenceCorrect('{{[')).toBe(false);
    });
    test('no brackets at all a', () => {
      expect(isBracketSequenceCorrect('a')).toBe(false);
    });
  });
});

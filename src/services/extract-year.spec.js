import { extractYear } from './extract-year';

describe('When date is passed', () => {
  it('extrats and returns full year', () => {
    const result = extractYear('2020-02-04');
    expect(result).toEqual('2020');
  });

  describe('when invalid argument is passed', () => {
    it('returns empty string', () => {
      const result = extractYear(null);
      expect(result).toEqual('');
    });
  });
});

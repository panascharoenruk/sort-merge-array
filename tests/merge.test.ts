import { merge } from '../src/merge';

describe('merge()', () => {
  it('should merge and sort arrays correctly', () => {
    const result = merge(
      [1, 5, 9],
      [10, 7, 3],
      [2, 4, 8]
    );

    expect(result).toEqual([1, 2, 3, 4, 5, 7, 8, 9, 10]);
  });

  it('should handle empty arrays', () => {
    const result = merge(
      [],
      [],
      []
    );
    expect(result).toEqual([]);
  })

  it('should handle arrays of different lengths', () => {
    const result = merge(
      [1, 3],
      [6, 5, 4],
      [2]
    );
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  })

  it('should handle arrays with duplicate values', () => {
    const result = merge(
      [1, 3, 5],
      [6, 4, 2],
      [1, 2, 3]
    );
    expect(result).toEqual([1, 1, 2, 2, 3, 3, 4, 5, 6]);
  });

  it('should handle arrays with negative values', () => {
    const result = merge(
      [-3, -1, 2],
      [1, 0, -2],
      [-4, -1, 3]
    );
    expect(result).toEqual([-4, -3, -2, -1, -1, 0, 1, 2, 3]);
  });
});
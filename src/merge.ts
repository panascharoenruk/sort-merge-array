export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const reversedCollection2: number[] = [];
  for (let i = collection2.length - 1; i >= 0; i--) {
    reversedCollection2.push(collection2[i]);
  }

  const mergedCollection: number[] = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < collection1.length || j < reversedCollection2.length || k < collection3.length) {
    const value1 = i < collection1.length ? collection1[i] : Number.POSITIVE_INFINITY || Number.NEGATIVE_INFINITY;
    const value2 = j < reversedCollection2.length ? reversedCollection2[j] : Number.POSITIVE_INFINITY || Number.NEGATIVE_INFINITY;
    const value3 = k < collection3.length ? collection3[k] : Number.POSITIVE_INFINITY || Number.NEGATIVE_INFINITY;

    const numberToAdd = Math.min(value1, value2, value3);
    mergedCollection.push(numberToAdd);
    if (numberToAdd === value1) {
      i++;
    } else if (numberToAdd === value2) {
      j++;
    } else {
      k++;
    }
  }
  return mergedCollection;
}
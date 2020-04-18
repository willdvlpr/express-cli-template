/**
 * Function which calculates the average of only odd positive numbers.
 */
export function averageOddPositiveIntegers(input: number[]): number {
  // Filter input array for positive then odd interger values only
  const oddPositive = input.filter((num) => num > 0).filter((num) => num % 2);
  // Need to check for empty array and provide relevant return value
  if (oddPositive.length === 0) {
    return 0;
  } else {
    return oddPositive.reduce((acc, cur) => acc + cur) / oddPositive.length;
  }
}

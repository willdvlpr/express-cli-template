/**
 * Function which calculates the average of only odd positive numbers.
 */
export function averageOddPositiveIntegers(input: number[]): number {

  const results = input
    .filter(num => (num % 2 != 0))
    .filter(num => num > 0);

  return results.reduce((acc, cur, input) => acc + cur) / results.length;
}

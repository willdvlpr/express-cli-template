/**
 * Function which calculates the average of only odd positive numbers.
 */
export function averageOddPositiveIntegers(input: number[]): number {
  const results = input
    // filter for even numbers
    .filter((num) => num % 2 != 0)
    // filter for positive numbers
    .filter((num) => num > 0);

  // return average value of array
  return results.reduce((acc, cur, input) => acc + cur) / results.length;
}

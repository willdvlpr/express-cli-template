"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Function which calculates the average of only odd positive numbers.
 */
function averageOddPositiveIntegers(input) {
    const results = input
        .filter(num => (num % 2 != 0))
        .filter(num => num > 0);
    return results.reduce((acc, cur, input) => acc + cur) / results.length;
}
exports.averageOddPositiveIntegers = averageOddPositiveIntegers;

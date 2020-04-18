import { averageOddPositiveIntegers } from "./util";

// Test for existence of function
test("averageOddPositiveIntegers function exists", () => {
  expect(averageOddPositiveIntegers).toBeDefined();
});

// Test with array of: ALL ODD POSITIVE INTS
test("average of [1,3,5,7,9]", () => {
  expect(averageOddPositiveIntegers([1, 3, 5, 7, 9])).toBe(5);
});

// Test with array of: ALL EVEN POSITIVE INTS
test("average of [2,4,6,8,10]", () => {
  expect(averageOddPositiveIntegers([2, 4, 6, 8, 10])).toBe(0);
});

// Test with array of: ALL NEGATIVE INTS
test("average of [-1,-2,-3,-4,-5]", () => {
  expect(averageOddPositiveIntegers([-1, -2, -3, -4, -5])).toBe(0);
});

// Test with array of: BOTH ODD AND EVEN POSITIVE INTS
test("average of [1,2,3,4,5]", () => {
  expect(averageOddPositiveIntegers([1, 2, 3, 4, 5])).toBe(3);
});

// Test with array of: POSITIVE AND NEGATIVE INTS
test("average of [-1,2,3,-4,5]", () => {
  expect(averageOddPositiveIntegers([-1, 2, 3, -4, 5])).toBe(4);
});

// Test with array of: ZEROS
test("average of [0,0,0,0,0]", () => {
  expect(averageOddPositiveIntegers([0, 0, 0, 0, 0])).toBe(0);
});

// Test with array of: EMPTY
test("average of []", () => {
  expect(averageOddPositiveIntegers([])).toBe(0);
});

// we need some code from vitest (handles the testing for us)
import { test, expect } from "vitest";
// and we need to import the code we want to test (my cool isPalindrome function)
import { isPalindrome } from "./app";

test(`Check if isPalindrome works 'frog'`, function () {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("foobar")).toBe(false);
});

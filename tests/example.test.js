import { test, expect } from "vitest";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

test("add function adds two numbers", () => {
  const result = add(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
});

test("subtract function subtracts two numbers", () => {
  const result = subtract(5, 2);
  const expected = 3;
  expect(result).toBe(expected);
});

test("multiply function multiplies two numbers", () => {
  const result = multiply(2, 3);
  const expected = 6;
  expect(result).toBe(expected);
});

test("divide function divides two numbers", () => {
  const result = divide(6, 2);
  const expected = 3;
  expect(result).toBe(expected);
});

test("divide function throws error when dividing by zero", () => {
  expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
});

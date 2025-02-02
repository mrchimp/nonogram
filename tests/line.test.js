import { describe, expect, test } from "vitest";
import { Line } from "../src/line.js";
import { EMPTY, FILLED } from "../src/constants.js";

describe("Is line complete", () => {
  test("Totally full line", () => {
    const line = new Line(FILLED, FILLED, FILLED);
    expect(line.isComplete([3])).toBe(true);
  });

  test("Totally empty line", () => {
    const line = new Line(EMPTY, EMPTY, EMPTY);
    expect(line.isComplete([3])).toBe(false);
  });

  test("Partially filled line", () => {
    const line = new Line(FILLED, EMPTY, FILLED);
    expect(line.isComplete([3])).toBe(false);
  });

  test("Complete multi block line", () => {
    const line = new Line(
      FILLED,
      FILLED,
      EMPTY,
      FILLED,
      FILLED,
      EMPTY,
      FILLED,
      FILLED,
    );
    expect(line.isComplete([2, 2, 2])).toBe(true);
  });

  test("Incomplete multi block line", () => {
    const line = new Line(
      FILLED,
      FILLED,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      FILLED,
      FILLED,
    );
    expect(line.isComplete([2, 2, 2])).toBe(false);
  });

  test("Throws an error if block is longer than it should be", () => {
    const line = new Line(FILLED, FILLED, FILLED, EMPTY, EMPTY);
    expect(() => line.isComplete([2])).toThrowError(
      "Block is longer than it should be",
    );
  });
});

test("Fill line", () => {
  const line = new Line(EMPTY, EMPTY, EMPTY);
  line.fill(0, 2, FILLED);
  expect([...line]).toStrictEqual([FILLED, FILLED, EMPTY]);
});

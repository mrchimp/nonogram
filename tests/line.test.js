import { describe, expect, test } from "vitest";
import { Line } from "../src/line.js";

describe("Is line complete", () => {
  test("Totally full line", () => {
    const line = new Line(2, 2, 2);
    expect(line.isComplete([3])).toBe(true);
  });

  test("Totally empty line", () => {
    const line = new Line(0, 0, 0);
    expect(line.isComplete([3])).toBe(false);
  });

  test("Partially filled line", () => {
    const line = new Line(2, 0, 2);
    expect(line.isComplete([3])).toBe(false);
  });

  test("Complete multi block line", () => {
    const line = new Line(2, 2, 0, 2, 2, 0, 2, 2);
    expect(line.isComplete([2, 2, 2])).toBe(true);
  });

  test("Incomplete multi block line", () => {
    const line = new Line(2, 2, 0, 0, 0, 0, 2, 2);
    expect(line.isComplete([2, 2, 2])).toBe(false);
  });

  test("Throws an error if block is longer than it should be", () => {
    const line = new Line(2, 2, 2, 0, 0);
    expect(() => line.isComplete([2])).toThrowError(
      "Block is longer than it should be",
    );
  });
});

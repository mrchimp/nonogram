import { test, expect } from "vitest";
import { fullLine } from "../../src/algorithms/full-line";
import { EMPTY, FILLED } from "../../src/constants";
import { Line } from "../../src/line";

test("FUll line algorithm", () => {
  const line = new Line(EMPTY, EMPTY, EMPTY);
  const numbers = [3];
  const output = fullLine(line, numbers);
  expect([...output]).toStrictEqual([FILLED, FILLED, FILLED]);
});

import { test, expect } from "vitest";
import { EMPTY, FILLED } from "../../src/constants";
import { Line } from "../../src/line";
import { middleCrossing } from "../../src/algorithms/middle-crossing";

test("Middle crossing algorithm", () => {
  [
    {
      size: 3,
      numbers: [2],
      result: "☐■☐",
    },
    {
      size: 5,
      numbers: [3],
      result: "☐☐■☐☐",
    },
    {
      size: 5,
      numbers: [4],
      result: "☐■■■☐",
    },
  ].forEach((testCase) => {
    const line = new Line(...Array(testCase.size).fill(EMPTY));
    const output = middleCrossing(line, testCase.numbers).toString();
    expect(output).toStrictEqual(testCase.result);
  });
});

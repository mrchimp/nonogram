import { expect, test } from "vitest";
import { Grid } from "../src/grid";
import { solve } from "../src/solver";

const testCases = [
  // {
  //   size: 3,
  //   rows: [[3], [3], [3]],
  //   cols: [[3], [3], [3]],
  //   solution: "■■■\n■■■\n■■■",
  // },
  {
    size: 3,
    rows: [[1], [2], [3]],
    cols: [[3], [2], [1]],
    solution: "■☐☐\n■■☐\n■■■",
  },
];

test("Can solve problems", () => {
  testCases.forEach((testCase) => {
    const grid = new Grid(testCase.size, testCase.rows, testCase.cols);
    const solvedGrid = solve(grid);
    const solution = solvedGrid.toString();
    expect(solution).toBe(testCase.solution);
  });
});

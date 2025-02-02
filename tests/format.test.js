import { describe, expect, test } from "vitest";
import { Char } from "../src/constants.js";
import { Line } from "../src/line.js";
import { formatGrid, formatLine } from "../src/format.js";
import { Grid } from "../src/grid.js";

test("Can format a line", () => {
  const line = new Line(0, 1, 2);
  expect(formatLine(line)).toEqual("☐☒■");
});

test("Can format a grid", () => {
  const grid = new Grid(3);
  grid.setGrid([
    [0, 1, 2],
    [1, 2, 0],
    [2, 0, 1],
  ]);
  expect(formatGrid(grid)).toEqual("☐☒■\n☒■☐\n■☐☒");
});

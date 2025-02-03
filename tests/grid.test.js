import { describe, expect, test } from "vitest";
import { Grid } from "../src/grid.js";
import { Char } from "../src/constants.js";

const testGrid = [
  [0, 1, 2],
  [0, 2, 2],
  [2, 1, 1],
];

test("Initialize grid", () => {
  const grid = new Grid(3);

  expect(grid.getGrid()).toStrictEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

describe.concurrent("Get lines", () => {
  const grid = new Grid(3);

  grid.setGrid(testGrid);

  test("Can get a row", () => {
    expect([...grid.getLine(0, false, false)]).toStrictEqual([0, 1, 2]);
    expect([...grid.getLine(1, false, false)]).toStrictEqual([0, 2, 2]);
    expect([...grid.getLine(2, false, false)]).toStrictEqual([2, 1, 1]);
  });

  test("Can get a row reversed", () => {
    expect([...grid.getLine(0, false, true)]).toStrictEqual([2, 1, 0]);
    expect([...grid.getLine(1, false, true)]).toStrictEqual([2, 2, 0]);
    expect([...grid.getLine(2, false, true)]).toStrictEqual([1, 1, 2]);
  });

  test("Can get a column", () => {
    expect([...grid.getLine(0, true, false)]).toStrictEqual([0, 0, 2]);
    expect([...grid.getLine(1, true, false)]).toStrictEqual([1, 2, 1]);
    expect([...grid.getLine(2, true, false)]).toStrictEqual([2, 2, 1]);
  });

  test("Can get a column reversed", () => {
    expect([...grid.getLine(0, true, true)]).toStrictEqual([2, 0, 0]);
    expect([...grid.getLine(1, true, true)]).toStrictEqual([1, 2, 1]);
    expect([...grid.getLine(2, true, true)]).toStrictEqual([1, 2, 2]);
  });
});

describe.concurrent("Set lines", () => {
  test("Can set a row", () => {
    const grid = new Grid(3);
    grid.setLine([0, 1, 2], 0, false, false);
    grid.setLine([0, 2, 2], 1, false, false);
    grid.setLine([2, 1, 1], 2, false, false);
    expect(grid.getGrid()).toStrictEqual(testGrid);
  });

  test("Can set a row reversed", () => {
    const grid = new Grid(3);
    grid.setLine([2, 1, 0], 0, false, true);
    grid.setLine([2, 2, 0], 1, false, true);
    grid.setLine([1, 1, 2], 2, false, true);
    expect(grid.getGrid()).toStrictEqual(testGrid);
  });

  test("Can set a column", () => {
    const grid = new Grid(3);
    grid.setLine([0, 0, 2], 0, true, false);
    grid.setLine([1, 2, 1], 1, true, false);
    grid.setLine([2, 2, 1], 2, true, false);
    expect(grid.getGrid()).toStrictEqual(testGrid);
  });

  test("Can set a column reversed", () => {
    const grid = new Grid(3);
    grid.setLine([2, 0, 0], 0, true, true);
    grid.setLine([1, 2, 1], 1, true, true);
    grid.setLine([1, 2, 2], 2, true, true);
    expect(grid.getGrid()).toStrictEqual(testGrid);
  });
});

test("Is complete", () => {
  const grid = new Grid(3);
  grid.setGrid([
    [0, 2, 0],
    [2, 0, 2],
    [2, 2, 2],
  ]);
  grid.setNumbers([[1], [1, 1], [3]], [[2], [1, 1], [2]]);
  expect(grid.isComplete()).toBe(true);
  grid.setNumbers([[2], [1], [1]], [[3], [3], [3]]);
  expect(grid.isComplete()).toBe(false);
});

test("Can convert to string", () => {
  const grid = new Grid(5);
  grid.setGrid([
    [0, 1, 2],
    [2, 1, 0],
    [1, 1, 1],
  ]);
  expect(grid.toString()).toBe("012210111");
});

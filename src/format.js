import { Char } from "./constants";

export function formatLine(line, chars = Char) {
  return [...line]
    .map(
      (c) =>
        ({
          0: Char.EMPTY,
          1: Char.CROSS,
          2: Char.FILLED,
        })[c],
    )
    .join("");
}

export function formatGrid(grid, chars = Char) {
  let lines = [];

  for (let i = 0; i <= grid.size - 1; i++) {
    lines.push(formatLine(grid.getLine(i, false, false)));
  }

  return lines.join("\n");
}

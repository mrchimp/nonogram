import { fullLine } from "./algorithms/full-line";
import { formatGrid } from "./format";

export function solve(grid) {
  const algorithms = [
    {
      name: "Full Line",
      function: fullLine,
    },
  ];

  let success = false;
  let lastResult = grid.toString();

  while (!success) {
    for (const isColumn of [false, true]) {
      for (const isReversed of [false, true]) {
        lineLoop: for (let i = 0; i < grid.size; i++) {
          const line = grid.getLine(i, isColumn, isReversed);
          const numbers = grid.getNumbers(isColumn)[i];

          for (const algorithm of algorithms) {
            if (line.isComplete(numbers)) {
              continue lineLoop;
            }

            console.log("");
            console.log(
              `${isColumn ? "Col" : "Row"} ${i} ${isReversed ? "reversed" : ""}`,
            );
            console.log(`Algo "${algorithm.name}"`);
            console.log({
              line,
              numbers,
            });
            console.log("Before:");
            console.log(grid.toString());
            const result = algorithm.function(line, numbers);
            grid.setLine(result, i, isColumn, isReversed);
            console.log("After:");
            console.log(grid.toString());
          }
        }
      }
    }

    if (grid.isComplete()) {
      success = true;
    }

    if (lastResult === grid.toString()) {
      throw new Error("Stuck in a loop.");
    }

    lastResult = grid.toString();
  }

  return grid;
}

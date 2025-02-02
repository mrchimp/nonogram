import { fullLine } from "./algorithms/full-line";

export function Solve(grid) {
  const algorithms = [
    {
      name: "Full Line",
      function: fullLine,
    },
  ];

  let success = false;

  while (!success) {
    for (let i = 0; i < grid.size - 1; i++) {
      for (isColumn in [true, false]) {
        for (isReversed in [true, false]) {
          const line = grid.getLine(i, isColumn, isReversed);

          for (algorithm in algorithms) {
            const result = algorithm.function(line);
            grid.setLine(result, i, isColumn, isReversed);
          }
        }
      }
    }

    if (grid.isComplete()) {
      success = true;
    }

    if (noChange) {
      throw new Error("Stuck in a loop.");
    }
  }

  return grid;
}

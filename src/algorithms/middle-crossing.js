import { FILLED } from "../constants";

export function MiddleCrossing(line, numbers) {
  if (numbers[0] > line.length / 2) {
    const amt = numbers[0] - line.length / 2;
    const start = line.length / 2 - amt;
    const length = amt * 2;

    console.log({ amt, start, length });
    line.fill(start - 1, length, FILLED);
  }

  console.log("did nothing")

  // ☐ ☐ ■ ☐ ☐ 3 / 5
  // ☐ ■ ■ ■ ☐ 4 / 5

  return line;
}

import { FILLED } from "../constants";

export function middleCrossing(line, numbers) {
  if (numbers[0] > line.length / 2) {
    const amt = numbers[0] - line.length / 2;
    const start = line.length / 2 - amt;
    const length = amt * 2;
    line.fill(start, length, FILLED);
  }

  return line;
}

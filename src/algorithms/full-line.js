import { FILLED } from "../constants";

export function fullLine(line, numbers) {
  if (numbers.length === 1 && numbers[0] === line.length) {
    line.fill(0, line.length, FILLED);
  }

  return line;
}

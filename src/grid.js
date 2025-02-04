import { formatGrid } from "./format";
import { Line } from "./line";

export class Grid {
  constructor(size, rowNumbers, colNumbers) {
    this.size = size;
    this.setNumbers(rowNumbers, colNumbers);
    this.grid = [...Array(this.size)].map(() => Array(this.size).fill(0));
  }

  getGrid() {
    return this.grid;
  }

  setGrid(grid) {
    this.grid = grid;
  }

  getLine(index, isColumn, isReversed) {
    const line = [];

    if (isColumn) {
      for (let i = 0; i <= this.size - 1; i++) {
        line.push(this.grid[i][index]);
      }
    } else {
      line.push(...this.grid[index]);
    }

    if (isReversed) {
      line.reverse();
    }

    return new Line(...line);
  }

  setLine(line, index, isColumn, isReversed) {
    if (isReversed) {
      line.reverse();
    }

    if (!isColumn) {
      this.grid[index] = [...line];
      return;
    }

    for (let i = 0; i <= this.size - 1; i++) {
      this.grid[i][index] = line[i];
    }
  }

  setNumbers(rowNumbers, colNumbers) {
    this.rowNumbers = rowNumbers;
    this.colNumbers = colNumbers;
  }

  getNumbers(isColumn) {
    return isColumn ? this.colNumbers : this.rowNumbers;
  }

  isComplete() {
    for (const isColumn in [true, false]) {
      const numbers = this.getNumbers(isColumn);
      for (let i = 0; i < this.size - 1; i++) {
        const line = this.getLine(i, isColumn);
        const isComplete = line.isComplete(numbers[i]);

        if (!isComplete) {
          return false;
        }
      }
    }

    return true;
  }

  toString() {
    return formatGrid(this);
  }
}

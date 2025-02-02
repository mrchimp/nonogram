import { FILLED } from "./constants";

export class Line extends Array {
  constructor(...args) {
    super(...args);
  }

  fill(start, length = 1, value = FILLED) {
    for (let i = start; i < start + length; i++) {
      this[i] = value;
    }
  }

  isComplete(numbers = []) {
    const totalBlockCount = numbers.length;
    let curIsBlock = false;
    let curBlockCount = 0;
    let completeBlockCount = 0;
    let blockCursor = 0;
    let nextBlockSize = numbers[blockCursor];

    for (let i = 0; i <= this.length - 1; i++) {
      const cur = this[i];

      if (cur === FILLED) {
        curIsBlock = true;
        curBlockCount++;

        if (curBlockCount === nextBlockSize) {
          completeBlockCount++;
          blockCursor++;
          nextBlockSize = numbers[blockCursor];
          curIsBlock = false;

          // Block is longer than it should be
          if (i < this.length - 1 && this[i + 1] === FILLED) {
            throw new Error("Block is longer than it should be");
          }
        }
      } else {
        if (curIsBlock) {
          return false;
        }
        curBlockCount = 0;
      }
    }

    return completeBlockCount === totalBlockCount;
  }
}

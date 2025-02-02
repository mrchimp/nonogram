export class Line extends Array {
  constructor(...args) {
    super(...args);
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

      if (cur === 2) {
        curIsBlock = true;
        curBlockCount++;

        if (curBlockCount === nextBlockSize) {
          completeBlockCount++;
          blockCursor++;
          nextBlockSize = numbers[blockCursor];
          curIsBlock = false;

          // Block is longer than it should be
          if (i < this.length - 1 && this[i + 1] === 2) {
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

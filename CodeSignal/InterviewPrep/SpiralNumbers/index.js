const fs = require('fs');

const spiralNumbers = n => {
  const res = new Array(n).fill(0).map(_ => [...new Array(n).fill(0)]);
  const dir = ['R', 'D', 'L', 'U'];
  let vIdx = 0;
  let hIdx = 0;
  let curDir = 0;
  let value = 1;
  let prevCount = n;
  let count = n;
  let iter = 1;

  while (value <= n * n) {
    res[vIdx][hIdx] = value;
    count -= 1;
    value += 1;
    if (count === 0) {
      iter -= 1;
      switch (dir[curDir]) {
        case 'R':
          vIdx += 1;
          break;
        case 'D':
          hIdx -= 1;
          break;
        case 'L':
          vIdx -= 1;
          break;
        case 'U':
          hIdx += 1;
          break;
        default:
          break;
      }
      curDir = curDir === dir.length - 1 ? 0 : (curDir += 1);
      if (iter === 0) {
        count = prevCount - 1;
        prevCount = count;
        iter = 2;
      } else {
        count = prevCount;
      }
    } else {
      switch (dir[curDir]) {
        case 'R':
          hIdx += 1;
          break;
        case 'D':
          vIdx += 1;
          break;
        case 'L':
          hIdx -= 1;
          break;
        case 'U':
          vIdx -= 1;
          break;
        default:
          break;
      }
    }
  }
  return res;
};

const data = spiralNumbers(1000);

fs.writeFileSync(
  './dat.txt',
  data.map(x => x.map(y => `     ${y}`.slice(-5)).join(' ')).join('\n')
);

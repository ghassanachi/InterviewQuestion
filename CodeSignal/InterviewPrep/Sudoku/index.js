function isUnique(arr) {
  const a = new Set();
  arr.forEach(e => a.add(e));
  return arr.length === a.size;
}

function sudoku(grid) {
  for (const arr of grid) {
    if (!isUnique(arr)) return false;
  }
  for (let i = 0; i < 9; i += 1) {
    const arr = [];
    for (let y = 0; y < 9; y += 1) {
      arr.push(grid[y][i]);
    }
    if (!isUnique(arr)) return false;
  }
  for (let i = 0; i < 7; i += 3) {
    for (let y = 0; y < 7; y += 3) {
      let arr = [];
      for (let iP = i; iP < i + 3; iP += 1) {
        for (let yP = y; yP < y + 3; yP += 1) {
          arr.push(grid[iP][yP]);
        }
      }
      if (!isUnique(arr)) return false;
      arr = [];
    }
  }
  return true;
}

sudoku([
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5],
]); // ?

function swapLexOrder(str, pairs) {
  const beenSeen = new Set();
  const toTest = [str];
  const res = [];
  while (toTest.length) {
    const a = toTest.pop();
    res.push(a);
    if (!beenSeen.has(a)) {
      for (const p of pairs) {
        let x = [...a.split('')];
        const temp = x[p[0] - 1];
        x[p[0] - 1] = x[p[1] - 1];
        x[p[1] - 1] = temp;
        x = x.join('');
        toTest.push(x);
      }
      beenSeen.add(a);
    }
  }
  return res.sort((a, b) => a.localeCompare(b));
}
swapLexOrder('abdc', [[1, 4], [3, 4]]); // ?
// countSumOfTwoRepresentations2(24, 8, 16); // ?
// countSumOfTwoRepresentations2(10, 9, 11); // ?
// countSumOfTwoRepresentations2(6, 2, 4); // ?

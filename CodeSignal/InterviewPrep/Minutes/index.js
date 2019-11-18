function lateRide(n) {
  const h = `${Math.floor(n / 60)}`;
  const m = `${n % 60}`; // ?
  [...h.split(''), ...m.split('')]; // ?
  return [...h.split(''), ...m.split('')]
    .map(x => parseInt(x))
    .reduce((acc, el) => acc + el, 0);
}

lateRide(808); // ?

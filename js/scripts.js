function getRange(max) {
  if (max === 0) {
    return [0];
  }

  let range = [];
  for (let i = 1; i <= max; i++) {
    range.push(i);
  }

  return range;
}
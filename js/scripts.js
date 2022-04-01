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

function beepBoop(max) {
  let range = getRange(max);
  if (range.includes(1)) {
    range[range.indexOf(1)] = "Beep!";
  }

  if (range.includes(2)) {
    range[range.indexOf(2)] = "Boop!";
  }

  return range;
}
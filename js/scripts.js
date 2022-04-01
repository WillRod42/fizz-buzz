function getRange(max) {
  let range = [];
  for (let i = 0; i <= max; i++) {
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

  if (range.includes(3)) {
    range[range.indexOf(3)] = "Won\'t you be my neighbor?";
  }

  return range;
}

function includesDigit(num, digit) {
  let numbers = num.toString().split("");
  numbers = numbers.map(function(number) {
    return parseInt(number);
  });

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === digit) {
      return true;
    }
  }

  return false;
}
function getRange(max) {
  let range = [];
  for (let i = 0; i <= max; i++) {
    range.push(i);
  }

  return range;
}

function beepBoop(max) {
  return getRange(max).map(function(number) {
    if (includesDigit(number, 1)) {
      return "Beep!";
    } else if(includesDigit(number, 2)) {
      return "Boop";
    } else if(includesDigit(number, 3)) {
      return "Won\'t you be my neighbor?";
    } else {
      return number.toString();
    }
  });
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
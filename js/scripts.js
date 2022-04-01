function getRange(max) {
  let range = [];
  for (let i = 0; i <= max; i++) {
    range.push(i);
  }

  return range;
}

function beepBoop(max) {
  let range = getRange(max);
  let modifiedRange = range.map(function(number) {
    if (includesDigit(number, 1)) {
      return "Beep!";
    } else if(includesDigit(number, 2)) {
      return "Boop!";
    } else {
      return number.toString();
    }
  });

  if (modifiedRange.includes("3")) {
    modifiedRange[modifiedRange.indexOf("3")] = "Won\'t you be my neighbor?";
  }

  return modifiedRange;
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
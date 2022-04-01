function getDigits(number) {
  return number.toString().split("").map(function(digit) {
    return parseInt(digit);
  });
}

function getRange(max) {
  let range = [];
  for (let i = 0; i <= max; i++) {
    range.push(i);
  }

  return range;
}

function beepBoop(max) {
  return getRange(max).map(function(number) {
    if(includesDigit(number, 3)) {
      return "Won\'t you be my neighbor?";
    } else if(includesDigit(number, 2)) {
      return "Boop";
    } else if (includesDigit(number, 1)) {
      return "Beep!";
    } else {
      return number.toString();
    }
  });
}

function includesDigit(num, digit) {
  let numDigits = getDigits(num);

  for (let i = 0; i < numDigits.length; i++) {
    if (numDigits[i] === digit) {
      return true;
    }
  }

  return false;
}

function checkForDigits(numbers, digits) {
  for (let i = 0; i < numbers.length; i++) {
    let numDigits = getDigits(numbers[i]);
    for(let j = 0; j < digits.length; j++) {
      for (let k = 0; k < numDigits.length; k++) {
        if (numDigits[k] === digits[j]) {
          return true;
        }
      }
    }
  }

  return false;
}

$(document).ready(function() {
  $("#count-form").submit(function(e) {
    e.preventDefault();

    const number = $("#number").val();
    const counting = beepBoop(number);

    const outputList = $("#output ul");
    outputList.html("");
    counting.forEach(function(number) {
      outputList.append("<li>" + number + "</li>");
    });
  });
});
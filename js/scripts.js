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

function beepBoop(max, digits, name) {
  return getRange(max).map(function(number) {
    if(includesDigit(number, digits[2])) {
      return "Won\'t you be my neighbor, " + name + "?";
    } else if(includesDigit(number, digits[1])) {
      return "Boop";
    } else if (includesDigit(number, digits[0])) {
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

$(document).ready(function() {
  $("#count-form").submit(function(e) {
    e.preventDefault();

    const digits = [parseInt($("#digit-replace-1").val()), parseInt($("#digit-replace-2").val()), parseInt($("#digit-replace-3").val())];
    const name = $("#name").val();
    const number = $("#number").val();
    const counting = beepBoop(number, digits, name);

    const outputList = $("#output ul");
    outputList.html("");
    counting.forEach(function(number) {
      outputList.append("<li>" + number + "</li>");
    });
  });
});
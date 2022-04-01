Describe: getRange()

Test: "Should return an array of all whole numbers up to given maximum"
Code: getRange(5);
Expected Output: [1, 2, 3, 4, 5]

Test: "Should return an array with an element of 0 if given max is 0"
Code: getRange(0);
Expected Output: [0]



Describe: beepBoop()

Test: "Should return an array with an element of 0 if given max is 0"
Code: beepBoop(0)
Expected Output: [0]

Test: "If given an max that would output a range that includes a '1', it should replace all 1's with 'Beep!'"
Code: beepBoop(1)
Expected Output: [0, "Beep!"]

Test: "If given an max that would output a range that includes a '2', it should replace all 2's with 'Boop!'"
Code: beepBoop(2)
Expected Output: [0, "Beep!", "Boop!"]

Test: "If given an max that would output a range that includes a '3', it should replace all 3's with 'Won't you be my neighbor?'"
Code: beepBoop(3)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]


Describe: includesDigit()

Test: "Should return false if given single digit number does not include given digit"
Code: includesDigit(2, 1)
Expected Output: false
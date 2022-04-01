# Mr. Roboger's Neighborhood

#### By William Rodriguez

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Description

A web-app that lists numbers up to a user inputted maximum and replaces numbers that have specific digits with other text.

## Setup/Installation Requirements

* Clone this repository to your desktop or any directory of your choice
  * Run the command below in a bash terminal with [git](https://github.com/git-guides/install-git) installed
```
git clone https://github.com/WillRod42/fizz-buzz.git
```
* Or download as a zip file
  * Click the green code button on the repository page
  * At the bottom of the popup window select `Download ZIP`
  * Extract the downloaded .zip folder
* Open the top level folder
* Open `index.html` in your browser

## Known Bugs

* None

## License

MIT

Copyright (c) 2022 William Rodriguez

<br><br><br>

## Tests
Describe: getRange()

Test: "Should return an array of all whole numbers up to given maximum"<br>
Code: getRange(5);<br>
Expected Output: [1, 2, 3, 4, 5]<br>
<br>
Test: "Should return an array with an element of 0 if given max is 0"<br>
Code: getRange(0);<br>
Expected Output: [0]<br>

<br><br><br>

Describe: beepBoop()<br>
<br>
Test: "Should return an array with an element of 0 if given max is 0"<br>
Code: beepBoop(0)<br>
Expected Output: [0]<br>
<br>
Test: "If given a max that would output a range that includes a '1', it should replace all 1's with 'Beep!'"<br>
Code: beepBoop(1)<br>
Expected Output: [0, "Beep!"]<br>
<br>
Test: "If given a max that would output a range that includes a '2', it should replace all 2's with 'Boop'"<br>
Code: beepBoop(2)<br>
Expected Output: [0, "Beep!", "Boop"]<br>
<br>
Test: "If given a max that would output a range that includes a '3', it should replace all 3's with 'Won't you be my neighbor?'"<br>
Code: beepBoop(3)<br>
Expected Output: [0, "Beep!", "Boop", "Won't you be my neighbor?"]<br>
<br>
Test: "If given a max that would output a range that includes a number with the digit '1', it should replace all those numbers with 'Beep!'"<br>
Code: beepBoop(10);<br>
Expected Output: [0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"]<br>

Test: "If given a max that would output a range that includes a number with the digit '2', it should replace all those numbers with 'Boop'"<br>
Code: beepBoop(12);<br>
Expected Output: [0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Boop"]<br>

Test: "If given a max that would output a range that includes a number with the digit '3', it should replace all those numbers with 'Won't you be my neighbor?'"<br>
Code: beepBoop(12);<br>
Expected Output: [0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Boop", "Won't you be my neighbor?"]<br>

<br><br><br>

Describe: includesDigit()<br>
<br>
Test: "Should return false if given single digit number does not include given digit"<br>
Code: includesDigit(2, 1);<br>
Expected Output: false<br>
<br>
Test: "Should return true if given single digit number does include given digit"<br>
Code: includesDigit(1, 1);<br>
Expected Output: true<br>

Test: "Should return true if given multiple digit number contains given digit"<br>
Code: includesDigit(15, 1);<br>
Expected Output: true<br>
<br>
Test: "Should return false if given multiple digit number that does not contain given digit"<br>
Code: includesDigit(15, 3);<br>
Expected Output: false<br>

<br><br><br>

Describe checkForDigits()<br>
<br>
Test: "It should return true if a single element array contains a given digit"<br>
Code: checkForDigits([1], [1]);<br>
Expected Output: true<br>
<br>
Test: "It should return false if a single element array does not contain a given digit"<br>
Code: checkForDigits([2], [1]);<br>
Expected Output: false<br>
<br>
Test: "It should return true if a multi-element array contains a given digit"<br>
Code: checkForDigits([1, 2, 3], [1]);<br>
Expected Output: true<br>
<br>
Test: "It should return false if a multi-element array does not contain a given digit"<br>
Code: checkForDigits([1, 2, 3], [4]);<br>
Expected Output: false<br>
<br>
Test: "It should return true if a multi-element array contains any given digit"<br>
Code: checkForDigits([3, 4, 1], [1, 2]);<br>
Expected Output: true<br>
<br>
Test: "It should return false if a multi-element array does not contain any given digit"<br>
Code: checkForDigits([1, 2, 3], [4, 5]);<br>
Expected Output: false<br>
<br>
Test: "It should return true if any array element contains any given digit"<br>
Code: checkForDigits([12, 45], [1, 2]);<br>
Expected Output: true<br>
<br>
Test: "It should return true if every array element does not contain any given digit"<br>
Code: checkForDigits([44, 45], [1, 2]);<br>
Expected Output: false
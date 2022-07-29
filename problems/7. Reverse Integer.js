/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

var reverse = function (x) {
  let xString = x.toString();
  let xStringReverse = "";
  for (let i = xString.length - 1; i >= 0; i--) {
    if (xString[i] === "-") {
      xStringReverse = "-" + xStringReverse;
    } else {
      xStringReverse += xString[i];
    }
  }
  let xReverse = parseInt(xStringReverse);
  if (xReverse < -Math.pow(2, 31) || xReverse > Math.pow(2, 31) - 1) {
    return 0;
  }
  return xReverse;
};

console.log(reverse(120));

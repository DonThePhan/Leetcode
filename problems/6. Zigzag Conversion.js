/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const sArr = s.split("");
  let cycles = numRows - 2;
  const columns = [];
  let currentCycle = 0;
  while (sArr.length > 0) {
    const column = [];
    for (let i = 0; i < numRows; i++) {
      if (sArr.length === 0) {
        column.push("");
      } else {
        if (currentCycle === 0) {
          column.push(sArr.shift());
        } else {
          if (i === numRows - 1 - currentCycle) {
            column.push(sArr.shift());
          } else {
            column.push("");
          }
        }
      }
    }
    columns.push(column);
    currentCycle++;
    if (currentCycle > cycles) {
      currentCycle = 0;
    }
  }

  let newString = "";
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < columns.length; x++) {
      newString += columns[x][y];
    }
  }
  return newString;
};

convert("A", 3);

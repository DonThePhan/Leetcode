/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let hLeftMax = 0;
  // start from left side & move right
  for (let hLeft = 0; hLeft < height.length; hLeft++) {
    if (hLeftMax < height[hLeft]) {
      hLeftMax = height[hLeft];
      let hRightMax = 0;

      // start from right side & move left
      for (let hRight = height.length - 1; hRight > hLeft; hRight--) {
        if (hRightMax < height[hRight]) {
          hRightMax = height[hRight];

          let minH = Math.min(hLeftMax, hRightMax);
          let area = minH * Math.abs(hLeft - hRight);
          maxArea = maxArea < area ? area : maxArea;
        }
      }
    }
  }
  return maxArea;
};

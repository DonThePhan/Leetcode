/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const lengthNums1 = nums1.length;
  const lengthNums2 = nums2.length;
  let nums1Index = 0;
  let nums2Index = 0;
  let joinedNums = [];

  while (true) {
    if (nums1Index < lengthNums1 && nums2Index < lengthNums2) {
      if (nums1[nums1Index] < nums2[nums2Index] || nums1[nums1Index] === nums2[nums2Index]) {
        joinedNums.push(nums1[nums1Index]);
        nums1Index++;
      } else {
        joinedNums.push(nums2[nums2Index]);
        nums2Index++;
      }
    } else if (nums1Index < lengthNums1 && !(nums2Index < lengthNums2)) {
      joinedNums.push(nums1[nums1Index]);
      nums1Index++;
    } else if (!(nums1Index < lengthNums1) && nums2Index < lengthNums2) {
      joinedNums.push(nums2[nums2Index]);
      nums2Index++;
    } else {
      break;
    }
  }

  let result;
  if (joinedNums.length % 2 === 1) {
    result = joinedNums[Math.floor(joinedNums.length / 2)];
  } else {
    const index1 = joinedNums.length / 2;
    const index2 = index1 - 1;
    result = (joinedNums[index1] + joinedNums[index2]) / 2;
  }
  return result;
};

findMedianSortedArrays([], [ 1 ]);

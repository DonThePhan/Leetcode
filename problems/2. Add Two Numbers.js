/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  const arr1 = convertLinkedListToReversedArray(l1);
  const arr2 = convertLinkedListToReversedArray(l2);

  const str1 = arr1.join("");
  const str2 = arr2.join("");

  const num1 = BigInt(str1);
  const num2 = BigInt(str2);

  const sumReversed = num1 + num2;

  const sumStringReversed = sumReversed.toString();

  const newArr = [];
  for (char of sumStringReversed) {
    newArr.unshift(Number(char));
  }

  let newLinkedList = {};
  let prevLinkedList = {};

  while (newArr.length > 0) {
    let val = newArr.pop();
    newLinkedList.val = val === undefined ? 0 : val;
    newLinkedList.next =
      prevLinkedList === undefined || Object.keys(prevLinkedList).length === 0
        ? null
        : prevLinkedList;
    prevLinkedList = { ...newLinkedList };
  }
  return newLinkedList;
};

let convertLinkedListToReversedArray = function (linkedList) {
  const arr = [];
  let val = linkedList.val;
  let obj = linkedList;
  arr.unshift(val);

  while (true) {
    if (obj.next === null) {
      break;
    }

    obj = obj.next;
    arr.unshift(obj.val);
  }
  return arr;
};

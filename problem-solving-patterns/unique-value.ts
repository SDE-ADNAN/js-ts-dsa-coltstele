/**
 * Counts the number of unique values in a sorted array of numbers.
 * Uses the two-pointer technique to count unique values in place.
 *
 * @param {number[]} arr - The input array of sorted numbers
 * @returns {number} The count of unique values in the array
 *
 * @example
 * countUniqueValues([1, 2, 2, 5, 7, 7, 99]) // returns 5
 * countUniqueValues([]) // returns 0
 * countUniqueValues([1, 1, 1, 1]) // returns 1
 */
function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 2, 2, 5, 7, 7, 99]);
console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));

/**
 * Algorithm Explanation using input [1, 2, 2, 5, 7, 7, 99]:
 *
 * The algorithm uses two pointers (i and j) to track and count unique values:
 *
 * Initial state:
 * [1, 2, 2, 5, 7, 7, 99]
 *  i  j
 *
 * Step 1: i=0, j=1
 * - arr[i]=1 !== arr[j]=2, so increment i and set arr[i]=2
 * [1, 2, 2, 5, 7, 7, 99]
 *     i  j
 *
 * Step 2: i=1, j=2
 * - arr[i]=2 === arr[j]=2, so only move j
 * [1, 2, 2, 5, 7, 7, 99]
 *     i     j
 *
 * Step 3: i=1, j=3
 * - arr[i]=2 !== arr[j]=5, so increment i and set arr[i]=5
 * [1, 2, 5, 5, 7, 7, 99]
 *        i     j
 *
 * Step 4: i=2, j=4
 * - arr[i]=5 !== arr[j]=7, so increment i and set arr[i]=7
 * [1, 2, 5, 7, 7, 7, 99]
 *           i     j
 *
 * Step 5: i=3, j=5
 * - arr[i]=7 === arr[j]=7, so only move j
 * [1, 2, 5, 7, 7, 7, 99]
 *           i        j
 *
 * Step 6: i=3, j=6
 * - arr[i]=7 !== arr[j]=99, so increment i and set arr[i]=99
 * [1, 2, 5, 7, 99, 7, 99]
 *              i        j
 *
 * Final: return i + 1 = 5
 * The array has 5 unique values: 1, 2, 5, 7, 99
 */

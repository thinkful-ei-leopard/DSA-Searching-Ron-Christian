/**
 * 
 * @param {*} array array to search. e.g. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
 * @param {*} value value to find
 * @param {*} start array index to start on
 * @param {*} end array index to end on
 */
function binarySearch(array, value, start, end) { // Num of Searches: 4
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }
  // INPUT: 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
  // VALUE: 16
  // START: 9
  // END: 8
  const index = Math.floor((start + end) / 2); // 9
  const item = array[index]; // ITEM: 17
                             // VALUE: 16
  console.log(start, end);
  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};

// INPUT: 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
let arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
console.log(arr.length);
let result = binarySearch(arr, 8, 3, 18);
console.log(result);

// 1A) 8 is found on the 3rd search.
// 1B) 16 is never found, it searches 4 times before returning a "-1"
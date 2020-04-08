import React from 'react';

const unsortedArr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
// arrays in a binary search have to be sorted
unsortedArr.sort();
function binarySearch(array, value, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length - 1 : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    //console.log(start, end);
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

export default function BinarySearch(props) {
    const result = binarySearch(unsortedArr, props.searchInput, 0, unsortedArr.length);

    return(
        <div>
            <h2>Binary Search</h2>
            <p>Number of times search ran: {result === -1 ? 'Value not found' : result + 1}</p>
        </div>
    );
}









import React from 'react';
//Linear Search

let unsortedArr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
function doLinearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) { // why do they use == instead of ===
            return i;
        }
    }
    return -1
}

export default function LinearSearch(props) {

    const result = doLinearSearch(unsortedArr, props.searchInput);

    return(
        <div><h2>Linear Search</h2>
            <p>Number of times search ran: {result === -1 ? 'Value not found' : result + 1}</p>
        </div>
    );
}
// 3. Find a book
// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? 
// Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.

// D.D. goes for 000-999
// INPUT: 005 - Book # (in this case its for Computer Science Programming!)
// INPUT: 689
// 

/**
 * 
 * @param {*} booksArr The numbers of the Dewey Decimal System. From 000-999
 * @param {*} bookDeweyNumber The D.D. number for the book your are looking for
 * @param {*} start The first aisle
 * @param {*} end 
 */
function deweySearch(booksArr, bookDeweyNumber, start, end) {
    start = (start === undefined) ? 0 : start;
    end = (end === undefined) ? booksArr.length - 1 : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = booksArr[index];

    //console.log(start, end);
    if (item == bookDeweyNumber) {
        return index;
    }
    else if (item < bookDeweyNumber) {
        return deweySearch(booksArr, bookDeweyNumber, index + 1, end);
    }
    else if (item > bookDeweyNumber) {
        return deweySearch(booksArr, bookDeweyNumber, start, index - 1);
    }
};

function bookSectionSearch(array, bookTitle) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == bookTitle) { // why do they use == instead of ===
            return i;
        }
    }
    return -1
}

const result = deweySearch([1,2,3,4,5,6,7,8,9,10], 9);  // To find the aisle / section
console.log(deweySearch([1,2,3,4,5,6,7,8,9,10], 9));


// Answer: You would do a binary search to find the specific aisle or sub-aisle, 
// then you would have to do a linear search of that section for the book (because libraries
// and bookstores get messy and arent very organized)
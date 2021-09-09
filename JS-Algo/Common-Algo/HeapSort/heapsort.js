var array_length;
/* to create MAX  array */
function heapify(input, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max]) {
        max = right;
    }

    if (max !== i) {
        swap(input, i, max);
        heapify(input, max);
    }
}

function swap(input, index_A, index_B) {
    return [input[index_A], input[index_B]] = [input[index_B], input[index_A]]
}


// let input = [3, 0, 2, 5, -1, 4, 1];
function heapSort(input) {
    array_length = input.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heapify(input, i);
    }

    for (let i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
        heapify(input, 0);
    }
    return input;
}



// console.log(heapSort(input));

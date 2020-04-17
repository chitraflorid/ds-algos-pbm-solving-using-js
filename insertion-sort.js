const unsortedArr = [2, 8, 5, 3, 9, 4];

function insertionSort(arr) {
    const { length } = arr;
    let end;
    let startEle;
    let startIndex;

    for (let start = 1; start < length; start++) {
        end = start - 1;
        startEle = arr[start];
        startIndex = start;

        while (end >= 0 && startEle < arr[end]) {
            swapItems.call(arr, startIndex, end);
            startIndex = end;
            end--;
        }
    }
}

function swapItems(index1, index2) {
    const tmp = this[index2];

    this[index2] = this[index1];
    this[index1] = tmp;
}

insertionSort(unsortedArr);

console.log("array after sorting::");
console.log(unsortedArr);

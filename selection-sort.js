// selection sort
const arrInput = [26, 54, 93, 17, 77, 31, 44, 55, 20]; //[20, 12, 10, 15, 2];
const len = arrInput.length;

function selectionSort(startIndex = 0) {
    if (startIndex >= len) return;

    let minIndex = startIndex;

    for (let i = startIndex + 1; i < len; i++) {
        if (arrInput[i] < arrInput[minIndex]) {
            minIndex = i;
        }
    }

    if (minIndex > startIndex) {
        [arrInput[minIndex], arrInput[startIndex]] = [arrInput[startIndex], arrInput[minIndex]];
    }

    selectionSort(startIndex + 1);
}

selectionSort();

console.log("sorted Arr:");
console.log(arrInput);

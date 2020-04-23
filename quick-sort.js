// quick sort
const quickArr = [54, 26, 93, 17, 77, 31, 44, 55, 20];
const start = 0;
const end = quickArr.length - 1;

function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }

    const pivotIndex = start;
    let left = start + 1;
    let right = end;

    while (left < right) {
        if (arr[left] > arr[pivotIndex] && arr[right] < arr[pivotIndex]) {
            [arr[left], arr[right]] = [arr[right], arr[left]];

            left++;
            right--;
        }

        while (arr[left] < arr[pivotIndex]) {
            left++;
        }

        while (arr[right] > arr[pivotIndex]) {
            right--;
        }
    }

    if (left >= right) {
        const splitPoint = right;

        [arr[right], arr[pivotIndex]] = [arr[pivotIndex], arr[right]];

        quickSort(arr, start, splitPoint - 1);
        quickSort(arr, splitPoint + 1, end);
    }
}

quickSort(quickArr, start, end);

console.log("sorted Arr::");
console.log(quickArr);

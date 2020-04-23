const mergeArr = [54, 26, 94, 17, 77, 44, 55, 20];
const len = mergeArr.length;

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const midPoint = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const mergedArr = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
        if (leftArr[leftPointer] < rightArr[rightPointer]) {
            mergedArr.push(leftArr[leftPointer]);
            leftPointer++;
        } else {
            mergedArr.push(rightArr[rightPointer]);
            rightPointer++;
        }
    }

    while (leftPointer < leftArr.length) {
        mergedArr.push(leftArr[leftPointer]);
        leftPointer++;
    }

    while (rightPointer < rightArr.length) {
        mergedArr.push(rightArr[rightPointer]);
        rightPointer++;
    }

    return mergedArr;
}

console.log(mergeSort(mergeArr));

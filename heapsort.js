
const minArr = [0, -1, 2, -3, 1];

function minHeap(arr) {
    const { length } = arr;
    const smallestIndex = Math.floor(length / 2 - 1);

    for (let i = smallestIndex; i >= 0; i--) {
        minHeapify(arr,length, smallestIndex);
    }

    console.log( "sorted Arr::");
    console.log(arr);
}

function minHeapify(arr, len, index) {
    let smallestIndex = index;

    const leftIndex = smallestIndex * 2 + 1;
    const rightIndex = smallestIndex * 2 + 2;

    if (leftIndex < len && arr[leftIndex] < arr[smallestIndex]) {
        smallestIndex = leftIndex;
    }

    if (rightIndex < len && arr[rightIndex] < arr[smallestIndex]) {
        smallestIndex = rightIndex;
    }

    if (smallestIndex !== index) {
        const tmp = arr[index];

        arr[index] = arr[smallestIndex];
        arr[smallestIndex] = tmp;
        minHeapify(arr, len, smallestIndex);
    }
}

minHeap(minArr);

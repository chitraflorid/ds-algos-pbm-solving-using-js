const arr = [2, 4, 5, 5, 6, 7, 87, 33];

function find2ndLargestEle(inputArr) {
    let max = inputArr[0];
    let prevMax = max;

    for (let i = 1; i < inputArr.length; i++) {
        const currentEl = inputArr[i];
        if (currentEl > max) {
            prevMax = max;
            max = currentEl;
        } else if (currentEl > prevMax) {
            prevMax = currentEl;
        }
    }

    return prevMax;
}

find2ndLargestEle(arr);

// Find the Maximum sum of a contiguous SubArray of Size k - Time Complexity : O(n*k).
function findMaxSumOfSubArray(arr, k) {
    let sum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const winSize = i + k;
        let j = i + 1;

        currentSum = arr[i];

        while (j < winSize) {
            currentSum += arr[j];
            j++;
        }

        if (currentSum > sum) {
            sum = currentSum;
        }
    }

    return sum;
}

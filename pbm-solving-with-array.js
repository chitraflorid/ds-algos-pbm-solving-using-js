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
// Find subarray with given sum for a given unsorted array of integers.
function findSumSubArray(arr, sum) {
    let startI = 0;
    let currentSum = 0;

    for (let j = 0; j < arr.length; j++) {
        currentSum += arr[j];

        while (currentSum > sum) {
            currentSum -= arr[startI];
            startI++;
        }

        if (currentSum === sum) {
            return (`${startI}, ${j}`);
        }
    }

    return false;
}

findSumSubArray([1, 4, 20, 3, 10, 5], 33);

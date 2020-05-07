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

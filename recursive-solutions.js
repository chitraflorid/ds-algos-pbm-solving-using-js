const str = 'redivider';
let isPalindrome = true;

// checks whether the given string is palindrom using loop.
function checkPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str.charAt(start) !== str.charAt(end)) {
            console.log('Given string is not Palindrome!');

            return !isPalindrome;
        }

        start++;
        end--;
    }

    console.log('Given sstring is palindrome');

    return isPalindrome;
}

checkPalindrome(str);

// checks whether the given string is palindrome or not using recursive method.
function checkPalindromeRecursively(str) {
    str = str.toLowercase();

    const len = str.length;

    if (len === 1) {
        return true;
    } else if (str.charAt(0) !== str.charAt(len - 1)) {
        return false;
    }

    const newstr = str.slice(1, len - 1);

    return checkPalindromeRecursively(newstr);
}

checkPalindromeRecursively('redivider');

// find factorial of the given string using recursive.
function factorial(n) {
    if (n == 1) return 1;

    return n * factorial(n - 1);
}

let res = factorial(5);
console.log(res);

const arr = [1, 2, 3, 4];

// Sum of the elements in the given array.
function sumArray(arr) {
    if (!arr.length) return 0;

    return arr[0] + sumArray(arr.slice(1));
}

sumArray(arr);

// sum of the numbers within the given range
function sumRange(n) {
    if (n <= 0 ) {
        return 0;
    }

    return n + sumRange(n - 1);
}

const tree = {
    name: 'I A G Joseph',
    children: [
        {
            name: 'Rani',
            children: [{ name: 'Jeffy' }],
        },
        {
            name: 'Chitra',
            children: [{ name: 'Elizh' }, { name: 'Alazi' }],
        },
        {
            name: 'Annie',
            children: [{ name: 'Nithila' }, { name: 'Benita' }],
        },
    ],
};

// Traverses the given nested nodes and prints the names of the children of each node.
function printChildren(tree) {
    const { children } = tree;

    if (!children) {
        return false;
    }

    children.forEach(({ name: childName, children: kids }) => {
        console.log('Child Name::', childName);
        printChildren(childName, kids);
    });
}

printChildren(tree);

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
            children: [{ name: 'Alagan' }, { name: 'Alagi' }],
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

// Find a number in a sorted array
const inputArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function findNumber(target, arr) {
    const len = arr.length;

    if (!arr) {
        return false;
    }

    if (len === 1 && arr[0] === target) {
        return true;
    }

    const medianIndex = Math.ceil(len / 2);
    const median = arr[medianIndex];

    if (target === median) {
        return true;
    } else if (target > median) {
        return findNumber(target, arr.slice(medianIndex));
    } else if(target < median) {
        return findNumber(target, arr.slice(0, medianIndex));
    }
}

findNumber(90, inputArr);

// flatten the object
// Input

// Output should be
// // {
//         'user_name' : 'chitra',
//         'user_address_home_doorno': '19',
//         'user_address_home_street': '5th main',
//         'user_address_home_area_name': 'JR Greenpark',
//         'user_address_home_area_landmark': 'Opp to YKR Kalyan mandir',
//         'user_address_home_post': 'Marsur',
//         'user_address_home_city': 'Bangalore',
//         'user_address_home_pin': '562106',
//         'user_address_office_org': 'Vmware India',
//         'user_address_offie_area_name': 'Salarpuria softzone, Bellandur',
//         'user_address_office_area_landmark': 'near Iggalur lake',
//         'user_address_office_post': 'Belandur',
//         'user_address_office_city': 'Bangalore',
//         'user_address_office_pin': '34343232',
// // }
const user = {
    name: 'chitra',
    address: {
        home: {
            doorno: '19',
            street: '5th main',
            area: {
                name: 'JR GreenPark',
                landmark: 'Opp to YKR Kalyan mandir',
            },
            post: 'Marsur',
            city: 'Bangalore',
            pin: '562106',
        },
        office: {
            org: 'VMware India',
            area: {
                name: 'Salarpuria softzone, Bellandur',
                landmark: 'near iggalur lake',
            },
            post: 'Bellandur',
            city: 'Bangalore',
            pin: '343432432',
        },
    },
};

const flattenedObj = {};

function flattenObj(node, prefix = 'user') {
    if (!node) {
        return;
    }

    if (typeof node === 'object') {
        Object.keys(node).forEach(key => {
            const value = node[key];

            key = `${prefix}_${key}`;

            if (value && typeof value === 'object') {
                return flattenObj(value, key);
            } else {
                flattenedObj[key] = value;
            }
        });
    }

    return flattenedObj;
}

flattenObj(user);


// construct Binary Tree from InOrder and PreOrder traversal lists.
const preOrder = [1, 2, 4, 8, 9, 10, 11, 5, 3, 6, 7];
const inOrder = [8, 4, 10, 9, 11, 2, 5, 1, 6, 3, 7];

const root = preOrder[0];
let rootIndex = inOrder.indexOf(root);
const leftTree = inOrder.slice(0, 7);
const rightTree = inOrder.slice(8);

constructBinaryTree(root, leftTree, rightTree);

function constructBinaryTree(rootEle, leftTree, rightTree) {
    console.log(rootEle);

    if (leftTree.length > 1) {
        console.log('LeftSubTree for root:', rootEle);
        constructBinarySubTree(leftTree);
    } else {
        console.log('leftNode for root:', rootEle);
        console.log(leftTree[0]);

    }

    if (rightTree.length > 1) {
        console.log('RightSubTree for root::', rootEle);
        constructBinarySubTree(rightTree);
    } else {
        console.log('rightNode for root:', rootEle);
        console.log(rightTree[0]);
    }
}

function constructBinarySubTree(tree) {
    const indexArr = tree.map(item => preOrder.indexOf(item));
    const rootEle = preOrder[Math.min(...indexArr)];

    rootIndex = tree.indexOf(rootEle);

    const leftTree = tree.slice(0, rootIndex);
    const rightTree = tree.slice(rootIndex + 1);

    constructBinaryTree(rootEle, leftTree, rightTree);
}

/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val);
     this.next = (next===undefined ? null : next);
 }

// Merge k sorted linked lists and return it as one sorted list.
function mergeKLists(lists) {
    let i = 1;
    const len = lists.length;

    if (lists === null || !lists.length) {
        return null;
    }

    if (!lists || len <= 1) {
        if (!lists[0].val) {
            return null;
        } else {
            return lists[0];
        }
    }

    while (i < len) {
        lists[i] = mergeTwoSortedLists(lists[i - 1], lists[i]);
        printNodes(lists[i]);
        i++;
    }

    return lists[i - 1];
}

function mergeTwoSortedLists(l1, l2) {
    if (!l1 && !l2) {
        return null;
    }

    let tmp = new ListNode(-1);
    const head = tmp;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tmp.next = l1;;
            l1 = l1.next;
        } else {
            tmp.next = l2;
            l2 = l2.next;
        }

        tmp = tmp.next;
    }

    if (l1 && !l2) {
        tmp.next = l1;
    }

    if (l2 && !l1) {
        tmp.next = l2;
    }

    return head.next;
}

const res = [];

[[1, 4, 5], [1, 3, 4], [2, 6]].forEach(arr => {
    let head = null;

    arr.forEach(val => {
        const node = new ListNode(val);

        if (!head) {
            head = node;
        } else {
            let curr = head;
            let prev = curr;

            while (curr) {
                prev = curr;
                curr = curr.next;
            }

            curr = node;
            prev.next = curr;
        }
    });

    res.push(head);
});


const mergedList = mergeKLists([[new ListNode(1)]]);

printNodes(mergedList);

function printNodes(list) {
    let nodes = '';

    if (!list) {
        return false;
    }

    let head = list;

    while(head) {
        nodes += head.val + " => ";
        head = head.next;
    }

    console.log( nodes + "NULL");
}


function mergeKLists1(lists) {
    let i = 0;
    const len = lists.length;
    let mergedLists = [];

    if (lists === null || !lists.length) {
        return null;
    }

    while (i < len) {
        if (lists[i]) {
            mergedLists = [...mergedLists, ...ListToArr(lists[i])];
        }

        i++;
    }

    return constructList(mergedLists.sort((a, b) => a - b));
}

function ListToArr(l) {
    if (!l) {
        return null;
    }

    const arrList = [];

    while (l) {
        arrList.push(l.val);
        l = l.next;
    }

    return arrList;
}

function constructList(arr) {
    let head = null;

    arr.forEach(val => {
        const node = new ListNode(val);

        if (!head) {
            head = node;
        } else {
            let curr = head;
            let prev = curr;

            while (curr) {
                prev = curr;
                curr = curr.next;
            }

            curr = node;
            prev.next = curr;
        }
    });

    return head;
}


/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const res = [];

//[[1, 4, 5], [1, 3, 4], [2, 6]]

[[], [-1, 5, 11], [], [6, 10]].forEach(arr => {
    let head = null;

    arr.forEach(val => {
        const node = new ListNode(val);

        if (!head) {
            head = node;
        } else {
            let curr = head;
            let prev = curr;

            while (curr) {
                prev = curr;
                curr = curr.next;
            }

            curr = node;
            prev.next = curr;
        }
    });

    res.push(head);
});


const mergedList = mergeKLists1(res);

// Sort a linked list
function sortList(head) {
    if (!head) {
        return null;
    }

    let prev = head;
    let current = head.next;
    var sortedList = null;

    while (current && prev) {
        if (prev.val < current.val) {
            sortedList = appendNode(sortedList, prev.val);
            prev = current;
            current = current.next;
        } else {
            sortedList = appendNode(sortedList, current.val);
            const tmp = current.next;
            prev.next = tmp;
            current = tmp;
        }
    }

    if (prev && !current) {
        sortedList = appendNode(sortedList, prev.val);
    }

    return sortedList;
}


function appendNode(sortedList, val) {
    const node = new ListNode(val);

    if (!sortedList) {
        sortedList = node;
        return sortedList;
    }

    let current = sortedList;
    let head = current;
    let prev;

    while (current) {
        if (val < current.val) {
            if (!prev) {
                prev = current;
                current = node;
                current.next = prev;
                head = current;
            } else {
                prev.next = node;
                node.next = current;
            }
            break;
        } else if (!current.next) {
            current.next = node;
            break;
        }

        prev = current;
        current = current.next;
    }

    sortedList = head;

    return sortedList;
}



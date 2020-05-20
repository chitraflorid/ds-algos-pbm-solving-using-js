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

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    const nodesArr = getNodesCount(head);
    const len = nodesArr.length;
    const fromFirst = len - n;
    const nodeToBeDeleted = nodesArr[fromFirst];

    if (fromFirst > 0) {
        const prev = nodesArr[fromFirst - 1];

        prev.next = nodeToBeDeleted.next;
    } else {
        head = nodeToBeDeleted.next;
    }

    return head;
}

function getNodesCount(head) {
    let current = head;
    const nodesArr = [];

    while (current) {
        nodesArr.push(current);
        current = current.next;
    }

    return nodesArr;
}

    let evenList = null;
    // Odd Even Linked List. 
   // Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

//You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
// Ex: Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
    function oddEvenList(head) {
        let current = head;
        let prev = current;
        if (!head || !head.next) return head;
        
        while (current && current.next) {
            prev = current;
            const even = current.next;
            const odd = current.next.next;
            even.next = null;
            appendEvenList(even);
            current.next = odd;
            current = current.next;
        }
        
        while (prev.next) {
            prev = prev.next;
        }
        
        prev.next = evenList;
        evenList = null;
        return head;
};

function appendEvenList(node) {        
    if (!evenList) {
        evenList = node;
    } else {
        let curr = evenList;
        while (curr.next) {
            curr = curr.next;
        }
        
        curr.next = node;
    }
}
/**
Given a (singly) linked list with head node root, write a function to split the linked list into k consecutive linked list "parts".

The length of each part should be as equal as possible: no two parts should have a size differing by more than 1. This may lead to some parts being null.

The parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal parts occurring later.

Return a List of ListNode's representing the linked list parts that are formed.

Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]
**/
function splitListToParts(root, k) {
    const count = getNodesCount(root);
    const listArr = [];
    const listCount = Math.floor(count / k);
    const rem = count % k;
    let current = root;
    
    for (let i = 0; i < k; ++i) {
        let tmp = new ListNode(null);
        let tmp2 = tmp;
        if (current) {
            for (let j = 0; j < listCount + ( i < rem ? 1 : 0); ++j) { 
                if (current) {
                    tmp2 = tmp2.next = new ListNode(current.val);
                    current = current.next;    
                }
            }
            
            listArr.push(tmp.next);
        } else {
            listArr.push(null)
        }
        
    }
    
    return listArr;
}

function getNodesCount(root) {
    let count = 0;
    let current = root;
    
    while (current) {
        count++;
        current = current.next;
    }
    
    return count;
}

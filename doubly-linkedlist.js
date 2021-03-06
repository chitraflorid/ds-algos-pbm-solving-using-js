class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
    constructor(data) {
        this.data = data;
        this.head = null;
        this.tail = null;
    }

    appendNode(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else if (this.tail === null) {
            this.tail = node;
            node.prev = this.head;
            this.head.next = this.tail;
        } else {
            const tmp = this.tail;

            node.prev = tmp;
            tmp.next = node;
            this.tail = node;
        }
    }

    prependNode(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            const tmp = this.head;

            node.prev = null;
            node.next = tmp;
            this.head = node;
        }

        // this.printNodes();
    }

    printNodes(returnAsNumber = false) {
        if (!this.head) {
            console.log('Empty List');

            return;
        }

        let current = this.head;
        let dataString = '';

        while (current !== null) {
            dataString += `${current.data}${returnAsNumber ? '' : ' '}`;
            current = current.next;
        }

        console.log(dataString);

        return dataString;
    }

    removeNode(data) {
        if (!this.head) {
            console.log('Empty List');

            return;
        }

        let current = this.head;

        while (current.next !== null) {
            if (current.data === data) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
                console.log('removed data:: ', data);
                console.log('updated list::', this.printNodes());

                return data;
            }

            current = current.next;
        }
    }

    removeHead() {
        if (!this.head) {
            console.log('Empty List');

            return;
        }

        const { head: deletedHead, head: { next: nextNode = null } } = this;

        if(nextNode) {
            nextNode.prev = null;
            this.head = nextNode;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    removeTail() {
        if (!this.tail) {
            console.log('No tail present!!!');

            return;
        }

        const { tail: deletedTail, tail: { prev: prevNode = null } } = this;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (prevNode) {
            prevNode.next = null;
            this.tail = prevNode;
        }

        return deletedTail;
    }

    removeNthNodeFromEnd(position) {
        let current = this.tail;

        if (!current) {
            console.log('empty list');

            return;
        } else if (position > this.findLength()) {
            console.log('Invalid Position');

            return;
        }

        let count = 1;

        while (current !== null) {
            const { next: nextNode, prev: prevNode } = current;

            if (count === position) {
                if (prevNode === null) {
                    this.head = nextNode;
                } else {
                    prevNode.next = nextNode;
                }

                if (nextNode === null) {
                    this.tail = prevNode;
                } else {
                    nextNode.prev = prevNode;
                }

                console.log('deleted Node::');
                this.printNodes();

                return current;
            }

            current = current.prev;
            count++;
        }
    }

    findLength() {
        let current = this.head;
        let count = 0;

        if (!current) {
            console.log("Empty List!");

            return 0;
        }

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }

    findNode(value) {
        if (!this.head) {
            console.log('Empty List');

            return;
        }

        let { head: currentNode } = this;
        const { data: currentData = null } = currentNode;

        while (currentNode !== null) {
            if (value === currentData) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
    }

    reverseNodes() {
        if (!this.head) {
            console.log('Empty List');

            return;
        }

        let { head: current } = this;
        let tmp = current.prev;

        this.tail = current;

        while (current.next !== null) {
            const prevNode = current.next;
            const nextNode = prevNode.next;

            current.prev = prevNode;
            current.next = tmp;
            prevNode.next = current;
            prevNode.prev = nextNode;
            this.head = prevNode;

            current = nextNode;
            tmp = current.prev;
        }

        tmp = current.prev;
        current.next = this.head;
        current.prev = tmp;
        this.head = current;

        this.printNodes();
    }
}

const list = new LinkedList();

[1, 2, 3, 4, 5].forEach(item => list.appendNode(item));
//list.printNodes();

// list.removeNode(3);
// list.printNodes();

// list.reverseNodes();
// list.printNodes();

//list.prependNode(18);

//console.log("removedHead:: ", list.removeHead());

// list.removeNthNodeFromEnd(9);

// list.findLength();

const l1 = new LinkedList();

[3, 14, 15, 25].forEach(item => l1.appendNode(item));

const l2 = new LinkedList();

[1, 11, 12, 21, 22, 23, 24, 27].forEach(item => l2.appendNode(item));

function mergeLists(l1, l2) {
    let current1 = l1.head;
    let current2 = l2.head;

    const sortedList = new LinkedList();

    while (current1 || current2) {
        if (!current2 && current1) {
            sortedList.appendNode(current1.data);
            current1 = current1.next;
        } else if (!current1 && current2) {
            sortedList.appendNode(current2.data);
            current2 = current2.next;
        } else if (current1.data <= current2.data) {
            const next1 = current1.next;

            sortedList.appendNode(current1.data);
            current1 = next1;
        } else {
            const next2 = current2.next;

            sortedList.appendNode(current2.data);
            current2 = next2;
        }
    }

    sortedList.printNodes();

    return sortedList;
}

// console.log('merged Lists::');
// console.log(mergeLists(l1, l2));

// appendNode, prependNode, printNodes, removeNode, removeHead, removeTail, removeNthNodeFromEnd, findLength, findNode, reverseNodes,
//
//
//     mergeLists
//
// 1. remove Duplicates
// 2. delete middle node
// 3. sum lists
// 4. palindrome
// 5. intersection
// 6. loop detection
// 7. Partition
//

// Problem Statement
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
//     You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//     Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const list1 = new LinkedList();
const list2 = new LinkedList();
const nodeData1 = [2, 4, 3];
const nodeData2 = [5, 6, 4];

nodeData1.forEach(item => list1.appendNode(item));

nodeData2.forEach(item => list2.appendNode(item));

function addTwoNumbers(l1, l2) {
    const number1 = Number(l1.printNodes(true));
    const number2 = Number(l2.printNodes(true));

    const res = number1 + number2;
    const result = new LinkedList();
    const resultList = String(res).split('').forEach(item => result.prependNode(item));

    return resultList;
}

console.log( "result List after adding numbers in the given 2 linkedlists::");
console.log(addTwoNumbers(list1, list2));

function addTwoNumbers_V2(l1, l2) {
    const sumList = new LinkedList();
    let node1 = l1.head;
    let node2 = l2.head;
    let carry = 0;

    while (node1 || node2) {
        let total = carry;

        if (node1 && node2) {
            total += node1.data + node2.data;
        } else if (node1) {
            total += node1.data;
        } else if (node2) {
            total += node2.data;
        }

        const totalDigit = (total % 10);

        carry = Math.floor(total / 10);
        sumList.prependNode(totalDigit);

        node1 = node1.next;
        node2 = node2.next;
    }

    return sumList;
}

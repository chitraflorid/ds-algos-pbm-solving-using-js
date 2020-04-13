class Stack {
    constructor() {
        this.top = 0;
        this.stack = {};
        this.max = 0;
        this.maxStack = [];
    }

    push(item) {
        const { stack, max, maxStack } = this;

        if (this.top <= 0 || item >= max) {
            maxStack.push(item);
            this.max = item;
        } else {
            maxStack.push(max);
        }

        stack[this.top] = item;
        this.top++;

        return this.stack;
    }

    peek() {
        console.log('peeked Ele::', this.stack[this.top]);

        return this.stack[this.top];
    }

    pop() {
        const { stack, top } = this;
        const deletedEl = stack[top];

        if (this.top < 0) {
            console.log("Stack Empty!!");
            return false;
        }

        this.top--;
        delete stack[top];
        this.max = this.maxStack.pop();

        console.log('deleted el::', deletedEl);

        return deletedEl;
    }

    empty() {
        this.stack = {};
        this.top = 0;

        console.log('Stack emptied!!');
    }

    size() {
        console.log('size of the stack::', this.top);

        return this.top;
    }

    /**
     * Swaps the two top most elements of the stack
     */
    swap() {
        const { top, stack } = this;
        const tmp = stack[top - 2];

        stack[top] = stack[this.top];
        stack[this.top] = tmp;
    }

    findMax() {
        return this.max;
    }
}

const myStack = new Stack();

[2, 4, 5, 5, 6, 7, 87, 33].forEach(item => myStack.push(item));

myStack.size();
myStack.swap();
myStack.pop();
myStack.peek();
myStack.findMax();
myStack.pop();
myStack.findMax();
myStack.pop();
myStack.findMax();

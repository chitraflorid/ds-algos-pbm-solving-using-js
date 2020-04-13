class Stack {
    constructor() {
        this.top = 0;
        this.stack = {};
    }

    push(item) {
        const { stack } = this;

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

        this.top--;
        delete stack[top];

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
}

const myStack = new Stack();

[2, 4, 5, 5, 6, 7, 87, 33].forEach(item => myStack.push(item));

myStack.size();
myStack.swap();
myStack.pop();
myStack.peek();

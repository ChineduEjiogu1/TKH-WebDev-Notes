class stack
{
    constructor()
    {
        this.items = [];
    }

    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    //isEmpty()
    // printStack()

    push(element)
    {
        this.items.push(element);
    }

    pop()
    {
        if (this.items.length === 0)
            return "underflow";
        return this.items.pop();
    }

    // peek function
    peek()
    {
        // return the top most element from te stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }

    // isEmpty function
    isEmpty()
    {
        // return true if stack is empty
        return this.items.length === 0;
    }

    printStack()
    {
        let str = "";

        for (let i = 0; i < this.items.length; i++)
            str +=  this.items[i] + "[" + "," + " " + "]";
        return str;
    }
}

let stackTest = new stack();

console.log(stackTest.isEmpty());

// console.log(stackTest.pop());

stackTest.push(10);
stackTest.push(20);
stackTest.push(30);

// [10, 20, 30]
console.log(stackTest.printStack());

// returns 30
console.log(stackTest.peek());

// returns 30 and remove it from stack
console.log(stackTest.pop());

// returns [10, 20]
console.log(stackTest.printStack());


function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
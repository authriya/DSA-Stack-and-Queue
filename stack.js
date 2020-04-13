class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null
    }
    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top
        }
        const node = new _Node(data, this.top);
        this.top = node
    }
    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }
}

function peek(stack) {
    if(!stack.top) {
        return null
    }

    console.log(stack.top.data)

    return stack.top
}

function isEmpty(stack) {
    if(!stack.top) {
        console.log('stack is empty')
        return true
    } else {
        console.log('stack has data')
        return false
    }
}

function display(stack) {
    let results = ''

    let currentNode = stack.top

    if(!currentNode) {
        console.log('List is empty');
        return
    }
    if(currentNode.next === null) {
        console.group(`${currentNode.data}=> null`)
        return
    }
    while(currentNode.next !== null) {
        results += `${currentNode.data} =>`
        currentNode = currentNode.next
    }
    results += `${currentNode.data} => null`;
    console.log(stack);
    console.log(results);
}

function is_palindrome(s) {
    s = s.toLowerCase.replace(/[^a-zA-Z0-9]/g, "");

    let palindrome = new Stack()

    let splitString = s.split('')
    let stackLength = splitString.stackLength
    let forwardResults = ''

    splitString.forEach(char => palindrome.push(char))

    for(let i = stackLength; i > 0; i--) {
        forwardResults += palindrome.pop()
    }
    console.log(s === forwardResults)
    return(s === forwardResults)
}

function matchingParens(str) {
    const stack = new Stack()

    if(!str.stackLength) {
        return null
    }

    for(i=0; i < str.length; i++) {
        if(str[i] === '(') {
            stack.push('(')
        }
        if(str[i] === ')') {
            if(isEmpty(stack)) {
                console.log('You are missing a "("')
                return false
            }
            stack.pop()
        }
    }
    if(!isEmpty(stack)) {
        console.log('you aremissing a ")"')
    }
    return true
}

function sortStack(stack) {
    if(stack.top === null || stack.top.next === null) {
        return stack
    }

    const newStack = new Stack();

    let minValue = stack.top.data

    let maxValue = stack.top.data

    let currNode = stack.top

    while(currNode.next !== null) {
        if(currNode.data > maxValue) {
            maxValue = currNode.data
        }
        if(currNode.data < minValue) {
            minValue = currNode.data
        }
        currNode = currNode.next
    }

    if(currNode.data > maxValue) {
        maxValue = currNode.data
    }
    if(currNode.data < minValue) {
        minValue = currNode.data
    }

    newStack.push(maxValue)

    while (newStack.top.data !== minValue) {
        let currNode = stack.top
        let currMax = minValue

        while(currNode.next !== null) {
            if(currNode.data > currMax && currNode.data < newStack.top.data) {
                currMax = currNode.data
            }
            currNode = currNode.next
        }
        if(currNode.data > currMax && currNode.data < newStack.top.data) {
            currMax = currNode.data
        }
        newStack.push(currMax)
    }

    return newStack
}
const starTrek = new Stack()

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
starTrek.pop()
starTrek.pop()
display(starTrek)

class StackQueue extends Stack {
    constructor() {
        super()
        this.first = this.top;
        this.last = null;
    }
    enqueue(item) {
        if(this.first === null) {
            this.push(item)
            this.last = this.top
        } else {
            const tempStack = new Stack();
            while(this.top) {
                tempStack.push(this.pop())
            }
            tempStack.push(item)
            while(tempStack.top) {
                this.push(tempStack.pop())
            }
            let currNode = this.top;
            while (currNode.next !== null) {
                currNode = currNode.next
            }
            this.last = currNode;
        }
        this.first = this.top
    }
    dequeue() {
        this.pop();
        this.first = this.top
    }
}
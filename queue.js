class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class _NodeDouble {
    constructor(value, prev) {
        this.value = value;
        this.prev= prev
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
    }
    enqueue(data) {
        const node = new _Node(data); 

        if(this.first === null) {
            this.first = node
        } 
        if(this.last) {
            this.last.next = node;
        }
        this.last = node
    }
    dequeue() {
        if(this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next

        if(node === this.last) {
            this.last = null;
        }

        return node.value
    }
}

class DoubleQueue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const newNode = new _NodeDouble(data, this.last)
        if(this.first === null) {this.first = newNode}
        if(this.last) {this.last.next = newNode}
        this.last = newNode
    }

    dequeue() {
        if(!this.first) {
            return null
        }
        const firstNode = this.first
        if(firstNode.next === null) {
            this.last = null
        } else {
            firstNode.next.prev = null
        }
        this.first = firstNode.next
        return firstNode.value
    }
}

function peek(queue) {
    if(!queue.first) {
        return null;
    }
    return queue.first.value
}

function isEmpty(queue) {
    return (queue.first === null)
}
function display(queue) {
    let results = ''

    let currNode = queue.first

    if(currNode === null) {
        console.log('empty queue')
    }
    while(currNode.next !== null) {
        results += `${currNode.value} =>`
        currNode = currNode.next
    }
    results += `${currNode.value}`

    console.log(results)
    return results
}

let starTrekQ = new Queue()

starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')

starTrekQ.dequeue()
starTrekQ.dequeue()

display(starTrekQ)

function doubleQueueTest () {
    const starTrekQ = new DoubleQueue()

    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    display(starTrekQ)

    console.log(peek(starTrekQ))
}

doubleQueueTest()

class dancePartners {
    constructor() {
        this.maleQ = new Queue();
        this.femaleQ = new Queue();
    }

    queueDancer(string) {
        const gender = string[0]
        const name = string.split(' ')[1]

        if(gender === 'F') {
            this.femaleQ.enqueue(name)
        }
        if(gender === 'M') {
            this.maleQ.enqueue(name)
        }

        if(this.femaleQ.first && this.maleQ.first) {
            const fDancer = this.femaleQ.dequeue()
            const mDancer = this.maleQ.dequeue()

            console.log(`Female dancer is ${fDancer} and male dancer is ${mDancer}`)
        }

        if(this.femaleQ.first) {
            let count = 1;

            let currNode = this.femaleQ.first

            while(currNode.next !== null) {
                count++

                currNode = currNode.next
            }

            console.log(`There are ${count} female dancers waiting`)
        }

        if(this.maleQ.first) {
            let count = 1

            let currNode = this.maleQ.first

            while(currNode.next !== null) {
                count++

                currNode = currNode.next
            }

            console.log(`There are ${count} male dancers waiting`)
        }
    }
}

function ophidianBank (queue) {
    while(queue.first) {
        let person = queue.dequeue
        let random = Math.random();

        if(random < .25 ) {
            queue.enqueue(person);
            console.log(`${Person}'s paperwork isn't quite right, back to the queue`)
        } else {
            console.log(`${person} served`)
        }
    }
    console.log()
}

const BQ = new Queue();

BQ.enqueue('person a');
BQ.enqueue('person b');
BQ.enqueue('person c');
BQ.enqueue('person d');
BQ.enqueue('person e');
BQ.enqueue('person f');

ophidianBank(BQ);
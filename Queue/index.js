// queue
// Deck DQ

class Queue{
    constructor(){
        this.queue=[]
    }
    enqueue(data){
        this.queue.push(data)
    }
    dequeue(){
        // Deck
        if (this.isEmpty()){
            return 'Queue is empty'
        }
        return this.queue.shift()
    }
    isEmpty(){
        return this.queue.length==0
    }
    peek(){
        if (this.isEmpty()){
            return 'Queue is empty'
        }
        return this.queue[0]
    }
    size(){
        return this.queue.length
    }
    clear(){
        this.queue = []
    }
    print(){
        // return this.queue 
        // Wrong, use for loop
        let str=""
        for (let i=0; i < this.queue.length; i++){
            str += this.queue[i] + "\n"
        }
        return str
    }
}

myQ = new Queue()
myQ.enqueue(20)
myQ.enqueue(40)
myQ.dequeue()
// myQ.dequeue()
// myQ.dequeue()
console.log(myQ.peek())
myQ.enqueue(50)
myQ.enqueue(80)

console.log(myQ.print())

// never use console.log in methods of stacks/queues
// dont be afraid of mistakes
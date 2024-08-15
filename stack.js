// DSA

// Stack
class Stack {
    constructor(){
        this.stack=[]
    }

    push(data){
        this.stack.push(data)
    }
    pop(){
        this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.lenght-1]
    }

    isEmpty(){
        return this.stack.length===0;
    }
    size(){
        return this.stack.length
    }
    clear(){
        this.stack=[]
    }
    contain(value){
        return this.stack.includes(value)
    }
    reverse(){
        this.stack.reverse()
    }
    printStack(){
        let str=""
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n"
            // return str
        }
        return str
    }
}

// usage example

let myStack = new Stack()
myStack.push(4)
myStack.push(2)
myStack.push(6)
myStack.pop()
console.log(myStack.printStack())


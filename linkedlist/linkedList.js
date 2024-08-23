class Node{
    constructor(data,next=null){
        this.data=data
        this.next=next
    }
}

class LinkedList{
    constructor(){
        // first element is head, last is tail
        this.head=null
    }


}
// insert at start
LinkedList.prototype.insertAtStart=function(data){
    const newNode = new Node(data)
    this.head= newNode;
}

// insert at end
LinkedList.prototype.insertAtEnd=function(data){
    const newNode = new Node(data)
    if (!this.head){
        this.head = newNode;
        return;
    }
    let last = this.head
    while(last.next){
        last = last.next
    }
    last.next= newNode;
}

//


 // insert at given node

 LinkedList.prototype.insertAfter = function(prevNode, data){
    if (!prevNode){
        console.log("The given prev node can not be null");
        return;
    }

    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode;
 }

LinkedList.prototype.DeleteFirstNode=function(){
    if(!this.head){
        return
    }
    this.head = this.head.next
}

LinkedList.prototype.DeleteLastNode=function(){
    if(!this.head){
        return // nothing to delete as list is empty
    }
    if(!this.head.next){
        this.head = null // head is last node, no make head null
        return
    }

    let secondlast = this.head;
    while (secondlast.next.next) {
        secondlast = secondlast.next
    }
    secondlast.next=null
}


// Delete a node by its key
LinkedList.prototype.DeleteByKey = function(key){
    // if list is empty
    if(!this.head){
        console.log('List is empty');
        return
    }
    // key is at head
    if(this.head.data === key){
        this.head = this.head.next
        return
    }
    // key is other than head - traverse
    let current = this.head;
    while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next
            return
        }
        current=current.next
    }
    console.log("No node found with key :",key);
}

// searching

// LinkedList.prototype.search=function(key){
//     let current = this.head
//     while(current){
//         if(current.head===key){
//             return true
//         }
//     }
//     return false
// }

//search operation

LinkedList.prototype.search = function(key){
    let current = this.head
    while(current){
      if (current.data === key) {
        return true
      }
      current = current.next  // Fixed the bug :|
    }
    return false
  }

// transversal

LinkedList.prototype.printList = function(){
    let current = this.head
    let listValues = []
        while (current) {
            listValues.push(current.data) // add data to list
            current = current.next // move to next node
        }
    console.log(listValues.join("->"));
}

// little challenge

LinkedList.prototype.reverse=function(){
    let current=this.head;
    let previous = null;
    let next = null;

    while(current){
        next=current.next
        current.next=previous
        previous=current
        current=next
    }
    // assign new head
    this.head=previous
    // return
}










// Testing

let myList = new LinkedList()

myList.insertAtStart(12)
myList.insertAtEnd(100)

// myList.DeleteByKey(100)
// myList.DeleteByKey(12)
myList.DeleteByKey(14)


nodePresent = myList.search(12)
console.log(nodePresent);

myList.insertAtStart(10)

myList.insertAtEnd(200)
// myList.insertAtStart(20)

myList.insertAtEnd(400)


console.log(myList);
// console.log(myList.reverse());
console.log(myList);

// myList.DeleteFirstNode()
myList.printList()




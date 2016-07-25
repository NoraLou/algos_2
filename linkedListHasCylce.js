
function Node (val) {
    this.val = val;
    this.next = null;
}

function LinkedList(){
    this.head = null;
}

LinkedList.prototype.push = function(val) {

    //make node out of value
    var node = new Node(val),
        current;

    //nothing there; it becomes the head
    if (!this.head) {
        this.head = node
        return;
    } else {
        current = this.head
        //if we have a value, move on...
        while ( current.next ) {
            current = current.next;
        }

        current.next = node;
        return;
    }
}

// Write a function containsCycle()
// that takes the first node in a singly-linked list and
// returns a boolean indicating whether the list contains a cycle.

function containsCycle(sll) {

    var slowPointer = sll.head,
       fastPointer = sll.head;

    while(slowPointer && fastPointer && fastPointer.next){
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if(slowPointer == fastPointer){
         return true;
      }
    }
    return false;
}

//test at least once
var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

console.log(containsCycle(sll)); //false

//create a loop manually. point next of 5 to point 3
sll.head.next.next.next.next.next = sll.head.next.next

console.log(containsCycle(sll)); //true



























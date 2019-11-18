/************** Set Up ********************/
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}


let a = new LinkedListNode("A");
let b = new LinkedListNode("B");
let c = new LinkedListNode("C");
let d = new LinkedListNode("D");

a.next = b;
b.next = c;
c.next = d;

/*******************-*********************/

function reverseLinkedList(head) {
    if(head.next === null) {
        throw "Can't reverse a single node list"
    }
    let current = head;
    let prev = null;
    let next = null;
    while(current) {
        next = current.next;
        current.next = prev;

        prev = current;
        current = next;
    }
    return prev;
}

console.log(reverseLinkedList(a));

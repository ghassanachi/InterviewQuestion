
/************** Set Up ********************/
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

let a = new LinkedListNode('A');
let b = new LinkedListNode('B');
let c = new LinkedListNode('C');

a.next = b;
b.next = c;

/*****************-********************/

function deleteNode( el ) {
    if(!el.next) {
        console.error("Cannot Delete Last Node")
    }else {
        b.value = b.next.value;
        b.next = b.next.next;
    }
}

console.log(b);
deleteNode(c);
console.log(b);

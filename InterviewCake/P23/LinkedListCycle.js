/************** Set Up ********************/
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

let a = new LinkedListNode('a');
let b = new LinkedListNode('b');
let c = new LinkedListNode('c');
let d = new LinkedListNode('d');
let e = new LinkedListNode('e');
let f = new LinkedListNode('f');
let g = new LinkedListNode('g');
let h = new LinkedListNode('h');
let i = new LinkedListNode('i');
let j = new LinkedListNode('j');
let k = new LinkedListNode('k');
let l = new LinkedListNode('l');


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;
j.next = k;
k.next = l;
l.next = i;

/******************-*********************/

function checkForCycle(head) {
    if(head.next === null) {
        return false;
    }
    let pFast = head;
    let pSlow = head;

    while(pFast.next.next) {
        pFast = pFast.next.next;
        pSlow = pSlow.next;
        if(pFast === pSlow) {
            return true;
        }

    }
    return false;
}

console.log(checkForCycle(a));


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

/************************-******************/

function kthToLastNode(k, head) {
    if(!head.next || k === 0) {
        throw "List Too Small";
    }
    let pFront = head;
    let pBack = head;
    for(let i=0; i<k; i++) {
        if(!pFront.next) {
            throw "List Too Small";
        }
        pFront = pFront.next
    }
    while(pFront) {
        pFront = pFront.next;
        pBack = pBack.next;
    }

    return pBack;
}

let value = kthToLastNode(3, a).value;
let expected = 'j';
assertValueEquals(value, expected, "3rd To Last");


let err = () => (kthToLastNode(20, a));
assertThrowsError(err, 'K Too Big');


function assertValueEquals(a, b, desc) {
    if (a !== b) {
        console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
    } else {
        console.log(`${desc} ... PASS`);
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`${desc} ... FAIL`);
    } catch (e) {
        console.log(`${desc} ... PASS`);
    }
}


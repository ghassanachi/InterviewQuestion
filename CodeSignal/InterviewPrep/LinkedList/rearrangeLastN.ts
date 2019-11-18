function ListNode(x) {
    this.value = x;
    this.next = null;
  }

  function rearrangeLastN(l, n) {
    if(n === 0) return l;
    let head = l;
    let fast = l;
    let slow = l;
    let count = 0;
    while (fast && count < n ) {
        fast = fast.next;
        count++;
    }
    //Return if l.length === n
    if(!fast) return head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
}

let head = new ListNode(123);
head.next = new ListNode(456);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(0);

// let current = head;
// for(let i=2; i < 8; i++) {
//     current.next = new ListNode(i);
//     current = current.next;
// }

rearrangeLastN(head, 4); //?

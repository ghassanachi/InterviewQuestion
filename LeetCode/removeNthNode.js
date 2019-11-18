var removeNthFromEnd = (head, n) => {
    let slow = fast = head;
    while (n && fast.next) {
        if(fast.next === null) return head;
        fast = fast.next;
        n--;
    }
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    if(n === 0) {
        slow.next = slow.next.next;
    }
    if(n === 1) {
        head = head.next;
    }
    return head;
}

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

let arr = [1,2];
let head = new ListNode(1)
let current = head;
for(i in arr) {
    if(i+1 > 1) {
        current.next = new ListNode(+i+1)
        current = current.next;
    } 
}

removeNthFromEnd(head, 2) //?
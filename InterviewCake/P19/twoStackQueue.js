function Queue() {
    this.stackA = [];
    this.stackB = [];
    this.enqueue = function (el) {
        this.stackA.unshift(el);
    };
    this.dequeue = function () {
        if (this.stackB.length !== 0) {
            return this.stackB.shift();
        } else if (this.stackA.length !== 0) {
            while (this.stackA.length !== 0) {
                this.stackB.unshift(this.stackA.shift());
            }
            return this.stackB.shift();
        } else {
            return undefined;
        }
    }
}

let queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");
console.log(queue.dequeue());
queue.enqueue("C");
console.log(queue.dequeue());
queue.enqueue("D");
queue.enqueue("E");
console.log(queue.dequeue());
queue.enqueue("F");
console.log(queue.dequeue());
console.log(queue.dequeue());



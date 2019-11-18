function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {

    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};

/*----------------------------------------------------*/

function MaxStack () {
    this.stack = new Stack();
    this.maxStack = new Stack;
}

MaxStack.prototype.push = function(item) {
    this.stack.push(item);
    if(this.maxStack.length === 0 || this.maxStack.peek() <= item) {
        this.maxStack.push(item);
    }
};

MaxStack.prototype.pop = function() {
    let item = this.stack.pop();
    if(item === this.maxStack.peek()) {
        this.maxStack.pop()
    }
    return item;
};

MaxStack.prototype.getMax = function(){
    return this.maxStack.peek();
};

let maxesStack = new MaxStack();
maxesStack.push(1);
maxesStack.push(2);
maxesStack.push(3);
maxesStack.push(4);
maxesStack.push(5);
maxesStack.push(6);

console.log(maxesStack.pop());
console.log(maxesStack.getMax());
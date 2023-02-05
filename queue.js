class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  peek() {
    return this.head;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
    } else {
      const holdingPointer = this.head.next;
      this.head.next = null;
      this.head = holdingPointer;
    }
    if (this.length > 0) this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}
const myQueue = new Queue();
console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("Matt"));
console.log(myQueue.enqueue("Pavel"));
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.isEmpty());

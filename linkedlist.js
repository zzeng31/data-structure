class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length || index < 0) return this.append(value);
    const newNode = new Node(value);
    let currNode = this.head;
    let prevNode = this.head;
    let currIndex = 0;
    while (currNode !== null) {
      if (currIndex === index) {
        newNode.next = currNode;
        prevNode.next = newNode;

        if (currIndex === this.length - 1) {
          this.tail = newNode;
          this.tail.next = null;
        }
        this.length++;
        return this;
      }
      if (currIndex > 0) {
        prevNode = prevNode.next;
      }
      currNode = currNode.next;
      currIndex++;
    }
  }
  delete(index) {
    if (index === 0) {
      this.head = this.head.next;
      return this;
    }
    if (index >= this.length) return null;
    let currNode = this.head;
    let prevNode = this.head;
    let currIndex = 0;
    while (currNode !== null) {
      if (currIndex === index) {
        prevNode.next = currNode.next;
        currNode.next = null;
        if (currIndex === this.length - 1) {
          this.tail = prevNode;
          this.tail.next = null;
        }
        this.length--;

        return this;
      }
      if (currIndex > 0) prevNode = prevNode.next;
      currNode = currNode.next;
      currIndex++;
    }
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(7);
myLinkedList.append(10);
myLinkedList.insert(1, "a");
myLinkedList.delete(1);
console.log(myLinkedList.printList());

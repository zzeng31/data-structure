class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    if (this.length > 0) {
      delete this.data[this.length - 1];
      this.length--;
    }
    return lastItem;
  }
  remove(index) {
    const item = this.data[index];
    this.#shiftItems(index);
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  #shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

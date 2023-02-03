class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [[key, value]];
    } else {
      for (let pair of this.data[hash]) {
        if (key == pair[0]) {
          pair[1] = value;
          return;
        }
      }
      this.data[hash].push([key, value]);
    }
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
    return undefined;
  }
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let allKeys = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            allKeys.push(this.data[i][j][0]);
          }
        } else {
          allKeys.push(this.data[i][0]);
        }
      }
    }
    return allKeys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 10000);
myHashTable.set("oranges", 10000);
myHashTable.set("banana", 10000);
myHashTable.keys();
console.log(myHashTable.keys());

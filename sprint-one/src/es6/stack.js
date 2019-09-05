class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push (value) {
    var newKey = parseInt(Object.keys(this.storage).pop()) + 1;
    if (isNaN(newKey)) {
      newKey = 0;
    }
    this.storage[newKey] = value;
  }

  pop () {
    var removeKey = parseInt(Object.keys(this.storage).pop());
    var removeItem = this.storage[removeKey];
    delete this.storage[removeKey];
    return removeItem;
  }

  size () {
    return Object.keys(this.storage).length;
  }

}
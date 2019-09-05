class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue (value) {
    var keys = Object.keys(this);
    keys.pop();
    var newKey = parseInt(keys.pop()) + 1;
    if (isNaN(newKey)) {
      newKey = 0;
    }
    this[newKey] = value;
  }

  dequeue () {
    var removeKey = parseInt(Object.keys(this).shift());
    var removeItem = this[removeKey];
    delete this[removeKey];
    return removeItem;
  }

  size () {
    return Math.max(0, Object.keys(this).length - 1);
  }

}

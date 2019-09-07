class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counterLowerLimit = 0;
    this.counterUpperLimit = 0;
  }

  enqueue (value) {
    this.storage[this.counterUpperLimit] = value;
    this.counterUpperLimit++;
  }

  dequeue () {
    if (this.counterUpperLimit - this.counterLowerLimit > 0) {
      var returnItem = this.storage[this.counterLowerLimit];
      delete this.storage[this.counterLowerLimit];
      this.counterLowerLimit++;
      return returnItem;
    }
  }

  size () {
    return this.counterUpperLimit - this.counterLowerLimit;
  }

}

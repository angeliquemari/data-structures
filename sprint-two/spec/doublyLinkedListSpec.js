describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead" and "removeTail"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when addToTail is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when addToHead is called', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.removeHead();
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(4)).to.equal(false);
    expect(doublyLinkedList.contains(6)).to.equal(false);
    expect(doublyLinkedList.contains(5)).to.equal(true);
  });

  it('should reset head and tail to null when all nodes are removed from the head', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head).to.equal(null);
    expect(doublyLinkedList.tail).to.equal(null);
  });

  it('should reset head and tail to null when all nodes are removed from the tail', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeTail();
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.head).to.equal(null);
    expect(doublyLinkedList.tail).to.equal(null);
  });

});

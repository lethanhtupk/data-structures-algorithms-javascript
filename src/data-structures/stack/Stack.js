import LinkedList from '../linked-list/LinkedList';

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    return this.linkedList.unshift(value);
  }

  pop() {
    const removedHead = this.linkedList.shift();
    return removedHead ? removedHead.value : null;
  }

  peek() {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  toArray() {
    return this.linkedList.toArray();
  }

  toString() {
    return this.linkedList.display();
  }
}

export default Stack;

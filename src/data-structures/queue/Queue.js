import LinkedList from '../linked-list/LinkedList';

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.push(value);
    return this;
  }

  dequeue(value) {
    const removeHead = this.linkedList.shift();
    return removeHead ? removeHead.value : null;
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

  toString() {
    return this.linkedList.display();
  }
}

export default Queue;

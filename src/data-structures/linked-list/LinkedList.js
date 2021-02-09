import LinkedListNode from './LinkedListNode';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // method to add a new node in LinkedList
  push(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let prev = this.head;
    let current = this.head.next;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // method for add a new node in the end of LinkedList
  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    const currentTail = this.tail;
    currentTail.next = newNode;
    this.tail = newNode;
    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deleteNode; // the deleteNode to be return

    if (this.head && this.head.value === value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        deleteNode = currentNode.next;
        currentNode.next = deleteNode.next;
        // cutdown the pointer of deleteNode with nextNode in LinkedList
        deleteNode.next = null;
      }
      currentNode = currentNode.next;
    }
    return deleteNode;
  }

  deleteTail() {
    // if it's empty LinkedList
    let deleteTail;
    if (!this.head) {
      return null;
    }

    // if only have one item in LinkedList
    else if (this.head === this.tail) {
      deleteTail = this.tail;
      this.head = null;
      this.tail = null;
    }

    // if have more than 1 item
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    deleteTail = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;

    return deleteTail;
  }

  deleteHead() {
    let deleteHead;

    if (!this.head) {
      return null;
    } else if (this.head === this.tail) {
      deleteHead = this.head;
      this.head = null;
      this.tail = null;
    }
  }
}

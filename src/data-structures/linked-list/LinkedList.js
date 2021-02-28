import LinkedListNode from './LinkedListNode';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // create method for array of value
  create(arr) {
    for (const ele of arr) {
      this.push(ele);
    }
    return this;
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

  //method to push a new node in the tail of LinkedList
  pop() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode;
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
    return current;
  }

  // method for remove the head from LinkedList
  shift() {
    if (!this.head) {
      return null;
    }
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // adding a new node in the head of linkedList
  unshift(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
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
    return this;
  }

  // get the node at that position. indexing counting from zero
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // change the value at corresponding
  set(index, newValue) {
    const currentNode = this.get(index);
    if (!currentNode) {
      return null;
    }
    currentNode.value = newValue;
    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    } else if (index === this.length) {
      return this.push(value);
    } else if (index === 0) {
      return this.unshift(value);
    } else {
      const newNode = new LinkedListNode(value);
      const prev = this.get(index - 1);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
      return this;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const prev = this.get(index - 1);
      const removedNode = prev.next;
      prev.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  // display LinkedList as a string
  display() {
    let currentNode = this.head;
    let str = '';
    while (currentNode) {
      str += currentNode.value + ', ';
      currentNode = currentNode.next;
    }
    return str;
  }
}

export default LinkedList;

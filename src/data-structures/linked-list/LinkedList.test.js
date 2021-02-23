import LinkedList from './LinkedList';
import LinkedListNode from './LinkedListNode';

describe('LinkedList', () => {
  it('should create a new LinkedList', () => {
    const ll = new LinkedList();

    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
    expect(ll.length).toBe(0);
  });
  // push method
  it('should push a new node to the tail of LinkedList', () => {
    const ll = new LinkedList();
    ll.push('hello');
    ll.push('world!');

    expect(ll).toEqual(ll.create(['hello', 'world!']));
  });
  it('should push a new node to the tail of empty LinkedList', () => {
    const ll = new LinkedList();
    ll.push('hello');

    expect(ll).toEqual(ll.create(['hello']));
  });
  // pop method
  it('should pop a node from empty LinkedList', () => {
    const ll = new LinkedList();

    expect(ll.pop()).toBeNull();
  });
  it('should pop a node from a 1 node LinkedList', () => {
    const ll = new LinkedList();
    ll.push('hello');

    expect(ll.pop()).toEqual(new LinkedListNode('hello'));
  });
  it('should pop a node from a normal LinedList', () => {
    const ll = new LinkedList();

    expect(ll.pop()).toEqual(ll.tail);
  });
  // shift method
  it('should shift a node from empty LinkedList', () => {
    const ll = new LinkedList();

    expect(ll.shift()).toBeNull();
  });
  it('should shift a node from a 1 node LinkedList', () => {
    const ll = new LinkedList();
    ll.push('hello');

    expect(ll.shift()).toEqual(new LinkedListNode('hello'));
  });
  // unshift method
  it('should add a new node to empty LinkedList', () => {
    const ll = new LinkedList();

    expect(ll.unshift('hello')).toEqual(ll.create(['hello']));
  });
  it('should add a new node to normal LinkedList', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.unshift(89)).toEqual(ll.create([89, 12, 30, 19, 72, 90]));
  });
  // // delete method
  it('should delete a node from empty LinkedList', () => {
    const ll = new LinkedList();

    expect(ll.delete(12)).toBeNull();
  });
  it('should delete a node with the value in paramter equal to the head', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.delete(12)).toEqual(ll.create([30, 19, 72, 90]));
  });
  it('should delete a node with the specific value', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.delete(30)).toEqual(ll.create([12, 19, 72, 90]));
  });
  // // get method
  it('should get a node with illegal index', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.get(5)).toBeNull();
  });
  it('should get a legal node', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.get(3).value).toBe(72);
  });
  // set method
  it('should change the value of a node', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.set(1, 35)).toEqual(ll.create([12, 35, 19, 72, 90]));
  });
  // insert method
  it('insert a new node with illegal index', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.set(-2, 28)).toBeNull();
  });
  it('insert a new node with legal index', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.insert(3, 21)).toEqual(ll.create([12, 30, 19, 21, 72, 90]));
  });
  // remove method
  it('remove a node with illegal index', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.remove(5)).toBeNull();
  });
  it('remove a node with legal index', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.remove(1).value).toBe(30);
  });
  // reverse method
  it('reverse a LinkedList', () => {
    const ll = new LinkedList();
    ll.create([12, 30, 19, 72, 90]);

    expect(ll.reverse()).toEqual(ll.create([90, 72, 19, 30, 12]));
  });
});

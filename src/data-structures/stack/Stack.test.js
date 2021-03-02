import Stack from './Stack';

describe('Stack', () => {
  it('should create an empty stack', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBe(null);
  });

  it('should push a value into stack', () => {
    const stack = new Stack();
    stack.push('my name is Tu');

    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe('my name is Tu');
  });

  it('should pop from a empty stack', () => {
    const stack = new Stack();

    expect(stack.pop()).toBe(null);
  });

  it('should testing toString() and toArray() method', () => {
    const stack = new Stack();

    stack.push('a');
    stack.push('b');
    stack.push('c');

    expect(stack.toString()).toBe('c, b, a, ');
    expect(stack.toArray()).toStrictEqual(['c', 'b', 'a']);
  });
});

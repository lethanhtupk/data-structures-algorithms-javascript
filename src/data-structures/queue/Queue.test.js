import Queue from './Queue';

describe('Queue', () => {
  it('should create a new Queue from LinkedList', () => {
    const queueMessage = new Queue();

    expect(queueMessage.isEmpty()).toBe(true);
    expect(queueMessage.toString()).toBe('');
  });

  it('should try to dequeue from empty queue', () => {
    const queueMessage = new Queue();

    expect(queueMessage.isEmpty()).toBe(true);
    expect(queueMessage.dequeue()).toBe(null);
  });

  it('should enqueue and dequeue from normal queue', () => {
    const queueMessage = new Queue();

    expect(queueMessage.enqueue('hello').toString()).toBe('hello, ');
    expect(queueMessage.enqueue('world').toString()).toBe('hello, world, ');
    expect(queueMessage.dequeue()).toBe('hello');
  });
});

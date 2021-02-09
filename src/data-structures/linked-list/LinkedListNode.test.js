import LinkedListNode from './LinkedListNode'

describe('LinkedListNode ', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1)

    expect(node.value).toBe(1)
    expect(node.next).toBeNull()
  })

  it('should create a list node with object as value', () => {
    const nodeValue = { key: 1, key: 'test' }
    const node = new LinkedListNode(nodeValue)

    expect(node.value).toEqual({ key: 1, key: 'test' })
    expect(node.next).toBeNull()
  })

  it('should link node together', () => {
    const node1 = new LinkedListNode(1)
    const node2 = new LinkedListNode(2)

    node1.next = node2

    expect(node1.next).toBeDefined()
    expect(node2.next).toBeNull()
    expect(node1.value).toBe(1)
    expect(node2.value).toBe(2)
  })
})

class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class ArrayStack {
  constructor(){
    this.items = []
  }

  push(val){
    const newNode = Node(val)
    this.items.push(newNode)
    return this.items.length
  }

  pop(){
    if (this.isEmpty()) return null
    return this.items.pop
  }

  peek(){
    if (this.isEmpty()) return null
    return this.items[this.items.length - 1]
  }

  isEmpty(){
    return this.items.length === 0
  }
}

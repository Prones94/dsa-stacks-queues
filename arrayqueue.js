class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class ArrayQueue{
  constructor(){
    this.items = []
  }

  enqueue(val){
    this.items.push(val)
    return this.items.length
  }

  dequeue(val){
    if(this.isEmpty()) return null
    return this.items.shift()
  }

  peek(){
    if(this.isEmpty()) return null
    return this.items[0]
  }

  isEmpty(){
    return this.items.length === 0
  }
}
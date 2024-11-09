class Node {
  constructor(val){
    this.val = val
    this.next = null
    this.prev = null
  }
}

class Deque {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  addFirst(val){
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      newNode.next = this.first
      this.first.prev = newNode
      this.first = newNode
    }
    this.size++
  }

  addLast(val){
    const newNode = new Node(val)
    if (!this.last){
      this.last.next = newNode
      this.last = newNode
    }
    size++
  }

  removeFirst(){
    if (!this.first) return null
    const temp = this.first
    this.first = this.first.next
    this.size--
    if (this.size === 0){
      this.last = null
    } else {
      this.first.prev = null
    }
    return temp.val
  }

  peekFirst(){
    if (!this.first) return null
    return this.first.val
  }

  peekLast(){
    if(!this.last) return null
    return this.last.val
  }

  isEmpty(){
    return this.size === 0
  }
}
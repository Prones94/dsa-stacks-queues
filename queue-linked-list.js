class Node {
  constructor(val){
    this.val = val
    this.next= next
  }
}

class LinkedList {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
}

class Queue extends LinkedList{
  enqueue(val){
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return
  }

  deque(){
    if (!this.first) return null
    const temp = this.first
    this.first = this.first.next
    this.size--
    if (this.size === 0){
      this.last = null
    }
    return temp.val
  }

  peek(){
    if (!this.first) return null
    return this.first.val
  }

  isEmpty(){
    return this.size === 0
  }
}
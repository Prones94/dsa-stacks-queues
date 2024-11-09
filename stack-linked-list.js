class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
}

class Stack extends LinkedList{
  push(val){
    const newNode = new Node(val)
    if (!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      newNode.next = this.first
      this.first = newNode
    }
  }

  pop(){
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
    if(!this.first) return null
    return this.first.val
  }

  isEmpty(){
    return this.size === 0
  }
}


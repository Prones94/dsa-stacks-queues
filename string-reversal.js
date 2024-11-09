/* String Reversal */
class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor(){
    this.top = null
    this.size = 0
  }

  push(val){
    const newNode = new Node(val)
    if (!this.top){
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.size++
  }

  pop(){
    if(!this.top) return null
    const val = this.top.val
    this.top = this.top.next
    this.size--
    return val
  }

  isEmpty(){
    return this.size === 0
  }
}

function reverseString(str){
  let stack = new Stack()

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
  }

  let reversedStr = ""
  while(!stack.isEmpty()){
    reversedStr += stack.pop()
  }
  return reversed
}
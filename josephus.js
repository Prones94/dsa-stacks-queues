class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  add(val){
    const newNode = new Node(val)
    if (!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail = newNode
      this.tail.next = newNode
    }
    this.size++
  }

  remove(node){
    if(!this.head) return null

    if (this.head === node && this.size === 1){
      this.head = null
      this.tail = null
      this.size--
      return node
    }

    while(current){
      if (current === node){
        if (prev){
          prev.next = current.next
          if (current === this.tail){
            this.tail = prev
          }
        } else {
          this.head = this.head.next
          if (current === this.tail){
            this.tail = null
          }
        }
        this.size--
        return current
      }
      prev = current
      current = current.next
    }
    return null
  }
}

function josephusSurvivor(num, skip){
  const list = new LinkedList()
  for (let i = 1; i <= num; i++){
    list.add(i)
  }

  if (list.tail) {
    list.tail.next = list.head
  }

  let current = list.head

  while(list.size > 1){
    for (let i = 1; i < skip;i++){
      current = current.next || list.head
    }
    const toRemove = current
    current = current.next || list.head
    list.remove(toRemove)
  }

  return list.head.val
}
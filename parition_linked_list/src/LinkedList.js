import LinkedListNode from './LinkedListNode.js'

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  append(vlaue){
    const newNode = new LinkedListNode(vlaue);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
  toArray(){
    const nodes=[];
    let currentNode = this.head
    while(currentNode){
      nodes.push(currentNode);
      currentNode = currentNode.next
    }
    return nodes
  }
  toString(){
    return this.toArray().map(node=>node.val)
  }
}

export default LinkedList
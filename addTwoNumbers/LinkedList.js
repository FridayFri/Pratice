// 将数字的每一位变成一个类ListNode的实例
// 既不是字符串也不是数值 而是线性表数据结构 
function LinkedNode(val){
  this.val = val;
  //指针
  this.next = null;


}

let number = 1234567890;
let n1 = new LinkedNode(1);
//console.log(n1)
let n2 = new LinkedNode(2);
n1.next = n2
let n3 = new LinkedNode(3);
n2.next = n3
let n4 = new LinkedNode(4);
n3.next = n4
let n5 = new LinkedNode(5);
n4.next = n5
//console.log(n1,n2,n3,n4,n5)
//遍历链表，travel 一下
let node = n1;
while(node){
  console.log(node.val)
  node = node.next;
}
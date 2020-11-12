var sortedListToBST = function (head) {
  var makeTree = function (head, tail) {
    if (head === tail) return null;
    var p1 = head,
      p2 = head;
    // 快慢指针
    while (p2 !== tail) {
      p2 = p2.next;
      if (p2 !== tail) {
        p1 = p1.next;
        p2 = p2.next;
      }
    }
    var treeNode = new TreeNode(p1.val);
    treeNode.left = makeTree(head, p1);
    treeNode.right = makeTree(p1.next, tail);
    return treeNode;
  };
  return makeTree(head, null);
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const head = new ListNode(-10);
head.next = new ListNode(-3);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(9);

console.log(sortedListToBST(head));

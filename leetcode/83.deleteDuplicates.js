/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head || !head.next) {
     return head;
   }
   let headItem = head;
   while (headItem.next != null) {
     if (headItem.val == headItem.next.val) {
       headItem.next = headItem.next.next;
     } else {
       headItem = headItem.next;
     }
   }
     return head
 };

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var heads = new ListNode(1)
heads.next = new ListNode(1)
heads.next.next = new ListNode(2)
console.log(deleteDuplicates(heads))
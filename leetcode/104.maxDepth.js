/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  // 递归
  //   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;



  // 非递归
  const queue = [root];
  let depth = 1;
  while (queue.length) {
    // 当前层的节点个数
    const levelSize = queue.length;
    console.log('levelSize', levelSize)
    // 逐个让当前层的节点出列
    for (let i = 0; i < levelSize; i++) {
      // 当前出列的节点
      const cur = queue.shift();
      // 左右子节点入列
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      console.log(queue)
    }
    // 当前层所有节点已经出列，如果有下一层节点，则队列不为空
    if (queue.length) depth++;
  }
  return depth;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(maxDepth(root));

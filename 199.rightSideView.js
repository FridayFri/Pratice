/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 递归
// var rightSideView = function (root) {
//   if (!root) return [];
//   let res = [];
//   dfs(root, 0, res);
//   return res;
// };

// function dfs(root, step, res) {
//   if (root) {
//     if (res.length === step) {
//       res.push(root.val); // 当数组长度等于当前 深度 时, 把当前的值加入数组
//     }
//     dfs(root.right, step + 1, res); // 先从右边开始, 当右边没了, 再轮到左边
//     dfs(root.left, step + 1, res);
//   }
// }

// 非递归
var rightSideView = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let len = queue.length;
    while (len) {
      const cur = queue.shift();
      console.log('res', res,'len', len)
      if (len === 1) {
          console.log(cur.val,'val')
        res.push(cur.val);
      }
      if (cur.left) queue.push(cur.left); // 继续往队列添加元素
      if (cur.right) queue.push(cur.right);
      len--;
    }
  }
  return res;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.left.left = new TreeNode(4);
root.left.right.left = new TreeNode(7);
root.right.left = new TreeNode(6);
console.log(rightSideView(root));

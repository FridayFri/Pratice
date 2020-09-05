/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//  递归BFC
// var levelOrder = function (root) {
//   if (!root) {
//     return [];
//   }
//   let res = [];
//   dfs(root, 0, res);
//   return res;
// };

// function dfs(root, step, res) {
//   if (root) {
//     if (!res[step]) {
//       res[step] = [];
//     }
//     res[step].push(root.val)
//     dfs(root.left, step + 1, res);
//     dfs(root.right, step + 1, res);
//   }
// }

// 非递归 BFS
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let res = [];
  while (queue.length) {
    const len = queue.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      arr.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    res.push(arr);
  }
  return res;
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
console.log(levelOrder(root));

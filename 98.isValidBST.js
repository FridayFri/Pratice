/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 递归
// var isValidBST = function (root) {
//   if (!root) {
//     return true;
//   }
//   return isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
// };

// function isBST(root, min, max) {
//   if (!root) {
//     return true;
//   }
//   if (min >= root.val || max <= root.val) {
//     return false;
//   }
//   return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
// }

// 中序遍历 digui

var isValidBST = function (root) {
  if (!root) {
    return true;
  }
  const res = bst(root);
  console.log();
  for (let i = 0; i < res.length; i++) {
    if (res[i] > res[i + 1]) {
      return false;
    }
  }
  return true;
};

var bst = function (root, val = []) {
  if (root) {
    bst(root.left, val);
    val.push(root.val);
    bst(root.right, val);
  }
  return val;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const root = new TreeNode(1);
root.left = new TreeNode(1);
console.log(isValidBST(root));

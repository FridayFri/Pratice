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
var isValidBST = function (root) {
  if (!root) {
    return true;
  }
  return isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function isBST(root, min, max) {
  if (!root) {
    return true;
  }
  if (min >= root.val || max <= root.val) {
    return false;
  }
  return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  if (!t) {
    return "";
  }
  var rightStr = "";
  if (t.right) {
    rightStr = `(${tree2str(t.right)})`;
  }
  var leftStr = `(${tree2str(t.left)})`;
  if (!t.right && leftStr === "()") {
    leftStr = "";
  }
  console.log(leftStr,rightStr)
  return `${t.val.toString()}${leftStr}${rightStr}`;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};

console.log(tree2str(root));

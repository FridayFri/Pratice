function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function (inorder, postorder) {
  const map = {};
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }
  const helper = (iStart, iEnd, pStart, pEnd) => {
    if (pStart > pEnd || iStart > iEnd) {
      return null;
    }
    const rootVal = postorder[pEnd];
    const mid = map[rootVal];
    console.log(rootVal)
    const leftNodeNum = mid - iStart;
    const root = new TreeNode(rootVal);
    root.left = helper(iStart, mid - 1, pStart, pStart + leftNodeNum - 1);
    root.right = helper(mid + 1, iEnd, pStart + leftNodeNum, pEnd - 1);

    return root;
  };
  return helper(0, inorder.length - 1, 0, postorder.length - 1);
};
// console.log(
  buildTree((inorder = [9, 3, 15, 20, 7]), (postorder = [9, 15, 7, 20, 3]))
// );

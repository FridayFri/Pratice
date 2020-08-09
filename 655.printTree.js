var printTree = function (root) {
  const deep = dep(root);
  const res = Array.from(new Array(deep), () =>
    new Array(Math.pow(2, deep) - 1).fill("")
  );
  // 深度遍历
  function dep(root) {
    if (!root) {
      return 0;
    }
    let left = dep(root.left);
    let right = dep(root.right);
    return Math.max(left, right) + 1;
  }
  function set(root, row, left, right) {
    if (root) {
      let mid = Math.floor((left + right) / 2);
      res[row][mid] = root.val.toString();
      set(root.left, row + 1, left, mid);
      set(root.right, row + 1, mid + 1, right);
    }
  }
  set(root, 0, 0, (Math.pow(2, deep) - 1));
  return res;
};

// 解题思路，先深度遍历求树高，由二叉树可求出宽

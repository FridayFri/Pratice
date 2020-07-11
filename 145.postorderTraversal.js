var postorderTraversal = function (root) {
  const res = [];
  function tranversal(root) {
    if (root) {
      tranversal(root.left);
      tranversal(root.right);
      res.push(root.val);
    }
  }
  tranversal(root);
  return res;
};

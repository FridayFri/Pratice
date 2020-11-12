var preorder = function (root) {
  const res = [];
  function traversal(root) {
    if (root) {
      res.push(root.val);
      root.children.forEach((child) => traversal(child));
    }
  }
  traversal(root);
  return res;
};

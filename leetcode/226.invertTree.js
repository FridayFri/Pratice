var invertTree = function (root) {
  if (!root) {
    return null;
  } else {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
};

console.log(invertTree());

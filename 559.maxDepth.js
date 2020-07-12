var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let num = 0;
  if (root.children) {
    root.children.forEach((children) => {
      let max = maxDepth(children);
      num = Math.max(max, num);
    });
  }
  return num + 1;
};

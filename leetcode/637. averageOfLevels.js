var averageOfLevels = function (root) {
  let res = [];
  if (!root) {
    return false;
  }
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(sum / len);
  }
  return res;
};

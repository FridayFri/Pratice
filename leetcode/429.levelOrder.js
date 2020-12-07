var levelOrder = function (root) {
  if (root === null) return [];
  const queue = [root];
  let res = [];
  while (queue.length) {
    let len = queue.length;
    let tmp = [];
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      tmp.push(cur.val);
      queue.push(...cur.children);
    }
    res.push(tmp);
  }
  return res;
};

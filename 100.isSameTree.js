var isSameTree = function (p, q) {
  // 1. return JSON.stringify(p)===JSON.stringify(q)
  if (q === null && p === null) {
    return true;
  }
  if (q === null || p === null) {
    return false;
  }
  if (q.val !== p.val) {
    return false;
  }
////111122222
/// 3333
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree(q, b));

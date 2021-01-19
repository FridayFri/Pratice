function binaryTreePaths(root) {
  var res = [],
    tmp = []; //res为结果，tmp保存每次递归已遍历过的节点值
  dfs(root);
  return res;
  function dfs(root) {
    if (root == null) {
      //空子节点需要return
      return;
    }
    if (root != null && root.left == null && root.right == null) {
      //遇到叶子节点
      tmp.push(root.val);
      res.push(tmp.join("->"));
      tmp.pop();
      return;
    }
    tmp.push(root.val);
    dfs(root.left);
    dfs(root.right);
    tmp.pop();
  }
}

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
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};

console.log(binaryTreePaths(root));

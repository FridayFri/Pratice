// 递归
// var serialize = function (root) {
//   // 遇到null节点
//   if (root == null) return "X,";
//   // 左子树的序列化后的字符串
//   const leftSerialized = serialize(root.left);
//   // 右子树的序列化后的字符串
//   const rightSerialized = serialize(root.right);
//   // 按 根|左|右 拼接在一起返回
//   return root.val + "," + leftSerialized + rightSerialized;
// };

// var deserialize = function (data) {
//   const list = data.split(",");
//   return buildTree(list);
// };

// const buildTree = (list) => {
//   const nodeVal = list.shift();
//   if (nodeVal == "X") return null;
//   const node = new TreeNode(nodeVal);
//   node.left = buildTree(list);
//   node.right = buildTree(list);
//   return node;
// };

//  非递归

var serialize = function (root) {
  const queue = [root];
  let res = [];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      res.push("X");
    }
  }
  console.log(res);
  return res.join(",");
};

var deserialize = function (data) {
  if (data === "X") return null;
  const list = data.split(",");
  const root = new TreeNode(list[0]);
  const queue = [root];
  let cur = 1;
  while (cur < list.length) {
    const node = queue.shift();
    const leftVal = list[cur]; 
    const rightVal = list[cur + 1];
    if (leftVal != "X") {
      const leftNode = new TreeNode(leftVal);
      node.left = leftNode;
      queue.push(leftNode);
    }
    if (rightVal != "X") {
      const rightNode = new TreeNode(rightVal);
      node.right = rightNode;
      queue.push(rightNode);
    }
    cur += 2;
  }
  return root;
};

// 建树
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(9);
console.log(serialize(root),deserialize(serialize(root)));


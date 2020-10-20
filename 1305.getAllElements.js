var midTraversal = (node, res = []) => {
  if (node) {
    midTraversal(node.left, res);
    res.push(node.val);
    midTraversal(node.right, res);
  }
  return res;
};
var getAllElements = function (root1, root2) {
  const arr1 = midTraversal(root1);
  const arr2 = midTraversal(root2, arr1);
  return arr2.sort((a, b) => a - b);
};

const root1 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 4,
    left: null,
    right: null,
  },
};
const root2 = {
  val: 1,
  left: {
    val: 0,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
console.log(getAllElements(root1, root2));

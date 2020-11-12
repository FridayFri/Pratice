var getMinimumDifference = function (root) {
  const arr = bst(root);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length-1; i++) {
    if(Math.abs(arr[i+1]-arr[i])< min){
        min = Math.abs(arr[i+1]-arr[i])
    }
  }
  return min;
};
var bst = function (root, val = []) {
  if (root) {
    bst(root.left, val);
    val.push(root.val);
    bst(root.right, val);
  }
  return val;
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(7);
root.left = new TreeNode(3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(5);
root.right = new TreeNode(10);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(12);

console.log(getMinimumDifference(root));

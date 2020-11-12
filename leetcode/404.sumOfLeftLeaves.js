

var sumOfLeftLeaves = function(root) {
    let sum = 0;
    if(!root){
        return 0
    }
    if(root.left !== null && root.left.left == null && root.left.right == null){
        sum += root.left.val
    }
    return sum + sumOfLeftLeaves(root.right) + sumOfLeftLeaves(root.left)
};
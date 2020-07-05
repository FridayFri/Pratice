
var minDepth = function(root) {
    if(!root){
        return 0
    }
    const left = minDepth(root.left)
    const right = minDepth(root.right)
    return (left === 0 || right ===0) ? 1 + left + right : 1 + Math.min(left, right);
};

console.log(minDepth())
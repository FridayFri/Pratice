/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if(!root){
        return true
    }
    const left = dfs(root.left)
    const right = dfs(root.right)
    if(Math.abs(left-right)>1){
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right)
};

var dfs = function(root){
    if(!root){
        return 0
    }
    return Math.max(dfs(root.left), dfs(root.right))+1
}
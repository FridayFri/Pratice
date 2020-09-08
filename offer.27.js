/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    trans(root)
    return root
};

var trans = function(node){
    if(node){
        let temp = node.left
        node.left = node.right
        node.right = temp
        trans(node.left)
        trans(node.right)
    }
}

var postorder = function(root) {
    const res =[]
    function tranversal (root) {
        if(root){
            root.children.forEach(child => tranversal(child))
            res.push(root.val)
        }
    }
    tranversal(root)
    return res
};
var preorderTraversal = function (root) {
    let result =[]
    const Node = (node)=>{
        if(node){
            result.push(node.val)
            Node(node.left)
            Node(node.right)
        }
    }
    Node(root)
    return result
};
console.log(preorderTraversal());

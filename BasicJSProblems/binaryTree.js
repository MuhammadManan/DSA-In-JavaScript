class BinaryTreeNode{
    constructor(data){
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

// function to traverse binary tree through PreOrder
function preOrder(node){
    if(!node) return ;

    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
}
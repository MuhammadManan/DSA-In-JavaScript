class BinaryTreeNode{
    constructor(data){
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

// helper function to count the height of left tree
function heightOfLeftTree(node){
    let leftHeight = 0; 
    while(node){
        leftHeight++;
        node = node.left;
    }

    return leftHeight;
}

// helper function to count the height of right tree
function heightOfRightTree(node){
    let rightHeight = 0;
    while(node){
        rightHeight++;
        node = node.right;
    }

    return rightHeight;
}

// function to count the node in the complete binary tree
function countNode(node){
    if(!node) return 0;

    let lH = heightOfLeftTree(node);
    let rH = heightOfRightTree(node);

    if(lH === rH) return ( 2**lH ) - 1;

    return 1 + countNode(node.left) + countNode(node.right);
}

// function to traverse binary tree through PreOrder
function preOrder(node){
    if(!node) return ;

    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
}

// function to traverse binary tree through In-Order
function inOrder(node){
    if(!node) return ;

    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
}

// function to traverse binary tree through PostOrder
function postOrder(node){
    if(!node) return ;

    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
}

//function to find the maxDepth of the tree
function maxDepth(root){
    if(!root) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return 1 + Math.max(left,right);
}
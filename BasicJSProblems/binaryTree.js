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

// function to invert the tree
function invertTree(root){
    if(!root) return null;

    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}

//function to find the is Both Trees are identical
function isSameTree(root1, root2){
    if(!root1 && !root2){
        return true;
    }

    if(!root1 || !root2){
        return false;
    }

    if(root1.value !== root2.value){
        return false;
    }

    let left = isSameTree(root1.left, root2.left);
    let right = isSameTree(root1.right, root2.right);

    return left && right;
}


// Tree1
let n1 = new BinaryTreeNode(1);
let n2 = new BinaryTreeNode(2);
let n3 = new BinaryTreeNode(3);

n1.left = n2;
n1.right = n3;
let root1 = n1;

// Tree2
let m1 = new BinaryTreeNode(1);
let m2 = new BinaryTreeNode(2);
let m3 = new BinaryTreeNode(3);

m1.left = m2;
m1.right = m3;
let root2 = m1;

console.log(isSameTree(root1, root2));


//function to traverse the tree in the level order
function levelOrder(root){
    let ans = [];
    if(!root) return ans;

    let q = [];
    q.push(root);

    while(q.length > 0){
        let size = q.length;
        let level = [];

        for(let i=0; i<size; i++){
            let node = q.shift();

            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);

            level.push(node.value);
        }
        ans.push(level);
    }

    return ans;
}

// function to traverse the tree Iteratively with PreOrder using stack
function preOrderIterative(root){
    let preOrder = [];
    if(!root) return preOrder;

    let stack = [];
    stack.push(root);

    while(stack.length){
        let node = stack.pop()
        preOrder.push(node.value);

        if(node.right){
            stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        }
    }

    return preOrder;
} 

// function to traverse the tree Iteratively for the Inorder using the stack 
function inOrderIterative(root){
    let inOrder = [];
    if(!root) return inOrder;
    let node = root;
    let stack = [];

    while(true){
        if(node){
            stack.push(node);
            node = node.left;
        }
        else{
            if(stack.length === 0 ) break;
            node = stack.pop();
            inOrder.push(node.value);
            node = node.right;
        }
    }
    
    return inOrder;
}

// function to traverse the tree Iteratively for the Post-order using the two stack 
function postOrderIteravtiveUsingTwoStack(root){
    // we can also do the post-order traversal using one stack but it is a bit tricky to implement
    let postOrder = [];
    if(!root) return postOrder;
    // we will use two stack to store the nodes of the tree and then we will pop the nodes from the second stack and push the values in the postOrder array
    let stack1 = [];
    let stack2 = [];

    // we will push the root node in the first stack and then we will pop the nodes from the first stack and push the left and right child of the popped node in the first stack and also push the popped node in the second stack and then we will pop the nodes from the second stack and push the values in the postOrder array
    stack1.push(root);
    
    // we will continue this process until the first stack is empty and then we will pop the nodes from the second stack and push the values in the postOrder array
    while(stack1.length > 0){
        // we will pop the node from the first stack and push the left and right child of the popped node in the first stack and also push the popped node in the second stack
        root = stack1.pop();
        // we will push the popped node in the second stack
        stack2.push(root);

        // we will push the left and right child of the popped node in the first stack
        if(root.left !== null) stack1.push(root.left);
        // we will push the right child of the popped node in the first stack
        if(root.right !== null) stack1.push(root.right);
    }

    // we will pop the nodes from the second stack and push the values in the postOrder array
    while(stack2.length > 0){
        // we will pop the node from the second stack and push the value in the postOrder array
        postOrder.push(stack2.pop().value);
    }

    // we will return the postOrder array
    return postOrder;
}


// function to extract the input digit 
function extractDigit(num){
    let N = num;
    let lastDigit;
    while(N > 0){
        lastDigit = N % 10;
        console.log(lastDigit);
        N = Math.floor(N / 10);
    }
}

extractDigit(1234);

// function to find the factorial of a number
function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

// function to find the power of a number
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));

// function to find the greatest common divisor (GCD) of two numbers

function gcd(a, b){
    if(b === 0) return a;
    return gcd(b, a % b);
}  

console.log(gcd(12, 15));

// function to find the least common multiple (LCM) of two numbers

function lcm(a, b){
    return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15));

// function to find the nth Fibonacci number

function fibonacci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}   

console.log(fibonacci(10));

// function to find the sum of digits of a number

function sumOfDigits(num){
    if(num === 0) return 0;
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(1234));

// function to find the number of digits in a number

function countDigits(num){
    if(num === 0) return 0;
    return 1 + countDigits(Math.floor(num / 10));
}

console.log(countDigits(1234));

// function to find the nth term of the Fibonacci sequence

function fibonacci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));


// function to find the sum of the digits of a number
function sumOfDigits(num){
    if(num === 0) return 0;
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(1234));

// function to find the number of digits in a number
function countDigits(num){
    if(num === 0) return 0;
    return 1 + countDigits(Math.floor(num / 10));
}

console.log(countDigits(1234));

// function to find the greatest common divisor (GCD) of two numbers
function gcd(a, b){
    if(b === 0) return a;
    return gcd(b, a % b);
}

console.log(gcd(12, 15));

// function to find the least common multiple (LCM) of two numbers
function lcm(a, b){
    return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15));

// function to find the power of a number
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));

// function to find the factorial of a number
function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

// function to extract the input digit
function extractDigit(num){
    let N = num;
    let lastDigit;
    while(N > 0){
        lastDigit = N % 10;
        console.log(lastDigit);
        N = Math.floor(N / 10);
    }
}

extractDigit(1234);

// function to find the starting point of the cycle in a linked list
function findCycleStart(head){
    let slow = head; 
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            slow = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }

    return null;
}

// function to find the length of the cycle in a linked list
function findCycleLength(head){
    let slow = head; 
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            slow = head;
            let count = 0;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
                count++;
            }
            return count;
        }
    }

    return null;    
}

findCycleLength(head);

// function to check if the linked list has a cycle
function hasCycle(head){
    let slow = head; 
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }

    return false;

}

hasCycle(head);

// function to check if the linked list has a cycle using hashmap
function detectLoop(head){
    let current = head;
    let map = new Map();

    while(current !== null && current.next !== null){
        if(map.has(current)) return true;
        map.set(current, 1);
        current = current.next;
    }
    
    return false;
}

detectLoop(head);

// function to traverse binary tree through InOrder
function inOrder(node){
    if(!node) return ;
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
}

inOrder(root);

// function to traverse binary tree through PreOrder
function preOrder(node){
    if(!node) return ;
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
}

preOrder(root);

// function to traverse binary tree through PostOrder
function postOrder(node){
    if(!node) return ;
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
}

postOrder(root);

// function to find the height of a binary tree
function maxDepth(root){
    if(!root) return 0;

    let l = maxDepth(root.left);
    let r = maxDepth(root.right);

    return 1 + Math.max(l,r);
}   

console.log(maxDepth(root));


// function to invert a binary tree
function invertTree(root){
    if(!root) return null;

    let left = invertTree(root.left);
    let right = invertTree(root.right);    

    root.left = right;
    root.right = left;

    return root;
}   

invertTree(root);

// function to find the diameter of a binary tree
function diameterOfBinaryTree(root){
    let diameter = 0;
    height(root, diameter);
    return diameter;
}

function height(node, diameter){
    if(!node) return 0; 

    let l = height(node.left, diameter);
    let r = height(node.right, diameter);
    diameter = Math.max(diameter, l + r);

    return 1 + Math.max(l,r);
}


// find the island perimeter
function islandPerimeter(grid){
    let perimeter = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === 1) perimeter += 4 - countNeighbors(grid, i, j);
        }
    }
    return perimeter;
}

function countNeighbors(grid, i, j){
    let count = 0;
    if(i > 0 && grid[i-1][j] === 1) count++;
    if(i < grid.length - 1 && grid[i+1][j] === 1) count++;
    if(j > 0 && grid[i][j-1] === 1) count++;
    if(j < grid[0].length - 1 && grid[i][j+1] === 1) count++;
    return count;
}


console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));

// some new problems

// function to find the longest common prefix among an array of strings
function longestCommonPrefix(strs){
    if(strs.length === 0) return "";
    let prefix = strs[0];
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
} 

console.log(longestCommonPrefix(["flower","flow","flight"]));

// function to find the longest common suffix among an array of strings
function longestCommonSuffix(strs){
    if(strs.length === 0) return "";
    let suffix = strs[0];
    for(let i=1; i<strs.length; i++){
        while(strs[i].lastIndexOf(suffix) !== strs[i].length - suffix.length){
            suffix = suffix.substring(1);
        }
    }
    return suffix;
} 

console.log(longestCommonSuffix(["flower","flow","flight"]));

// function to find the longest common substring among an array of strings
function longestCommonSubstring(strs){
    if(strs.length === 0) return "";
    let substring = strs[0];
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(substring) !== 0){
            substring = substring.substring(0, substring.length - 1);
        }
    }
    return substring;
} 

console.log(longestCommonSubstring(["flower","flow","flight"]));

// function to find the longest common subsequence among an array of strings
function longestCommonSubsequence(strs){
    if(strs.length === 0) return "";
    let subsequence = strs[0];
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(subsequence) !== 0){
            subsequence = subsequence.substring(0, subsequence.length - 1);
        }
    }
    return subsequence;
} 

console.log(longestCommonSubsequence(["flower","flow","flight"]));

// function to find the longest common prefix among an array of strings using divide and conquer
function longestCommonPrefixDivideAndConquer(strs){
    if(strs.length === 0) return "";
    return longestCommonPrefixHelper(strs, 0, strs.length - 1);
}

function longestCommonPrefixHelper(strs, left, right){
    if(left === right) return strs[left];
    let mid = Math.floor((left + right) / 2);
    let lcpLeft = longestCommonPrefixHelper(strs, left, mid);
    let lcpRight = longestCommonPrefixHelper(strs, mid + 1, right);
    return commonPrefix(lcpLeft, lcpRight);
}

function commonPrefix(str1, str2){
    let minLength = Math.min(str1.length, str2.length);
    for(let i=0; i<minLength; i++){
        if(str1[i] !== str2[i]) return str1.substring(0, i);
    }
    return str1.substring(0, minLength);
}

console.log(longestCommonPrefixDivideAndConquer(["flower","flow","flight"]));
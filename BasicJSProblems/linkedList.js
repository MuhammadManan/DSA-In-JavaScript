// class node{
//     constructor(data){
//         this.value = data;
//         this.next = null;
//     }
// }

// let n1 = new node(10);
// let n2 = new node(20);
// let n3 = new node(30);
// let n4 = new node(40);

// n1.next = n2;
// n2.next = n3;
// n3.next = n4;

// //console.log(n1);

// // traverse the LinkedList
// function traverseLinkedList(head){
//     let current = head;

//     while(current !== null){
//         console.log(`${current.value}`);
//         current = current.next;
//     }
// }

// let head = n1;
// // traverseLinkedList(head);


// // Let's Create the LinkedList
// function createLinkedList(arr) {
//     let head = new node(arr[0]);
//     let current = head;

//     for(let i=1; i<arr.length; i++){
//         current.next = new node(arr[i]);
//         current = current.next;
//     }

//     return head;
// }

// let head1 = createLinkedList([1,2,3,4]);
// traverseLinkedList(head1);



//*********************************** */

// Reverse the linkedlist

// class Node{
//     constructor(data){
//         this.prev = null;
//         this.value = data;
//         this.next = null;
//     }
// }

// let n1 = new Node(1);
// let n2 = new Node(2);
// let n3 = new Node(3);
// let n4 = new Node(4);
// // console.log(n1);

// // let head = n1;
// // n1.next = n2;
// // n2.prev = n1;
// // n2.next = n3;
// // n3.prev = n2;
// // n3.next = n4;
// // n4.prev = n3;

// // console.log(head);

// // create a dynamic linkedList by passing array

// function createLinkedList(arr){
//     if(arr.length === 0 ) return "Array is Empty";

//     let head = new Node(arr[0]);
//     let current = head;

//     for(let i=1; i<arr.length; i++){
//         let node = new Node(arr[i]);
//         current.next = node;
//         node.prev = current;
//         current = current.next;
//     }

//     return head;
// }

// // write a function to Reverse the linkedList
// function reverseLinkedList(head){
//     // console.log("head: ", head);
//     let current = head;
//     // console.log("current", current);

//     while(true){
//         if(current.next === null){
//             head = current;
//             break;
//         }
//         current = current.next;
//     }
//     // console.log("current", current);
//     return head;
// }

// // write a function to traverse the LinkedList
// function traverseLinkedList(head){
//     let current = head;

//     while(current !== null){
//         console.log(current.value);
//         current = current.prev;
//     }

// }


// let head = createLinkedList([1,2,3,4]);
// let revHead = reverseLinkedList(head);
// // console.log("revHead: ", revHead);
// traverseLinkedList(revHead);

//************************************ */


// Reverse LinkedList 
class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

// Create LinkedList from array
function arrayToLinkedList(arr){
    if(arr.length === 0) return null;

    let head = new Node(arr[0]);
    let current = head;

    for(let i=1; i<arr.length; i++){
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

// // Reverse LinkedList using iteration
// function reverseLinkedList(head){
//     let temp = head;
//     let prev = null;
//     let front;

//     while(temp !== null){
//         front = temp.next;
//         temp.next = prev;
//         prev = temp;
//         temp = front;
//     }

//     head = prev;
//     return head;
// }

// // function of Reverse LinkedList using recursion
// function reverseLinkedListUsingRecursion(current, front = null, prev = null){

//     if(current === null) {
//         return prev;
//     }

//     front = current.next;
//     current.next = prev;
//     prev = current;
//     current = front;

//     return reverseLinkedListUsingRecursion(current, front, prev);
// }



// traverse the LinkedList
function traverseLinkedList(head){
    let current = head;

    while(current !== null){
        console.log(current.value);
        current = current.next;
    }
}

// let array = [1,2,3,4,5];
// // let array = [];
// let headIteration = arrayToLinkedList(array);
// let headRecursion = arrayToLinkedList(array);
// let revHead = headIteration !== null ? reverseLinkedList(headIteration):null; 
// // console.log("Iteration revHead: ", revHead);
// console.log("Reverse LinkedList Using Iteration");
// revHead !== null ? traverseLinkedList(revHead): console.log("revHed is Null");
// let revHeadRec = headRecursion !== null ? reverseLinkedListUsingRecursion(headRecursion):null; 
// // console.log("Recursion revHead: ", revHeadRec);
// console.log("Reverse LinkedList Using Recursion");
// revHeadRec !== null ? traverseLinkedList(revHeadRec): console.log("revHedRec is Null");



//**************************************** */

// function about to find the Middle
// function findMiddle(head){
//     let slow = head;
//     let fast = head;

//     while(fast !== null && fast.next !== null){ 
//         slow = slow.next;
//         // console.log("slow: ", slow);
//         fast = fast.next.next;
//         // console.log("fast: ", fast);
//     }

//     return slow;
// }

// let oddArr = [1,2,3,4,5];
// let oddHead = arrayToLinkedList(oddArr);
// let oddResult = findMiddle(oddHead);
// console.log("Odd Array Result: ", oddResult.value);
// let evenArr = [1,2,3,4,5,6];
// let evenHead = arrayToLinkedList(evenArr);
// let evenResult = findMiddle(evenHead);
// console.log("Even Array Result: ", evenResult.value);


/*********************************** */

class CycleNode{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

let n1 = new CycleNode(10);
let n2 = new CycleNode(20);
let n3 = new CycleNode(30);
let n4 = new CycleNode(40);
let n5 = new CycleNode(50);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n3;

// function to the detect the cycle in the linkedlist
function hasCycle(head) {
    let slow = head; 
    let fast = head;

    while(fast !== null && fast.next !== null ){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }

    return false;
}

let head = n1;
console.log(hasCycle(head));
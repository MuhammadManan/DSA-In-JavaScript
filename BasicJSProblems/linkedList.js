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
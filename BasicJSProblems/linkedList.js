class node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

let n1 = new node(10);
let n2 = new node(20);
let n3 = new node(30);
let n4 = new node(40);

n1.next = n2;
n2.next = n3;
n3.next = n4;

//console.log(n1);

// traverse the LinkedList
function traverseLinkedList(head){
    let current = head;

    while(current !== null){
        console.log(`${current.value}`);
        current = current.next;
    }
}

let head = n1;
// traverseLinkedList(head);


// Let's Create the LinkedList
function createLinkedList(arr) {
    let head = new node(arr[0]);
    let current = head;

    for(let i=1; i<arr.length; i++){
        current.next = new node(arr[i]);
        current = current.next;
    }

    return head;
}

let head1 = createLinkedList([1,2,3,4]);
traverseLinkedList(head1);
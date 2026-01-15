// What Is a Stack? (No CS Words First)

// Forget data structures.

// Stack = a pile of plates

// You put plates on top

// You remove plates from the top

// You cannot remove from the middle

// That’s it.

// The Only Rule of Stack

// LIFO — Last In, First Out

// Whatever comes in last, goes out first.

// function isValidParentheses(s){
//     let stack = [];

//   const map = {
//     ')': '(',
//     '}': '{',
//     ']': '['
//   };

//   for(let ch of s){
//     if(ch === "(" || ch === "{" || ch === "["){
//         stack.push(ch);
//     }
//     else{
//         if(stack.length === 0) return false;
//         let top = stack.pop();
//         if(top !== map[ch]) return false; 
//     }
//   }

//   return stack.length === 0; 
// }

// console.log(isValidParentheses("([{}])"));
// // console.log(isValidParentheses("([)]"));

/********************************************************* */

function nextGreaterElement(arr) {
  // your code here 
  function nextGreaterElement(arr) {
  let outputArray = new Array(arr.length).fill(-1);
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      let index = stack.pop();
      outputArray[index] = arr[i];
    }
    stack.push(i);
  }

  return outputArray;
}

}

console.log(nextGreaterElement([2, 1, 2, 4, 3])); // Output: [4,2,4,-1,-1]
let inputArray =  [1, 3, 2, 4];
// console.log(nextGreaterElement(inputArray)); // Output: [3, 4, 4, -1]
// console.log(nextGreaterElement([3,2,1])); // Output: [-1,-1,-1];
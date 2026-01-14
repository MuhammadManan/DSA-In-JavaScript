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
  // create an output array
  let outputArray = [];
  // create a stack
  let stack = [];
  // iterate through the input array
  for(let i=0; i<arr.length; i++){
    // check if the stack is empty
    if(stack.length === 0){
      // push the current element to the stack
        stack.push(arr[i]);
    }
    // if the stack is not empty
    else{
      // check the top element of the stack
        while(stack.length){
          // compare the top element with the current element
            let peakEle = stack[stack.length - 1];
            // if the current element is greater than the top element
            if(peakEle < arr[i]){
              // pop the top element and add the current element to the output array
                stack.pop(); 
                // push the current element to the stack
                outputArray.push(arr[i]);
                // continue the loop
                continue;
            } 
            // if the current element is not greater than the top element
            break;
        }
        // push the current element to the stack
        stack.push(arr[i]);
    }
  }
  // for the remaining elements in the stack, add -1 to the output array
  while(arr.length !== outputArray.length){
    outputArray.push(-1);
  }
  // return the output array 
  return outputArray;
}

let inputArray =  [1, 3, 2, 4];
// console.log(nextGreaterElement(inputArray)); // Output: [3, 4, 4, -1]
console.log(nextGreaterElement([3,2,1])); // Output: [-1,-1,-1];

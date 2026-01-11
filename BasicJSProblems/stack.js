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
  let outputArray = [];
  let stack = [];
  for(let i=0; i<arr.length; i++){
    if(stack.length === 0){
        stack.push(arr[i]);
    }
    else{
        while(stack.length){
            let peakEle = stack[stack.length - 1];
            if(peakEle < arr[i]){
                stack.pop(); 
                outputArray.push(arr[i]);
                continue;
            } 
            break;
        }
        stack.push(arr[i]);
    }
  }
  while(arr.length !== outputArray.length){
    outputArray.push(-1);
  }

  return outputArray;
}

let inputArray =  [1, 3, 2, 4];
// console.log(nextGreaterElement(inputArray)); // Output: [3, 4, 4, -1]
console.log(nextGreaterElement([3,2,1])); // Output: [-1,-1,-1];

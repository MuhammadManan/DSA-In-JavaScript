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

// function nextGreaterElement(arr) {
//   // your code here 
//   function nextGreaterElement(arr) {
//   let outputArray = new Array(arr.length).fill(-1);
//   let stack = [];

//   for (let i = 0; i < arr.length; i++) {
//     while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
//       let index = stack.pop();
//       outputArray[index] = arr[i];
//     }
//     stack.push(i);
//   }

//   return outputArray;
// }

// }

// console.log(nextGreaterElement([2, 1, 2, 4, 3])); // Output: [4,2,4,-1,-1]
// let inputArray =  [1, 3, 2, 4];
// // console.log(nextGreaterElement(inputArray)); // Output: [3, 4, 4, -1]
// // console.log(nextGreaterElement([3,2,1])); // Output: [-1,-1,-1];

/********************************************************* */

// function prevSmaller(arr) {
//     let n = arr.length;
//     let result = new Array(n).fill(-1);

//     // stack to keep track of elements
//     let st = [];

//     for (let i = 0; i < n; i++) {
        
//         // pop elements from stack until a smaller 
//         // element is found or stack becomes empty
//         while (st.length > 0 && st[st.length - 1] >= arr[i]) {
//             st.pop();
//         }

//         // if stack is not empty, top is nearest smaller
//         if (st.length > 0) {
//             result[i] = st[st.length - 1];
//         }

//         // push current element to stack
//         st.push(arr[i]);
//     }
//     return result;
// }

// // Driver Code
// let arr = [1, 5, 0, 3, 4, 5];
// let ans = prevSmaller(arr);
// console.log(ans.join(" "));

/******************************************* */

// function dailyTemperatures(temps) {
//   // your code here
//   let outputArray = new Array(temps.length).fill(0);
//   let stack = [];

//   for(let i=0; i<temps.length; i++){
//     while(stack.length && temps[stack[stack.length - 1]] < temps[i]){
//        let peakIndex = stack.pop();
//        let distanceOfDailyTemperature = i - peakIndex;
//        outputArray[peakIndex] = distanceOfDailyTemperature;
//     }
//     stack.push(i);
//   }

//   return outputArray;

// }

// let Input =  [73, 74, 75, 71, 69, 72, 76, 73] // Output: [1, 1, 4, 2, 1, 1, 0, 0]
// console.log(dailyTemperatures(Input));


/*************************************************** */

function stockSpan(prices) {
  // your code here

}


let Input =  [100, 80, 60, 70, 60, 75, 85] //Output: [1,   1,  1,  2,  1,  4,  6]

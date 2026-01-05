// function print1ToN(n) {
//   // use recursion
//   // base case
//   if(n===1){
//     console.log(1);
//     return;
//   }

//   // recursive case
//   print1ToN(n-1);
//   console.log(n);
// }

// print1ToN(5);

//**************************** */

// function factorial(n) {
//   // return factorial of n
//   if(n<0) return null;
//   // Base case
//   if(n=== 0 || n===1) return 1;

//   // Recursive case
//   return n * factorial(n-1);
// }

// console.log(factorial(5));


// **************************************

// function power(x, n) { 
//   // Base case
//   if(n===0){
//     return 1;
//   }

//   // Recursive case
//   return x * power(x, n-1);
// }

// console.log(power(2, 3));

/*********************************** */

function findMax(arr, i = 0,) {
  // return max value
  if(!arr || arr.length === 0 ) return null;
  // Base Case
  if(i === arr.length-1) return arr[i];

  // Recursive Call
//   let max = findMax(arr, i+1);
//   if(arr[i] > max){
//     max = arr[i];
//     return max;
//   }
//   return max;
  return Math.max(arr[i], findMax(arr, i + 1));
}

// console.log(findMax([]));
console.log(findMax([3, 7, 10, 2, 9]));
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

function factorial(n) {
  // return factorial of n
  if(n<0) return null;
  // Base case
  if(n=== 0 || n===1) return 1;

  // Recursive case
  return n * factorial(n-1);
}

console.log(factorial(5));
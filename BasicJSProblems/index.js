// Even and Odd
// function isEven(n) {
//   // your code
//   return n%2===0;
// }
// console.log(isEven(10));

// **************************

// function findMax(arr) {
//   // return largest number
//     let max= arr[0];

//     for(let i=1; i<arr.length; i++){
//         if(max<arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax([3, 7, 2, 9]));

//************************************/

// function countEven(arr) {
//   // return count of even numbers
// //   console.log(arr.length);
//   if(arr === undefined) return "Array is Empty";
//   let count=0;

//   for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 === 0){
//         count++;
//     }
//   }
//   return count;
// }
// console.log(countEven([1, 2, 3, 4, 6]));
// console.log(countEven());

// ***************************************/

function reverseArray(arr) {
  // return reversed array
  if(!arr || arr.length === 0 ){
    return "An Empty Array.";
  }
  let newArr=[];

  for(let i=arr.length-1;i>=0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3]));


//**************************** */

// function firstUniqueChar(str) {
//   // your code
//   if (!str || str.length === 0) {
//     return "An Empty String...";
//   }

//   let freq = {};

//   for(let i=0; i<str.length; i++){
//     let char = str[i];

//     if(freq[char] !== undefined){ 
//         freq[char]++;
//         // console.log( freq[char]++);
//         // console.log(freq);
//     }else{
//         freq[char]=1;
//         // console.log(freq);
//     }
//   }
  
//   for(let i=0; i<str.length; i++){
//     if(freq[str[i]] === 1){
//         return str[i];
//     }
//   }


// }

// console.log(firstUniqueChar("leetcode"));

//********************************************** */


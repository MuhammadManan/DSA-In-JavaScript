// function binarySearch(arr, target) {
//   // your code here

//   if(!arr || arr.length === 0 ) return -1;

//   let low = 0; 
//   let high = arr.length-1;

//   // console.log(mid);
  
//   while(low<=high){
//     let mid = Math.floor((low+high)/2);
//     if(arr[mid] === target){
//       return mid;
//     }else if(arr[mid] < target){
//       low = mid + 1;
//     }else{
//       high = mid - 1;
//     }
//   }

//   return -1; 

// }

// **************************************************

function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
  // return index or -1

  if(!arr || arr.length === 0 ) return -1;
  // Base case
  if(low > high) return -1;

  let mid = Math.floor((low+high)/2);

  if(arr[mid] === target) return mid;

  // Recursive case
  if(arr[mid] < target){
    return binarySearchRecursive(arr, target, mid + 1, high);
  }else{
    return binarySearchRecursive(arr, target, low, mid - 1);
  }

}


let arr = [1, 3, 5, 7, 9, 11];
let target = 7;

console.log(binarySearchRecursive(arr, target));

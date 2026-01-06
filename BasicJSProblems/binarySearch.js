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

// function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
//   // return index or -1

//   if(!arr || arr.length === 0 ) return -1;
//   // Base case
//   if(low > high) return -1;

//   let mid = Math.floor((low+high)/2);

//   if(arr[mid] === target) return mid;

//   // Recursive case
//   if(arr[mid] < target){
//     return binarySearchRecursive(arr, target, mid + 1, high);
//   }else{
//     return binarySearchRecursive(arr, target, low, mid - 1);
//   }

// }


// let arr = [1, 3, 5, 7, 9, 11];
// let target = 7;

// console.log(binarySearchRecursive(arr, target));


/************************************** */

// first Occurence through binary search using iterative approach

// function firstOccurence(arr, target){

//   if(!arr || arr.length === 0 ) return -1;

//   let low = 0; 
//   let high = arr.length - 1; 
//   let result = -1; 

//   while(low<=high){
//     let mid = Math.floor((low+high)/2);
//     if(arr[mid]===target){
//       result = mid;
//       high = mid - 1; 
//     }else if(arr[mid]< target){
//       low = mid + 1; 
//     }else{
//       high = mid - 1; 
//     }
//   }

//   return result;
// }

// let arr = [1, 2, 2, 2, 2, 3, 4];
// let target = 2;

// console.log(firstOccurence(arr,target));

/****************************************** */

// function firstOccurenceRec(arr, target, low = 0, high = arr.length - 1){
  
//   if(!arr) return -1;

//   if(low > high) return -1;

//   let mid = Math.floor((low+high)/2);
//   console.log("mid :", mid);

//   if(arr[mid] === target){
//      let result = firstOccurenceRec(arr, target, low, mid -1);
//     //  if(result === -1){
//     //     return mid;
//     //  }else if( result < mid){
//     //     return result;
//     //  }
//       return result !== -1 ? result : mid ; 
//   }

//   if(arr[mid] < target){
//     return firstOccurenceRec(arr, target, mid + 1, high);
//   }else{
//     return firstOccurenceRec(arr, target, low, mid - 1);
//   }

// }


// let arr = [1, 2, 2, 2, 2, 3, 4];
// let target = 2;

// console.log(firstOccurenceRec(arr,target));

// *****************************************


// last Occurence through binary search using iterative approach

// function lastOccurence(arr, target){

//   if(!arr || arr.length === 0 ) return -1;

//   let low = 0; 
//   let high = arr.length - 1; 
//   let result = -1; 

//   while(low<=high){
//     let mid = Math.floor((low+high)/2);
//     if(arr[mid]===target){
//       result = mid;
//       low = mid + 1; 
//     }else if(arr[mid]< target){
//       low = mid + 1; 
//     }else{
//       high = mid - 1; 
//     }
//   }

//   return result;
// }

// let arr = [1, 2, 2, 2, 2, 3, 4];
// let target = 2;

// console.log(lastOccurence(arr,target));

/****************************************** */

function lastOccurenceRec(arr, target, low = 0, high = arr.length - 1){
  
  if(!arr) return -1;

  if(low > high) return -1;

  let mid = Math.floor((low+high)/2);
  console.log("mid :", mid);

  if(arr[mid] === target){
     let result = lastOccurenceRec(arr, target, mid+1, high);
    //  if(result === -1){
    //     return mid;
    //  }else if( result < mid){
    //     return result;
    //  }
      return result !== -1 ? result : mid ; 
  }

  if(arr[mid] < target){
    return lastOccurenceRec(arr, target, mid + 1, high);
  }else{
    return lastOccurenceRec(arr, target, low, mid - 1);
  }

}


let arr = [1, 2, 2, 2, 2, 3, 4];
let target = 2;

console.log(lastOccurenceRec(arr,target));

function binarySearch(arr, target) {
  // your code here

  if(!arr || arr.length === 0 ) return -1;

  let low = 0; 
  let high = arr.length-1;

  // console.log(mid);
  
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(arr[mid] === target){
      return mid;
    }else if(arr[mid] < target){
      low = mid + 1;
    }else{
      high = mid - 1;
    }
  }

  return -1; 

}

let arr = [1, 3, 5, 7, 9, 11];
let target = 7;

console.log(binarySearch(arr, target));

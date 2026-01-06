function removeDuplicates(arr) {
  // return array length after removing duplicates
  if(!arr || arr.length === 0) return "0"

  let left = 0, right = 1, length = 1;
  while(right < arr.length){
    if(arr[left] === arr[right]){
        right++;
    }
    else if(arr[left] !== arr[right] && arr[left] < arr[right]){
        arr[left+1] = arr[right];
        left++, right++, length++;
    }
  }

  return length;
}

console.log(removeDuplicates([1,1,2,2,2,3,3,4]));
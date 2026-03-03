function slidingWindowMax(nums, k) {
  // result array
  let result = [];

  // deque to store indices
  let deque = [];

  for (let i = 0; i < nums.length; i++) {
    
    // we will pop ele from the front if it is out of the window
    if( deque.length !== 0 && deque[0] <= i-k ){
        deque.shift();
    }

    // we will pop ele from the back when the new ele come and bigger than them
    while(deque.length !== 0 && nums[deque[deque.length-1]] <= nums[i]){
        deque.pop();
    }

    // otherwise simply add the ele in the deque
    deque.push(i);

    //here we get the max ele 
    if(i >= k-1){
        result.push(nums[deque[0]]);
    }

  }

  return result;
}

let nums = [1,3,-1,-3,5,3,6,7];
let k = 3;

console.log(slidingWindowMax(nums, k));

// Expected Output:
// [3,3,5,5,6,7]



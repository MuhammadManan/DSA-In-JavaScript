// function maxSubarraySum(arr, k) {
//   let windowSum = 0;
//   let maxSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     windowSum += arr[i];

//     if (i >= k - 1) {
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[i - (k - 1)];
//     }
//   }

//   return maxSum;
// }


// let arr = [2, 1, 5, 1, 3, 2], k = 3;

// console.log(maxSubarraySum(arr, k));


/************************************** */


function minSubArrayLen(target, arr) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}


let arr = [2,3,1,2,4,3], target = 7;

console.log(minSubArrayLen(target, arr));


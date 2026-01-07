function maxSubarraySum(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - (k - 1)];
    }
  }

  return maxSum;
}


let arr = [2, 1, 5, 1, 3, 2], k = 3;

console.log(maxSubarraySum(arr, k));
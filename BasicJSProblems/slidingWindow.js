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


// function minSubArrayLen(target, arr) {
//   let left = 0;
//   let sum = 0;
//   let minLen = Infinity;

//   for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];

//     while (sum >= target) {
//       minLen = Math.min(minLen, right - left + 1);
//       sum -= arr[left];
//       left++;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }


// let arr = [2,3,1,2,4,3], target = 7;

// console.log(minSubArrayLen(target, arr));

/************************** **************/

// function longestUniqueSubstring(str) {
//   // your code here
  
//   let left = 0;
//   let maxLength = 0;
//   let hashmap ={};

//   for(let right = 0; right < str.length; right++){
//     if(hashmap[str[right]] !== undefined){
//         left = Math.max(left, lastSeen[str[right]] + 1);
//     }
//     hashmap[str[right]] = right;
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;

// }

// // console.log(longestUniqueSubstring("abcabcbb")); // 3
// // console.log(longestUniqueSubstring("bbbbb"));    // 1
// // console.log(longestUniqueSubstring("pwwkew"));   // 3
// console.log(longestUniqueSubstring("abcdef")); // 6


/**************************************************/

 function longestSubstringKDistinct(str, k) {
  if (k === 0 || str.length === 0) return 0;

  let left = 0;
  let maxLength = 0;
  let freq = {};
  let distinctCount = 0;

  for (let right = 0; right < str.length; right++) {
    // add right character
    if (freq[str[right]] === undefined) {
      freq[str[right]] = 1;
      distinctCount++;
    } else {
      freq[str[right]]++;
    }

    // shrink window if invalid
    while (distinctCount > k) {
      freq[str[left]]--;
      if (freq[str[left]] === 0) {
        delete freq[str[left]];
        distinctCount--;
      }
      left++;
    }

    // update answer when valid
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}


let str = "eceba", k = 2;
console.log(longestSubstringKDistinct(str,k));
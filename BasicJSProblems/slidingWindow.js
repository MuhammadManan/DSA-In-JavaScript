// // Sliding Window Pattern - Maximum Subarray Sum of Size K
// function maxSubarraySum(arr, k) {
//   let windowSum = 0;
//   let maxSum = 0;

//   // loop goes through from zero index to the length of the array - 1
//   for (let i = 0; i < arr.length; i++) {
//     // here we are summed up the value in the windowSum variable
//     windowSum += arr[i];

//     // As we know, we have to check the subArraySum of 3, so whenever
//     // we got the winowSum is summed up by three Elements, 
//     // then the "if" condition is true
//     if (i >= k - 1) {
//       // find the max by apply built-in Math function...
//       maxSum = Math.max(maxSum, windowSum);
//       // remove the value of first element in the windowSum 
//       windowSum -= arr[i - (k - 1)];
//     }
//   }

//   return maxSum;
// }


// let arr = [2, 1, 5, 1, 3, 2], k = 3;

// console.log(maxSubarraySum(arr, k));


/************************************** */

// find the minimum length of the subArray which is equal to target
// function minSubArrayLen(target, arr) {
//   let left = 0;
//   let sum = 0;
//   let minLen = Infinity;

//   // loop goes from the zero Index to the  target length - 1 
//   for (let right = 0; right < arr.length; right++) {
//     // add the values in the sum variable
//     sum += arr[right];

//     // and when the sum is greater than or equal to the target 
//     // then the while loop condition get true
//     while (sum >= target) {
//       // as we are finding the length, so 
//       // use the math min built-in function 
//       // right - left + 1 gives the exact length of the sub array
//       minLen = Math.min(minLen, right - left + 1);
//       // Then, remove the first value of element in the window who has sum total or greater than the target
//       sum -= arr[left];
//       // Obviously, when the value is removed, we have to increment the left by 1 
//       // and then again check the while loop wheather it is true or not.
//       left++;
//     }
//   }
  
//   // Here, we return the length
//   return minLen === Infinity ? 0 : minLen;
// }


// let arr = [2,3,1,2,4,3], target = 7;

// console.log(minSubArrayLen(target, arr));

/************************** **************/

function longestUniqueSubstring(str) {
  // your code here
  
  let left = 0;
  let maxLength = 0;
  let hashmap ={};

  for(let right = 0; right < str.length; right++){
    if(hashmap[str[right]] !== undefined){
        left = Math.max(left, lastSeen[str[right]] + 1);
    }
    hashmap[str[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;

}

// console.log(longestUniqueSubstring("abcabcbb")); // 3
// console.log(longestUniqueSubstring("bbbbb"));    // 1
// console.log(longestUniqueSubstring("pwwkew"));   // 3
console.log(longestUniqueSubstring("abcdef")); // 6


/**************************************************/

//  function longestSubstringKDistinct(str, k) {
//   if (k === 0 || str.length === 0) return 0;

//   let left = 0;
//   let maxLength = 0;
//   let freq = {};
//   let distinctCount = 0;

//   for (let right = 0; right < str.length; right++) {
//     // add right character
//     if (freq[str[right]] === undefined) {
//       freq[str[right]] = 1;
//       distinctCount++;
//     } else {
//       freq[str[right]]++;
//     }

//     // shrink window if invalid
//     while (distinctCount > k) {
//       freq[str[left]]--;
//       if (freq[str[left]] === 0) {
//         delete freq[str[left]];
//         distinctCount--;
//       }
//       left++;
//     }

//     // update answer when valid
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }


// let str = "eceba", k = 2;
// console.log(longestSubstringKDistinct(str,k));
// console.log(longestSubstringKDistinct("eceba", 2)); // 3
// console.log(longestSubstringKDistinct("aa", 1));    // 2
// console.log(longestSubstringKDistinct("abc", 1));   // 1
// console.log(longestSubstringKDistinct("aaaa", 2));  // 4

// function removeDuplicates(arr) {
//   // return array length after removing duplicates
//   if(!arr || arr.length === 0) return "0"

//   let left = 0, right = 1, length = 1;
//   while(right < arr.length){
//     if(arr[left] === arr[right]){
//         right++;
//     }
//     else if(arr[left] !== arr[right] && arr[left] < arr[right]){
//         arr[left+1] = arr[right];
//         left++, right++, length++;
//     }
//   }

//   return length;
// }

// console.log(removeDuplicates([1,1,2,2,2,3,3,4]));

/******************************************** */

// function isAlphaNumeric(ch) {
//   let code = ch.charCodeAt(0);

//   // 0-9
//   if (code >= 48 && code <= 57) return true;

//   // A-Z
//   if (code >= 65 && code <= 90) return true;

//   // a-z
//   if (code >= 97 && code <= 122) return true;

//   return false;
// }


// function isValidPalindrome(str){
  
//   if(!str) return true;
//   if(str.length === 0) return true;

//   let left= 0, right = str.length-1;
//   while(left<right){
//     if(isAlphaNumeric(str[left])){
//       console.log(isAlphaNumeric(str[left]));
//       if(isAlphaNumeric(str[right])){
//         console.log(isAlphaNumeric(str[right]));
//         if(str[left].toLowerCase() === str[right].toLowerCase()){
//           console.log(`${str[left]} === ${str[right]}`)
//           left++, right--;
//         }
//         else{
//           console.log("inside else block");
//           return false;
//         }
//       }
//       else{
//         right--;
//       }
//     }
//     else{
//       left++;
//     }
//     console.log(`left : ${left}, right : ${right}`);
//   }

//   return true;
  
// }

// // console.log(isValidPalindrome("racecar"));
// console.log(isValidPalindrome("A man, a plan, a canal: Panama"));

/*********************************************** */

function hasPairWithDiff(arr, diff) {
  // your code here
  if(!arr || arr.length < 2 ) return false;
  
  let left = 0, right = 1; 
  
  while(right < arr.length ){
    console.log(`${right} < ${arr.length}`);
    let currentDiff = arr[right] - arr[left];
    console.log(`${currentDiff} = ${arr[right]} - ${arr[left]}`);
    if(currentDiff === diff){
        return true;
    }
    else{
        currentDiff < diff ? right++ : left++;
        if(left === right ){
            right++;
        }
    }
  }

  return false;
}


// console.log(hasPairWithDiff([1, 3, 5, 8, 10], 2)); // true
console.log(hasPairWithDiff([1, 2, 4, 8], 5));    // false


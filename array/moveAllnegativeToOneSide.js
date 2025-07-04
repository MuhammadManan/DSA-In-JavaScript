// function moveAllnegToOneSide(arr){
//     let left = 0, temp = 1;
//     while(temp < arr.length){
        
//         if(arr[left] < 0){
//             left++;
//         }
//         if(arr[temp] < 0 && arr[left] >=0 ){
//             [arr[left], arr[temp]] = [arr[temp], arr[left]];
//             left++;
//             temp++;
//         }
//         else {
//             temp++;
//         }
//     }
//     console.log(arr);
// }

let myArray = [-10, -3, 0, 5,-2,-99,2,-65, 12, -1, 8,-1];
// moveAllnegToOneSide(myArray);



// Another functional approach using filter method

let negativeVal = myArray.filter(ele => ele < 0);
let nonNegVal = myArray.filter(ele => ele >= 0 );
const sortedArray = [negativeVal, nonNegVal];
let shallowCopySorted = [...negativeVal, ...nonNegVal];
console.log(negativeVal);
console.log(nonNegVal);
console.log(sortedArray.flat());
console.log("shallow copy sorted array :" , shallowCopySorted);
nonNegVal.push(99);
nonNegVal.push(199);
nonNegVal.push(299);
console.log(nonNegVal);
console.log(sortedArray.flat());
console.log("shallow copy sorted array :" , shallowCopySorted);





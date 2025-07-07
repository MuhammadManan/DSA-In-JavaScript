// using the brute force with the tracking index

// function intersectionOfTwoSortedArray(arr1, arr2){
//     const intersectArray = new Array();
//     let tempIndex = 0; 
//     for(let i=0; i< arr1.length; i++){
//         for(let j=tempIndex; j < arr2.length; j++){
//             if(arr1[i]==arr2[j]){
//                 intersectArray.push(arr1[i]); 
//                 tempIndex = j+1;
//                 break;
//             }else if(arr2[j]>arr1[i]){
//                 break;
//             }
//         }
//     }
//     return intersectArray;
// }


// using the brute force with the visited tracking array...

function intersectionOfTwoSortedArray(arr1, arr2){
    const intersectArray = new Array();
    const visitedArray = new Array(arr2.length).fill(0);
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]==arr2[j] && visitedArray[j] == 0 ){
                intersectArray.push(arr1[i]);
                visitedArray[j] = 1;
                break;
            }
            if(arr2[j]>arr1[i]){
                break;
            }
        }
    }
    return intersectArray;
}

const array1 = [1,2,2,3,3,4,5,6];
const array2 = [2,2,3,3,5,6,6,7];
console.log(intersectionOfTwoSortedArray(array1,array2));
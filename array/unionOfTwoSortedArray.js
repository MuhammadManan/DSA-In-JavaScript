
// using the Brute force approach .... 

// function unionOfTwoSortedArrays(arr1, arr2){
//     const union = new Set();
//     for(let value of arr1){
//         union.add(value);
//     }
//     for(let value of arr2){
//         union.add(value);
//     }
//     // console.log(union);
//     return union;

// }

// Using the two pointer approach for optimal approach.....

function unionOfTwoSortedArrays(arr1, arr2){
    let i = 0; 
    let j = 0; 
    const unionArray = new Array();

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<= arr2[j]){
            if(arr1.length === 0 || unionArray.at(-1) != arr1[i]){
                unionArray.push(arr1[i]);
            }
            i++;
        }
        else{
            if(arr2[j]<=arr1[i]){
                if(arr2.length === 0 || unionArray.at(-1) != arr2[j]){
                    unionArray.push(arr2[j]);
                }
                j++;
            }
        }
    }

    while(j< arr2.length){
        if(arr2.length === 0 || unionArray.at(-1) != arr2[j] ){
            unionArray.push(arr2[j])
        }
        j++;
    }

    while(i < arr1.length){
        if(arr1.length === 0 || unionArray.at(-1) != arr1[i]){
            unionArray.push(arr1[i]);
        }
        i++;
    }

    return unionArray;
}


console.log(unionOfTwoSortedArrays(array1, array2));
function unionOfTwoSortedArrays(arr1, arr2){
    const union = new Set();
    for(let value of arr1){
        union.add(value);
    }
    for(let value of arr2){
        union.add(value);
    }
    // console.log(union);
    return union;


}

const array1 = [1, 2, 3, 2, 1, "apple", "ban"];
const array2 = [2, 3, 4, "cap", "apple", 5, 6];
console.log(unionOfTwoSortedArrays(array1, array2));
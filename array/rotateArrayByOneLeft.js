function rotateArrayByOneLeft(arr){
    // using temp variable 
    let temp = arr[0];
    for(let i=0 ; i<arr.length -1 ; i++){
        arr[i] = arr[i+1];
    }
    // console.log(arr);
    arr[arr.length-1] = temp;
    // console.log(arr);
    return arr;
}

const array = [1,2,3,4,5];
console.log(rotateArrayByOneLeft(array));
// console.log(array);
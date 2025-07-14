// for the k-times rotation 
function rotateLeftByKTimes(arr, k){
    k = k % arr.length;
    const newArr1 = arr.slice(0,k);
    const newArr2 = arr.slice(k, arr.length); 
    // const mergeArray = [...newArr2, ...newArr1];
    // we can also use the concat function here
    const mergeArray = newArr2.concat(newArr1);
    // console.log(mergeArray);
    return mergeArray;
}

const array = [1,2,3,4,5];
const k = 7;
console.log(rotateLeftByKTimes(array,k ));
// console.log(newArr);
// console.log(mergeArray);
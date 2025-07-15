// for the k-times rotation 
function rotateLeftByKTimes(arr, k){
    k = k % arr.length;
    const newArr1 = arr.slice(0,k);
    console.log(newArr1);
    const newArr2 = arr.slice(k, arr.length); 
    console.log(newArr2);
    // const mergeArray = [...newArr2, ...newArr1];
    // we can also use the concat function here
    const mergeArray = newArr2.concat(newArr1);
    console.log(mergeArray);
    return mergeArray;
}

function leftRotateArrayByKTimesUsingTwoPointer(arr, k){
    let n = arr.length;
    k = k % n; 
    let sk = k-1;
    let ek = k;
    let s = 0 , e =n-1;
    while(s<sk || ek < e ){
        if(s !== sk){
            [arr[s], arr[sk]] = [arr[sk], arr[s]];
            s++;
            sk--;
        }
        if(ek !== e){
            [arr[ek], arr[e]] = [arr[e], arr[ek]];
            ek++;
            e--;
        }
    }
    console.log(arr);
    
    let left = 0, right = n -1;
    while(left<right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    console.log(arr);
}

const array1 = [1,2,3,4,5,6,7,8,9,10];
const array2 = [1,2,3,4,5,6,7,8,9,10];
const k = 3;
console.log(leftRotateArrayByKTimesUsingTwoPointer(array1, k));
console.log(rotateLeftByKTimes(array2,k ));
// console.log(newArr);
// console.log(mergeArray);
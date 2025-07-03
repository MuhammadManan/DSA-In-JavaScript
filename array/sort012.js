function sort012(arr){
    let left = 0; let temp = 0; let right = arr.length-1;
    while(temp<=right){
        if(arr[temp]==0){
            [arr[left], arr[temp]] = [arr[temp],arr[left]];
            left++;
            temp++;
        }
        else if(arr[temp]==2){
            [arr[right], arr[temp]] = [arr[temp], arr[right]];
            right--;
        }
        else{
            temp++;
        }
    }
    console.log(arr);
}

let array = [2,0,2,0,1,1,2,0,0,1];
sort012(array);
function commonLongestPrefix(arr){ 
    if(arr.length === 0) return "the array is empty";

     for(let i=0; i<arr[0].length; i++){ 
        let char = arr[0][i]; 
        for(let j = 0; j < arr.length; j++){ 
            if(arr[j][i] != char){ 
                return arr[0].slice(0,i);
            }
        }
    }

    return arr[0];
}

// let array = ["flower", "flow","flutter"];
// let array = [];
let array = ["dog", "dog", "dog"];
console.log(commonLongestPrefix(array));
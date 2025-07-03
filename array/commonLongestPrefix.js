function commonLongestPrefix(arr){ 
     for(let i=0; i<arr[0].length; i++){ 
        let char = arr[0][i]; 
        for(let j = 0; j < arr.length; j++){ 
            if(arr[j][i] != char){ 
                return arr[0].slice(0,i);
            }
        }
    }
}

let array = ["flower", "flow","flutter"];
console.log(commonLongestPrefix(array));
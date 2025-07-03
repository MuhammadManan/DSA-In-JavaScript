function commonLongestPrefix(arr){
    console.log(arr[0].length);
    console.log(arr[1].slice(0,2));
    console.log(arr.length);
    for(let i=0; i<arr[0].length; i++){
        console.log(i);
        console.log(`arr[0][${i}]`);
        let char = arr[0][i];
        console.log(char);
        for(let j = 0; j < arr.length; j++){
            console.log(j);
            console.log(char);
            if(arr[j][i] != char){
                console.log("if block");
                console.log(arr[0].slice(0,i));
                return arr[0].slice(0,i);
            }
        }
    }
}

let array = ["flower", "flow","flutter"];
console.log(commonLongestPrefix(array));
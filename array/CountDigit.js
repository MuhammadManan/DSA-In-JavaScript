function countDigit(num){
    let count = 0; 
    while(num>0){
        // console.log(num);
        num = Math.floor(num/10);
        // console.log(num);
        count++;
    }
    return count;
}
// console.log(1/10);
const number = 12345;
console.log(countDigit(number));
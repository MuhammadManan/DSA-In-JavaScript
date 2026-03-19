// function to extract the input digit 
function extractDigit(num){
    let N = num;
    let lastDigit;
    while(N > 0){
        lastDigit = N % 10;
        console.log(lastDigit);
        N = Math.floor(N / 10);
    }
}

extractDigit(1234);
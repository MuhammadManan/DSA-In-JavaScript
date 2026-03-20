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

// function to find the factorial of a number
function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

// function to find the power of a number
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
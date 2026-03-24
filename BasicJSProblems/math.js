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

// function to find the greatest common divisor (GCD) of two numbers

function gcd(a, b){
    if(b === 0) return a;
    return gcd(b, a % b);
}  

console.log(gcd(12, 15));

// function to find the least common multiple (LCM) of two numbers

function lcm(a, b){
    return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15));

// function to find the nth Fibonacci number

function fibonacci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}   

console.log(fibonacci(10));

// function to find the sum of digits of a number

function sumOfDigits(num){
    if(num === 0) return 0;
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(1234));

// function to find the number of digits in a number

function countDigits(num){
    if(num === 0) return 0;
    return 1 + countDigits(Math.floor(num / 10));
}

console.log(countDigits(1234));

// function to find the nth term of the Fibonacci sequence

function fibonacci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));


// function to find the sum of the digits of a number
function sumOfDigits(num){
    if(num === 0) return 0;
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(1234));

// function to find the number of digits in a number
function countDigits(num){
    if(num === 0) return 0;
    return 1 + countDigits(Math.floor(num / 10));
}

console.log(countDigits(1234));

// function to find the greatest common divisor (GCD) of two numbers
function gcd(a, b){
    if(b === 0) return a;
    return gcd(b, a % b);
}

console.log(gcd(12, 15));

// function to find the least common multiple (LCM) of two numbers
function lcm(a, b){
    return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15));

// function to find the power of a number
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));

// function to find the factorial of a number
function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
/**
 * Reverses an array using brute force (extra space).
 * @param {any[]} arr
 * @returns {any[]} reversed array
 */
function reverseArrayBruteForce(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log(reverseArrayBruteForce(arr)); // Output: [5, 4, 3, 2, 1]


/**
 * Reverses an array in place (optimal solution).
 * @param {any[]} arr
 * @returns {any[]} reversed array (same reference)
 */
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// Example usage:
const arr2 = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arr2)); // Output: [5, 4, 3, 2, 1]
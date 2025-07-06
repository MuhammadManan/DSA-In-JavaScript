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
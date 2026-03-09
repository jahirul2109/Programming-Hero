/** ========== Spread Oparetor ======== */
const numbers = [1, 2, 3, 4, 5];

// Using spread operator to create a new array
const newNumbers = [...numbers, 6, 7];
// console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6, 7]


// Old System 
let max = 0;
for (let i = 0; i < numbers.length ; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max); // Output: 5
// Morden System
// const maxNumber = Math.max(numbers); // Output: NaN
const maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 5
/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2

 */

let myArray = [5,6,11,12,98, 5];
function findArrayIndex (numbers , find) {
    let conut = 0;
    for (let i = 0; i < numbers.length ; i ++) {
        if (numbers[i] === find) {
            conut ++;
        } 
    }
     if (conut === 0) {
        return "Empty"
     } else {
         return conut;
     }
}
console.log(findArrayIndex(myArray, 1))
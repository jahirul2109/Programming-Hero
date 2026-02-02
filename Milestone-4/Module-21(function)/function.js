/** Task -1
 * Take four parameters. Multiply the four numbers and then return the result
 */
function multiply (a, b , c , d) {
    return a * b * c * d ;
}
let result = multiply (2, 3, 4, 5);
// console.log(result);


/**
 * Task-2
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function oddEven (a) {
    let res ;
    if (a % 2 === 0) {
       return res = a * 2;
    } else {
       return res = a * 3
    }
}
const outPut = oddEven (4);
// console.log(outPut);
// console.log(oddEven(5));


/**
 ************ Task-3 **************
 Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
const myArray = [3, 64, 9, 9, 8, 1, 50];
function arrayFun (array) {
    let result = 0;
    for (num of array) {
        result += num ;
    }
    result = result / array.length;
    let average = result.toFixed(2)
    // console.log(average)
    return parseFloat(average)
} 
// console.log (arrayFun (myArray));


/**
 * *********** Task-4  *******
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */
//  first Way
let binary = "010101111"
function findBinaray (binary) {
    let count = 0;
    for (let digit of binary) {
        if (digit === "0") {
             count ++;
        }
    }
    return count
}
// console.log (findBinaray(binary))

// second Way 
function findDigit (binary) {
    let count = 0;
    for (let i = 0; i <= binary.length -1; i++) {
        if (binary[i] == "0") {
            count ++;
        } 
    }
    return count;
}
// console.log(findDigit(binary));


/**
 * ****** Task-5 ***********
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even (number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(odd_even(25))
/**
 * Array thake odd number bahir kore average nirhoi koro 
 */

function average (array) {
    let oddNum = [];
    let sum = 0;
    for (const number of array) {
        if (number % 2 === 1) {
            // console.log(number)
            oddNum.push(number)
        }
    }
    for (odd of oddNum) {
        sum+= odd;
    }
    let ghor = sum / oddNum.length;
    return ghor
}
let myArray = [2, 393, 53, 34, 234, 33 , 2, 5];
let avg = average(myArray)
console.log (avg)
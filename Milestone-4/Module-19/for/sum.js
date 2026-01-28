
/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
let sum = 0;
for (let i = 80; i <= 129; i++){
    if (i % 2 !== 0) {
        // console.log(i)
        sum += i;
    }
}
// console.log(sum)

let total = 0;
for (let i = 51 ; i <= 85; i++) {
    if (i % 2 === 0) {
        console.log(i)
        // total += i;
        total = i + total;
    }
}
console.log(total)
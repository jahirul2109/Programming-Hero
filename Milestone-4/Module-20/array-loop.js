// let reverse ="";
// let myArray = ["red", "yellow", "blue", "black", "white"]
// for (let num of myArray) {
//     console.log(num)
//     reverse += num;
// }
// console.log(reverse)

let colors = ["red", "yellow", "blue", "white", "black", "orange"]
let reverseed = [];
for (let i = colors.length -1; i >= 0; i--) {
    reverseed.push(colors[i])
}
console.log(reverseed);
console.log(colors.length)

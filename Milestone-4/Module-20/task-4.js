// let bio = "i am a hard worker person";
// let b = bio.split(" ");
// let reverse = []
// console.log(b);
// for (let i = b.length -1 ; i >= 0; i-- ) {
//     console.log(b[i])
//     reverse.push(b[i])
//     if (i !==0) {
//         reverse.push(" ")
//     }
// }
// // console.log(reverse.length)
// console.log(reverse)



let bio = "i am a hard worker person";
let b = bio.split(" ");
let reverse = ""
console.log(b);
for (let i = b.length -1 ; i >= 0; i-- ) {
    // console.log(b[i])c
    if (i !== 0) {
        reverse+= " "
    }
    reverse += (b[i])
}
console.log(reverse)
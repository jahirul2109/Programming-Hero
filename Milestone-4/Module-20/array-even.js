const myArray = [20, 23 , 25 , 26 , 28 , 98, 122 , 22];
 myArray.sort((a,b) => a - b );
 let even = [];
for( let i = 0 ; i <= myArray.length; i ++) {
    if (myArray[i] % 2 === 0){
        even.push(myArray[i])
    }
    // console.log(i);
    
}
// console.log(even);


const array = [10 , 12 ,102 , 111, 18 , 98 , 85 , 46, 31];
let sorted = array.sort((a , b) => a - b);
for (let x of sorted) {
    if (x % 2 === 0) {
        console.log(x);
    }
}
// console.log(sorted);
// console.log(array);

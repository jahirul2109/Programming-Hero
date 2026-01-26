/*
************************Array***************
**/
const myArray = [12, 32, 32, 539, 24, ];
const myArray1 = ["jahirul", "Rabiul", "Yeasin",]
myArray.pop()
myArray.push(100)
const combaind = [...myArray,...myArray1]
console.log([...new Set([...myArray,...myArray1])]);
console.log([...new Set ([...combaind])]);
console.log(combaind.indexOf(32));



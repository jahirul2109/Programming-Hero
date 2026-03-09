// Object Destructuring
const person = {
    name: 'jahirul Islam',
    age: 21,
    profession: 'student',
    country: 'Bangladesh'
}
const { name, age, profession, country } = person;
// console.log(name); // Output: jahirul Islam
// Note 
// 1. The variable names must match the property names in the object.
// 2. The order of the variables does not matter.   



// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first); // Output: 1
// Note 
// 1. The variable names can be anything you like, but the order matters.   
// 2. You can skip elements in the array by leaving empty spaces.
const [first1, , third1] = numbers;
console.log(third1); // Output: 3   
// 3. You can also use the rest operator to collect the remaining elements into an array.
const [first2, ...rest] = numbers;
console.log(rest); // Output: [2, 3, 4, 5]  
/** ======================= Noraml function VS ArraowFunction ==========================  */

// Normal function
function add(a, b) {
    console.log(arguments); // Output: [5, 3]
    return a + b;
}
const noramlFun = add(5, 3, 34);
// console.log(noramlFun); // Output: 8

// Arrow function
const addArrow = (a, b) => a + b;
// console.log(addArrow(5, 3)); // Output: 8

const addArrow1 = (a, b) =>{ 
    console.log(arguments); // Output: ReferenceError: arguments is not defined
    return a + b ;
};
// addArrow1(10, 20); // Output: ReferenceError: arguments is not defined
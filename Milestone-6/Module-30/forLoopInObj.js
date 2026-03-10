const myObj = {
    name : 'jahirul Islam',
    age : 21, 
    skills : ['JavaScript', 'React', 'Node.js'],
    hobbies : ['coding', 'traveling', 'cooking']
};
// Using for...in loop to iterate over the properties of the object
for (const key in myObj) {
    console.log(`Key : ${key} | value : ${myObj[key]}`);
}

// Using for...of loop with Object.entries() to iterate over the key-value pairs of the object
for (let [key, value] of Object.entries(myObj)) {
    console.log(`Key : ${key} | value : ${value}`);

}

/** ================= Object Seal and freeze =============== */
// Object.seal() method 
const mynewObj = {
    name : 'jahirul Islam',
    age : 21,
    conutry : 'Bangladesh'
};
mynewObj.profession = 'student'; // Adding a new property
// console.log(mynewObj); // Output: { name: 'jahirul Islam', age: 22, conutry: 'Bangladesh', profession: 'student' }

Object.seal(mynewObj); // Sealing the object to prevent adding new properties
mynewObj.skills = "Js"; // Adding a new property (will not work)
mynewObj.age = 22; // Modifying an existing property (will work)
console.log(mynewObj); // Output: { name: 'jahirul Islam', age: 21, conutry: 'Bangladesh', profession: 'student' }

// Object.freeze() method
const myfreezeObj = {
    name : 'jahirul Islam',
    age : 21,
    conutry : 'Bangladesh'
};
// befor freeze method apply
myfreezeObj.name = 'John Doe'; // Modifying an existing property (befor freeze method apply will  work)
myfreezeObj.profession = 'student'; // Adding a new property (befor freeze method apply will  work)
console.log(myfreezeObj); // Output: { name: 'Johb', age: 21, conutry: 'Bangladesh', profession: 'student' }

Object.freeze(myfreezeObj);

// after freeze method apply
myfreezeObj.age = 19; // Modifying an existing property (will not work)
myfreezeObj.skills = 'java'; // Adding a new property (will not work)
console.log(myfreezeObj); // Output: { name: 'John Doe', age: 21, conutry: 'Bangladesh' }
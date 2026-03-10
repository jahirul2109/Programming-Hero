const myObj = {
    name : 'jahirul Islam',
    age : 21, 
    skills : ['JavaScript', 'React', 'Node.js'],
    hobbies : ['coding', 'traveling', 'cooking']
};
for (const key in myObj) {
    console.log(`Key : ${key} | value : ${myObj[key]}`);
}

for (let [key, value] of Object.entries(myObj)) {
    console.log(`Key : ${key} | value : ${value}`);
}
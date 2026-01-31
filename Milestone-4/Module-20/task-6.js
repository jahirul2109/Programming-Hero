/**
 * Given an array of student objects, print each student’s name and marks.
 */
let studentProfile = [{
    name: "jahirul",
    marks: 78
},
{
    name: "rabiul",
    marks: 91
}];
for (let x of studentProfile) {
    console.log(`${x.name} score is ${x.marks}`)
}
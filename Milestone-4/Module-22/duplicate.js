

const name = ["jahirul", "rabiul", "shuvo", "jahirul", "Yeasin", "Yeasin"];
function findUniqueValue (names) {
    let unique = [];
    let duplicate = []
    // for (let nam of names) {
    //     if (unique.includes(nam) !== true) {
    //         unique.push(nam);
    //     }
    // }
    for (let nam of names) {
         if (unique.includes(nam)) {
            if(!duplicate.includes(nam)) {
                duplicate.push(nam)
            }
            }
            else {
                unique.push(nam);
            }
        } 
    return duplicate;

}
console.log(findUniqueValue(name))

// const mail = "jahirulislam@gmail.com"
// function email (users) {
//     let str = ""
//     for (let user of users) {
//         str += user;
//     }
//     console.log(str)
//     return str
// }
// email(mail);

// const mail = "j-aadfadfh@email.com"
const mail = 30
function email (users) {
    if ( typeof users !== "string") {
        return "Invalid user"
    }
    let mailingaddres = "@email.com"
    const unUsedAlfa ='"*$%#()!{}[]||'
    const fristUnuesedAlfa ='"%!(){}[]\|_-*&$#@';
    if (fristUnuesedAlfa.includes(users[0]) || users.includes(" ") || !users.endsWith(mailingaddres)) {
        return "Invalid email"
    } 
    users = users.toLowerCase();

    for (let i = 0; i < users.length; i++) {
        if (unUsedAlfa.includes(users[i]) ) {
            return "Invalid User name "
    }
}
return true
}
console.log (email(mail));

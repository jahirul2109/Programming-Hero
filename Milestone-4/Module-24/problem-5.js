// let frd1 = {
//     name : "abul",
//     roll : 1,
//     besfriend : 2
// }
let frd1 = "Hello"
let frd2 = {
    name : "babul",
    roll : 2,
    besfriend : 1
}

function getBestFrd (f1 , f2 ) {
    if ( (typeof f2 !== "object" || Array.isArray(f2) === true) ||(typeof f1 !== "object" || Array.isArray(f1) === true) ) {
        return "Invalid Value"
    }
    if (f1.roll === f2.besfriend && f2.roll === f1.besfriend) {
        return "They Are a best frd"
    } else {
        return "False They are a not a best frd"
    }
}
let frdShip = getBestFrd (frd1, frd2);
console.log(frdShip);

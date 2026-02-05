/**
 * *************** Find Leap Year ****************
 */

function isLeapYear(year) {
    if ((year % 100 !== 0 && year % 4 === 0 ) || year % 400 === 0) {
        return "is Leap Year";
    } else {
        return "Not a leap Year"
    }
}

let year = isLeapYear(2400);
console.log(year);
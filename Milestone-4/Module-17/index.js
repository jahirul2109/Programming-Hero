/**
 * ******************Grad mark*********** 
 * 60-69 = A-
 * 70-79 = A
 * 80 -100 = A+
 */
const mark = 32 ;
if (mark > 60 && mark <= 69) {
    console.log("Congratulation You got A-");
} else if (mark > 70 && mark <= 79) {
    console.log("Congratulation You Got A");
} else if (mark > 80 && mark <= 100) {
    console.log("Congratulation You got A+")
} else if (mark > 33 && mark < 61) {
    console.log("Congratulation You Got B")
} else {
    console.log("Sorry you fail");
}

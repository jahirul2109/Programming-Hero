/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.

*/
function celsiToFahrenhat (celsius) {
   let fahrenhait = (celsius * 1.8) + 32 ;
   return fahrenhait
}

let fahrenhait = celsiToFahrenhat (26);
console.log(fahrenhait.toFixed(1));
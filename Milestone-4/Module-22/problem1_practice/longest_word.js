let str = "InshaAllah I will a programmar in 2026 May Allah bless me Give me knowledge & hedayet"

function longestWordFind (words) {
    let array = words.split(" ")
    let longesWord = "";
    for (let word of array) {
        // console.log(word);
        if (word.length > longesWord.length) {
            longesWord = word;
            
        }
    }
    console.log(longesWord);
    
    return longesWord
}

// let result = longestWordFind (str)



let myArray = [ 12, 23, 342, 23, 343, 12, 334,2, 232];
function findLowestIntiger (numbers) {
    let lowest = numbers[0]
    for (let number of numbers) {
        if (number < lowest) {
            // lowest = number;
            lowest = number;
        }
    }
    return lowest
}
let low = findLowestIntiger (myArray);
console.log(low);

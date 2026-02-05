let word = "hello whats app ki obosta kmn ahsos"
function findVowles (str) {
    let conut = 0;
    let vowles ="aeiouAEIOU";
    for (let i = 0; i < word.length ; i++) {
        if (vowles.includes(str[i])) {
            conut ++;
        }
    }
    return conut;
}
let vowle = findVowles (word);
console.log(vowle)
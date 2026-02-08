let time = [23232, 2323, 234, 22123, 3432];
function countWatch (somoy) {
    let totaoSec = 0;
    for (let sec of somoy) {
        totaoSec += sec;
    }
    let hours = parseInt(totaoSec / 3600);
    let ramingSec = totaoSec % 3600;
    let minute = parseInt(ramingSec / 60);
    let sec = ramingSec % 60;

    return `${hours} Hours ${minute} Minutes ${sec} Second`

}
let resut = countWatch(time);
console.log(resut);

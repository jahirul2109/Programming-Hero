let money = 22600;
function cashOut (money){
    let cashOutCharge = money * 1.75/100;
    if (typeof money !== "number" || money < 0) {
        return "Invalid"
    }
    return Math.round(cashOutCharge);
}
let cashOutCharge = cashOut (money);
console.log(cashOutCharge)
const number = document.getElementById('account');
const pin = document.getElementById('pin');
/********Checiking Number************ */
function checkingNumber (number) {
    number.target.value = number.target.replace(/[^0-9]/g, "");
}
number.addEventListener('input',checkingNumber)

document.getElementById('form-btn').addEventListener('submit', (e)=> {
    e.preventDefault()
    const number = document.getElementById('account').value;
    const pin = document.getElementById('pin').value;
    const conVertedNumber = parseInt(number);
    const conVertedPin = parseInt(pin);
    if (number.length == 11 && conVertedPin === 1234) {
        window.location.href = "./home.html"
        console.log ("hello")
    } else {
        console.log('dur');
        
    }

})
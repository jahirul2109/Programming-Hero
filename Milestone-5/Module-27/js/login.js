document.getElementById('form-btn').addEventListener('submit', (e)=> {
    e.preventDefault()
    const number = document.getElementById('account').value;
    const pin = document.getElementById('pin').value;
    const conVertedNumber = parseInt(number);
    const conVertedPin = parseInt(pin);
    console.log(typeof conVertedNumber)
    if (number.length == 11 && conVertedPin === 1234) {
        window.location.href = "./home.html"
        console.log ("hello")
    } else {
        console.log('dur');
        
    }

})
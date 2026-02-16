
function checkingNumber (number) {
    number.target.value = number.target.value.replace(/[^0-9]/g, "");
}

function checkingAmount (number) {
   number.target.value = number.target.value.replace(/[^0-9.]/g, "");
}


/**
 * ***********Add Money Section********** 
 */
const bankNum = document.getElementById('bank-number');
const addBtn = document.getElementById('add-btn');
const dolar = document.getElementById('dolar');
const addAmount = document.getElementById('add-amount');


// Check Bank Number
bankNum.addEventListener('input',checkingNumber);
// Check amount 
addAmount.addEventListener('input', checkingAmount)

// Add Amount Main Blance
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const addpin = document.getElementById('add-pin');
    const pin = addpin.value
    const convetedPin = parseInt(pin);
    const bankNumber = bankNum.value;
    const convetedAmount = parseFloat(addAmount.value);
    const convetedDolar = parseFloat(dolar.innerText);
    if (bankNumber === "" || (bankNumber[0] !== "0" && bankNumber[1] !== "1")) {
        alert('Please provied a valid Number')
        return;
    }
    if (bankNumber.length !== 11) {
        alert("Number Must be exactly 11 digit")
        return;
    }
    if (addAmount.value) {
        if (convetedPin === 1234) {
            const sum = convetedAmount + convetedDolar
            dolar.innerText = sum;
        } else {
            alert("Wrong Pin")
        }
    } else {
        alert("Emtpy Amount")
    }
    addAmount.value = "";
    bankNum.value = "";
    addpin.value = "";
})



/**
 ***************Cashout Section*****************
 */
const userNumber = document.getElementById('agent-number');
const cashoutAmout = document.getElementById('withdrwo-amount');
const cashoutBtn = document.getElementById('withdrwo-btn');
const cashoutPin = document.getElementById('cashout-pin')

// Check agent Number
userNumber.addEventListener('input', checkingNumber);

// Check amount 
cashoutAmout.addEventListener('input', checkingAmount)

cashoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const pin = cashoutPin.value;
    const convetedPin = parseInt(pin);
    const convetedAmout = parseFloat(cashoutAmout.value);
    const convetedDolar = parseFloat(dolar.innerText);
    const agentNumberValue = userNumber.value;

    if (agentNumberValue.length !== 11 || agentNumberValue === "") {
        alert('Please Provid a valid Number');
    }

    if (cashoutAmout.value) {
        if (convetedPin === 1234) {
            if (convetedDolar >= convetedAmout) {
                const sum = convetedDolar - convetedAmout;
                dolar.innerText = sum;
            } else {
                alert("Not Enougt Blance")
            }
        } else {
            alert('Wrong Pin')
        }
    } else {
        alert('Empty Amount !!!!')
    }
    cashoutAmout.value = "";
    cashoutPin.value = "";
    cashoutAmout.value = '';
})

/****************** Send Money Section********************** */
const sendUserNumber = document.getElementById('user-number');
const sendAmount = document.getElementById('send-amount');
const sendPin = document.getElementById('send-pin');
const sendBtn = document.getElementById('send-btn');

// Check agent Number
sendUserNumber.addEventListener('input', checkingAmount);

// Check amount 
sendAmount.addEventListener('input',checkingAmount)


/**********************Option-1************** */
// sendBtn.addEventListener ('click', (e)=> {
//     e.preventDefault();
//     const convertedPin = parseInt(sendPin.value);
//     const convertedAmount = parseFloat(sendAmount.value);
//     const convertedDolar = parseFloat(dolar.innerText);
//     const numberValue = sendUserNumber.value;
//     if (numberValue.length !== 11 || numberValue === "") {
//         alert("Please Provid a valid number")
//     }
//     if(sendAmount) {
//         if(sendPin && convertedPin === 1234) {
//             if (convertedDolar >= convertedAmount) {
//                 const sum = convertedDolar - convertedAmount;
//                 dolar.innerText = sum;
//             } else {alert ("Not enougt Blance")}
//         } else {
//             alert ("Wrong Pin")
//         }
//     }  else {
//         alert("Empty ammount")
//     }
//     sendAmount.value ="";
//     sendPin.value ="";
//     sendUserNumber.value = "";
// })

/************Make Function **********/
function checkingTrasaction (number, amount, mainBlance , pin) {
    const convertedPin = parseInt(pin.value);
    const convertedAmount = parseFloat(amount.value);
    const convertedMain = parseFloat(mainBlance.innerText);
    const numberValue = number.value;

    if (numberValue.length !== 11 || numberValue === "") {
        alert ("Please Provid a valid Number")
    };
    if (amount) {
        if (pin.value && convertedPin === 1234) {
            if (convertedMain >= convertedAmount) {
                const sum = convertedMain - convertedAmount;
                mainBlance.innerText = sum;
            } else {alert("You have Not Enougt Blance")}
        } else { alert ('Wrong Pin')}
    } else {
        alert ("Empty Blance")
    }
    number.value ="";
    amount.value="";
    pin.value = "";
}

/**************Option-2********** */
sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    checkingTrasaction (sendUserNumber, sendAmount, dolar, sendPin);
});


/**************PAY BILL OPTION********************/
const billarNum = document.getElementById('biller-num');
const payAmount = document.getElementById('pay-amount');
const payPin = document.getElementById("pay-pin");
billarNum.addEventListener('input', checkingNumber)
payAmount.addEventListener('input', checkingAmount)
document.getElementById("pay-btn").addEventListener('click', ()=> {
    checkingTrasaction(billarNum, payAmount,dolar, payPin);
})


/************Logout button************** */
document.getElementById('logout-btn').addEventListener('click', (e) => {
    e.preventDefault()
    console.log("logout")
    window.location.href ="./index.html"
});
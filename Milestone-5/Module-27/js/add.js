// Add Money box
document.getElementById('add-box').addEventListener('click', (e) => {
    e.preventDefault();
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const sendMony = document.getElementById('Send-money');
    const payBill = document.getElementById('pay-bill');
    const transactions = document.getElementById('Transactions');
    const difult = document.getElementById('difult');
    if (addMoney.style.display == "block") {
        addMoney.style.display = "none"
        difult.style.display ="block"
    } else {
        addMoney.style.display = "block";
        difult.style.display = 'none';
        cashout.style.display = 'none';
        sendMony.style.display = 'none';
        payBill.style.display = 'none';
        transactions.style.display = 'none';
    }
})
// Cashout -box 
document.getElementById('cashout-box').addEventListener('click', (e) => {
    e.preventDefault();
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const sendMony = document.getElementById('Send-money');
    const payBill = document.getElementById('pay-bill');
    const transactions = document.getElementById('Transactions');
    const difult = document.getElementById('difult');
    if (cashout.style.display == "block") {
        cashout.style.display = "none"
        difult.style.display ="block"
    } else {
        cashout.style.display = "block";
        difult.style.display = 'none';
        sendMony.style.display = 'none';
        addMoney.style.display = 'none';
        payBill.style.display = 'none';
        transactions.style.display = 'none';

    }
})

// Pay-box
document.getElementById('pay-box').addEventListener('click', (e) => {
    e.preventDefault();
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const sendMony = document.getElementById('Send-money');
    const payBill = document.getElementById('pay-bill');
    const transactions = document.getElementById('Transactions');
    const difult = document.getElementById('difult');
    if (payBill.style.display == "block") {
        payBill.style.display = "none"
        difult.style.display ="block"
    } else {
        payBill.style.display = "block";
        difult.style.display = 'none';
        cashout.style.display = 'none';
        sendMony.style.display = 'none';
        addMoney.style.display = 'none';
        transactions.style.display = 'none';
    }
})

// Send Money box 
document.getElementById('Transfer-box').addEventListener('click', (e) => {
    e.preventDefault();
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const sendMony = document.getElementById('Send-money');
    const payBill = document.getElementById('pay-bill');
    const transactions = document.getElementById('Transactions');
    const difult = document.getElementById('difult');
    if (sendMony.style.display == "block") {
        sendMony.style.display = "none"
        difult.style.display ="block"
    } else {
        sendMony.style.display = "block";
        difult.style.display = 'none';
        payBill.style.display = 'none';
        transactions.style.display = 'none';
        cashout.style.display = 'none';
        addMoney.style.display = 'none';
    }
})

// Transaction box
document.getElementById('Transactions-box').addEventListener('click', (e) => {
    e.preventDefault();
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const sendMony = document.getElementById('Send-money');
    const payBill = document.getElementById('pay-bill');
    const transactions = document.getElementById('Transactions');
    const difult = document.getElementById('difult');
    if (transactions.style.display == "block") {
        transactions.style.display = "none"
        difult.style.display ="block"
    } else {
        transactions.style.display = "block";
        difult.style.display = 'none';
        payBill.style.display = 'none';
        sendMony.style.display = 'none';
        addMoney.style.display = 'none';
        cashout.style.display = 'none';
        
    }
})
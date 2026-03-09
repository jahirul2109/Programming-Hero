/**-------------task assign number -------------- */
let finishNumer = document.getElementById('finis-case');
let taskAssignNum = document.getElementById('tasknumber');
let convertedTasknum = parseInt(taskAssignNum.innerText);

/** ------------- Date Assign Here ------------- */
const date = new Date;
const bar = document.getElementById('bar');
const tarik = document.getElementById('tarik');
const montn = document.getElementById('month');
const yerer = document.getElementById('year');
bar.innerText = date.toLocaleString('en-US', { weekday: "short" });
montn.innerText = date.toLocaleDateString('en-US', { month: "short" });
tarik.innerText = date.getDate().toLocaleString();

/** ----Create Danamic Element Prompt -------- */
const parenPrompt = document.createElement('div');

const boxConatainer = document.createElement('div');
boxConatainer.setAttribute('id', 'box-container')

/** --------Activity section and Clear button--------- */
const activity = document.getElementById('activity');
const clearBtn = document.getElementById('clear-btn');



/**======================== Make  Counter function  ========================= */
function conuter(button, card) {        // Take card id and button id 
    const btn = document.getElementById(button)    // Assigen btn variable
    let convertedTask = parseInt(taskAssignNum.innerText);   // Task Number conver to number
    let convertedFinish = parseInt(finishNumer.innerText);  // Reduce Task Number covet to number 
    finishNumer.innerText = convertedFinish + 1;            
    taskAssignNum.innerText = convertedTask - 1;
    
            // button disabled
    btn.setAttribute('disabled', 'true')        

    let ativityCard = document.getElementById(card); 
    const contnet = ativityCard.querySelector('h2').innerText; // Get Card heading Value / text 
    
    /** -------Creaate New Div for box -------- */
    const box = document.createElement('div');
    box.innerText = `${contnet.toLocaleUpperCase()}
     ${bar.innerText} ${montn.innerText} ${tarik.innerText} ${yerer.innerText}`;
    boxConatainer.appendChild(box)
    activity.appendChild(boxConatainer)

    /** -------Creaate New p for time ------- */
    const time = document.createElement('p');
    time.innerText = `${date.getHours()} : ${date.getMinutes()}`;

    box.appendChild(time);
    box.setAttribute('class', 'box');
    box.classList.add('shadow-sm', 'py-5', 'navbar', 'flex', 'items-center', 'justify-between', 'font-bold');
    boxConatainer.classList.add('flex', 'flex-col', 'gap-5', 'mt-5');

    /**======================== Clear Button ========================= */
    clearBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (activity.querySelector("#box-container") !== null || boxConatainer.querySelectorAll('.box').length > 0) { // Checking Value if Boxconatainerr 
            boxConatainer.remove()
            box.remove();
        }
        else {
            alert('Empty Value');

        }
    })
    parenPrompt.classList.add('w-full', 'flex' ,'items-center', 'justify-between', 'fixed', 'left-0','z-10', 'top-10', 'px-14')
    parenPrompt.innerHTML = `<div id="prompt" class="alert alert-success px-14 py-5   mx-auto w-full flex justify-center items-center  opacity-70">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span class="text-2xl font-bold text-center opacity-100">Successfully You Completed All Task !!</span>
  </div>`;
    if (parseInt(taskAssignNum.innerText) === 0) { // checking How much task You completed .
        document.querySelector('#top').appendChild(parenPrompt);

        /** After 3 second Prompt is remove  */
        setTimeout(() => {
            if (document.querySelector('#top').hasChildNodes(parenPrompt)) {
                parenPrompt.remove()
            }
        }, 3000)
    }

}

document.getElementById('btn-1',).addEventListener('click', (event) => {
    event.preventDefault()
    conuter('btn-1', 'card-1')
})
document.getElementById('btn-2').addEventListener('click', (event) => {
    event.preventDefault()
    conuter('btn-2', 'card-2')
})
document.getElementById('btn-3').addEventListener('click', (event) => {
    event.preventDefault()
    conuter('btn-3', 'card-3')
})
document.getElementById('btn-4').addEventListener('click', (event) => {
    event.preventDefault()
    conuter('btn-4', 'card-4')
})
document.getElementById('btn-5').addEventListener('click', (event) => {
    event.preventDefault()
    conuter('btn-5', 'card-5')
})
document.getElementById('btn-6').addEventListener('click', (event) => {
    event.preventDefault()
    conuter('btn-6', 'card-6')
})


/** ===================== Rendom Color Picker =========================== */
document.getElementById('them').addEventListener('click', (e) => {
    e.preventDefault();
    const redomNumber = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    document.querySelector('body').style.backgroundColor = redomNumber;
})

/** =================== Blog Section ====================== **/ 
document.getElementById('calander').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'blog.html';
})

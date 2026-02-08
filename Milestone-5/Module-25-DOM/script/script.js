const fristSection = document.getElementById('frist-section');
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.innerText = "Sara Experss";
ul.appendChild(li);

const li2 = document.createElement('li');
li2.innerText = "Sara Experss";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "Sara Experss";
ul.appendChild(li3);
ul.classList.add('white')
ul.style.listStyle = "none"
fristSection.appendChild(ul);
fristSection.style.backgroundColor = 'steelblue';
fristSection.style.borderRadius = "10px";
fristSection.style.textAlign = "center";
fristSection.style.padding= "20px"

const quary = document.querySelector('.gari');

const classList = document.getElementsByClassName('gari');
console.log(quary.parentNode.parentNode.parentNode)
console.log(classList)
console.log(ul.parentNode)
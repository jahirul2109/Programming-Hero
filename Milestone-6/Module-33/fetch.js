const myFun = ()=> {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        takeData(data)
    })
}

const takeData = (users)=> {
    const devContaier = document.getElementById('devContainer');
    for(const user of users) {
        const dev = document.createElement('div');
        dev.classList.add('card')
        console.log(user.title);
        dev.innerHTML= `
        <h1>${user.title}</h1>
        <p>${user.body}</p>
        `;
        const btn = document.createElement('button');
        btn.innerText = 'User Id'
        btn.addEventListener('click', (event)=>{
            event.preventDefault();
            btn.innerText = user.id;
        });
        dev.appendChild(btn);
        devContaier.appendChild(dev);
    }
}
myFun()
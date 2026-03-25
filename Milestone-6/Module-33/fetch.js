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
        console.log(user.title);
        dev.innerHTML= `
        <h1>${user.title}</h1>
        <p>${user.body}</p>
        <button>${user.id}</button>
        `;
        devContaier.appendChild(dev);
    }
}
myFun()
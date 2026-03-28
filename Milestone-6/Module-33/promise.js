const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/albums/1',
    'https://jsonplaceholder.typicode.com/albums/2'
];

Promise.all(urls.map((url)=> {
    return fetch(url).then(res => res.json()).then(data => console.log(data))
    .catch(('server error'))
}));

// function newFun () {
//     return  new Promise ( (resolve, reject)=> {
//         const satuts = true ;
//         if (satuts) {
//          const mocData = {   json:()=>Promise.resolve({name : "jahirul"}) }
//             resolve (mocData);
//         } 
//        else ( reject ('Fhaaa'));
//     })
// }
// newFun()
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
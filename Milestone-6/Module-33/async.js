const num = 19;
const num2 = 13;
const result = num + num2;
setTimeout(()=> {
    test()
}, 2000)
console.log(result);

function test () {
    console.log('Hello');
}

function frist () {
    second ();
    console.log("Hello i am frist")
};
function second () {
    thired();
    console.log("Hello i am second")
};

function thired () {
    console.log('Hello i am thierd')
}
frist()
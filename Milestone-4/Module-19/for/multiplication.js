let sum = 0;
let n = 3;
for (let i = 1; i <=10; i++) {
    console.log(`${n} X ${i} = ${n * i}`)
    sum += n * i;
    
}
console.log(sum)


for (let i =81; i >= 65; i--) {
    console.log(i);
}

let start = 81;
let end = 65;

let timer = setInterval(() => {
  console.log(end);

  if (start === end) {
    clearInterval(timer); // timer বন্ধ
  }

  end++;
}, 1000); // 1000ms = 1 second
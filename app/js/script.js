const count = document.querySelector('#count');
const btn = document.querySelector('#btn');
var Count = 0;
btn.addEventListener("click", ()=>{
    Count += 1;
    count.textContent = `${Count}`;
})
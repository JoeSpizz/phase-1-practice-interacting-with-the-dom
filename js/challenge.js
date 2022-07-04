const counter = document.querySelector("#counter")
let counterDigit = parseInt(counter.innerText);
function incrementCounter() {
    counterDigit ++;
     return counter.innerText = counterDigit
 
}
setInterval(incrementCounter,1000)

const minus = document.querySelector("#minus")
minus.addEventListener('click', ()=>{
    counterDigit --;
    return counter.innerText = counterDigit
})

const plus = document.querySelector("#plus")
plus.addEventListener('click', ()=>{
    counterDigit ++;
    return counter.innerText = counterDigit
})

const heart = document.querySelector("#heart")
const likes = document.querySelector(".likes")
let totalLikes = 0;
console.log(likes)
heart.addEventListener('click', ()=>{
    let li = document.createElement("li");
     totalLikes++
    li.appendChild(document.createTextNode(`The number ${counter.innerText} has been liked ${totalLikes} times!`));
    likes.appendChild(li);
    return totalLikes
}
)
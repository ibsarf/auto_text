const content=document.querySelector(".content");
const speedTextClick=document.getElementById("input");
const text="I am freelance and front-end developer";

let idx=1;
let speedText=300/speedTextClick.value;

function getContent(){
    content.innerText=text.slice(0,idx);
    idx++
    if(idx>text.length){
        idx=1
    }
    setTimeout(getContent,speedText)
}
getContent()
speedTextClick.addEventListener("click",(e)=>{
    speedText=300/e.target.value
})
let wraper= document.querySelector('.wrapper');
let login_bar=document.querySelector('.login_bar');
let close_icon=document.querySelector(".close_icon");
let login_btn=document.querySelector(".login_button");

login_bar.addEventListener("click",()=>{
    wraper.classList.add("active-popup")
})             
close_icon.addEventListener("click",()=>{
    wraper.classList.remove("active-popup")
})
login_btn.addEventListener("click",async function pop(){
    wraper.classList.remove("active-popup");
    setTimeout(() => {
        alert('"Login Sucessful"')
    },400);
})
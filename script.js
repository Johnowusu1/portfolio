// Auto Typing

const words=[
"John Doe",
"Web Developer",
"UI Designer",
"Frontend Developer"
];

let wordIndex=0;
let letterIndex=0;
let reverse=false;

const typing=document.querySelector(".typing");

function autoType(){

let current=words[wordIndex];

if(!reverse){

typing.innerHTML=current.substring(0,letterIndex++);

if(letterIndex>current.length){

reverse=true;

setTimeout(autoType,1500);

return;

}

}else{

typing.innerHTML=current.substring(0,letterIndex--);

if(letterIndex==0){

reverse=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(autoType,120);

}

autoType();


// Mobile Menu

const menu=document.querySelector(".menu-btn");

const sidebar=document.querySelector(".sidebar");

menu.onclick=()=>{

sidebar.classList.toggle("active");

}


// Scroll Animation

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-300;

if(top>offset){

sec.classList.add("show");

}

});

});


// Initial animation

sections[0].classList.add("show");


// Close sidebar after clicking menu

document.querySelectorAll(".sidebar a").forEach(link=>{

link.onclick=()=>{

sidebar.classList.remove("active");

}

});
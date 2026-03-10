// navbar shadow

window.addEventListener("scroll",function(){

let nav=document.querySelector(".navbar");

if(window.scrollY>50){
nav.classList.add("shadow");
}else{
nav.classList.remove("shadow");
}

});

// hero fade animation

window.addEventListener("load",function(){

let hero=document.querySelector(".hero-content");

hero.style.opacity="0";

setTimeout(()=>{
hero.style.transition="1s";
hero.style.opacity="1";
},50);

});

// animated counters

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 100;

if(count < target){
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCounter,20);
}else{
counter.innerText = target;
}

};

updateCounter();

});

// navbar scroll shadow

window.addEventListener("scroll",function(){

const navbar = document.querySelector(".modern-navbar");

if(window.scrollY > 50){
navbar.style.background = "white";
navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
}else{
navbar.style.background = "rgba(255,255,255,0.8)";
navbar.style.boxShadow = "none";
}

});

// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

});

});


/* =================================
SCROLL REVEAL ANIMATION
================================= */

function reveal(){

let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let elementVisible=150;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll", reveal);
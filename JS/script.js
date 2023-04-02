const menuButton = document.querySelector('.bx-menu');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.nav');
const sections = document.querySelectorAll('section');
const back = document.querySelector('#return');
const home = document.querySelector('#home');
const loader = document.querySelector('.loader-text');
const bar = document.querySelector('.bar-line');
const loaderContainer = document.querySelector('.loader');



links.forEach(link => {
    link.addEventListener('click', (e)=>{   
        sections.forEach(sec=>{
            if(e.target.getAttribute('data-link') == sec.getAttribute('id')){
                sec.scrollIntoView({behavior: "smooth"});
            } 
        })
    })
})

links.forEach(link => {
    link.addEventListener('click', (e)=>{
        links.forEach(lnk => lnk.classList.remove('active'));
        e.target.classList.add('active');
    })
})

back.addEventListener('click', ()=>{
    home.scrollIntoView({behavior: "smooth"});
})




function toggleMenu(){
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        menu.classList.add('close'); 
    } else {
        menu.classList.remove('close');
        menu.classList.add('open'); 
    }
}

menuButton.addEventListener('click', toggleMenu);

const start = Date.now();

window.addEventListener('load', ()=>{
    loaderContainer.style.display = "none";
})

const end = Date.now();

let a = end - start;
console.log(a);

let sec = 0;
setInterval(()=>{
    if(sec <= 100){
        loader.innerHTML = `${sec}%`;
        bar.style.width = `${sec}%`;
    }
    sec++;
}, a);


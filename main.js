'use strict';

// Make Navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }else{
    navbarMenu.classList.remove('open');
    scrollInterview(link);
    }
});
// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.add('open');
    navbarToggleBtn.addEventListener('click',()=>{
        navbarMenu.classList.remove('open');
    });
});

// Handle click contact me
const contactMe = document.querySelector('.home__Contact');
contactMe.addEventListener('click',()=>{
    scrollInterview('#contact')
});
// Make fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});
// show Arror up button
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visable');
    }else{
        arrowUp.classList.remove('visable');
    }
});
arrowUp.addEventListener('click',()=>{
    scrollInterview('#home');
});

function scrollInterview(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
} ;
// project
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }
    // Remove selection from the previous item and select the new one
        const active = document.querySelector('.category__btn.selected');
        active.classList.remove('selected');
        const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
        target.classList.add('selected');
        projectContainer.classList.add('anim-out');
        setTimeout(()=>{
          projects.forEach((project) =>{
            console.log(project.dataset.type);
            if(filter ==='*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});
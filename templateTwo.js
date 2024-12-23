'use strict'

// global variable
let links=document.querySelectorAll('.header .container ul li');
let ballsLanding=document.querySelectorAll('.image .shape div');
let ballsSkills=document.querySelectorAll('.skills .shape div');
let menu=document.querySelector('.header .container ul');
let buttonToggle=document.querySelector('.header .container .form');
let elementsPort=document.querySelectorAll('.portfolio .container ul li')

document.addEventListener('DOMContentLoaded',()=>{
    addClassActive(links,menu);
    addClassActive(ballsLanding);
    addClassActive(ballsSkills);
    // toggle menu
    toggleMenu(buttonToggle,menu);
    // toggle active link
    limitSection();
    // toggle active in portfolio
    addClassActive(elementsPort);

})
// add classe active on link in navbar
function addClassActive(elements,menu){
    elements.forEach(element => {
element.addEventListener('click',(e)=>{

    elements.forEach(element => {
        element.classList.remove('active');
    });
    element.classList.add('active');
    menu.classList.remove('active');

})        
    });
}

// toggle menu
function toggleMenu(element,menu){
    element.addEventListener('click',()=>{
        menu.classList.toggle('active');
    })

}

// timit place of section
function limitSection(){
    document.addEventListener('scroll',()=>{
     if(scrollY==0){
         links.forEach(element => {
             element.classList.remove('active');
         });
         links[0].classList.add('active');
     }
    })
}




'use strict'

// global variable
let links=document.querySelectorAll('.header .container ul li');
let ballsLanding=document.querySelectorAll('.image .shape div');
let ballsSkills=document.querySelectorAll('.skills .shape div');


document.addEventListener('DOMContentLoaded',()=>{
    addClassActive(links);
    addClassActive(ballsLanding);
    addClassActive(ballsSkills);
})
// add classe active on link in navbar
function addClassActive(elements){
    elements.forEach(element => {
element.addEventListener('click',(e)=>{

    elements.forEach(element => {
        element.classList.remove('active');
    });
    element.classList.add('active');
})        
    });
}
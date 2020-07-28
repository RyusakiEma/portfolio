const menubar = document.getElementById('menubars');
const navBar = document.getElementById('navBar');
const sideNav = document.getElementById('sideNav');
const sidenavLinks = document.querySelectorAll('.sidenav-list-items')
const hidenav = document.getElementById('hidenav');
//SECTIONS
const aboutSection = document.getElementById('aboutSection');
const celularesnica = document.getElementById('celularesnica');
const grekoostudio = document.getElementById('grekoostudio');

//Add shadow navbar on scroll
window.onscroll  = () => {
    adddNavShadow();

    fadeUpScoroll(aboutSection);
    fadeUpScoroll(celularesnica);
    fadeUpScoroll(grekoostudio);
    
}

// fadeup animation sections on scroll
const fadeUpScoroll = (section)=>{
    let sectionPosition = section.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
 
    if(sectionPosition < screenHeight){
        section.style.animation = 'fadeUp 1.11s'
    }
}
// Side nav show and hide
const sideNavToggle = ()=>{
    menubar.firstElementChild.classList.toggle('simple');
    sideNav.classList.toggle('active');
    body.classList.toggle('no-scroll');
}

//Add shadow navbar fucntion
const adddNavShadow = ()=> {
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        navBar.classList.add('navshadow');
    }else{
        navBar.classList.remove('navshadow');
    }
}

// Show or hide side nav on menu-icon
menubar.addEventListener('click', ()=>{
   sideNavToggle();
});

// hide side nav when clikc outside
hidenav.addEventListener('click', ()=>{
    sideNavToggle();
});

//hide side nav when click on links

sidenavLinks.forEach(element => {
   element.addEventListener('click', ()=>{
        sideNavToggle();
   });
});
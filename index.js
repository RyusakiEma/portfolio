let  screenHeight = window.innerHeight;
const menubar = document.getElementById('menubars');
const navBar = document.getElementById('navBar');
const sideNav = document.getElementById('sideNav');
const sidenavLinks = document.querySelectorAll('.sidenav-list-items')
const hidenav = document.getElementById('hidenav');
//SECTIONS
const aboutSection = document.getElementById('aboutSection');
const projectSection = document.getElementById('projectSection');
const celularesnica = document.getElementById('celularesnica');
const grekoostudio = document.getElementById('grekoostudio');
const sectionTitles = document.querySelectorAll('.section-titles')

//Add shadow navbar on scroll
window.onscroll  = () => {

    adddNavShadow();

    fadeRightBorder();

    fadeUpScroll(aboutSection);
    fadeUpScroll(projectSection);
    fadeUpScroll(celularesnica);
    fadeUpScroll(grekoostudio);  

}

getElementPosition = (element)=>{
    return element.getBoundingClientRect().top
}

fadeRightBorder = () =>{
    sectionTitles.forEach(title =>{
        let titlePosition = getElementPosition(title);
        if(titlePosition < screenHeight){
            title.style.setProperty('--fadeRight', 'fadeRight 800ms running');
        } 
    })
}

// fadeup animation sections on scroll
const fadeUpScroll = (section)=>{
    let sectionPosition = getElementPosition(section);
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
const menubar = document.getElementById('menubars');
const navBar = document.getElementById('navBar');
const sideNav = document.getElementById('sideNav');
const sidenavLinks = document.querySelectorAll('.sidenav-list-items')
const hidenav = document.getElementById('hidenav');

//Add shadow navbar on scroll
window.onscroll  = () => {
    adddNavShadow();
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
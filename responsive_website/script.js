burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navList')
rightnav = document.querySelector('.rightNav')

burger.addEventListener('click' ,()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-nav-resp');
    rightnav.classList.toggle('v-nav-resp');
})
const menu = document.querySelector("#menu");
const background = document.querySelector("#background");
const sidenav = document.querySelector("#sidenav");
const close_nav = document.querySelector("#close-nav");



menu.addEventListener('click' , () => {
    background.style.transform = 'translateX(200px) scale(.4) rotateY(-6deg) skewY(5deg)';
    background.style.filter = 'blur(1.5px)';
    sidenav.style.left = "2%" ;
})

close_nav.addEventListener('click' , () => {
    background.style.transform = 'translateX(0px) scale(1)';
    background.style.filter = 'blur(0)';
    sidenav.style.left = "-20%" ;
})
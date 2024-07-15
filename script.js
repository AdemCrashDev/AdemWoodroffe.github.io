//PRELOADER
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})




//Close Popup
document.querySelector('#close').addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});




//MOBILE BURGER MENU
const primaryNav = document.querySelector('.primary-navigation');
const navTogle = document.querySelector('.mobile-nav-toggle');

navTogle.addEventListener('click', () =>{
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        navTogle.setAttribute('aria-expanded', true);
    } else if (visibility === "true"){
        primaryNav.setAttribute('data-visible', false);
        navTogle.setAttribute('aria-expanded', false);

    }
});








//NAV ACTIVE SECTIONS
let sections = document.querySelectorAll('section', 'header')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}








//DATABASE SECTION IMAGE SLIDER
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlides(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("database-slide-image");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}









//DISPLAY CURRENT YEAR IN FOOTER
document.querySelector('#currentYear').innerText = (new Date().getFullYear());
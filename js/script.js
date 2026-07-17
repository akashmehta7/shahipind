const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});
const links = document.querySelectorAll("#nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.style.background = "rgba(0,0,0,0.95)";
    }else{
        navbar.style.background = "rgba(0,0,0,0.6)";
    }

});
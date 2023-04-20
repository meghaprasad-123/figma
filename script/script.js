const hamburger = document.querySelector(".hamburger"); 
const menu = document.querySelector(".nav-opt"); 
hamburger.addEventListener("click", function () 
{ this.classList.toggle("active");
 menu.classList.toggle("active");
 }); 
window.addEventListener("resize", function () { 
    if (window.innerWidth > 970) { 
        hamburger.classList.remove("active");
         menu.classList.remove("active");
         } 
        });
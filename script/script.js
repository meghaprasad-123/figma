const hamburger = document.querySelector(".hamburger"); 
const menu = document.querySelector(".sidebar"); 
hamburger.addEventListener("click", function () 
{ 
   
 menu.classList.toggle("hidden");
 }); 
window.addEventListener("resize", function () { 
    if (window.innerWidth > 970) { 
        hamburger.classList.add("hidden");
         menu.classList.add("hidden");
         } 
        });
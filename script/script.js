const hamburger = document.querySelector(".hamburger"); 
const menu = document.querySelector(".sidebar"); 
hamburger.addEventListener("click", function () 
{ 
   
 menu.classList.toggle("hidden");
 }); 
window.addEventListener("resize", function () { 
    if (window.innerWidth > 910) { 
        hamburger.classList.add("hidden");
         menu.classList.add("hidden");
         } 
        });



        // $('.carousel').slick({
        //     centerMode: true,
        //     centerPadding: '60px',
        //     slidesToShow: 4,
        //     autoplaySpeed: 2000,
        //     autoplay: false,
        //     responsive: [
        //       {
        //         breakpoint: 768,
        //         settings: {
        //           arrows: false,
        //           centerMode: true,
        //           centerPadding: '40px',
        //           slidesToShow: 3
        //         }
        //       },
        //       {
        //         breakpoint: 480,
        //         settings: {
        //           arrows: false,
        //           centerMode: true,
        //           centerPadding: '40px',
        //           slidesToShow: 1
        //         }
        //       }
        //     ]
        //   });
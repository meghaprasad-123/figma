const hamburger = document.querySelector(".hamburger");
const cut = document.querySelector(".cut")
const menu = document.querySelector(".sidebar");
hamburger.addEventListener("click", function () {
    menu.style.left = "0"
    //  menu.classList.toggle("hidden");
    document.body.style.overflow = "hidden";
});
cut.addEventListener("click", function () {
    menu.style.left = "-35vw"
    document.body.style.overflow = "auto";

});
window.addEventListener("resize", function () {
    if (window.innerWidth > 910) {
        hamburger.classList.add("hidden");
        menu.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
});



$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
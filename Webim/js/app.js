// Burger munu

// let burger = document.querySelector('.burger');
// burger.addEventListener('click', function () {
//     burger.classList.toggle('active');
// });

let burger = document.querySelector('.burger');
let inner = document.querySelector('.header__inner');
burger.addEventListener('click', function () {
    inner.classList.toggle('mode');
    burger.classList.toggle('active');
});

// Header fixed 

$(function () {
    let nav = $(".header");
    let content = $(".header");
    let contentH = content.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll resize", function () {
        scrollPos = $(this).scrollTop();
        if (scrollPos > contentH + 180) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    });
});


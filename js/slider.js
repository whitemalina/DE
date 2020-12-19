$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 60,
    nav: true,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
    ],
    autoplay: true,
    center: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        900: {
            items: 2
        },
        1800: {
            items: 3
        }
    }
})
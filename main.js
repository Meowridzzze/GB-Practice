$(function() {

    $('.header__info').slick({
        dots: true,
    });

    $('.posts__cards').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
    });

})
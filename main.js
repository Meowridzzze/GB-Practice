$(function() {

    $('.header__info').slick({
        dots: false,
    });

    $('.posts__cards').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        speed: 500,
    });

})
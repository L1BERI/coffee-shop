$(function () {
  $(".rateYo").rateYo({
    rating: 4.9,
    starWidth: "28px",
    halfStar: true,
    spacing: "10px",
    readOnly: true,
    ratedFill: "#1B1B1D"
  })
  $(".slider_rating").rateYo({
    rating: 4.9,
    starWidth: "20px",
    halfStar: true,
    spacing: "2px",
    readOnly: true,
    ratedFill: "#1B1B1D"
  })
  $(".customers__rating-stars").rateYo({
    rating: 4.9,
    starWidth: "20px",
    halfStar: true,
    spacing: "2px",
    readOnly: true,
  })
  $('.customers__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    speed: 300,
    dots: false,
    waitForAnimate: false,
    variableWidth: true,
    responsive: [{
      breakpoint: 900,
      settings:{
        slidesToShow: 1
      }
    }]
  })

  $('.slider__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
  })
  $('.slider__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
  })


$

  $('.burger,.overlay').on('click', function (e) {
    e.preventDefault()
    $('.burger').toggleClass('burger--active')
    $('.header__top').toggleClass('header__top--active')
    $('.overlay').toggleClass('overlay--visible')
  })
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--active') === false) {
      $('.burger').addClass('burger--scroll')
      $('.goup-btn').addClass('goup-btn--active')
    } else {
      $('.burger').removeClass('burger--scroll')
      $('.goup-btn').removeClass('goup-btn--active')
    }
   
  }, 0);

  setInterval(()=> {
    if ($('.burger').hasClass('burger--active')){
      $('body').css('overflow-y', 'hidden')
    } else{
      $('body').css('overflow-y', 'scroll')
    }
  })

  $(".header__top-nav a, .goup-btn").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  })
})
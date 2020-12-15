$(function(){

var mixer = mixitup('.products__inner-box')

$('.slider__carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false
});

$(".rate-star").rateYo({
  rating: 4,
  starWidth: "12px",
  readOnly: true
});

});

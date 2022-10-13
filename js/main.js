(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


  // offcanvas-js
  $('.header-search-button').click(function() {
    $('.header-search-modal').addClass('active');
  });
  $('.header-search-modal-close').click(function() {
    $('.header-search-modal').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".header-search-modal");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.header-search-modal').removeClass('active');
    }
  });


  // owl-carousel
  $('.podcast-slider-active').owlCarousel({
    loop:true,
    margin:50,
    responsiveClass:true,
    nav: true,
    // stagePadding:102,
    navText: ['<span class="fal fa-chevron-left"></span>','<span class="fal fa-chevron-right"></span>'],
    responsive:{
        0:{

            items:1,
            nav:false,
            autoWidth:true,
            margin:12,
            dots: false
        },
        575:{
          items:2,
          nav:false,
          margin:15,
          dots: false
        },
        767:{
            items:3,
            nav:false,
            margin:15,
            dots: false
        },
        991:{
            items:4,
            margin:15
        },
        1199:{
          items:5,
          margin:15
      }
    }
  });

  
  // podcast-audio
  $('.podcast-audio-play-button').click(function(){
    // element-handle
    $('.podcast-slide').removeClass('audio-active');
    $(this).parents('.podcast-slide').addClass('audio-active');
    // audio-handle
    $('audio').each(function(){
      this.pause(); // Stop playing
      this.currentTime = 0; // Reset time
    }); 
    $(this).siblings('.title-b').find('.audio')[0].play();

  })


  
  // slick slider
  $('.testimonial-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.test-img-active'
  });
  $('.test-img-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-active',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    arrows: false
  });


})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})












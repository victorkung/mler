$(document).ready(function() {
    'use strict';

// Smooth scroll 
  $('.side-nav a').not('first').on( 'click', function(){
     var offset = 10;
  $('body').animate( {
     scrollTop: $($(this).attr('href') ).offset().top - offset + 'px'
     }, 800);
  });

//mobile nav
$('#nav-open').on('click', function(e){
	e.preventDefault();
  $('.mobile-nav').fadeIn();
});
$('#nav-close').on('click', function(e){
  e.preventDefault();
  $('.mobile-nav').fadeOut();
});


//modal
$('.contact-btn').click(function(e){
	e.preventDefault();
	$('.modal').fadeIn();
});

$('#modal-close-btn').click(function(e){
  e.preventDefault();
  $('.modal').fadeOut();
});


});
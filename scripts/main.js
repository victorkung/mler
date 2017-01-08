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
$('#nav-toggle').on('click', function(e){
	$('nav').toggleClass('active-nav');
	e.preventDefault();
});

//modal
$('#contact-btn').click(function(e){
	e.preventDefault();
	$('.modal').fadeOut();

});


});
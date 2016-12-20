$(document).ready(function() {
    'use strict';

// Smooth scroll 
  $('.side-nav a').not('first').on( 'click', function(){
     var offset = 10;
  $('body').animate( {
     scrollTop: $($(this).attr('href') ).offset().top - offset + 'px'
     }, 800);
  });

});
$(window).scroll(function(){
    var windowScroll = $(this).scrollTop();

  $('.logo').css({
    'transform': 'translate(0px, '+ windowScroll +'%)'
  });

  $('.orbit-img').css({
    'transform': 'translate( '+ windowScroll*1.05 +'px,0px)'
  });

  $('.container').css({
    'transform': 'translate( 0px,'+ -windowScroll*0.05 +'px)'
  });
  
  $('.struktur modeliklim').css({
    'transform': 'translate( 0px,'+ -windowScroll*0.25 +'px)'
  });


});
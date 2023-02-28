$(window).scroll(function(){
  var windowScroll = $(this).scrollTop();

  $('.logo').css({
    'transform': 'translate(0px, '+ windowScroll +'%)'
  });
  $('.btn').css({
    'transform': 'translate( 0px,'+ windowScroll*1.05 +'px)'
  });

  $('#stars').css({
    'transform': 'translate( '+ windowScroll*0.25 +'px,0px)'
  });

  $('#sun').css({
    'transform': 'translate( '+ windowScroll*0.7 +'px,0px)'
  });

  $('#earth_front').css({
    'transform': 'translate( '+ -windowScroll*0.7 +'px,0px)'
  });
  
});
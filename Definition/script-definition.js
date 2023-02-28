const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

$(window).scroll(function(){
    var windowScroll = $(this).scrollTop();

  $('.orbit-img').css({
    'transform': 'translate(0px, '+ windowScroll*0.35 +'px)'
  });
  $('.btn').css({
    'transform': 'translate( 0px,'+ windowScroll*1.05 +'px)'
  });

  $('.logo').css({
    'transform': 'translate( 0px,'+ windowScroll*0.45 +'px)'
  });
});
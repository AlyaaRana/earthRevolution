var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let stars = document.getElementById('stars');
let sun = document.getElementById('sun');
let earth_front = document.getElementById('earth_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.top = value * 0.5 + 'px';
  sun.style.top = value * 0.5 + 'px';
  earth_front.style.top = value * 0.5 + 'px';
  text.style.marginRight = value * 4 * 'px';
})

window.onscroll = function(){
  textScrollFunction()
}

function textScrollFunction() {
  if (window.scrollY > 10) {
    document.getElementById("text").style.right = "5px";
  }
}

console.log(stars)
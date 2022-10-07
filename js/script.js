"use strict"

$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger').toggleClass('header__burger_active')
    $('.menu-mobile').toggleClass('menu-mobile_active')
    $('.wrapper').toggleClass('lock');
    $('body').toggleClass('lock');
  });
});

window.onload = function(){
  const parallax = document.querySelector('.intro');
  if (parallax) {
    const bg = document.querySelector('.intro__background');
    console.log(bg);
    const speed = 0.05;

    let positionX = 0;
    let coordXpercent = 0;

    function setMouseParallax(){
      const distX = coordXpercent - positionX;

      positionX += (distX*speed);
      bg.style.cssText = `transform: translate(${-positionX / 20}%);`;
      requestAnimationFrame(setMouseParallax);
    }
    setMouseParallax();

    parallax.addEventListener("mousemove", function(e){
      const parallaxWidth = parallax.offsetWidth;
      const coordX = e.pageX - parallaxWidth / 2;
      coordXpercent = coordX / parallaxWidth * 100;
    });
  }
}

new Swiper('.past__slider', {
  navigation: {
    prevEl: '.past__prev',
    nextEl: '.past__next',
  },
  simulateTouth: true,  // дозволяє свайп мишою
  touchRatio: 1,        // чутливість свайпу (0 вимк на всії ппристроях)
  touchAngle: 45,       // кут спрацювання свайпу
  grabCursor: true,     // зміна вигляду курсору (рука)
  slidesPerView: 2,  // к-ть слайдів для показа (можна дробове)
  spaceBetween: 20,
  breakpoints: {        // адаптивність (mobile-first)
    320: {              // @media (min-width: 320px)
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
  },
});
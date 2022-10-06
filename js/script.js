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
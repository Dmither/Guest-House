$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger').toggleClass('header__burger_active')
    $('.menu-mobile').toggleClass('menu-mobile_active')
    $('.wrapper').toggleClass('lock');
    $('body').toggleClass('lock');
  });
});
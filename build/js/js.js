$(document).ready(function() {

  $(window).resize(() => {    
    let windowWidth = $(window).width();
    const mobileNav = $('.mobileNav');
    if(windowWidth > 430) {
      mobileNav.css({
        "width": "300px",
        "height": "300px"
      });
    } else {
      mobileNav.css({
        "width": "100%",
        "height": "100vh"
      });
    }
  });

  $('#Navigation').click(function(){
    $('#Navigation').toggleClass('active');
    $('.mobileNav').toggleClass('active');
  });

  $('.smoothScroll').click(function(e) {
    e.preventDefault();
    let hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 750);
  });
});

$('.smoothScrollNav').click(function(e) {
  e.preventDefault();
  let hash = this.hash;
  $('#Navigation').toggleClass('active');
  $('.mobileNav').toggleClass('active');
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 750);
});
// does not loop
function checkThis() {
  if ($('.socials.active').next('.socials').length > 0) {
    setTimeout(function() {
      $('.socials.active').removeClass('active').next('.socials').addClass('active');
      checkThis();
    }, 1000);
  }
}
checkThis();

// loops
function checkThat() {
  if ($('ul li:first-child').next('li').length > 0) {
    setTimeout(function() {
      $('ul li.active').removeClass('active').next('li').addClass('active');
      checkThat();
      $('ul li:first-child').appendTo($('ul'));
    }, 1000);
  }
}
checkThat();

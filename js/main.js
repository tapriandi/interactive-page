var scroll = 0;
var curr = scroll;
var isScrolling = false;
var previous = 0;
var loop;

function parallax() {
  isScrolling = true;

  loop = setInterval(() => {
    if ( curr - scroll == 0 ) {
      clearInterval(loop);
      isScrolling = false;
      return;
    }
    
    curr += (scroll < curr) ? -0.5 : 0.5;

    $('.layer').each(function() {
      $(this).css('left', -curr * $(this).data("speed"));
    });

    console.log("Curr: ", curr);

  }, 25);
}

$(document).ready(() => {
  $('#content').mousewheel((e, dir) => {
    e.preventDefault();
    if ( Math.abs(dir) > 1) dir = Math.sign(dir);
    if ( previous !== dir ) {
      previous = dir;
      isScrolling = false;
      scroll = curr;
      clearInterval(loop);
    }
    if ( scroll - dir >= 0 ) scroll -= dir;
    if ( !isScrolling ) parallax();
  });
  
})



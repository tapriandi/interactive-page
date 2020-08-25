$(window).ready( function() {
  $('.menu').click( function() {
    $('.box-lines').toggleClass('active')
  });

  // set width
  var widthBg = $('.main-bg img').width();
  $('.sections').css({width: widthBg + 'px'});
  console.log(widthBg);

  // set width on resize
  $( window ).resize(function() {
    widthBg = $('.main-bg img').width();
    console.log(widthBg);

    $('.sections').css({width: widthBg + 'px'});
  });

  $('#reg-eye').click(function() {
    $('#reg-eye-msg').toggleClass('close')
  })
  $('#dry-eye').click(function() {
    $('#dry-eye-msg').toggleClass('close')
  })
  $('#dry-product').click(function() {
    $('#dry-product-msg').toggleClass('close')
  })

  var titles = $(".sectionTitle"),
      controller = new ScrollMagic.Controller(),
      tl = new TimelineMax();

  // create timeline
  // this could also be created in a loop
  tl.to("#insto-slideContainer", 1, {xPercent: -20}, "label1");
  tl.to("#insto-slideContainer", 1, {xPercent: -40}, "label2");
  tl.to("#insto-slideContainer", 1, {xPercent: -60}, "label3");
  tl.to("#insto-slideContainer", 1, {xPercent: -80}, "label4");

  new ScrollMagic.Scene({
    triggerElement: "#insto-wrapper",
    triggerHook: "onLeave",
    duration: "1200%"
  })
    .setPin("#insto-slideContainer")
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
  
  
})

// $('.main-bg img').width() == $('.sections').width()
$(window).ready( function() {
  $('.menu').click( function() {
    $('.box-lines').toggleClass('active')
  });

  // set width
  var widthBg = $('.main-bg img').width();
  $('.insto_wrapper').css({width: widthBg + 'px'});
  // console.log(widthBg);

  // set width on resize
  $( window ).resize(function() {
    widthBg = $('.main-bg img').width();
    $('.insto_wrapper').css({width: widthBg + 'px'});
  });

  // toggle btn message
  $('#reg-eye').click(function() {
    $('#reg-eye-msg').toggleClass('close')
  })
  $('#dry-eye').click(function() {
    $('#dry-eye-msg').toggleClass('close')
  })
  $('#dry-product').click(function() {
    $('#dry-product-msg').toggleClass('close')
  })

  const insto = document.querySelector('#insto')
  const wrapper = document.querySelector('#wrapper')
  const slides = insto.querySelectorAll('.insto_slide')
  const amount = slides.length
  const horizontal = new TimelineMax()
  const controller = new ScrollMagic.Controller()
  const controller2 = new ScrollMagic.Controller({
    vertical: false,
  })

  horizontal.add([
    TweenMax.to(wrapper, 1, { x: `-${(100 / amount) * (amount - 1)}%` })
  ])

  new ScrollMagic.Scene({
    triggerElement: insto,
    triggerHook: 'onLeave',
    duration: '2000%'
    // duration: `${amount * 100}%`
  })
    .setPin(insto)
    .setTween(horizontal)
    .addTo(controller)

  slides.forEach((item) => {
    const pulse = item.querySelectorAll('.pulse-btn')
    const tween = new TimelineMax()
    tween.to(pulse, 1, {
      transitionDelay: '1.5s',
      transform: 'scale(1)',
      animation: 'pulse 1.2s infinite cubic-bezier(0.3, 0, 0, 1)'
    }, 0)
    new ScrollMagic.Scene({
      triggerElement: item,
      triggerHook: 'onCenter',
      offset: -300,
      duration: '20%'
    })
    .setTween(tween)
    .addTo(controller2)
    .addIndicators()

  })


  // set padding-top
  // $('.scrollmagic-pin-spacer')
  
})
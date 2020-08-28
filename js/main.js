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
  
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  function instoPlay() {
    $('#insto').css({
      display: 'block', opacity: 1, zIndex: 1
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
      // duration: '2500%'
      duration: `${amount * 1000}%`
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

    // intialize scrollbar
    var scroll = Scrollbar.init(
      document.querySelector("#insto")
    );
    // listener smooth-scrollbar, update controller
    scroll.addListener(function(status) {
      y = status.offset.y;
      if(isChrome){ 
        controller.update();
      } else {
        scenes.forEach(function(scene){
            scene.refresh();       
        });
      }
    });
  }
  instoPlay()
/**/
  // loader
  var dots = $('.dot'),
      loader = $('#loader'),
      tlLoader = new TimelineMax({
        repeat: 3,
        onComplete: loadStart
      });
  tlLoader
    .staggerFromTo(dots, 0.5, {
        y: 0, autoAlpha: 0
      }, {
        y: 20, autoAlpha: 1, ease: Back.easeInOut
      }, 0.1
    )
    .fromTo(loader, 0.3, {
        autoAlpha: 1, scale: 1
      }, {
        autoAlpha: 0, ease: Power0.easeNone
      }, 1
    );
  
  // after loading - start
  function loadStart() {
    $('#start').css({
      display: 'block', opacity: 1, zIndex: 1
    })
  }
/**/ 
  // var boxImg = $('.box-img'),
  //     insto = $('#insto'),
  //     boxStart = $('.box-start'),
  //     tlStart = new TimelineMax({
  //       onComplete: instoPlay
  //     });
  // tlStart
  //   to(boxImg, 1, {y: 300})
    // .fromTo(boxStart, 1, {
    //     autoAlpha: 1, scale: 1
    //   }, {
    //     autoAlpha: 0, ease: Power0.easeNone
    //   },
    //   1
    // );
    

    // $("#insto-start").on("click", function() {
    //   tlStart.play();
    // })
    /**/
    
})
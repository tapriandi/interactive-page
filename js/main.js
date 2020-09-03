$(window).ready( function() {
  $('.menu').click( function() {
    $('.box-lines').toggleClass('active')
  });

  // set width
  var mainBgWidth = $('.main-bg img').width();
  $('.insto_wrapper').css({width: mainBgWidth + 'px'});
  // console.log(mainBgWidth);

  // set width on resize
  $( window ).resize(function() {
    mainBgWidth = $('.main-bg img').width();
    $('.insto_wrapper').css({width: mainBgWidth + 'px'});
  });

  // toggle btn message
  $('#reg-eye').click(function() {
    $('#reg-eye-msg').toggleClass('close')
  });
  $('#dry-eye').click(function() {
    $('#dry-eye-msg').toggleClass('close')
  });
  $('#dry-product').click(function() {
    $('#dry-product-msg').toggleClass('close')
  });
  
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  function instoPlay() {
    var insto = document.querySelector('#insto'),
      wrapper = document.querySelector('#wrapper'),
      slides = insto.querySelectorAll('.insto_slide'),
      amount = slides.length,
      horizontal = new TimelineMax(),
      controller = new ScrollMagic.Controller(),
      controller2 = new ScrollMagic.Controller({
        vertical: false
      });

    horizontal.add([
      TweenMax.to(wrapper, 1, { x: `-${(100 / amount) * (amount - 1)}%` })
    ]);

    new ScrollMagic.Scene({
      triggerElement: insto,
      triggerHook: 'onLeave',
      // duration: '2500%'
      duration: `${amount * 2000}%`
    })
      .setPin(insto)
      .setTween(horizontal)
      .addTo(controller)

    slides.forEach(function(item) {
      var pulse = item.querySelectorAll('.pulse-btn')
      var tween = new TimelineMax()
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
    });

    // intialize smooth scrollbar
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
  // instoPlay()

  // loader
  var dots = $('.dot'),
      loader = $('#loader'),
      tlLoader = new TimelineMax({
        repeat: 1,
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
  var startContainer = $('#start'),
      skyBgHeight = $('.sky-bg').height()

  function loadStart() {
    new TimelineMax()
      .to(startContainer, 1, {
        display: 'block',
        opacity: 1,
        zIndex: 1
      })
  };

  var instoStartBtn = $('#insto-start-btn')
  function clickStart() {
    new TimelineMax()
      .to(start, 0.5, {
        y: `-${skyBgHeight}px`
      })
  }

  // insto play - after click button start
  instoStartBtn.click(function() {
    clickStart()
    setTimeout(function() {
      $('#insto').css({
        display: 'block',
        opacity: 1,
        zIndex: 10,
        transition: '0.8s'
      });
      $('.insto-start').css({
        zIndex: '-1', display: 'none'
      })
      instoPlay()
    }, 5000)
  })
})
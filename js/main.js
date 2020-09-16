jQuery(window).ready(function () {
  jQuery('.menu').click(function () {
    jQuery('.box-lines').toggleClass('active')
  });

  // set width
  var mainBgWidth = (jQuery('.main-bg img').width() * 0.90);
  jQuery('.insto_wrapper').css({
    width: mainBgWidth + 'px'
  });
  // console.log(mainBgWidth);

  // toggle btn message
  jQuery('#reg-eye').click(function () {
    jQuery('#reg-eye-msg').toggleClass('close')
  });
  jQuery('#dry-eye').click(function () {
    jQuery('#dry-eye-msg').toggleClass('close')
  });
  jQuery('#dry-product').click(function () {
    jQuery('#dry-product-msg').toggleClass('close')
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
    
    // Insto animation scroll
    horizontal.to(wrapper, 1, {
      x: '-' + (100 / amount) * (amount - 1) + '%'
    })
    new ScrollMagic.Scene({
        triggerElement: insto,
        triggerHook: 'onLeave',
        duration: amount * 1200 + '%'
      })
      .setPin(insto)
      .setTween(horizontal)
      .addTo(controller)

    slides.forEach(function (item) {
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
      // .addIndicators()
    });

    // lottie bike animation
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('insto-bike'),
      path: './path/insto-bike.json',
      renderer: 'svg',
      loop: true,
      autoplay: false,
      name: "insto bike",
    });

    var bike = new TimelineMax({
      repeat: 10
    });
    bike.to({
      frame: 0
    }, 1, {
      frame: animation.totalFrames - 1,
      onUpdate: function () {
        animation.goToAndStop((Math.round(this.progress() * 300)), true)
      },
      ease: Linear.easeNone
    })
    new ScrollMagic.Scene({
        duration: amount * 1000 + '%',
        offset: 1
      })
      .setPin(".insto-bike-wrapper")
      .setTween(bike)
      .addTo(controller);



    // intialize smooth scrollbar
    var scroll = Scrollbar.init(
      document.querySelector("#insto")
    );

    // listener smooth-scrollbar, update controller
    scroll.addListener(function (status) {
      y = status.offset.y;
      if (isChrome) {
        controller.update();
      } else {
        scenes.forEach(function (scene) {
          scene.refresh();
        });
      }
    });
  }
  // instoPlay()


  

  // loader
  var dots = jQuery('.dot'),
    loader = jQuery('#loader'),
    tlLoader = new TimelineMax({
      repeat: 1,
      onComplete: loadStart
    });
  tlLoader
    .staggerFromTo(dots, 0.5, {
      y: 0,
      autoAlpha: 0
    }, {
      y: 20,
      autoAlpha: 1,
      ease: Back.easeInOut
    }, 0.1)
    .fromTo(loader, 0.3, {
      autoAlpha: 1,
      scale: 1
    }, {
      autoAlpha: 0,
      ease: Power0.easeNone
    }, 1);

  // after loading - start
  var startContainer = jQuery('#start'),
    skyBgHeight = jQuery('.sky-bg').height();

  function loadStart() {
    new TimelineMax()
      .to(startContainer, 1, {
        display: 'block',
        opacity: 1,
        zIndex: 1
      })
  };

  var instoStartBtn = jQuery('#insto-start-btn');

  function clickStart() {
    new TimelineMax()
      .to(start, 0.5, {
        y: '-' + skyBgHeight + 'px'
      })
  }

  // insto play - after click button start
  instoStartBtn.click(function () {
    clickStart()
    setTimeout(function () {
      jQuery('#insto').css({
        display: 'block',
        opacity: 1,
        zIndex: 1,
        transition: '0.8s'
      });
      jQuery('.insto-start').css({
        zIndex: '-1',
        display: 'none'
      })
      instoPlay()
    }, 5000)
  })
})

// set width on resize
jQuery(window).resize(function () {
  mainBgWidth = jQuery('.main-bg img').width();
  jQuery('.insto_wrapper').css({
    width: mainBgWidth + 'px'
  });
});
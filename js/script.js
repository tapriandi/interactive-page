//////////////////////////

//FIRST animation : https://assets.lottiefiles.com/datafiles/3gpFPHJI4WlLe62/data.json



var animData = {
  container: document.getElementById('lottie-three'),
  path: 'https://assets.lottiefiles.com/datafiles/7HMs29Q0NhBUKCp/data.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "animScroll",
}, animScroll, tl;


var animScroll = bodymovin.loadAnimation(animData)


animScroll.addEventListener('DOMLoaded', function () {
  tl = new TimelineMax({repeat: 0})
  tl.to({frame: 0}, 1, {
    frame: animScroll.totalFrames-1,
    onUpdate: function() {
      animScroll.goToAndStop(Math.round(this.target.frame), true)
    },
    Ease:Linear.easeNone
  })
  
  var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: ".env-three",
  offset: 300,
  duration: 3000 }).setTween(tl).setPin("#lottie-three").addTo(controller);

})


// animation used: https://www.lottiefiles.com/29-motorcycle


//first animation ///////////////////



var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'),
  path: 'https://assets.lottiefiles.com/datafiles/jW5K6vtuzJFJSxd/data.json',
  renderer: 'svg',
  loop: true,
  autoplay: false,
  name: "Bike",
})


animation.addEventListener('DOMLoaded', function () {
  
  //play the light mode by default

  document.getElementById('dark-btn').addEventListener("click", function() {
    animation.playSegments([105, 150], true)
  })

   document.getElementById('light-btn').addEventListener("click", function() {
    animation.playSegments([0, 100], true)
  })

    document.getElementById('pause-btn').addEventListener("click", function() {
    animation.pause();
  })
  
      document.getElementById('play-btn').addEventListener("click", function() {
    animation.play();
  })


  
})


//////////////////////////

//second animation

// https://assets.lottiefiles.com/datafiles/xagAVK6Z2hhaURL/data.json

var animationTwo = bodymovin.loadAnimation({
  container: document.getElementById('lottie-two'),
  path: 'https://assets.lottiefiles.com/datafiles/xagAVK6Z2hhaURL/data.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "button",
})


animationTwo.addEventListener('DOMLoaded', function () {
  document.getElementById('lottie-two').addEventListener("click", function() {
    animationTwo.playSegments([0, 19], true);
    
  })
})






//////////////////////////////

// fourth animation https://assets.lottiefiles.com/datafiles/c8496f99bf2fc2521b7970aae7de368f/favorite_black.json



var animationFour = bodymovin.loadAnimation({
  container: document.getElementById('lottie-four'),
  path: 'https://assets.lottiefiles.com/datafiles/c8496f99bf2fc2521b7970aae7de368f/favorite_black.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "buttonTwo",
})


animationFour.addEventListener('DOMLoaded', function () {
  document.getElementById('lottie-four').addEventListener("click", function() {
    animationFour.playSegments([60, 100], true);
    
  })
})


/////////////////////////


/////    animation five: https://assets.lottiefiles.com/datafiles/37eUecfCINgL4BgFY1NcvncT1LRajr8hJkkfQ9DY/star/star.json

var animationFive = bodymovin.loadAnimation({
  container: document.getElementById('lottie-five'),
  path: 'https://assets.lottiefiles.com/datafiles/37eUecfCINgL4BgFY1NcvncT1LRajr8hJkkfQ9DY/star/star.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "buttonThree",
})


animationFive.addEventListener('DOMLoaded', function () {
  document.getElementById('lottie-five').addEventListener("click", function() {
    animationFive.playSegments([10, 100], true);
    
  })
})


////////////////////////////////////

/// animation six: https://assets.lottiefiles.com/datafiles/Unitn8Nj7K22mia/data.json

var animationSix = bodymovin.loadAnimation({
  container: document.getElementById('lottie-six'),
  path: 'https://assets.lottiefiles.com/datafiles/Unitn8Nj7K22mia/data.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "buttonFour",
})


animationSix.addEventListener('DOMLoaded', function () {
  document.getElementById('lottie-six').addEventListener("click", function() {
    animationSix.playSegments([10, 100], true);
    
  })
})


////////////////////////////

// animation 7 https://assets.lottiefiles.com/datafiles/HVBenAp3V6Y3nLl/data.json

var animationSeven = bodymovin.loadAnimation({
  container: document.getElementById('lottie-seven'),
  path: 'https://assets.lottiefiles.com/datafiles/HVBenAp3V6Y3nLl/data.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "buttonFive",
})


animationSeven.addEventListener('DOMLoaded', function () {
  document.getElementById('lottie-seven').addEventListener("click", function() {
    animationSeven.playSegments([0, 50], true);
    
  })
})







var animDataTwo = {
  container: document.getElementById('lottie-coin'),
  path: 'https://assets.lottiefiles.com/datafiles/jORpumH9Yn0XoXQ/data.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "animScrollTwo",
}, animScrollTwo, tl;


var animScrollTwo = bodymovin.loadAnimation(animDataTwo)


animScrollTwo.addEventListener('DOMLoaded', function () {
  tl = new TimelineMax({repeat: 0})
  tl.to({frame: animScrollTwo.totalFrames-1}, 1, {
    frame: 0,
    onUpdate: function() {
      animScrollTwo.goToAndStop(Math.round(this.target.frame), true)
    },
    Ease:Linear.easeNone
  })
  
  var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: ".env-last",
  offset: 300,
  duration: 6000 }).setTween(tl).setPin("#lottie-coin").addTo(controller);

})
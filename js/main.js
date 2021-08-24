// play animation

animTitle()
setInterval(() => { document.getElementById('btn-start').classList.add('show') }, 3000);
setInterval(() => { document.getElementById('character').classList.add('show') }, 11000);


function start() {
  let splash = document.querySelector('.splash');
  splash.classList.add('hide');

  document.querySelector('.bg-home').style.top = 0
  document.querySelector('.bg-shadow').style.top = 0
  document.querySelector('.bg-road').style.top = 0
  
  initLottie()
  initSmoothScrollbar()
}




// --------------------------------------------------------
// variable
var scrollbarInstance = null,
  direction = '',
  x = 0,
  speed = 0.8,
  bike = null,
  scrollPercent = 0

// chage to horizontal
class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = "horizontalScroll";

  transformDelta(delta, fromEvent) {
    if (!/wheel/.test(fromEvent.type)) {
      return delta;
    }

    const { x, y } = delta;

    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y,
    };
  }
}
Scrollbar.use(HorizontalScrollPlugin);

function initSmoothScrollbar() {
  scrollbarInstance = Scrollbar.init(
    document.querySelector(".scroll-wrapper"), {
      damping: 0.02,
    }
  );
  scrollbarInstance.addListener(listener);
}

// lottie
function initLottie() {
  bike = bodymovin.loadAnimation({
    container: document.getElementById('character'),
    path: './assets/insto-bike.json',
    renderer: 'svg',
    loop: true,
    autoplay: false,
    name: "insto bike",
  });
}

// direction listener
function listener({ offset }) {
  if (offset.x >= x) {
    direction = "right";
  } else {
    direction = "left";
  }

  scrollPercent = (100 * scrollbarInstance.scrollLeft) / document.querySelector(".scene-wrapper").getBoundingClientRect().width;
  x = offset.x;
  parallax(document.querySelector('.bg-home'), offset.x, -0.5, 1)
}


function parallax(el, x, value, scale) {
  el.style.transform = `translate3d(${x * value}px, 0, 0) scale(${scale})`;
}

// function move2(x) {
//   let frame = bike.totalFrame,
//     calc = ((scrollPercent % speed) / speed) * frame

//   bike.goToAndStop(Math.round(calc), true)
// }

function move(direction) {
  let that = this;
  direction == "right" ? (x += 240) : (x -= 240);
  TweenMax.to(option, 1, {
    x: x,
    ease: Power4.easeOut,
    onUpdate() {
      that.scrollbarInstance.scrollTo(option.x, 0);
    },
  });

  // console.log(direction)
}


function animTitle() {
  let id = document.getElementById('main-title'),
      text = "Cerita Mata",
      temp = [],
      count = 0

  for (let i = 0; i < text.length; i++) {
    temp.push(text[i])
  }

  setInterval(() => {
    if (count < temp.length) {
      let s = document.createElement('span')
      if(text[count] == ' ') {
        s.innerHTML = '&nbsp;'
      } else {
        s.innerHTML = text[count]
      }
      id.append(s)
      count ++
    }
  }, 200);
}
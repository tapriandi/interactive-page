// play animation
document.addEventListener('DOMContentLoaded', () => {
  duplicateImage('bg-home', './assets/images/bg/gedung.png', 1)
  duplicateImage('bg-road', './assets/images/bg/jalan.png', 10)
  animTitle()
  setTimeout(() => { document.getElementById('btn-start').classList.add('show') }, 3000);
  setTimeout(() => { document.getElementById('character').classList.add('show') }, 10000);
})


function start() {
  let splash = document.querySelector('.splash');
  splash.classList.add('hide');

  document.querySelector('.bg-home').style.top = 0
  document.querySelector('.bg-shadow').style.top = 0
  document.querySelector('.bg-road').style.top = 0
  
  
  smokes('smoke-1', 10)
  smokes('smoke-2', 40)
  smokes('smoke-3', 80)
  
  setTimeout(() => {
    document.querySelector('.stories').style.display = 'flex'
    initSmoothScrollbar()
  }, 10000); //13000
  
  
  setTimeout(() => {
    initLottie()
    document.querySelector('.guide').classList.add('active')
    setInterval(() => {
      document.querySelector('.guide').classList.remove('active')
    }, 4000);
  }, 9000)


}




// --------------------------------------------------------
// variable
var scrollbarInstance = null,
  direction = '',
  x = 0,
  speed = 0.8,
  bike = null,
  scrollPercent = 0,
  widthContent = 0
  widthContainer = 0
  widthScreen = widthContent - widthContainer

// opening title
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

// direction listener and parallax
function listener({ offset }) {
  if (offset.x >= x) {
    direction = "right";
  } else {
    direction = "left";
  }

  
  scrollPercent = (100 * scrollbarInstance.scrollLeft) / document.querySelector(".scene-wrapper").getBoundingClientRect().width;
  x = offset.x;
  parallax(document.querySelector('.bg-home > div'), x, -0.06, 1)
  parallax(document.querySelector('.bg-road > div'), x, -0.15, 1)
  parallax(document.querySelector('.stories'), x, 0.9, 1)
  
  const currentScroll = scrollbarInstance.offset.x
  // console.log(currentScroll, widthContent)
  if (currentScroll > widthScreen) {
    // scrollbarInstance.destroy()
  }
}



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
    document.querySelector(".scroll-wrapper"), 
    { damping: 0.03 }
  );
  scrollbarInstance.addListener(listener);

  widthContent = scrollbarInstance.getSize().content.width
  widthContainer = scrollbarInstance.getSize().container.width
}

// parallax
function parallax(el, x, value, scale) {
  el.style.transform = `translate3d(${x * value}px, 0, 0) scale(${scale})`;
}

// duplicate image
function duplicateImage(x, src, value) {
  let c = document.querySelector(`.${x}`),
      wrap = document.createElement('div')
  
  for (let i = 0; i < value; i++) {
    let img = document.createElement('img')
    img.src = src
    wrap.appendChild(img)
  }

  c.appendChild(wrap)
}

// popup button
const btnSprite = document.querySelectorAll('.btn-sprite')
btnSprite.forEach(e => {
  e.onclick = () => {
    e.previousElementSibling.classList.toggle('active');
    e.classList.remove('pulse')
  }
});

// smoke
function smokes(className, amount) {
  let wrap = document.querySelector(`.${className}`)
  
  for (let i = 0; i < amount; i++) {
    let smoke = document.createElement('div'),
        size = Math.floor(Math.random() * 1000),
        top = Math.floor(Math.random() * 100),
        left = Math.floor(Math.random() * 100)

    smoke.classList = 'smoke'
    smoke.style = `width: ${size}px; height: ${size}px; top: ${top}%; left: ${left}%;`
    wrap.appendChild(smoke)
  }
}

// btn remove smoke
const btnRemoveArray = ['smoke-1', 'smoke-2', 'smoke-3']
btnRemoveArray.forEach((e, index) => {
  document.querySelector(`img.remove-${e}`).onclick = () => {
    document.querySelector(`.scene-${index+1} .smokes`).classList.add('hide')
    setTimeout(() => {
      document.querySelector(`.scene-${index+1} .smokes`).classList.add('gone')
    }, 3000);
  }
})


// amaran
function amaran() {
  document.querySelector('.pop-full').classList.add('active')
}
function closeAmaran() {
  document.querySelector('.pop-full').classList.remove('active')
}

// function move2(x) {
//   let frame = bike.totalFrame,
//     calc = ((scrollPercent % speed) / speed) * frame

//   bike.goToAndStop(Math.round(calc), true)
// }

// function move(direction) {
//   let that = this;
//   direction == "right" ? (x += 240) : (x -= 240);
//   TweenMax.to(option, 1, {
//     x: x,
//     ease: Power4.easeOut,
//     onUpdate() {
//       that.scrollbarInstance.scrollTo(option.x, 0);
//     },
//   });

//   // console.log(direction)
// }
const coursework = document.querySelector('.coursework');
let courseWorkCount = 0;

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// if element is in view port
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'Computer Science Student',
  'Aspiring Software Engineer',
  'Tea-Powered Coder'
]

// name section scramble effect
const el = document.querySelector('.about-name')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1500)
  })
  counter = (counter + 1) % phrases.length
}

next()


// scroll scramble effect
document.addEventListener('scroll', function () {
  /* relative coursework */
  if (courseWorkCount == 0 && isInViewport(coursework)) {
    console.log('galawa')
    const collegeCourseWorkPhrases = [
      'Computer Programming',
      'Object-Oriented Programming',
      'Information Management',
      'Data Structures and Algorithms',
      'Design and Analysis of Algorithms',
      'Software Development'
    ]

    let counter = 0
    const fx = new TextScramble(coursework)
    const next = () => {
      fx.setText(collegeCourseWorkPhrases[counter]).then(() => {
        setTimeout(next, 1500)
      })
      counter = (counter + 1) % collegeCourseWorkPhrases.length
    }

    next();

    courseWorkCount = 1;
  }

}, {
  passive: true
});


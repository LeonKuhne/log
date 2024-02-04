// 
// HELPERS

class Ready {
  constructor(remaining, callback) { 
    this.remaining = remaining
    this.callback = callback
  }
  up() {
    this.remaining--
    if (this.remaining === 0) {
      this.callback()
    }
  }
}

function loadFile(url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText)
    }
  }
  xhr.send()
}

function fillTemplate(templateClass, dataClasses) {
  const templateElem = document.querySelector(`template.${templateClass}`)
  if (!templateElem) { 
    console.error(`Template not found: ${templateClass}`);
    return
  }
  const elem = document.createElement('div')
  elem.classList.add(templateClass)
  elem.appendChild(document.importNode(templateElem.content, true))
  document.body.appendChild(elem)
  for (const clazz in dataClasses) {
    let text = dataClasses[clazz]
    elem.querySelector(`.${clazz}`).innerText = text
  }
  // parse for links in markdown format
  elem.innerHTML = elem.innerHTML.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
  elem.querySelectorAll('a').forEach(a => {
    a.onmouseenter = () => {
      const cursor = document.querySelector('#cursor')
      cursor.href = a.href
      cursor.textContent = a.textContent
      cursor.classList.add('action')
    }
  })
  return elem
}

function cursorDispatchesOn(elem, text) {
  elem.onmouseenter = () => {
    const cursor = document.querySelector('#cursor')
    cursor.innerText = text
    cursor.classList.add('action')
  }
}

function nextContent(content) {
  if (!content) { return }
  // "[year]" (e.g. 2017)
  if (content.match(/^\d+$/)) {
    // add year
    fillTemplate('year', { title: content })
    return

  // "[next entry]"
  } else if (content.match(/^\n*\[next entry\]\n*/)) {
    const elem = fillTemplate('donate', { title: '[next entry]' })
    cursorDispatchesOn(elem, 'donate')
  // "[month/day] [title]\n[content]"
  } else {
    const [title, ...description] = content.split('\n')
    fillTemplate('entry', { title, content: description.join('\n') })
  }
}

let lastCall = Date.now()
let cursorTimeout = 750
function moveCursor(x, y) {
  const cursor = document.querySelector('#cursor')
  cursor.style.setProperty('--x', x + 'px')
  cursor.style.setProperty('--y', y + 'px')
  cursor.classList.add('active')
  lastCall = Date.now()
  setTimeout(() => {
    if (Date.now() - lastCall > cursorTimeout) {
      cursor.classList.remove('active')
      if (cursor.innerText !== 'cursor') {
        cursor.innerText = 'cursor'
        cursor.classList.remove('action')
      }
    }
  }, cursorTimeout)
}

const donateText = [
  "Thank you for reading my blog, but if you really want to donate you'll need to try harder.",
  "I'm not sure what you're trying to do, but it's not working.",
  "Or is it?",
  "Nope",
  "Well maybe",
  "I like your persistence",
  "But I'm not sure you're going to get anywhere.",
  "\"Well obviously I am the text is changing.\"",
  "Yeah but what if this goes on forever? It could be ChatGPT generated.",
  "Would you give your money to a bot...",
  "...if their creator was a machine?",
  "This machine's creator is long dead, but the family still profits.",
  "Welcome to America",
  "Welcome to the earths literal future",
  "Ok, get out a pen and paper. You're not going to believe this.",
  "I'm waiting...",
  "I hope you have a nice day - Leon K",
  "https://www.paypal.me/leonkuhne",
]
let iteration = 0
function donate() {
  alert(donateText[iteration])
  if (iteration < donateText.length - 1) {
    iteration++
  }
}

//
// START

let blogText = ''
const ready = new Ready(2, () => {
  // compose blog
  blogText.split('\n\n').forEach(content => nextContent(content))
  // replace cursor with 'o' character
  document.addEventListener('mousemove', e =>
    moveCursor(e.clientX + window.scrollX, e.clientY + window.scrollY))
  // listen for donation events
  const cursor = document.querySelector('#cursor')
  cursor.addEventListener('mousedown', () => {
    if (cursor.innerText === 'cursor') return
    else if (cursor.innerText === 'donate') donate()
    else {
      window.open(cursor.href)
    }
  })
})

// ready up 
window.onload = () => ready.up()
loadFile('log.md', data => {
  blogText = data
  ready.up() 
})

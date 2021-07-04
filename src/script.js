const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear-btn');
const bgToggler = document.querySelector('.bg-toggler');
const eraseBtn = document.querySelector('#erase-btn');

const handleBackgroundTheme = (e) => {
  e.preventDefault();
  const { target } = e;
  const { body } = document;
  body.style.background = body.style.background === 'white'
    ? 'linear-gradient(darkblue, pink)' : 'white';
  target.classList.toggle('bg-toggler-darkmode');
};

class Square {
  constructor() {
    this.divElem = document.createElement('div');
    this.divElem.className = 'square';
    this.divElem.onmouseover = this.handleColorEffect;
    this.erase = false;
  }

  handleColorEffect = (e) => {
    e.preventDefault();
    const { target: square } = e;
    square.style.border = '1px solid black';
    
    if (!square.erase) {
      const green = Math.floor(Math.random() * 256);
      const red = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      square.style.background = `rgb(${green}, ${red}, ${blue})`;
    }else {
      square.style.background = getBgColor();
    }
  }
}

const renderSquare = () => {
  for (let i = 0; i < 200; i += 1) {
    const { divElem } = new Square();
    container.append(divElem);
  }
};

const handleClearSketch = () => {
  container.innerHTML = '';
  renderSquare();
};

const getBgColor = () => {
  const { body } = document;
  const currentBodyBg = window
    .getComputedStyle(body)
    .getPropertyValue('background-color');
  return currentBodyBg;
};

const handleEraser = () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.erase = !square.erase;
  });
};

renderSquare();
// Add eventListeners
clearBtn.addEventListener('click', handleClearSketch);
bgToggler.addEventListener('click', handleBackgroundTheme);
eraseBtn.addEventListener('click', handleEraser);
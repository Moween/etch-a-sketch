const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear-btn');
const bgToggler = document.querySelector('.bg-toggler');

class Square {
  constructor() {
    this.divElem = document.createElement('div');
    this.divElem.className = 'square';
    this.divElem.onmouseover = this.handleColorEffect;
  }

  handleColorEffect = (e) => {
    e.preventDefault();
    const { target: square } = e;
    const green = Math.floor(Math.random() * (256 - 0));
    const red = Math.floor(Math.random() * (256 - 0));
    const blue = Math.floor(Math.random() * (256 - 0));
    square.style.border = '1px solid black';
    square.style.background = `rgb(${green}, ${red}, ${blue})`;
  }
}

const renderSquare = () => {
  for (let i = 0; i < 200; i += 1) {
    const { divElem } = new Square();
    container.append(divElem);
  }
};

const handleClearSketch = (e) => {
  e.preventDefault();
  container.innerHTML = '';
  renderSquare();
};

const handleBackgroundColor = (e) => {
  e.preventDefault();
  container.innerHTML = '';
  renderSquare();
  const { body } = document;
  body.style.background = body.style.background === 'white'
    ? 'linear-gradient(darkblue, pink)' : 'white';
};

renderSquare();
clearBtn.addEventListener('click', handleClearSketch);
bgToggler.addEventListener('click', handleBackgroundColor);
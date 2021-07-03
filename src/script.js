const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear-btn');

class Square {
  constructor() {
    this.divElem = document.createElement('div');
    this.divElem.className = 'square';
    this.divElem.onmouseover = this.handleColorEffect;
    this.handleColorEffect = this.handleColorEffect.bind(this);
  }

  handleColorEffect(e) {
    e.preventDefault();
    const { target: square } = e;
    const green = Math.floor(Math.random() * (256 - 0));
    const red = Math.floor(Math.random() * (256 - 0));
    const blue = Math.floor(Math.random() * (256 - 0));
    square.style.backgroundColor = `rgb(${green}, ${red}, ${blue})`;
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

renderSquare();
clearBtn.addEventListener('click', handleClearSketch);
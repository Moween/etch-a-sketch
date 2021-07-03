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
    e.target.style.backgroundColor = 'red';
  }
}

const renderSquare = () => {
  for (let i = 0; i < 200; i++) {
    const { divElem } = new Square();
    container.append(divElem);
  }  
}

const handleClearSketch = (e) => {
  e.preventDefault();
  container.innerHTML = '';
  renderSquare();
}

renderSquare();
clearBtn.addEventListener('click', handleClearSketch);
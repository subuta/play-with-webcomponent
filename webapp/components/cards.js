import HTMLCustomElement from './HTMLCustomElement.js';
import FreeStyle from 'free-style';
import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';

const Style = FreeStyle.create();
const prefixer = postcssJs.sync([
  autoprefixer
]);

// Register a new style, returning a class name to use.
var CardsStyle = Style.registerStyle(prefixer({
  padding: 8,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  width: '100vw',
  boxSizing: 'border-box'
}));

class Cards extends HTMLCustomElement {
  init() {
    this.innerHTML = `
      <style>${Style.getStyles()}</style>
      <div class="${CardsStyle}">${this.innerHTML}</div>
    `;
  }
}

customElements.define('x-cards', Cards);

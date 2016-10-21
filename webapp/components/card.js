import HTMLCustomElement from './HTMLCustomElement.js';
import FreeStyle from 'free-style';
import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';

const Style = FreeStyle.create();
const prefixer = postcssJs.sync([
  autoprefixer
]);

// Register a new style, to host
var Slot = Style.registerStyle(prefixer({
  flex: '0 0 33.3%'
}));

var CardStyle = Style.registerStyle(prefixer({
  border: '1px solid #ddd',
  margin: 8,
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

class Card extends HTMLCustomElement {
  init() {
    this.className = Slot;
    this.innerHTML = `
      <style>${Style.getStyles()}</style>
      <div class="${CardStyle}">${this.textContent}</div>
    `;
  }
}

customElements.define('x-card', Card);

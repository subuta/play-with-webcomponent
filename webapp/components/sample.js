import HTMLCustomElement from './HTMLCustomElement.js';

class MyElement extends HTMLCustomElement {
  init() {
    console.log('here I am ^_^ ');
    console.log('with content: ', this.textContent);
    this.className = 'number-' + 1;
    this.innerHTML = `<h1>${this.textContent}</h1>`;
  }

  // 変更の監視対象
  static get observedAttributes() {
    return ['country'];
  }

  connectedCallback() {
    console.log('live on DOM ;-) ');
  }

  disconnectedCallback() {
    console.log('leaving the DOM :-( )');
  }

  attributeChangedCallback(name, previousValue, value) {
    if (previousValue == null) {
      console.log(
        'got a new attribute ', name,
        ' with value ', value
      );
    } else if (value == null) {
      console.log(
        'somebody removed ', name,
        ' its value was ', previousValue
      );
    } else {
      console.log(
        name,
        ' changed from ', previousValue,
        ' to ', value
      );
    }
  }
}

customElements.define('my-element', MyElement);

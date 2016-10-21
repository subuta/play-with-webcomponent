// base class to extend, same trick as before
class HTMLCustomElement extends HTMLElement {
  constructor(_) { return (_ = super(_)).init(), _; }
  init() { /* override as you like */ }
}

export default HTMLCustomElement;

import transform from './transform';
import colorMode from './utils/color-mode';
import luma from './utils/luma';
import validate from './validate';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      max-width: 320px;
      margin: auto;
      padding: 8px 16px;
      --color-primary: rgba(0, 0, 0, 0.87);
      --color-secondary: rgba(0, 0, 0, .54);
    }
    :host([light]) {
      --color-primary: rgba(255, 255, 255, 1);
      --color-secondary: rgba(255, 255, 255, .5);
    }
    input {
      width: 100%;
      height: 45px;
      margin-bottom: 16px;
      background: transparent;
      outline: none;
      border: none;
      border-bottom: 1px solid var(--color-secondary);
      font-size: 24px;
      color: var(--color-primary);
    }
    input:focus {
      border-color: var(--color-primary);
    }
  </style>
  <input type="text" placeholder="hex" />
  <input type="text" placeholder="rgb()" />
`;

class ColorApp extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.handleChange = this.handleChange.bind(this);
  }
  connectedCallback () {
    this.shadowRoot.addEventListener('change', this.handleChange)
  }
  disconnectedCallback () {
    this.shadowRoot.removeEventListener('change', this.handleChange)
  }
  handleChange (evt) {
    this.input = evt.target;
    if (this.input.value == '')
      return;

    const value = this.input.value;
    // make sure input value is valid hex or rgb
    if (validate.hex(value) || validate.rgb(value)) {
      this.output = this.input.nextElementSibling || this.input.previousElementSibling;
      const color = transform[colorMode(value).input](value);

      this.render(color);
    }
  }
  render (color) {
    const outputColor = color[colorMode(this.input.value).output];

    this.output.value = outputColor;
    document.body.style.backgroundColor = outputColor;

    (luma(color.rgb) < 186)
      ? this.setAttribute('light', '')
      : this.removeAttribute('light');
  }
}

export default window.customElements.define('color-app', ColorApp);

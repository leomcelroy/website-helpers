import marked from 'https://unpkg.com/marked@0.3.6/marked.min.js';

customElements.define('convert-md', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // view
    console.log(this.innerHTML);
    this.shadowRoot.innerHTML = `${marked(this.innerHTML)}`
  }
})
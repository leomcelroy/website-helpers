import marked from 'https://cdn.skypack.dev/marked';

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
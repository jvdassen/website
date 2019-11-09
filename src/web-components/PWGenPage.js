
import { LitElement, html, css } from 'lit-element'

export default class About extends LitElement {
  constructor () {
    super()
    this.length = 12
  }
  render () {
    return html`
      <header class="wrapped">
       Length: ${this.length}
      </header>
      <section class="wrapped">
        <p>
        ${this.genPassword(this.length)}
        </p>
        <input @input="${this.updateState}" type="range" min="1" value="12" max="32" steps="30">
      </section>
    `
  }
  static get properties () {
    return {
      length: {
        type: Number,
        value: 12
      }
    }
  }
  updateState (e) {
    this.length = Number(e.target.value)
  }
  genPassword (length = 14) {
    var randChars = Array(length).fill().map(this.getRandomChar.bind(this))
    var pw = randChars.join('')
    return pw
  }
  getRandomChar () {
    var crypt = window.crypto || window.msCrypto
    var target = new Uint8Array(1)
    var randNr = crypt.getRandomValues(target)
    var sevenBitRandNr = randNr >> 1
    if (sevenBitRandNr <= 32 || sevenBitRandNr >= 127) {
      return this.getRandomChar()
    }
    return String.fromCharCode(sevenBitRandNr)
  }
  static get styles () {
    return css`
      .wrapped {
        padding: 0 20px 0 20px;
      }
      header {
        background-color: #ccccff;
        color: #6d6d82;
        height: 40px;
        font-size: 1.2em;
        font-style: italic;
        display: flex;
        align-items: center;
      }
      section {
        margin: 10px 0 10px 0;
      }
      p {
        -webkit-user-select: all;  /* Chrome 49+ */
        -moz-user-select: all;     /* Firefox 43+ */
        -ms-user-select: all;      /* No support yet */
        user-select: all;
      }
      input {
        width: 100%;
        background: none;
      }
      input[type=range]::-moz-focus-outer {
        border: 0;
      }
    `
  }
}

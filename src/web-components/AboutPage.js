import { LitElement, html, css } from 'lit-element'

export default class About extends LitElement {
  render () {
    return html`
      <header class="wrapped">
        Jan von der Assen
      </header>
      <section class="wrapped">
        <ul class="wrapped">
          <li>(Web) Developer</li>
          <li>Zurich, Switzerland</li>
          <li>Software Systems MSc Student <a href="https://www.ifi.uzh.ch/en.html">@UZH</a></li>
        </ul>
      </section>
      <hr>
      <footer class="wrapped">
        <p class="title">Interests</p>
        <ul class="wrapped">
          <li>Web Development - EcmaScript, Web-Components, PWA, lit-html 🔥, React.js, Vue.js </li>
          <li>Backend Development - Python, golang, Java 12</li>
          <li>Computer Networks, Docker, Linux, <a href="https://github.com/bazo-blockchain">Blockchain</a></li>
        </ul>
      </footer>
      <dfn>
        <p>Design assets: Courtesy of <a href="https://www.galster.art" target="_blank">galster.art</a></p>
      </dfn>
    `
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
      a {
        font-style: italic;
      }
      .title {
        font-style: italic;
      }
      hr {
        color: #ccccff;
        margin: 0 20px 0 20px;
      }
      footer {
        padding-top: 10px;
      }
      ul {
        padding: 0;
      }
      ul li {
        list-style: none;
      }
      ul li:before {
        content: "- ";
        margin-left: -15px;
      }
      footer {
        margin-bottom: 20px;
      }
      dfn {
      }
      dfn > p {
        background-color: lightyellow;
        padding: 10px 10px 5px 5px;
        margin-bottom: 0px;
        font-size: 0.8em;
        text-align: right;
      }
      dfn, dfn > p > a {
        font-style: normal;
      }
    `
  }
}

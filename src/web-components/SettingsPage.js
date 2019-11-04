import { LitElement, html, css } from 'lit-element'
import { enableFullScreen, disableFullScreen, checkFullScreenCapabilities } from '../utils/fullscreen'

export default class Settings extends LitElement {
  render () {
    var { fullScreenMode, screenSaverEnabled } = this.getSettingsFromStorage()
    var fullsScreenSupported = checkFullScreenCapabilities().browserSupported

    return html`
      <header class="wrapped">
        Settings
      </header>
      <section class="wrapped">
        <ul>
          <li>
            <input type="checkbox"
                   ?checked="${fullScreenMode}"
                   ?disabled="${!fullsScreenSupported}"
                   @click="${this.checkHandler}"
                   title="fullscreenmode">
            <span>Fullscreen mode</span>
          </li>
          <li>
            <input type="checkbox" ?checked="${screenSaverEnabled}" @click="${this.checkHandler}" title="screensaverenabled">
            <span>Enable Screensaver</span>
          </li>
        </ul>
      </section>
    `
  }
  checkHandler (event) {
    var setting = event.target.title
    var checked = event.target.checked

    localStorage.setItem(setting, checked)

    if (setting === 'fullscreenmode') {
      this.setFullScreen(checked)
    }
  }
  setFullScreen (enabled) {
    if (enabled) {
      enableFullScreen()
    } else {
      disableFullScreen()
    }
  }
  getSettingsFromStorage () {
    var fullScreenMode, screenSaverEnabled
    try {
      fullScreenMode = localStorage.getItem('fullscreenmode') === 'true'
      screenSaverEnabled = localStorage.getItem('screensaverenabled') === 'true'
    } catch (err) {
      console.warn('Error reading from local storage: ', err)
      fullScreenMode = false
      screenSaverEnabled = false
    }
    return { fullScreenMode, screenSaverEnabled }
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
      ul li {
        list-style: none;
      }
      ul {
        padding: 0;
      }
    `
  }
}

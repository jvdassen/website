<template>
  <div id="app">
    <header v-if="hasLoaded">
      <!--span class="main-header-title main-header-image"
       <img src="/static/img/computer.ico">
      </span-->
      <div class="main-header-title">File
        <div class="main-header-content">
          <div class="" @click="showSettings = !showSettings">Settings</div>
          <div class="" @click="reloadDocument">Restart</div>
        </div>
      </div>
      <div class="main-header-title">Go
        <div class="main-header-content">
          <div class=""><a href="https://github.com/jvdassen">GitHub</a></div>
          <div class=""><a href="https://linkedin.com/in/jan-von-der-assen-975083105">LinkedIn</a></div>
        </div>
      </div>
      <div class="main-header-title">Utilities
        <div class="main-header-content">
          <div class="" @click="showPwGen = !showPwGen">Password generator</div>
          <div class="" @click="showMockery = !showMockery">Mock string</div>
        </div>
      </div>
      <span class="main-header-title" @click="showAbout = !showAbout">About</span>
      <span class="main-header-title right">{{ time }}</span>
    </header>
    <main v-if="hasLoaded">
      <desktop-icon
        icon="static/img/folder_system.png"
        title="Settings"
        class="desktopicon"
        @click="showSettings = !showSettings">
      </desktop-icon>
      <desktop-icon
        icon="static/img/folder_floppy.png"
        title="About"
        class="desktopicon"
        @click="showAbout = !showAbout">
      </desktop-icon>
      <desktop-icon
        icon="static/img/sad_mac.png"
        title="Trash"
        class="desktopicon">
      </desktop-icon>
      <os-window
        style="width: 400px;"
        v-if="showAbout"
        @close="showAbout = false"
        :title="'About'">
        <about-page></about-page>
      </os-window>
      <os-window 
        style="width: 300px;"
        v-if="showSettings" 
        @close="showSettings = false"
        :title="'Settings'">
        <settings-page></settings-page>
      </os-window>
      <os-window 
        style="width: 360px;"
        v-if="showPwGen" 
        @close="showPwGen = false"
        :title="'Password Generator'">
        <password-generator></password-generator>
      </os-window>
    </main>
    <screensaver v-if="showScreensaver">
    </screensaver>
  </div>
</template>

<script>
import OSWindow from './components/OSWindow.vue'
import Screensaver from './components/Screensaver.vue'
import DesktopItem from './components/DesktopIcon.vue'
import About from './web-components/AboutPage'
import Settings from './web-components/SettingsPage'
import PassWordGenerator from './web-components/PWGenPage'

customElements.define('about-page', About)
customElements.define('settings-page', Settings)
customElements.define('password-generator', PassWordGenerator)

export default {
  name: 'app',
  data: function () {
    return {
      showAbout: false,
      showSettings: false,
      showScreensaver: false,
      showPwGen: false,
      showMockery: false,
      hasLoaded: false,
      time: this.formatTime()
    }
  },
  mounted: function () {
    var app = this
    var perc = -500
    var deg = -50

    incrAndUpdate()
    detectInactivity()
    updateClock()

    function updateClock () {
      setInterval(function () {
        app.time = app.formatTime()
      }, 500)
    }

    function incrAndUpdate () {
      perc += 8
      if (deg < 20) {
        deg += 2
      } else {
        deg = 20
      }
      document.querySelector('body').style.backgroundImage = `linear-gradient(${deg}deg, #D9AFD9 ${perc}%, #97D9E1 100%)`
      if (perc < 10) {
        requestAnimationFrame(incrAndUpdate)
      } else {
        setTimeout(function () { app.hasLoaded = true }, 100)
      }
    }

    function detectInactivity () {
      var mouseMoveId

      mouseMoveId = setTimeout(function () {
        app.showScreensaver = getScreenSaverSetting().enabled
      }, 15000)
      document.onmousemove = function () {
        app.showScreensaver = false
        clearTimeout(mouseMoveId)
        mouseMoveId = setTimeout(function () {
          app.showScreensaver = getScreenSaverSetting().enabled
        }, 15000)
      }

      function getScreenSaverSetting () {
        var stored = localStorage.getItem('screensaverenabled')
        var defaultValue = null
        return {
          enabled: stored === 'true' || stored === defaultValue
        }
      }
    }
  },
  components: {
    'os-window': OSWindow,
    'screensaver': Screensaver,
    'desktop-icon': DesktopItem
  },
  methods: {
    shutdown: function () {
    },
    formatTime () {
      var date = new Date()
      var options = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      }

      return date.toLocaleTimeString('en-US', options)
    },
    reloadDocument: function () {
      location.reload()
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
}
html {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
body {
  margin: 0;
  background-image: linear-gradient(15deg, #d9afd9 -500%, #97d9e1 100%);
}
#app {
  font-family: chicagoplain;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  position: absolute;
  height: calc(100% - 28px);
  width: 100%;
  animation: fadein 1s;
}
header {
  margin: 0;
  height: 28px;
  padding: 0 2px 0 12px;
  background-color: #f8f7f8;
  color: black;
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */
  animation: fadein 1s;
}

header .main-header-title {
  display: inline-block;
  height: 100%;
  position: relative;
  font-size: 18px;
  padding: 0 5px 0 5px;
  text-transform: capitalize;
  box-sizing: border-box;
  padding-top: 2px;
}

.main-header-content {
  display: none;
  position: absolute;
  left: 0px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.main-header-title:active .main-header-content, .main-header-title:hover .main-header-content {
  display: block;
}

.main-header-title:hover, .main-header-content div:hover  {
  background-color: #d7d5d7;
}

.main-header-title:active, .main-header-content div:active {
  background-color: #b2aeb2;
}

.main-header-image > img{
  height: 16px;
  padding-top: 2px;
} 

.main-header-content div {
  border-style: solid;
  border-width: 0 0 1px 0;
  padding: 6px 8px;
}

.main-header-content div:last-child {
  border-style: none;
}
a {
  color: inherit;
  text-decoration: inherit;
}
.content-wrapper {
  padding: 40px;
  //width: 300px;
}
.about-content-wrapper {
  text-align: center;
}
.icon-wrapper {
  margin-top: 10px;
}
.right {
  float: right;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>

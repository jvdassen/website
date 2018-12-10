<template>
  <div id="app">
    <header v-if="hasLoaded">
      <span class="main-header-title main-header-image" @click="requestFullScreen">
       <img src="/static/img/computer.ico">
 
      </span>
      <div class="main-header-title">File
        <div class="main-header-content">
          <div class="">Settings</div>
        </div>
      </div>
      <div class="main-header-title">Go
        <div class="main-header-content">
          <div class="">GitHub</div>
          <div class="">Linkedin</div>
        </div>
      </div>
      <span class="main-header-title" @click="showAbout = !showAbout">About</span>
      <span class="main-header-title right" v-if="showFullScreen" @click="exitFullscreen">Quit</span>

    </header>
    <main>
      <os-window 
        v-if="showAbout" 
        @close="showAbout = false"
        :title="'About'"
        :content="'Jan von der Assen Web Developer'">
      </os-window>
    </main>
    <screensaver v-if="showScreensaver">
    </screensaver>
  </div>
</template>

<script>
import OSWindow from './components/OSWindow.vue'
import Screensaver from './components/Screensaver.vue'

export default {
  name: 'app',
  data: function () {
    return {
      showAbout: false,
      showScreensaver: false,
      hasLoaded: false,
      showFullScreen: false
    }
  },
  mounted: function () {
    var app = this
    var perc = -500
    incrAndUpdate()
    detectInactivity()

    function incrAndUpdate () {
      perc += 8
      document.querySelector('body').style.backgroundImage = `linear-gradient(19deg, #D9AFD9 ${perc}%, #97D9E1 100%)`
      if (perc < 10) {
        requestAnimationFrame(incrAndUpdate)
      } else {
        setTimeout(function () { app.hasLoaded = true }, 100)
      }
    }

    function detectInactivity () {
      var mouseMoveId

      mouseMoveId = setTimeout(function () {
        app.showScreensaver = true
      }, 5000)
      document.onmousemove = function () {
        app.showScreensaver = false
        clearTimeout(mouseMoveId)
        mouseMoveId = setTimeout(function () {
          app.showScreensaver = true
        }, 5000)
      }
    }
  },
  components: {
    'os-window': OSWindow,
    'screensaver': Screensaver
  },
  methods: {
    shutdown: function () {
    },
    requestFullScreen: function () {
      var eldem = document.querySelector('html')
      console.log('fullscreen: ', eldem.webkitRequestFullScreen())
      this.showFullScreen = true
    },
    exitFullscreen: function () {
      document.exitFullscreen()
      this.showFullScreen = false
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
}
header {
  margin: 0;
  height: 28px;
  padding: 0 2px 0 12px;
  background-color: #f8f7f8;
  color: black;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
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

.main-header-title:hover {
  background-color: #d7d5d7;
}
.main-header-title:active .main-header-content, .main-header-title:hover .main-header-content {
  display: block;
}
.main-header-title:active {
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

<template>
  <div id="app">
    <header>
      <span class="main-header-title main-header-image">
       <img src="/static/img/computer.ico">
 
      </span>
      <span class="main-header-title">File</span>
      <span class="main-header-title">Edit</span>
      <span class="main-header-title" @click="showAbout = !showAbout">About</span>
      <span class="main-header-title right" @click="shutdown">Quit</span>

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
      showScreensaver: false
    }
  },
  mounted: function () {
    var app = this
    var perc = -500
    incrAndUpdate()
    detectInactivity()

    function incrAndUpdate () {
      perc += 10
      document.querySelector('body').style.backgroundImage = `linear-gradient(19deg, #D9AFD9 ${perc}%, #97D9E1 100%)`
      if (perc < 10) { requestAnimationFrame(incrAndUpdate) }
    }

    function detectInactivity () {
      var mouseMoveId

      mouseMoveId = setTimeout(function () {
        app.showScreensaver = true
      }, 30000)
      document.onmousemove = function () {
        app.showScreensaver = false
        clearTimeout(mouseMoveId)
        mouseMoveId = setTimeout(function () {
          app.showScreensaver = true
        }, 30000)
      }
    }
  },
  components: {
    'os-window': OSWindow,
    'screensaver': Screensaver
  },
  methods: {
    shutdown: function () {
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

.main-header-title:hover {
  background-color: #d7d5d7;
}
.main-header-title:active {
  background-color: #b2aeb2;
}
.main-header-image > img{
  height: 16px;
  padding-top: 2px;
} 
.right {
  float: right;
}
</style>

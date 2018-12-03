<template>
  <div id="app">
    <header>
      <span class="main-header-title">File</span>
      <span class="main-header-title">Edit</span>
      <span class="main-header-title" @click="showAbout = !showAbout">About</span>
    </header>
    <main>
      <os-window v-if="showAbout" @close="showAbout = false">
      </os-window>
    </main>
  </div>
</template>

<script>
import Window from './components/Hello.vue'

export default {
  name: 'app',
  data: function () {
    return {
      showAbout: false
    }
  },
  mounted: function () {
    var perc = -500
    incrAndUpdate()

    function incrAndUpdate () {
      perc += 10
      document.querySelector('body').style.backgroundImage = `linear-gradient(19deg, #d9afd9 ${perc}%, #97d9e1 100%)`
      if (perc < 10) { requestAnimationFrame(incrAndUpdate) }
    }
  },
  components: {
    'os-window': Window
  }
}
</script>

<style>
body {
  margin: 0;
  background-image: linear-gradient(15deg, #d9afd9 -500%, #97d9e1 100%);
}

#app {
  font-family: Charcoal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
  font-size: 20px;
  background-color: #ffffff;
  color: black;
}

header .main-header-title {
  display: inline-block;
  position: relative;
  font-size: 18px;
  margin-right: 10px;
  text-transform: capitalize;
  box-sizing: border-box;
  padding-top: 2px;
}
</style>

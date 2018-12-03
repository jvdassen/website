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
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  background-color: #858585;
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

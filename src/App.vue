<template>
  <div id="app">
    <header>
      <span class="main-header-title">File</span>
      <span class="main-header-title">Edit</span>
      <span class="main-header-title">View</span>

    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  background-image: linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%);
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
  background-image: linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%);
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

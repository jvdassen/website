<template>
  <div class="wrapper">
    <!-- <h1>{{ msg }}</h1> -->
    <draggable :resizable="false" :parent="true" drag-handle=".window-drag-handle">
      <div class="window">
        <div class="shadow-rectangle">
        </div>
        <header class="window-drag-handle">
          <span>Tool</span>
        </header>
        <div class="window-content">
          <h1>sometitle</h1>
          <p>some content</p>
          <p>some stuff</p>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  components: {
    'draggable': VueDraggableResizable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.wrapper {
  height: 100%;
  width: 100%;
}
.window {
  border: solid 1px;
  max-width: 500px;
  background-color: #EDECED;
}
.shadow-rectangle {
  height: 100%;
  width: 100%;
  left: 5px;
  z-index: -100;
  background-color: grey;
  position: absolute;
}
header {
  margin: 0;
  height: 16px;
  margin: 3px 0px 3px 0px;
  box-sizing: border-box;
  padding: 0 16px 0 24px;
  background-color: #EDECED;
  color: black;
  text-align: center;
  font-family: Charcoal;
  font-size: 16px;
  background-image: linear-gradient(0deg, #000 0px, transparent 0px, transparent 1px, #000 1px, #000 2px, transparent 2px);
  background-size: 50px 3px;
  cursor: move;
}
header span {
  background-color: #EDECED;
  padding: 0px 6px 0px 3px;
}
.window-content {
  border-top: solid 1px black;
  background-color: white;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.window-content > h1 {
  margin-top: 0px;
}
</style>

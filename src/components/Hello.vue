<template>
  <div class="wrapper">
    <h1>{{ msg }}</h1>
    <draggable :resizable="false" :parent="true" drag-handle=".window-drag-handle">
      <div class="window">
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
  margin: 10px;
  border: solid 1px;
  max-width: 500px;
  background-color: #EDECED;
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
  background-image: linear-gradient(0deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, #fff);
  background-size: 50px 3px;
  cursor: move;
}
header span {
  background-color: #EDECED;
  padding: 0px 6px 0px 5px;
}
.window-content {
  border-top: solid 1px black;
  background-color: white;
  height: 100%;
}
</style>

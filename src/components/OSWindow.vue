<template>
  <div class="wrapper">
    <draggable :resizable="false" 
               :parent="true"
               drag-handle=".window-drag-handle"
               :x="initialPosition.x"
               :y="initialPosition.y">
      <div class="window">
        <header class="window-drag-handle">
          <span> {{ title }} </span>
          <span class="close-button" @click="$emit('close')">X</span>
        </header>
        <div class="window-content">
          {{ content }}
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  name: 'oswindow',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  props: [ 'title', 'content' ],
  components: {
    'draggable': VueDraggableResizable
  },
  mounted: function () {
    console.log('OS Window mounted', global, window, Window)
  },
  computed: {
    'initialPosition': function () {
      return {
        x: (window.innerWidth / 2) - 100,
        y: (window.innerHeight / 2) - 100
      }
    }
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
  -webkit-box-shadow: 14px 15px 25px -1px rgba(122,122,122,1);
  -moz-box-shadow: 14px 15px 25px -1px rgba(122,122,122,1);
  box-shadow: 14px 15px 25px -1px rgba(122,122,122,1);
}
header {
  margin: 0;
  width: calc(100% - 22px);
  height: 16px;
  margin: 3px 0px 3px 0px;
  box-sizing: border-box;
  padding: 0 16px 0 24px;
  background-color: #EDECED;
  color: black;
  text-align: center;
  font-size: 14px;
  background-image: linear-gradient(0deg, #000 0px, transparent 0px, transparent 1px, #000 1px, #000 2px, transparent 2px);
  background-size: 50px 3px;
  cursor: move;
}
header span {
  background-color: #EDECED;
  padding: 0px 6px 0px 3px;
}
.close-button {
  position: absolute;
  right: 1px;
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

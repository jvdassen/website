<template> 
  <div class="icon-wrapper">
    <img v-bind:src="icon" class="icon">
    <span class="icon-title">{{ title }}</span>
  </div>
</template>

<script>

export default {
  name: 'desktopicon',
  data () {
    return {
    }
  },
  props: ['icon', 'title'],
  computed: {
  }
}
</script>

<style scoped>
.icon-wrapper {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  --webkit-display: flex;
  --webkit-align-items: center;
  --webkit-justify-content: space-around;
  --webkit-flex-direction: column;
}
.icon {
  width: 50px;
  height: 50px;
}
.icon-title {
  font-size: 12px;
}
</style>

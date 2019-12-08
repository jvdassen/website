<template> 
  <div class="icon-wrapper" @click="$emit('click', $event)">
    <img v-bind:src="icon" class="icon" v-bind:alt="title">
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
  padding: 20px;
  box-sizing: border-box;
}
.icon {
  width: auto;
  min-height: 45px;
  margin-bottom: 10px;
}
.icon-title {
  font-size: 12px;
}
.icon-wrapper:active > .icon-title {
  color: white!important;
}
.icon-wrapper:hover > .icon-title {
  /*color: grey;*/
  text-decoration: underline;
}
</style>

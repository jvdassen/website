<template> 
 <about-page></about-page>
</template>

<script>
import About from '../web-components/AboutPage'
customElements.define('about-page', About)

export default {
  name: 'desktopicon',
  data () {
    return {
    }
  },
  computed: {
  },
  mounted: () => {
  }
}
</script>

<style scoped>
</style>

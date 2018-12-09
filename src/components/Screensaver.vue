<template> 
  <canvas class="screensaver-canvas">
  </canvas>
</template>

<script>

export default {
  name: 'screensaver',
  data () {
    return {
    }
  },
  components: {
  },
  mounted: function () {
    var canvas = document.querySelector('.screensaver-canvas')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    var ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ff00af'
    var r = new Rect(10)

    requestAnimationFrame(moveAndDraw)

    window.onresize = function () {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      r.x = 10
      r.y = 10
    }

    function moveAndDraw () {
      r.move()
      r.render()
      requestAnimationFrame(moveAndDraw)
    }

    function Rect (x) {
      this.x = x
      this.y = 10
      this.width = 100
      this.height = 100
      this.directionX = -(Math.random() * 5)
      this.directionY = -5

      this.move = function () {
        if (this.x <= 0 || this.x >= canvas.width - 100) {
          this.directionX = -this.directionX
        } else if (this.y >= canvas.height - 100 || this.y <= 0) {
          this.directionY = -this.directionY
        }
        this.x = this.x + this.directionX
        this.y = this.y + (this.directionY * 0.5)
      }

      this.render = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.shadowOffsetX = 15
        ctx.shadowOffsetY = 15
        ctx.fill()
      }
    }
  },
  computed: {
  }
}
</script>

<style scoped>
canvas {  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border: 1px black;
  background: grey;
}
</style>

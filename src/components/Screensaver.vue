<template> 
  <canvas class="screensaver-canvas">
    <img id="screensaver-icon" src="static/img/sad_mac.png">
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
    ctx.fillStyle = 'rgb(217, 175, 217)'
    var r = new Rect(10)

    requestAnimationFrame(moveAndDraw)

    window.onresize = function () {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      r.x = window.innerWidth / 2 - 50
      r.y = window.innerHeight / 2 - 50
    }

    function moveAndDraw () {
      if (document.hidden) {
        document.addEventListener('visibilitychange', function () {
          r.move()
          r.render()
          requestAnimationFrame(moveAndDraw)
        })
      } else {
        r.move()
        r.render()
        requestAnimationFrame(moveAndDraw)
      }
    }

    function Rect (x) {
      this.x = window.innerWidth / 2 - 50
      this.y = window.innerHeight / 2 - 50
      this.width = 100
      this.height = 100
      this.directionX = -(Math.random() * 3)
      this.directionY = -3

      this.move = function () {
        if (this.x <= 0 || this.x >= canvas.width - 78) {
          this.directionX = -this.directionX
        } else if (this.y >= canvas.height - 103 || this.y <= 0) {
          this.directionY = -this.directionY
        }
        this.x = this.x + this.directionX
        this.y = this.y + (this.directionY * 0.5)
      }

      this.render = function () {
        try {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          var img = document.getElementById('screensaver-icon')
          ctx.drawImage(img, this.x, this.y)
        } catch (e) {
        }
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
  background: rgb(151, 217, 225);
}
</style>

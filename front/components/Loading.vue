<template>
  <div v-if="loading" class="background">
    <div class="balls">
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.background {
  background: rgba($color: #000000, $alpha: 0.6);
  position: fixed;
  width: 100vw !important;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ball {
  width: 10px;
  height: 10px;
  margin: 10px auto;
  border-radius: 50px;
}

.ball:nth-child(1) {
  background: #ffc107;
  -webkit-animation: right 1s infinite ease-in-out;
  -moz-animation: right 1s infinite ease-in-out;
  animation: right 1s infinite ease-in-out;
}

.ball:nth-child(2) {
  background: #ffc107;
  -webkit-animation: left 1.1s infinite ease-in-out;
  -moz-animation: left 1.1s infinite ease-in-out;
  animation: left 1.1s infinite ease-in-out;
}

.ball:nth-child(3) {
  background: #ffc107;
  -webkit-animation: right 1.05s infinite ease-in-out;
  -moz-animation: right 1.05s infinite ease-in-out;
  animation: right 1.05s infinite ease-in-out;
}

.ball:nth-child(4) {
  background: #ffc107;
  -webkit-animation: left 1.15s infinite ease-in-out;
  -moz-animation: left 1.15s infinite ease-in-out;
  animation: left 1.15s infinite ease-in-out;
}

.ball:nth-child(5) {
  background: #ffc107;
  -webkit-animation: right 1.1s infinite ease-in-out;
  -moz-animation: right 1.1s infinite ease-in-out;
  animation: right 1.1s infinite ease-in-out;
}

.ball:nth-child(6) {
  background: #ffc107;
  -webkit-animation: left 1.05s infinite ease-in-out;
  -moz-animation: left 1.05s infinite ease-in-out;
  animation: left 1.05s infinite ease-in-out;
}

.ball:nth-child(7) {
  background: #ffc107;
  -webkit-animation: right 1s infinite ease-in-out;
  -moz-animation: right 1s infinite ease-in-out;
  animation: right 1s infinite ease-in-out;
}

@-webkit-keyframes right {
  0% {
    -webkit-transform: translate(-15px);
  }
  50% {
    -webkit-transform: translate(15px);
  }
  100% {
    -webkit-transform: translate(-15px);
  }
}

@-webkit-keyframes left {
  0% {
    -webkit-transform: translate(15px);
  }
  50% {
    -webkit-transform: translate(-15px);
  }
  100% {
    -webkit-transform: translate(15px);
  }
}

@-moz-keyframes right {
  0% {
    -moz-transform: translate(-15px);
  }
  50% {
    -moz-transform: translate(15px);
  }
  100% {
    -moz-transform: translate(-15px);
  }
}

@-moz-keyframes left {
  0% {
    -moz-transform: translate(15px);
  }
  50% {
    -moz-transform: translate(-15px);
  }
  100% {
    -moz-transform: translate(15px);
  }
}

@keyframes right {
  0% {
    transform: translate(-15px);
  }
  50% {
    transform: translate(15px);
  }
  100% {
    transform: translate(-15px);
  }
}

@keyframes left {
  0% {
    transform: translate(15px);
  }
  50% {
    transform: translate(-15px);
  }
  100% {
    transform: translate(15px);
  }
}
</style>

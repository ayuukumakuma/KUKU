<template>
  <div id="index">
    <div id="version">ver. 1.0.0</div>
    <div id="title" class="sentence--text">KUKU</div>
    <v-btn
      id="start-btn"
      class="rounded-lg sentence--text"
      color="primary"
      depressed
      @click="$router.push('./menu')"
    >
      はじめる
    </v-btn>
    <v-btn
      id="login-btn"
      class="rounded-lg"
      color="content"
      depressed
      @click="$router.push('./login')"
    >
      保護者・教員の方へ
    </v-btn>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
html::-webkit-scrollbar {
  display: none;
}
html {
  height: 100vh;
  height: 100dvh;
  overscroll-behavior-y: none;
  scrollbar-width: none;
}
html,
body {
  overflow: hidden;
}
#index {
  // overflow: hidden;
  #version {
    position: fixed;
    margin: 8px;
    font-size: 1rem;
  }
  #title {
    font-size: 5.5rem;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
  }

  #start-btn {
    font-size: 2.5rem;
    position: fixed;
    left: 50%;
    bottom: 20%;
    transform: translate(-50%);
    height: 15%;
    width: 60%;
  }

  #login-btn {
    position: fixed;
    bottom: 16px;
    left: 16px;
    font-size: 1rem;
    height: 2.5rem;
    padding: 24px;
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
}
</style>

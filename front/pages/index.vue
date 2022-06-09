<template>
  <div id="index">
    <div id="version">ver. 1.0.3</div>
    <div id="title" class="sentence--text">
      KUKU
      <p id="text">～九九を「みて」覚えよう～</p>
    </div>
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
    <img id="icon" src="/icon.png" alt="KUKU"/>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
#index {
  #version {
    position: fixed;
    margin: 8px;
    font-size: 1rem;
  }
  #title {
    font-size: 6rem;
    position: fixed;
    z-index: 1;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    p {
      margin: -20px;
      font-size: 1.2rem;
      text-align: center;
    }
  }
  #start-btn {
    font-size: 2.5rem;
    position: fixed;
    left: 50%;
    bottom: 20%;
    transform: translate(-50%);
    height: 15%;
    @media screen and (min-width: 960px) {
      width: 40vw;
    }
    width: 60%;
    z-index: 1;
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

  img {
    position: fixed;
    left: 50%;
    top: 120px;
    transform: translate(-50%);
    @media screen and (min-width: 960px) {
      top: 60px;
      height: 70vh;
    }
    height: 40vh;
    opacity: 0.2;
    z-index: 0;
  }
}
</style>

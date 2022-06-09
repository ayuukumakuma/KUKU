<template>
  <div id="result">
    <div id="all-correct">
      {{
        getScore === 10
          ? 'おめでとう!!'
          : getScore >= 7
          ? 'おしい!!'
          : getScore >= 4
          ? 'いいかんじ!!'
          : 'がんばろう!!'
      }}
    </div>
    <div id="answer-group">
      <p id="answer-before"><span>10</span>もんちゅう...</p>
      <p id="answer">
        <span>{{ getScore }}</span
        >もん
      </p>
      <p id="answer-after">せいかいしたよ！</p>
    </div>
    <div id="button-group">
      <v-btn
        id="once-more"
        class="rounded-lg"
        x-large
        width="148px"
        height="4rem"
        depressed
        color="secondary"
        @click="clickEvent('kuku')"
        >もういっかい</v-btn
      >
      <v-btn
        id="to-menu"
        class="rounded-lg"
        x-large
        width="148px"
        height="4rem"
        depressed
        color="primary"
        @click="clickEvent('menu')"
        >やめる</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getScore() {
      return this.$store.getters['score/getScore']
    },
    onAuth() {
      return this.$store.getters['auth/isLogin']
    },
  },
  mounted() {
    this.pushScore()
  },
  
  methods: {
    clickEvent(router) {
      this.$router.push(`/${router}`)
      this.$store.dispatch('score/resetScore')
    },
    async pushScore() {
      if (this.onAuth === true) {
        this.$nuxt.$loading.start()
        await this.$store.dispatch('score/pushScoreToApi')
        this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#all-correct {
  font-size: 3.5rem;
  position: fixed;
  top: 88px;
  width: 100%;
  text-align: center;
  color: var(--v-sentence-base);
  @media screen and (min-width: 960px) {
    top: 138px;
  }
}

#answer-group {
  position: fixed;
  top: 27%;
  width: 100%;
  display: flex;
  flex-direction: column;

  #answer-before {
    font-size: 2rem;
    width: 100%;
    text-align: center;
    span {
      font-family: 'Graduate';
    }
  }

  #answer {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    span {
      font-family: 'Graduate';
      font-size: 10rem;
    }
  }

  #answer-after {
    font-size: 2rem;
    width: 100%;
    text-align: center;
  }

  p {
    margin-bottom: -20px;
  }
}

#button-group {
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 50%;
  bottom: 10%;
  width: 100%;
  @media screen and (min-width: 960px) {
    bottom: 20%;
    width: 40vw;
  }
  transform: translate(-50%);
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
  #once-more {
    font-size: 1.1rem;
  }
  #to-menu {
    font-size: 1.1rem;
  }
}
</style>

<template>
  <div>
    <div id="all-correct">
      {{
        getScore === 10
          ? 'おめでとう!!'
          : getScore >= 7
          ? 'おしい!!'
          : getScore >= 4
          ? 'いい感じ!!'
          : '頑張ろう!!'
      }}
    </div>
    <div id="answer-group">
      <p id="answer-before"><span>10</span>問中...</p>
      <p id="answer">
        <span>{{ getScore }}</span
        >問
      </p>
      <p id="answer-after">せいかいしたよ！</p>
    </div>
    <div id="button-group">
      <v-btn
        id="once-more"
        class="rounded-lg"
        x-large
        width="148px"
        height="64px"
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
        height="64px"
        depressed
        color="primary"
        @click="clickEvent('menu')"
        >メニューに戻る</v-btn
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
  },
  methods: {
    clickEvent(router) {
      this.$router.push(`/${router}`)
      this.$store.dispatch('score/resetScore')
    },
  },
}
</script>
<style lang="scss" scoped>
#all-correct {
  font-size: 3rem;
  position: fixed;
  top: 88px;
  width: 100%;
  text-align: center;
  color: var(--v-sentence-base);
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
  transform: translate(-50%);
  #once-more {
    font-size: 1.1rem;
  }
  #to-menu {
    font-size: 1.1rem;
  }
}
</style>

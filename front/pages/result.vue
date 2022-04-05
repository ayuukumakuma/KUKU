<template>
  <div>
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
        class="mx-4 rounded-lg"
        x-large
        max-width="156px"
        height="64px"
        depressed
        color="secondary"
        @click="$router.push('/kuku')"
        >もういっかい</v-btn
      >
      <v-btn
        id="to-menu"
        class="mx-4 rounded-lg"
        x-large
        max-width="156px"
        height="64px"
        rounded
        depressed
        color="primary"
        @click="$router.push('/menu')"
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
    }
  }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'Graduate';
  src: url('../assets/font/Graduate-Regular.ttf');
}

body {
  position: relative;
}

#answer-group {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 35%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;

  #answer-before {
    position: absolute;
    font-size: 32px;
    width: 100%;
    text-align: center;
    top: 0;
    span {
      font-family: 'Graduate';
    }
  }

  #answer {
    position: absolute;
    top: 28px;
    width: 100%;
    font-size: 32px;
    text-align: center;
    span {
      font-family: 'Graduate';
      font-size: 150px;
    }
  }

  #answer-after {
    font-size: 32px;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
  }
}

#button-group {
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%);
  #once-more {
    font-size: 18px;
  }
  #to-menu {
    font-size: 18px;
  }
}
</style>

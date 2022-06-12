<template>
  <div id="question-tiles">
    <div id="multiplicand">
      <v-img id="multiplicand-shape" :src="`/svg/shapes/${GetShape}.svg`" />
      <div id="multiplicand-text">
        {{ multiplicand }}
      </div>
    </div>
    <div id="cross">
      <v-img src="/svg/cross.svg" width="64px" height="64px"></v-img>
    </div>
    <div id="equal">
      <v-img src="/svg/equal.svg" width="64px" height="64px"></v-img>
    </div>
    <div id="multiplying">
      <ColorSvg id="multiplying-shape" :color="`${GetColor}`" />
      <div id="multiplying-text">
        {{ multiplying }}
      </div>
    </div>
    <div v-show="!correct" id="answer">
      <v-img src="/svg/question.svg" width="48px" height="48px"></v-img>
    </div>
    <div v-show="correct" id="answer-correct">
      <ShapeSvg :shape="GetShape" :color="GetColor" />
      <div id="answer-text">
        {{ answer_num }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    multiplicand: {
      type: String,
      default: '',
    },
    multiplying: {
      type: String,
      default: '',
    },
    correct: {
      type: Boolean,
      default: false,
    },
    answer_num: {
      type: String,
      default: '',
    },
  },
  computed: {
    GetShape() {
      return this.$store.getters['json/GetMultiplicand'](this.multiplicand)
    },
    GetColor() {
      return this.$store.getters['json/GetMultiplying'](this.multiplying)
    },
  },
}
</script>

<style lang="scss" scoped>
#multiplicand {
  width: 80px;
  height: 80px;
  position: fixed;
  left: 20%;
  @media screen and (min-width: 960px){
    left: 35%;
  }
  top: 16%;
  transform: translate(-50%);
  #multiplicand-text {
    position: absolute;
    font-family: Graduate;
    font-size: 2.5rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  #multiplicand-shape {
    position: absolute;
  }
}

#multiplying {
  width: 80px;
  height: 80px;
  position: fixed;
  left: 80%;
  @media screen and (min-width: 960px){
    left: 65%;
  }
  top: 16%;
  transform: translate(-50%);
  #multiplying-text {
    position: absolute;
    font-family: Graduate;
    font-size: 2.5rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  #multiplying-shape {
    position: absolute;
    left: -5%;
    top: -2%;
  }
}

#cross {
  position: fixed;
  left: 50%;
  top: 17%;
  transform: translate(-50%);
}

#equal {
  position: fixed;
  left: 50%;
  top: 27%;
  transform: translate(-50%) rotate(90deg);
}

#answer {
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%);
  #answer-text {
    font-family: 'Graduate';
    font-size: 2rem;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

#answer-correct {
  position: fixed;
  left: 50%;
  top: 36%;
  transform: translate(-50%);
  #answer-text {
    font-family: 'Graduate';
    font-size: 2rem;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

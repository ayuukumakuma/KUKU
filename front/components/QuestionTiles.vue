<template>
  <div>
    <div id="multiplicand">
      <v-img
        id="multiplicand-shape"
        :src="`/svg/shapes/${GetShape}.svg`"
        width="120px"
        height="120px"
      />
      <div id="multiplicand-text">
        {{ multiplicand }}
      </div>
    </div>
    <div id="cross">
      <div id="cross-content" />
    </div>
    <div id="multiplying">
      <ColorSvg :color="`${GetColor}`" />
      <div id="multiplying-text">
        {{ multiplying }}
      </div>
    </div>
    <div id="equal">
      <div id="equal-content" />
    </div>
    <div v-show="!correct" id="answer" style="top: 310px">
      <v-img src="/svg/question.svg" width="64px" height="64px"></v-img>
    </div>
    <div v-show="correct" id="answer">
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
  position: absolute;
  top: 96px;
  left: 6vw;
}

#multiplying {
  position: absolute;
  top: 96px;
  right: 4vw;
}

#multiplicand-text {
  font-family: 'Graduate';
  position: absolute;
  top: 11%;
  left: 33%;
  font-size: 64px;
}

#multiplying-text {
  font-family: 'Graduate';
  position: absolute;
  top: 11%;
  right: 37%;
  font-size: 64px;
}

#cross {
  position: absolute;
  top: 154px;
  left: 50%;
  z-index: 0;
}

#cross-content {
  position: absolute;
  background: var(--v-sentence-base);
  height: 8px;
  width: 56px;
  left: -28px;
  transform: rotate(-45deg);
  &::before {
    background: var(--v-sentence-base);
    display: block;
    content: '';
    height: 8px;
    width: 56px;
    transform: rotate(90deg);
  }
}

#equal {
  position: absolute;
  top: 220px;
  left: 50%;
  z-index: 0;
  transform: rotate(90deg);
}

#equal-content {
  position: absolute;
  background: var(--v-sentence-base);
  height: 8px;
  width: 56px;
  top: -19px;
  &::before {
    position: absolute;
    background: var(--v-sentence-base);
    display: block;
    content: '';
    height: 8px;
    width: 56px;
    top: 30px;
  }
}

#answer {
  position: absolute;
  left: 50%;
  top: 290px;
  transform: translate(-50%);
}

#answer-text {
  font-family: 'Graduate';
  font-size: 40px;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
}
</style>

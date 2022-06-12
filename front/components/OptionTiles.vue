<template>
  <div>
    <v-btn
      id="tile"
      color="cLight"
      class="rounded-lg"
      depressed
      :disabled="disabled"
      @click="$emit('click')"
    >
      <ShapeSvg :shape="GetMultiplicand" :color="GetMultiplying" />
      <div id="answer-text">
        {{ answer }}
      </div>
    </v-btn>
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
    answer: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    GetMultiplicand() {
      return this.$store.getters['json/GetMultiplicand'](this.multiplicand)
    },
    GetMultiplying() {
      return this.$store.getters['json/GetMultiplying'](this.multiplying)
    },
  },
}
</script>
<style lang="scss" scoped>
#tile {
  height: 17vh;
  width: 40vw;
  @media screen and (min-width: 960px){
    width: 20vw;
  }
  #answer-text {
    position: absolute;
    font-size: 2rem;
    font-family: 'Graduate';
  }
}
</style>

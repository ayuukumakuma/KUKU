<template>
  <div>
    <div id="multiplicand">
      <v-img
        id="multiplicand-shape"
        :src="`/shapes/${GetMultiplicand}.svg`"
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
    <div id="equal">
      <div id="equal-content" />
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
  },
  data() {
    return {}
  },
  computed: {
    GetMultiplicand() {
      return this.$store.getters['json/GetMultiplicand'](this.multiplicand)
    },
  },
}
</script>

<style lang="scss" scoped>
#multiplicand {
	position: absolute;
	margin-top: 96px;
	left: 6vw;
}

#multiplicand-text {
	position: absolute;
	top: 20%;
	left: 33%;
  font-size: 56px;
}

#cross {
  position: absolute;
  top: 22%;
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
  top: 30%;
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
</style>
